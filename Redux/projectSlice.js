import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    title:"Title of Your Project ",
    description:"Description about your project",
    explanation:"Explanation about your project"
  },
}


export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    
    setProject: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setProject} = projectSlice.actions

export default projectSlice.reducer