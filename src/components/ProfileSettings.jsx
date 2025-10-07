import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar2 from './Navbar2';
import bgImage from './assets/rectbg.svg';
import profile from './assets/prof.svg';
import profs from './assets/profs.jpg';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { useAuth } from './Authprovider/AuthContext';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logout } from '../store/slices/authSlice';
import { useGetUserByAuthQuery, useUpdateUserMutation, useChangePasswordMutation, useDeactivateAccountMutation } from '../store/api/userApiSlice';

const ProfileSettings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [isModalOpen4, setIsModalOpen4] = useState(false);
    const [isModalOpen5, setIsModalOpen5] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [rePasswordVisible, setRePasswordVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [selectedReason, setSelectedReason] = useState('');
    const [comment, setComment] = useState('');
    const [fetchingItem, setFetchingItem] = useState(null);
    const [updatingField, setUpdatingField] = useState(null);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [deactivationError, setDeactivationError] = useState('');
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data: user, isLoading, isError, error, refetch } = useGetUserByAuthQuery();
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
    const [changePassword, { isLoading: isUpdatingPassword }] = useChangePasswordMutation();
    const [deactivateAccount, { isLoading: isDeactivating }] = useDeactivateAccountMutation();

    const defaultUser = {
        Name: 'Jaydon',
        last_name: 'Donin',
        email: 'jaydondonin@gmail.com',
        phone: '+1234567890',
        user_id: 1,
    };

    const userData = isLoading || isError ? defaultUser : user;

    const [firstName, setFirstName] = useState(userData.Name);
    const [lastName, setLastName] = useState(userData.last_name);
    const [email, setEmail] = useState(userData.email);
    const [phone, setPhone] = useState(userData.phone);

    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const maxLength = password.length <= 20;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+]/.test(password);
        if (!minLength || !maxLength) {
            return 'Password must be 8–20 characters long.';
        }
        if (!hasUpperCase) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!hasLowerCase) {
            return 'Password must contain at least one lowercase letter.';
        }
        if (!hasNumber) {
            return 'Password must contain at least one number.';
        }
        if (!hasSpecialChar) {
            return 'Password must contain at least one special character (!@#$%^&*()_+).';
        }
        return '';
    };

    const handleEditClick = async (field) => {
        setFetchingItem(field);
        await refetch();
        setFetchingItem(null);
        if (field === 'Name') {
            setFirstName(userData.Name);
            setLastName(userData.last_name);
            setIsModalOpen(true);
        } else if (field === 'Email') {
            setEmail(userData.email);
            setPhone(userData.phone);
            setIsModalOpen4(true);
        } else if (field === 'Photo') {
            setIsModalOpen3(true);
        } else if (field === 'Password') {
            setCurrentPassword('');
            setNewPassword('');
            setRePassword('');
            setPasswordError('');
            setIsModalOpen5(true);
        } else if (field === 'Two-Step') {
            setIsOpen(true);
        } else if (field === 'Deactivate') {
            setIsOpen4(true);
        }
    };

    const handleSaveName = async () => {
        setUpdatingField('Name');
        try {
            await updateUser({
                id: userData.user_id,
                Name: firstName,
                phone: userData.phone,
            }).unwrap();
            toast.success('Name updated successfully!');
            setIsModalOpen(false);
            await refetch();
        } catch (err) {
            console.error('Failed to update name:', err);
            toast.error('Failed to update name.');
        } finally {
            setUpdatingField(null);
        }
    };

    const handleSaveEmailPhone = async () => {
        setUpdatingField('Email');
        try {
            await updateUser({
                id: userData.user_id,
                Name: userData.Name,
                phone,
            }).unwrap();
            toast.success('Phone updated successfully!');
            setIsModalOpen4(false);
            await refetch();
        } catch (err) {
            console.error('Failed to update phone:', err);
            toast.error('Failed to update phone.');
        } finally {
            setUpdatingField(null);
        }
    };

    const handleSavePassword = async () => {
        setPasswordError('');
        const passwordValidationError = validatePassword(newPassword);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            toast.error(passwordValidationError);
            return;
        }
        if (newPassword !== rePassword) {
            setPasswordError('New password and confirmation password do not match.');
            toast.error('New password and confirmation password do not match.');
            return;
        }
        setUpdatingField('Password');
        try {
            const payload = {
                currentPassword,
                newPassword,
                confirmPassword: rePassword,
            };
            console.log('Password Change Payload:', payload); // Debug payload
            await changePassword(payload).unwrap();
            toast.success('Password updated successfully!');
            setIsModalOpen5(false);
            setCurrentPassword('');
            setNewPassword('');
            setRePassword('');
        } catch (err) {
            console.error('Failed to update password:', err);
            const errorMessage = err?.data?.message || 'Failed to update password.';
            setPasswordError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setUpdatingField(null);
        }
    };

    const handleDeactivateAccount = async () => {
        setDeactivationError('');
        setUpdatingField('Deactivate');
        try {
            await deactivateAccount({
                user_id: userData.user_id,
            }).unwrap();
            toast.success('Account deactivated successfully.');
            setIsOpen5(false);
            dispatch(logout());
            navigate('/');
        } catch (err) {
            console.error('Failed to deactivate account:', err);
            const errorMessage = err?.data?.message || 'Failed to deactivate account.';
            setDeactivationError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setUpdatingField(null);
        }
    };

    const reasons = [
        'Too many emails.',
        'I have a duplicate account.',
        'I am not getting any value.',
        'I have a privacy concern.',
        'Other',
    ];

    const [selectedOption, setSelectedOption] = useState('every');
    const defaultImage = profs;
    const [selectedImage, setSelectedImage] = useState(defaultImage);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center text-white py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-10 lg:px-24"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mulish-font">
                    Profile Settings
                </h2>
                <p
                    style={{ fontFamily: 'Poppins' }}
                    className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium"
                >
                    Personalize Your Profile, Enhance Your Experience!
                </p>
            </div>
            <div className="mulish-font mx-4 sm:mx-8 md:mx-12 lg:mx-24 p-4 sm:p-6 space-y-6 font-[Poppins]">
                {isLoading && (
                    <div className="flex justify-center items-center py-8">
                        <FaSpinner className="animate-spin text-[#870A28] w-8 h-8" />
                        <span className="ml-2 text-gray-600">Loading Profile Settings...</span>
                    </div>
                )}
                {isError && (
                    <div className="text-center text-red-600 py-8">
                        <p>Error loading user data: {error?.data?.message || 'An error occurred'}</p>
                        <p>Displaying fallback data.</p>
                    </div>
                )}
                {!isLoading && !isError && (
                    <>
                        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Personal Info</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                                <div>
                                    <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Name</p>
                                    <p className="text-base sm:text-lg lg:pt-4 md:text-[24px] text-[#1D1D1D80] font-medium">
                                        Your first and last given name. Updates are reflected across all Homvill account.
                                    </p>
                                </div>
                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold">
                                        {userData.Name} {userData.last_name}
                                    </p>
                                    <button
                                        onClick={() => handleEditClick('Name')}
                                        className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto"
                                        disabled={fetchingItem === 'Name' || isUpdating || isUpdatingPassword || isDeactivating}
                                    >
                                        {fetchingItem === 'Name' ? (
                                            <>
                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                Loading...
                                            </>
                                        ) : (
                                            'Edit'
                                        )}
                                    </button>
                                    {isModalOpen && (
                                        <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                <button
                                                    onClick={() => setIsModalOpen(false)}
                                                    className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                >
                                                    ×
                                                </button>
                                                <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your Full Name</h2>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">First Name</label>
                                                        <input
                                                            type="text"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            placeholder="Enter Your First Name"
                                                            className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">Last Name</label>
                                                        <input
                                                            type="text"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            placeholder="Enter Your Last Name"
                                                            className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                                    <button
                                                        onClick={() => setIsModalOpen(false)}
                                                        className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={handleSaveName}
                                                        className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        disabled={isUpdating || isUpdatingPassword || isDeactivating}
                                                    >
                                                        {isUpdating && updatingField === 'Name' ? (
                                                            <>
                                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                                Saving...
                                                            </>
                                                        ) : (
                                                            'Save'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                                <div>
                                    <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">User Name</p>
                                    <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                        Your user given name. Updates are reflected across all Homvill account.
                                    </p>
                                </div>
                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold">
                                        {userData.Name.toLowerCase()}{userData.last_name.toLowerCase()}123
                                    </p>
                                    <button
                                        onClick={() => handleEditClick('UserName')}
                                        className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto"
                                        disabled={fetchingItem === 'UserName' || isUpdating || isUpdatingPassword || isDeactivating}
                                    >
                                        {fetchingItem === 'UserName' ? (
                                            <>
                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                Loading...
                                            </>
                                        ) : (
                                            'Edit'
                                        )}
                                    </button>
                                    {isModalOpen2 && (
                                        <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                <button
                                                    onClick={() => setIsModalOpen2(false)}
                                                    className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                >
                                                    ×
                                                </button>
                                                <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your User Name</h2>
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div>
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">New User Name</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Your User Name"
                                                            className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                                    <button
                                                        onClick={() => setIsModalOpen2(false)}
                                                        className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => setIsModalOpen2(false)}
                                                        className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                                <div>
                                    <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Photo</p>
                                    <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                        Customize your profile picture with a personal touch.
                                    </p>
                                </div>
                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    <img
                                        src={userData.user_image || profile}
                                        alt="profile"
                                        className="w-8 h-8 sm:w-10 sm:h-10 mx-auto sm:mx-0 mb-1"
                                    />
                                    <button
                                        onClick={() => handleEditClick('Photo')}
                                        className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto"
                                        disabled={fetchingItem === 'Photo' || isUpdating || isUpdatingPassword || isDeactivating}
                                    >
                                        {fetchingItem === 'Photo' ? (
                                            <>
                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                Loading...
                                            </>
                                        ) : (
                                            'Edit'
                                        )}
                                    </button>
                                    {isModalOpen3 && (
                                        <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                            <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 puncture sm:p-6 relative">
                                                <button
                                                    onClick={() => setIsModalOpen3(false)}
                                                    className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                >
                                                    ×
                                                </button>
                                                <h2 className="text-base sm:text-lg text-start font-semibold mb-4">Change Your Profile Photo</h2>
                                                <div className="mb-4 sm:mb-6">
                                                    <label className="block text-xs sm:text-sm text-start font-medium mb-1">Photo</label>
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="w-full h-32 sm:h-40 border border-dashed border-pink-300 flex justify-center items-center bg-gray-100 cursor-pointer rounded-md overflow-hidden"
                                                    >
                                                        <img
                                                            src={selectedImage}
                                                            alt="Preview"
                                                            className="object-cover w-full h-full"
                                                        />
                                                        <input
                                                            id="file-upload"
                                                            type="file"
                                                            className="hidden"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex justify-center gap-4">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedImage(defaultImage);
                                                            setIsModalOpen3(false);
                                                        }}
                                                        className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => setIsModalOpen3(false)}
                                                        className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Sign in & Security</h2>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                                    <div>
                                        <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Email</p>
                                        <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                            The registered email address and phone number linked to your account.
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right w-full sm:w-auto">
                                        <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold break-all">
                                            {userData.email}
                                        </p>
                                        <p className="text-[#870A28] text-xl sm:text-2xl md:text-[32px] font-bold">
                                            {userData.phone}
                                        </p>
                                        <button
                                            onClick={() => handleEditClick('Email')}
                                            className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded mt-1 w-full sm:w-auto"
                                            disabled={fetchingItem === 'Email' || isUpdating || isUpdatingPassword || isDeactivating}
                                        >
                                            {fetchingItem === 'Email' ? (
                                                <>
                                                    <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                    Loading...
                                                </>
                                            ) : (
                                                'Edit'
                                            )}
                                        </button>
                                        {isModalOpen4 && (
                                            <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                                <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                    <button
                                                        onClick={() => setIsModalOpen4(false)}
                                                        className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                    >
                                                        ×
                                                    </button>
                                                    <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Change Your Email/Phone</h2>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        <div>
                                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">New Email</label>
                                                            <input
                                                                type="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                placeholder="Enter Your Email"
                                                                className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                                disabled
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">Phone Number</label>
                                                            <input
                                                                type="tel"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                                placeholder="Enter Your Phone Number"
                                                                className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">Enter Password</label>
                                                            <input
                                                                type="password"
                                                                placeholder="Enter Your current password"
                                                                className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                                        <button
                                                            onClick={() => setIsModalOpen4(false)}
                                                            className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={handleSaveEmailPhone}
                                                            className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                            disabled={isUpdating || isUpdatingPassword || isDeactivating}
                                                        >
                                                            {isUpdating && updatingField === 'Email' ? (
                                                                <>
                                                                    <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                                    Saving...
                                                                </>
                                                            ) : (
                                                                'Save'
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                                    <div>
                                        <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Password</p>
                                        <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                            Create a secure and unique password to safeguard your account.
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right w-full sm:w-auto">
                                        <button
                                            onClick={() => handleEditClick('Password')}
                                            className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto"
                                            disabled={fetchingItem === 'Password' || isUpdating || isUpdatingPassword || isDeactivating}
                                        >
                                            {fetchingItem === 'Password' ? (
                                                <>
                                                    <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                    Loading...
                                                </>
                                            ) : (
                                                'Change Password'
                                            )}
                                        </button>
                                        {isModalOpen5 && (
                                            <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                                <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                    <button
                                                        onClick={() => setIsModalOpen5(false)}
                                                        className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                    >
                                                        ×
                                                    </button>
                                                    <h2 className="text-base sm:text-lg text-start font-semibold mb-4 sm:mb-5">Change Password</h2>
                                                    {passwordError && (
                                                        <p className="text-red-600 text-xs sm:text-sm text-center mb-4">{passwordError}</p>
                                                    )}
                                                    <div className="mb-4">
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">Current Password</label>
                                                        <div className="relative">
                                                            <input
                                                                type={newPasswordVisible ? 'text' : 'password'}
                                                                value={currentPassword}
                                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                                placeholder="Enter your current password"
                                                                className="w-full border font-normal border-pink-300 px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                            <span
                                                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                                                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                                                            >
                                                                {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">New Password</label>
                                                        <div className="relative">
                                                            <input
                                                                type={newPasswordVisible ? 'text' : 'password'}
                                                                value={newPassword}
                                                                onChange={(e) => setNewPassword(e.target.value)}
                                                                placeholder="Enter your new password"
                                                                className="w-full border font-normal border-pink-300 px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                            <span
                                                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                                                onClick={() => setNewPasswordVisible(!newPasswordVisible)}
                                                            >
                                                                {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="block text-xs sm:text-sm text-start font-medium mb-1">Confirm New Password</label>
                                                        <div className="relative">
                                                            <input
                                                                type={rePasswordVisible ? 'text' : 'password'}
                                                                value={rePassword}
                                                                onChange={(e) => setRePassword(e.target.value)}
                                                                placeholder="Confirm your new password"
                                                                className="w-full border font-normal border-pink-300 px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                            <span
                                                                className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                                                onClick={() => setRePasswordVisible(!rePasswordVisible)}
                                                            >
                                                                {rePasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-400 mt-1">e.g. P@ssw0rd2024</p>
                                                    </div>
                                                    <div className="text-xs sm:text-sm text-start text-gray-600 leading-relaxed mb-4">
                                                        <p><strong>Length:</strong> Minimum 8 characters, maximum 20 characters.</p>
                                                        <p className="mt-1">
                                                            <strong>Complexity:</strong> Must include at least one of each:
                                                            <br />
                                                            • Uppercase Letter (A–Z) • Number (0–9)
                                                            <br />
                                                            • Special Character (!@#$%^&*()_+ etc.) • Lowercase Letter (a–z)
                                                        </p>
                                                    </div>
                                                    <div className="flex justify-center gap-4">
                                                        <button
                                                            onClick={() => setIsModalOpen5(false)}
                                                            className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={handleSavePassword}
                                                            className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                            disabled={isUpdating || isUpdatingPassword || isDeactivating}
                                                        >
                                                            {isUpdatingPassword && updatingField === 'Password' ? (
                                                                <>
                                                                    <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                                    Saving...
                                                                </>
                                                            ) : (
                                                                'Save'
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                                    <div>
                                        <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Two-Step Verification</p>
                                        <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                            Enhance your account security with two-step verification.
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right w-full sm:w-auto">
                                        <button
                                            onClick={() => handleEditClick('Two-Step')}
                                            className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 rounded w-full sm:w-auto"
                                            disabled={fetchingItem === 'Two-Step' || isUpdating || isUpdatingPassword || isDeactivating}
                                        >
                                            {fetchingItem === 'Two-Step' ? (
                                                <>
                                                    <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                    Loading...
                                                </>
                                            ) : (
                                                'Set Up'
                                            )}
                                        </button>
                                        {isOpen && (
                                            <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                                <div className="bg-white w-11/12 sm:w-full max-w-lg rounded-lg p-4 sm:p-6 relative shadow-lg">
                                                    <button
                                                        className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        ×
                                                    </button>
                                                    <h2 className="text-base sm:text-lg text-start font-semibold mb-2 sm:mb-4">Choose When To Confirm</h2>
                                                    <p className="text-xs sm:text-sm text-center font-normal text-gray-600 mb-4 sm:mb-5">
                                                        Select when a verification code is required before signing in. You'll enter your phone number next.
                                                    </p>
                                                    <div className="space-y-4 mb-4 sm:mb-6">
                                                        <label className="flex items-center text-start gap-3 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="confirm"
                                                                value="every"
                                                                checked={selectedOption === 'every'}
                                                                onChange={() => setSelectedOption('every')}
                                                                className="mt-1 accent-[#870A28] w-4 h-4"
                                                            />
                                                            <div>
                                                                <p className="text-xs sm:text-sm font-medium text-start">Every time you sign in</p>
                                                                <p className="text-xs sm:text-sm text-gray-600 font-normal">Enter a code each time you access your account.</p>
                                                            </div>
                                                        </label>
                                                        <label className="flex items-start gap-3 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="confirm"
                                                                value="secure"
                                                                checked={selectedOption === 'secure'}
                                                                onChange={() => setSelectedOption('secure')}
                                                                className="mt-1 accent-[#870A28] w-4 h-4"
                                                            />
                                                            <div>
                                                                <p className="text-xs sm:text-sm font-medium text-start">Only for secure information</p>
                                                                <p className="text-xs sm:text-sm text-gray-600 font-normal">Enter a code only when accessing secure information.</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="flex justify-center gap-4">
                                                        <button
                                                            onClick={() => setIsOpen(false)}
                                                            className="bg-pink-100 text-[#870A28] px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Cancel
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                setIsOpen2(true);
                                                            }}
                                                            className="bg-[#870A28] text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Next
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {isOpen2 && (
                                            <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                                <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                    <button
                                                        onClick={() => setIsOpen2(false)}
                                                        className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                    >
                                                        ×
                                                    </button>
                                                    <h2 className="text-base sm:text-lg font-semibold text-start mb-4 sm:mb-5">Add a Phone Number</h2>
                                                    <p className="text-xs sm:text-sm text-start font-normal text-gray-600 mb-4 sm:mb-5">
                                                        Enter a phone number for two step verification. A confirmation code send via text.
                                                    </p>
                                                    <div className="grid grid-cols-1 gap-4">
                                                        <div>
                                                            <label className="block text-xs sm:text-sm text-start font-medium mb-1">Phone Number</label>
                                                            <input
                                                                type="tel"
                                                                placeholder="Enter a Phone Number"
                                                                className="w-full border border-pink-300 font-normal px-3 sm:px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 sm:mt-6 flex justify-center gap-4">
                                                        <button
                                                            onClick={() => {
                                                                setIsOpen(true);
                                                                setIsOpen2(false);
                                                            }}
                                                            className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setIsOpen2(false);
                                                                setIsOpen3(true);
                                                            }}
                                                            className="bg-[#870A28] text-white font-medium px-4 sm:px-5 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Get OTP
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {isOpen3 && (
                                            <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                                                <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative">
                                                    <button
                                                        onClick={() => setIsOpen3(false)}
                                                        className="absolute top-3 right-4 text-gray-500 text-lg sm:text-xl font-semibold"
                                                    >
                                                        ×
                                                    </button>
                                                    <h2 className="text-base sm:text-lg text-start font-semibold mb-2 sm:mb-4">Add A Phone Number</h2>
                                                    <p className="text-xs sm:text-sm font-normal text-start text-gray-600 mb-4 sm:mb-5">
                                                        Enter a phone number for two-step verification. A confirmation code will be sent via text.
                                                    </p>
                                                    <label className="block text-xs sm:text-sm text-start font-medium mb-2">Enter Your OTP</label>
                                                    <div className="flex justify-between mb-4 sm:mb-6 gap-2">
                                                        {Array.from({ length: 6 }).map((_, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                maxLength={1}
                                                                className="w-10 h-10 sm:w-12 sm:h-12 border border-[#870A28] text-center rounded text-sm sm:text-lg focus:outline-none"
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-center gap-4">
                                                        <button
                                                            onClick={() => {
                                                                setIsOpen2(true);
                                                                setIsOpen3(false);
                                                            }}
                                                            className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Back
                                                        </button>
                                                        <button
                                                            onClick={() => setIsOpen3(false)}
                                                            className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                        >
                                                            Save
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-pink-100">
                            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-[#1D1D1D] mb-4">Manage account</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 gap-4">
                                <div>
                                    <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Deactivate my account</p>
                                    <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                        Deactivating your account will temporarily disable access while retaining<br className='hidden lg:block'/>
                                        your information. You can reactivate it at any time to regain access.
                                    </p>
                                </div>
                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    <button
                                        onClick={() => handleEditClick('Deactivate')}
                                        className="text-base sm:text-lg md:text-[20px] text-white bg-[#870A28] px-3 sm:px-4 py-1 sm:py-2 rounded w-full sm:w-auto"
                                        disabled={fetchingItem === 'Deactivate' || isUpdating || isUpdatingPassword || isDeactivating}
                                    >
                                        {fetchingItem === 'Deactivate' ? (
                                            <>
                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                Loading...
                                            </>
                                        ) : (
                                            'Deactivate account'
                                        )}
                                    </button>
                                    {isOpen4 && (
                                        <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                            <div className="bg-white rounded-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative shadow-lg">
                                                <button
                                                    className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                                    onClick={() => setIsOpen4(false)}
                                                >
                                                    ×
                                                </button>
                                                <h2 className="text-base sm:text-lg font-semibold mb-4 text-start">Deactivate Account</h2>
                                                <ul className="text-xs sm:text-sm text-start text-black font-normal space-y-3 mb-4 sm:mb-6 list-disc pl-4">
                                                    <li><strong>Temporary Suspension –</strong> Your account will be disabled, but your data will be retained.</li>
                                                    <li><strong>No Access –</strong> You won't be able to sign in until you reactivate your account.</li>
                                                    <li><strong>Reactivation Anytime –</strong> Simply log back in to restore your account.</li>
                                                    <li><strong>No Public Visibility –</strong> Your profile and content may no longer be visible to others.</li>
                                                    <li><strong>Subscription Impact –</strong> Any active subscriptions or services may be paused or canceled.</li>
                                                    <li><strong>Security & Data –</strong> Your personal information remains stored as per platform policies.</li>
                                                </ul>
                                                <div className="flex justify-center gap-4">
                                                    <button
                                                        onClick={() => setIsOpen4(false)}
                                                        className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setIsOpen5(true);
                                                            setIsOpen4(false);
                                                        }}
                                                        className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {isOpen5 && (
                                        <div style={{ fontFamily: 'Poppins' }} className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
                                            <div className="bg-white rounded-lg w-11/12 sm:w-full max-w-lg p-4 sm:p-6 relative shadow-lg">
                                                <button
                                                    className="absolute top-3 right-4 text-gray-600 text-lg sm:text-xl"
                                                    onClick={() => setIsOpen5(false)}
                                                >
                                                    ×
                                                </button>
                                                <h2 className="text-base sm:text-lg text-start font-semibold mb-4 sm:mb-5">Deactivate Account</h2>
                                                {deactivationError && (
                                                    <p className="text-red-600 text-xs sm:text-sm text-center mb-4">{deactivationError}</p>
                                                )}
                                                <div className="space-y-4 text-start mb-4 sm:mb-6">
                                                    {reasons.map((reason, index) => (
                                                        <label key={index} className="flex font-normal items-start gap-3 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="reason"
                                                                value={reason}
                                                                checked={selectedReason === reason}
                                                                onChange={() => setSelectedReason(reason)}
                                                                className="mt-1 accent-[#870A28] w-4 h-4"
                                                            />
                                                            <span className="text-xs sm:text-sm">{reason}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                <div className="mb-4 sm:mb-6 text-start">
                                                    <label className="text-xs sm:text-sm font-medium block mb-1">
                                                        Is there anything else we should know?
                                                    </label>
                                                    <textarea
                                                        placeholder="Enter your comment..."
                                                        rows={3}
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                        className="w-full border border-pink-300 font-normal rounded p-3 focus:outline-none focus:ring-1 focus:ring-pink-400 text-sm sm:text-base"
                                                    ></textarea>
                                                </div>
                                                <div className="flex justify-center gap-4">
                                                    <button
                                                        onClick={() => setIsOpen5(false)}
                                                        className="bg-pink-100 text-[#870A28] font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={handleDeactivateAccount}
                                                        className="bg-[#870A28] text-white font-medium px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                                                        disabled={isUpdating || isUpdatingPassword || isDeactivating}
                                                    >
                                                        {isDeactivating && updatingField === 'Deactivate' ? (
                                                            <>
                                                                <FaSpinner className="animate-spin mr-2 inline w-4 h-4" />
                                                                Deactivating...
                                                            </>
                                                        ) : (
                                                            'Deactivate my account'
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 gap-4">
                                <div>
                                    <p className="text-xl sm:text-2xl md:text-[32px] text-[#1D1D1D]">Privacy & Cookies</p>
                                    <p className="text-base lg:pt-4 sm:text-lg md:text-[24px] text-[#1D1D1D80] font-medium">
                                        Resources to access and manage your personal data efficiently.
                                    </p>
                                </div>
                                <div className="text-left sm:text-right w-full sm:w-auto">
                                    <button
                                        onClick={() => navigate('/privacy')}
                                        className="text-base sm:text-lg md:text-[24px] text-white bg-[#870A28] px-3 sm:px-4 py-1 sm:py-2 rounded w-full sm:w-auto"
                                    >
                                        Go to Privacy Portal
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default ProfileSettings;