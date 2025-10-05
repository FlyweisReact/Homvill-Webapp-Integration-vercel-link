import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ChevronLeft, ChevronRight, MapPin, Bed, Bath, Car, Home, Utensils, ChevronDown, MessageCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import { useGetAllPropertiesQuery, useGetPropertyByIdQuery } from '../../store/api/propertyApiSlice';
import { useGetAllFAQsQuery } from '../../store/api/legalApiSlice';

const PropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(null);
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const isAuthenticated = true;
    const nearbyHomesRef = useRef(null);

    // Fetch property data
    const { data: propertyData, isLoading: isPropertyLoading, error: propertyError } = useGetPropertyByIdQuery(id);
    
    // Fetch FAQs
    const { data: faqsData, isLoading: isFaqsLoading, isError: isFaqsError } = useGetAllFAQsQuery();
    
    // Fetch all properties for nearby homes
    const { data: propertiesData, isLoading: isPropertiesLoading } = useGetAllPropertiesQuery();

    // Fallback images
    const fallbackImages = [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    ];

    // Map API data to property structure
    const property = propertyData?.success ? {
        id: propertyData.data.Properties_id,
        price: propertyData.data.Property_Listing_Price,
        monthlyPayment: Math.round(propertyData.data.Property_Listing_Price / 135),
        address: `${propertyData.data.Property_Address}, ${propertyData.data.Property_city}, ${propertyData.data.Property_state} ${propertyData.data.Property_zip}`,
        propertyType: propertyData.data.Properties_Category_id.name,
        yearBuilt: propertyData.data.Property_year_build,
        size: parseInt(propertyData.data.Property_finished_Sq_ft),
        bedrooms: propertyData.data.Property_Bed_rooms,
        bathrooms: propertyData.data.Property_Full_Baths + propertyData.data.Property_OneTwo_Baths,
        garage: propertyData.data.parking.includes('Garage') ? 1 : 0,
        images: propertyData.data.Property_photos?.length > 0 
            ? propertyData.data.Property_photos.map(photo => photo.image)
            : fallbackImages,
        owner: {
            name: `${propertyData.data.Owner_Fist_name} ${propertyData.data.Owner_Last_name}`,
            title: propertyData.data.sub_Role.charAt(0).toUpperCase() + propertyData.data.sub_Role.slice(1),
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
            email: propertyData.data.Owner_email,
            userId: propertyData.data.CreateBy.user_id
        },
        highlights: [
            ...(propertyData.data.Appliances.map(item => ({ icon: "🛠️", label: item }))),
            ...(propertyData.data.floors.map(item => ({ icon: "🏠", label: item }))),
            ...(propertyData.data.others.map(item => ({ icon: "🔧", label: item }))),
            ...(propertyData.data.parking.map(item => ({ icon: "🚗", label: item })))
        ],
        description: propertyData.data.Property_Listing_Description,
        stats: {
            daysOnMarket: Math.floor((new Date() - new Date(propertyData.data.CreateAt)) / (1000 * 60 * 60 * 24)),
            views: 305,
            saves: 13
        },
        features: {
            bedrooms: [
                { name: "Master Bedroom", area: parseInt(propertyData.data.Property_finished_Sq_ft) / propertyData.data.Property_Bed_rooms, dimensions: "N/A" },
                ...(propertyData.data.Property_Bed_rooms > 1 ? [{ name: "Additional Bedroom", area: parseInt(propertyData.data.Property_finished_Sq_ft) / propertyData.data.Property_Bed_rooms, dimensions: "N/A" }] : [])
            ],
            bathrooms: [
                ...(propertyData.data.Property_Full_Baths > 0 ? [{ name: "Full Bathroom", type: "Full bathroom" }] : []),
                ...(propertyData.data.Property_OneTwo_Baths > 0 ? [{ name: "Half Bathroom", type: "1/2 bathroom" }] : [])
            ],
            diningroom: propertyData.data.Rooms.includes("Kitchen") ? 1 : 0
        }
    } : {
        id: 1,
        price: 200000,
        monthlyPayment: 4451,
        address: "335 N State Road 7, Plantation, FL 33317",
        propertyType: "Shared House",
        yearBuilt: 2015,
        size: 1950,
        bedrooms: 6,
        bathrooms: 3,
        garage: 2,
        images: fallbackImages,
        owner: {
            name: "Desirae Stanton",
            title: "Property Owner",
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
            email: "desirae@example.com",
            userId: 1
        },
        highlights: [
            { icon: "🏢", label: "Elevator" },
            { icon: "🧺", label: "Laundry Facilities" },
            { icon: "🚪", label: "Walk in Closet" },
            { icon: "🔥", label: "Fire Place" },
            { icon: "🏢", label: "Balcony" },
            { icon: "🌳", label: "Garden" },
            { icon: "🚗", label: "Garage" }
        ],
        description: "Presenting a modern transitional masterpiece...",
        stats: {
            daysOnMarket: 16,
            views: 305,
            saves: 13
        },
        features: {
            bedrooms: [
                { name: "1st bedroom", area: 180, dimensions: "12 x 15" },
                { name: "2nd bedroom", area: 216, dimensions: "12 x 18" }
            ],
            bathrooms: [
                { name: "1st bathroom", type: "Full bathroom" },
                { name: "2nd bathroom", type: "1/2 bathroom" }
            ],
            diningroom: 1
        }
    };

    // Map FAQs data
    const faqs = faqsData?.success && faqsData.data?.length > 0 
        ? faqsData.data.filter(faq => faq.Status).map(faq => ({
            id: faq.faq_id,
            title: faq.Title,
            description: faq.Description
        }))
        : [
            { id: 1, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." },
            { id: 2, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." },
            { id: 3, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." },
            { id: 4, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." },
            { id: 5, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." },
            { id: 6, title: "Lorem Ipsum is simply dummy text", description: "This is the answer to the frequently asked question." }
        ];

    // Map nearby homes data
    const nearbyHomes = propertiesData?.success && propertiesData.data?.length > 0 
        ? propertiesData.data
            .filter(home => home.Status && home.Properties_id !== parseInt(id))
            .map(home => ({
                id: home.Properties_id,
                price: home.Property_Listing_Price,
                address: `${home.Property_Address}, ${home.Property_city}, ${home.Property_state} ${home.Property_zip}`,
                beds: home.Property_Bed_rooms,
                sqft: parseInt(home.Property_finished_Sq_ft),
                baths: home.Property_Full_Baths + home.Property_OneTwo_Baths,
                images: home.Property_photos?.length > 0 
                    ? home.Property_photos.map(photo => photo.image)
                    : fallbackImages,
                isNew: Math.floor((new Date() - new Date(home.CreateAt)) / (1000 * 60 * 60 * 24)) < 7,
                newLabel: "New"
            }))
        : [
            {
                id: 1,
                price: 200000,
                address: "807 Madison Dr Chicago IL 60490",
                beds: 4,
                sqft: 2506,
                baths: 2,
                images: fallbackImages,
                isNew: true,
                newLabel: "New 10h ago"
            },
            {
                id: 2,
                price: 200000,
                address: "123 Palm Ave Miami FL 33010",
                beds: 3,
                sqft: 2200,
                baths: 2,
                images: fallbackImages,
                isNew: false
            }
        ];

    const tabs = [
        'House Photos', 'Policies', 'Home Highlights', 'Market Value', 'Video Tour', 'Commute', 'Home Features', 'FAQs'
    ];

    const sectionRefs = {
        'Home Features': useRef(null),
        'Home Highlights': useRef(null),
        'FAQs': useRef(null)
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (sectionRefs[tab] && sectionRefs[tab].current) {
            sectionRefs[tab].current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSendMessage = () => {
        navigate(`/chat/${property.owner.userId}`, {
            state: {
                propertyId: property.id,
                ownerName: property.owner.name,
                ownerEmail: property.owner.email
            }
        });
    };

    const [activeImages, setActiveImages] = useState(
        nearbyHomes.map(() => 0)
    );

    const nextImages = (index, e) => {
        e.stopPropagation();
        setActiveImages((prev) =>
            prev.map((img, i) =>
                i === index ? (img + 1) % nearbyHomes[i].images.length : img
            )
        );
    };

    const prevImages = (index, e) => {
        e.stopPropagation();
        setActiveImages((prev) =>
            prev.map((img, i) =>
                i === index
                    ? (img - 1 + nearbyHomes[i].images.length) % nearbyHomes[i].images.length
                    : img
            )
        );
    };

    const scrollLeft = () => {
        if (nearbyHomesRef.current) {
            nearbyHomesRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (nearbyHomesRef.current) {
            nearbyHomesRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    if (isPropertyLoading || isFaqsLoading || isPropertiesLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (propertyError || isFaqsError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-red-600">Error loading data. Using fallback data.</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {isAuthenticated ? <Navbar2 /> : <Navbar />}

            <div className="bg-white border-b top-[80px] z-40">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center space-x-8 overflow-x-auto">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center space-x-2 py-4 text-gray-600 hover:text-gray-900 whitespace-nowrap"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                        </button>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`py-4 px-2 whitespace-nowrap transition-colors text-gray-600 hover:text-gray-900 ${activeTab === tab ? 'font-semibold' : ''}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="relative mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[400px] lg:h-[500px]">
                        <div className="lg:col-span-2 relative overflow-hidden rounded-lg">
                            <img
                                src={property.images[currentImageIndex]}
                                alt="Property main view"
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                            {property.images.slice(1, 5).map((image, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-lg cursor-pointer"
                                    onClick={() => setCurrentImageIndex(index + 1)}
                                >
                                    <img
                                        src={image}
                                        alt={`Property view ${index + 2}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                        <button className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                            <span className="text-purple-600">🏠</span>
                            <span className="text-sm font-medium">3D Walkthrough</span>
                        </button>
                        <button className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                            <span className="text-purple-600">📋</span>
                            <span className="text-sm font-medium">Floor Plans</span>
                        </button>
                        <button className="bg-white/90 hover:bg-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
                            <span className="text-purple-600">🗺️</span>
                            <span className="text-sm font-medium">Map view</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-3xl font-bold">${property.price.toLocaleString()}</span>
                                        <span className="text-gray-500">(Est. ${property.monthlyPayment.toLocaleString()}/mo)</span>
                                    </div>
                                    <div className="flex items-center text-gray-600 mt-2">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span>{property.address}</span>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
                                        <Heart className="w-5 h-5" />
                                        <span>Favorites</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                                        <Share2 className="w-5 h-5" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-sm">
                                <div>
                                    <div className="text-gray-500">Property Type</div>
                                    <div className="font-semibold">{property.propertyType}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Year Built</div>
                                    <div className="font-semibold">{property.yearBuilt}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Size (m2)</div>
                                    <div className="font-semibold flex items-center">
                                        <Home className="w-4 h-4 mr-1" />
                                        {property.size}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Bedrooms</div>
                                    <div className="font-semibold flex items-center">
                                        <Bed className="w-4 h-4 mr-1" />
                                        {property.bedrooms}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Bathrooms</div>
                                    <div className="font-semibold flex items-center">
                                        <Bath className="w-4 h-4 mr-1" />
                                        {property.bathrooms}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-gray-500">Garage</div>
                                    <div className="font-semibold flex items-center">
                                        <Car className="w-4 h-4 mr-1" />
                                        {property.garage}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={property.owner.avatar}
                                        alt={property.owner.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">{property.owner.name}</h3>
                                        <p className="text-gray-600">{property.owner.title}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-3">
                                    <button 
                                        onClick={handleSendMessage}
                                        className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>Send a Message</span>
                                    </button>
                                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                                        Start an Offer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div ref={sectionRefs['Home Highlights']} className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Home Highlights</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                                {property.highlights.map((highlight, index) => (
                                    <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                                        <div className="text-2xl mb-2 text-red-600">{highlight.icon}</div>
                                        <div className="text-sm font-medium">{highlight.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-gray-700 leading-relaxed">
                                {property.description}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                            <h2 className="text-lg font-semibold mb-4">Features of this property</h2>
                            <div className="bg-pink-100 rounded-lg p-4">
                                <div className="bg-white rounded-md px-4 py-2 mb-4 font-medium">
                                    Interior
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="bg-white rounded-md px-4 py-2 mb-3 flex items-center space-x-2 font-medium">
                                            <Bed className="w-5 h-5" />
                                            <span>Bedrooms</span>
                                        </div>
                                        <div className="font-semibold mb-2">
                                            {property.features.bedrooms.length} Bedrooms
                                        </div>
                                        <ul className="text-sm space-y-2">
                                            {property.features.bedrooms.map((bedroom, index) => (
                                                <li key={index}>
                                                    <div className="underline font-medium">{bedroom.name}</div>
                                                    <div>Area: {bedroom.area}</div>
                                                    <div>Dimensions: {bedroom.dimensions}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="bg-white rounded-md px-4 py-2 mb-3 flex items-center space-x-2 font-medium">
                                            <Bath className="w-5 h-5" />
                                            <span>Bathrooms</span>
                                        </div>
                                        <div className="font-semibold mb-2">
                                            {property.features.bathrooms.length} Bathrooms
                                        </div>
                                        <ul className="text-sm space-y-2">
                                            {property.features.bathrooms.map((bathroom, index) => (
                                                <li key={index}>
                                                    <div className="underline font-medium">{bathroom.name}</div>
                                                    <div>{bathroom.type}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="bg-white rounded-md px-4 py-2 mb-3 flex items-center space-x-2 font-medium">
                                        <Utensils className="w-5 h-5" />
                                        <span>Dining room</span>
                                    </div>
                                    <div className="font-semibold">
                                        {property.features.diningroom} Diningroom
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div ref={sectionRefs['FAQs']} className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                </div>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div key={faq.id} className="border border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50"
                                            >
                                                <span className="text-sm font-medium">{faq.title}</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {expandedFAQ === index && (
                                                <div className="px-4 pb-3 text-sm text-gray-600">
                                                    {faq.description}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">Explore Nearby Homes</h2>
                        <div className="flex space-x-2">
                            <button
                                onClick={scrollLeft}
                                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
                                disabled={nearbyHomes.length <= 3}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={scrollRight}
                                className="bg-white/80 hover:bg-white rounded-full p-2 shadow-lg disabled:opacity-50"
                                disabled={nearbyHomes.length <= 3}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div
                        ref={nearbyHomesRef}
                        className="flex overflow-x-auto space-x-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 snap-x snap-mandatory"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        {nearbyHomes.map((home, index) => (
                            <div
                                key={home.id}
                                onClick={() => navigate(`/property/${home.id}`)}
                                className="relative bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex-shrink-0 w-80 snap-center"
                            >
                                <div className="relative h-64 w-full">
                                    <img
                                        src={home.images[activeImages[index]]}
                                        alt={`Nearby home ${home.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <button className="absolute top-3 left-3 bg-white/80 p-2 rounded-full shadow">
                                        <Heart className="w-5 h-5 text-gray-700" />
                                    </button>
                                    {home.isNew && (
                                        <span className="absolute top-3 right-3 bg-[#870A28] text-white text-xs px-3 py-1 rounded-full shadow">
                                            {home.newLabel}
                                        </span>
                                    )}
                                    <button
                                        onClick={(e) => prevImages(index, e)}
                                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                                    </button>
                                    <button
                                        onClick={(e) => nextImages(index, e)}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-700" />
                                    </button>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                                        {home.images.map((_, imgIndex) => (
                                            <div
                                                key={imgIndex}
                                                className={`w-2 h-2 rounded-full ${activeImages[index] === imgIndex ? "bg-[#870A28]" : "bg-gray-300"}`}
                                            ></div>
                                        ))}
                                    </div>
                                    <span className="absolute bottom-3 right-3 text-xs bg-black/70 text-white px-2 py-1 rounded">
                                        {activeImages[index] + 1}/{home.images.length}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold">
                                        ${home.price.toLocaleString()}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{home.address}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Click to see how much refund you get from company
                                    </p>
                                    <div className="flex items-center gap-6 mt-4 text-gray-700 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Bed className="w-4 h-4" /> {home.beds} bed
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Home className="w-4 h-4" /> {home.sqft.toLocaleString()} sqft
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="w-4 h-4" /> {home.baths} bath
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;