import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken, selectIsAuthenticated } from '../../store/slices/authSlice';
import { FaSpinner } from 'react-icons/fa';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';

const PropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken);
    const [property, setProperty] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const isAuthenticated = useSelector(selectIsAuthenticated);


    return (
        <div className="">

            {isAuthenticated ? <Navbar2 /> : <Navbar />}

            <div className="">
                <p>Listings</p>
            </div>
        </div>
    );
};

export default PropertyDetail;