import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}


export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    
    setSkills: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setSkills} = skillsSlice.actions

export default skillsSlice.reducer