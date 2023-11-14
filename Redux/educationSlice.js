import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    studyProgram:"Your Study Program",
    university:"Your University "
  },
}

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    
    setEducation: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setEducation } = educationSlice.actions

export default educationSlice.reducer