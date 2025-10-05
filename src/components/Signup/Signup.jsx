import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import qr from '../assets/qr.svg';
import bg from '../assets/signup.svg';
import Footer from '../Footer';
import { useGetCitiesQuery, useGetCountriesQuery, useGetLanguagesQuery, useGetResponsibilitiesQuery, useGetRolesQuery, useGetStatesQuery, useSignupMutation } from '../../store/api/apiSlice';

const Signup = () => {
  const navigate = useNavigate();
  const [signup, { isLoading: isSigningUp }] = useSignupMutation();
  const { data: responsibilities } = useGetResponsibilitiesQuery();
  const { data: roles } = useGetRolesQuery();
  const { data: languages } = useGetLanguagesQuery();
  const { data: countries } = useGetCountriesQuery();
  const { data: states } = useGetStatesQuery();
  const { data: cities } = useGetCitiesQuery();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    Name: '',
    last_name: '',
    Responsibility_id: '',
    Role_id: '',
    Language_id: '',
    Country_id: '',
    State_id: '',
    City_id: '',
    Employee_id: `EMP${Math.floor(100 + Math.random() * 900)}`,
    email: '',
    phone: '',
    password: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return;
    }

    try {
      // Call Firebase Authentication
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // Call custom signup API
      const response = await signup(formData).unwrap();
      if (response.success) {
        if (response.token) {
          sessionStorage.setItem('authToken', response.token);
        }
        sessionStorage.setItem('loginEmail', formData.email); // Keep for compatibility
        navigate('/signin');
      } else {
        throw new Error(response.message || 'Signup failed');
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError(error?.data?.message || `Signup failed: ${error.message}`);
    }
  };

  const filteredStates = states?.data?.filter(state => state.Country_id?.Country_id === parseInt(formData.Country_id)) || [];
  const filteredCities = cities?.data?.filter(city => city.State_id?.State_id === parseInt(formData.State_id)) || [];

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 w-full flex flex-col md:flex-row items-stretch min-h-screen">
        <div className="md:w-1/2 p-6 flex flex-col lg:justify-start">
          <button
            onClick={() => navigate(-1)}
            style={{ fontFamily: 'Poppins' }}
            className="text-[18px] text-gray-600 mb-6 text-left z-10"
          >
            ← Back
          </button>
          <h1
            style={{ fontFamily: 'Poppins' }}
            className="text-3xl md:text-[42px] font-bold leading-[1.2] text-gray-900 mb-3 z-10"
          >
            Buy, sell or rent your dream homes
          </h1>
          <p
            style={{ fontFamily: 'Poppins' }}
            className="text-[#000000] mb-8 z-10"
          >
            Lorem Ipsum is simply dummy text
          </p>
          <h2
            style={{ fontFamily: 'Poppins' }}
            className="text-[25px] font-medium text-gray-900 mb-3 z-10"
          >
            Get an App
          </h2>
          <div className="relative w-full">
            <img
              src={bg}
              alt="House"
              className="rounded-xl w-full md:w-[680px] h-auto"
            />
            <div className="absolute top-[-45px] right-0 md:top-[-85px] md:right-[214px] p-2 rounded-md flex items-center justify-center">
              <img
                src={qr}
                alt="QR Code"
                className="w-auto h-[150px] md:h-[263px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 py-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-4 space-y-4">
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                First Name
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
                  required
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Last Name
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
                  required
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Responsibility
                <select
                  name="Responsibility_id"
                  value={formData.Responsibility_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select Responsibility</option>
                  {responsibilities?.data?.map((resp) => (
                    <option key={resp.Responsibility_id} value={resp.Responsibility_id}>
                      {resp.Responsibility_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Role
                <select
                  name="Role_id"
                  value={formData.Role_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select Role</option>
                  {roles?.data?.map((role) => (
                    <option key={role.Role_id} value={role.Role_id}>
                      {role.role_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Language
                <select
                  name="Language_id"
                  value={formData.Language_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select Language</option>
                  {languages?.data?.map((lang) => (
                    <option key={lang.Language_id} value={lang.Language_id}>
                      {lang.Language_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Country
                <select
                  name="Country_id"
                  value={formData.Country_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select Country</option>
                  {countries?.data?.map((country) => (
                    <option key={country.Country_id} value={country.Country_id}>
                      {country.Country_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                State
                <select
                  name="State_id"
                  value={formData.State_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select State</option>
                  {filteredStates.map((state) => (
                    <option key={state.State_id} value={state.State_id}>
                      {state.state_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                City
                <select
                  name="City_id"
                  value={formData.City_id}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select City</option>
                  {filteredCities.map((city) => (
                    <option key={city.City_id} value={city.City_id}>
                      {city.City_name}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Employee ID
                <input
                  type="text"
                  name="Employee_id"
                  value={formData.Employee_id}
                  readOnly
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 bg-gray-100"
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
                  required
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
                  required
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 mt-2 rounded-md border border-gray-300 placeholder-gray-500"
                  required
                />
              </label>
              <label style={{ fontFamily: 'Poppins' }} className="text-[#2C2E38] block">
                Gender
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 rounded-md border border-gray-300"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSigningUp}
              style={{ fontFamily: 'Poppins' }}
              className="w-full bg-[#8A1538] hover:bg-[#72152e] text-white text-[18px] py-3 rounded-md font-semibold shadow-md"
            >
              {isSigningUp ? 'Signing Up...' : 'Sign Up'}
            </button>
            <p
              style={{ fontFamily: 'Poppins' }}
              className="text-[16px] text-[#2C2E38] text-center"
            >
              By signing up you agree to our{' '}
              <span className="text-[#8A1538] font-medium cursor-pointer">Terms and Conditions</span>{' '}
              and{' '}
              <span className="text-[#8A1538] font-medium cursor-pointer">Privacy Policy</span>
            </p>
            <p
              style={{ fontFamily: 'Poppins' }}
              className="text-[16px] text-[#2C2E38] text-center"
            >
              Already have an account? <Link to="/signin" className="text-[#8A1538] font-medium cursor-pointer">Sign In</Link>
            </p>
            <div style={{ fontFamily: 'Poppins' }} className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/ios-filled/20/000000/mac-os.png" alt="Apple" />
                Continue with Apple
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/fluency/20/facebook-new.png" alt="Facebook" />
                Continue with Facebook
              </button>
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 text-[#7C838A] rounded-md hover:bg-gray-100">
                <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
                Continue with Google
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;