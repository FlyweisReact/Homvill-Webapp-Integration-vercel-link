import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { FiSearch, FiMoreVertical } from "react-icons/fi";
import { FaRegSmile, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { db, auth } from "../firebase";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";
import { selectAuthToken } from "../store/slices/authSlice";
import { useSelector } from "react-redux";

const ChatPage = () => {
    const { userId } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken); // Get token from Redux store

    const { propertyId, ownerName, ownerEmail } = state || {};
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);
    const propertyImages = [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
    ];

    useEffect(() => {
        console.log("Auth state:", auth.currentUser);
        console.log("Navigation state:", { userId, propertyId, ownerName, ownerEmail });

        if (!auth.currentUser && !token) {
            setError("You must be logged in to access the chat. Redirecting to sign-in...");
            console.error("No authenticated user or token found");
            setTimeout(() => navigate("/signin"), 2000);
            return;
        }

        if (!userId || !propertyId) {
            const missingData = [];
            if (!userId) missingData.push("userId");
            if (!propertyId) missingData.push("propertyId");
            setError(`Missing required data for chat: ${missingData.join(", ")}`);
            console.error("Missing required data for chat:", { userId, propertyId });
            return;
        }

        const currentUserId = auth.currentUser ? auth.currentUser.uid : token;
        const chatId = [currentUserId, userId, propertyId].sort().join("_");
        console.log("Chat ID:", chatId);
        const messagesRef = collection(db, "chats", chatId, "messages");
        const q = query(messagesRef, orderBy("timestamp", "asc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedMessages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log("Fetched messages:", fetchedMessages);
            setMessages(fetchedMessages);
            setError(null);
        }, (error) => {
            console.error("Error fetching messages:", error);
            setError(`Failed to fetch messages: ${error.message}`);
        });

        return () => unsubscribe();
    }, [userId, propertyId, navigate]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!newMessage.trim()) {
            console.log("No message content to send");
            setError("Please enter a message to send.");
            return;
        }

        const currentUserId = auth.currentUser ? auth.currentUser.uid : token;
        if (!currentUserId) {
            setError("You must be logged in to send messages. Redirecting to sign-in...");
            console.error("No user ID or token found");
            setTimeout(() => navigate("/signin"), 2000);
            return;
        }

        try {
            const chatId = [currentUserId, userId, propertyId].sort().join("_");
            const messagesRef = collection(db, "chats", chatId, "messages");

            const messagePayload = {
                text: newMessage,
                senderId: currentUserId,
                timestamp: serverTimestamp(),
                propertyId
            };
            console.log("Sending message:", messagePayload);

            const docRef = await addDoc(messagesRef, messagePayload);
            console.log("Message sent with ID:", docRef.id);
            setNewMessage("");
            setError(null);
        } catch (error) {
            console.error("Error sending message:", error);
            setError(`Failed to send message: ${error.message}`);
        }
    };

    return (
        <>
            <Navbar2 />
            <div className="min-h-screen w-full flex flex-col md:flex-row lg:px-12 bg-white text-[#1D1D1D] font-sans">
                <div className="hidden md:block md:w-[280px] border-r border-gray-200 p-4 flex-shrink-0">
                    <div className="text-sm font-semibold mb-4">Messages</div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-3 py-2 rounded-md border bg-gray-100 text-sm mb-4"
                    />
                    <div className="flex flex-col gap-3 overflow-y-auto max-h-[calc(100vh-200px)]">
                        {[
                            { name: ownerName || "Killan James", status: "Online", userId },
                            { name: "Design Team", status: "2 new messages", unread: true },
                            { name: "Ahmad Modi", status: "Typing..." },
                            { name: "Claude Mexdi", status: "1 new message", unread: true },
                            { name: "Newsha", status: "Typing..." },
                            { name: "Milia Nose", status: "4 new messages", unread: true },
                            { name: "Ikram SD", status: "Online" },
                            { name: "Aditya", status: "2 new messages", unread: true }
                        ].map((person, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer ${person.userId === userId ? "bg-[#fce6ed]" : "hover:bg-gray-100"
                                    }`}
                            >
                                <img
                                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                    className="w-9 h-9 rounded-full"
                                    alt={person.name}
                                />
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium">{person.name}</p>
                                    <span
                                        className={`text-xs ${person.unread ? "text-[#9E1556] font-semibold" : "text-gray-500"
                                            }`}
                                    >
                                        {person.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col px-4 md:px-0">
                    <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b">
                        <div className="flex items-center gap-3">
                            <img
                                src="https://i.pravatar.cc/150?img=1"
                                alt={ownerName || "Killan James"}
                                className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                            />
                            <span className="text-base md:text-lg font-semibold">{ownerName || "Killan James"}</span>
                        </div>
                        <FiMoreVertical />
                    </div>
                    <div className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                        {error && (
                            <div className="text-red-500 text-sm text-center">{error}</div>
                        )}
                        {messages.length === 0 && !error && (
                            <div className="text-gray-500 text-sm text-center">No messages yet. Start the conversation!</div>
                        )}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex flex-col ${message.senderId === (auth.currentUser?.uid || sessionStorage.getItem('loginEmail')) ? "items-end" : "items-start"}`}
                            >
                                <span className="text-xs text-gray-500 mb-1">
                                    {message.timestamp
                                        ? new Date(message.timestamp.seconds * 1000).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })
                                        : "Just now"}
                                </span>
                                <div
                                    className={`p-3 rounded-lg text-sm max-w-[80%] md:max-w-xs ${message.senderId === (auth.currentUser?.uid || sessionStorage.getItem('loginEmail')) ? "bg-[#9E1556] text-white" : "bg-gray-100"
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 border-t bg-white">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 border px-3 md:px-4 py-2 rounded-lg text-sm bg-gray-100"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <FaRegSmile className="text-lg md:text-xl text-gray-500" />
                        <FaPaperclip className="text-lg md:text-xl text-gray-500" />
                        <button onClick={sendMessage} className="bg-[#9E1556] p-2 rounded-full text-white">
                            <FaPaperPlane className="text-sm md:text-base" />
                        </button>
                    </div>
                </div>
                <div className="hidden md:block md:w-[280px] p-4 bg-[#fce6ed] space-y-4 flex-shrink-0">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://i.pravatar.cc/100?img=1"
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full mb-2"
                            alt={ownerName || "Killan James"}
                        />
                        <h3 className="font-bold text-sm md:text-md">{ownerName || "Killan James"}</h3>
                        <span className="text-xs text-gray-600">{ownerEmail || "@killan.james"}</span>
                    </div>
                    <div className="text-sm space-y-2">
                        <p className="font-semibold">Property #{propertyId}</p>
                        <p className="text-xs text-gray-600">📍 Contact for address details</p>
                    </div>
                    <div className="text-[#9E1556] font-bold text-base md:text-lg">Contact for price</div>
                    <div className="grid grid-cols-2 gap-2">
                        {propertyImages.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                alt={`property-${i}`}
                                className="w-full h-[60px] md:h-[70px] rounded-md object-cover"
                            />
                        ))}
                    </div>
                    <button className="w-full bg-[#9E1556] text-white py-2 rounded-md font-semibold text-sm">
                        Block
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ChatPage;