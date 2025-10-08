// New rentHomeSlice in store/slices/rentHomeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Properties_Status_id: 1,
  Properties_Category_id: 2,
  Owner_Fist_name: '',
  Owner_Last_name: '',
  Owner_phone_no: '',
  Owner_email: '',
  Properties_for: 'Rent',
  Property_cost: 0,
  payment_methods: [1, 2], // Fixed as per payload
  Property_year_build: '',
  Property_Plot_size: '',
  Property_finished_Sq_ft: '',
  Property_Bed_rooms: '',
  Property_Full_Baths: '',
  Property_OneTwo_Baths: '',
  Property_Address: '',
  Property_city: '',
  Property_zip: '',
  Property_country: 'USA',
  Property_state: '',
  Property_Why_sell: '',
  Property_Reason_Selling: [],
  Property_Listing_Price: 0,
  Property_Listing_plot_size: '',
  Property_Listing_Description: '',
  Property_photos: [],
  Appliances: [],
  floors: [],
  others: [],
  parking: [],
  Rooms: [],
  views: [], // From Tagging
  i_am_able_negotiate_on_Commision: false,
  commission_percentage: 0,
  i_will_work_with_agent: false,
  i_am_only_willing_to_Directly: false,
  sub_Role: 'owner', // Fixed
  Buyers_Credit_Refund: 'NO',
  open_house_Start_date: '',
  open_house_End_date: '',
  open_house_Time: '',
  Video_tour_link: [],
  improvements: '', // Extra from UI
};

const rentHomeSlice = createSlice({
  name: 'rentHome',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateFormData, resetForm } = rentHomeSlice.actions;
export default rentHomeSlice.reducer;