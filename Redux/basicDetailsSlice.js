import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    name:"Rajeev Mohan",
    email:"abc@gmail.com",
    contact:"123323232",
    linkedin:"yuor linkedin link",
    github:"github link",
    
  },
}

export const basicDetailSlice = createSlice({
  name: 'basicdetails',
  initialState,
  reducers: {
    
    setBasicDetails: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setBasicDetails } = basicDetailSlice.actions

export default basicDetailSlice.reducer