import { configureStore } from '@reduxjs/toolkit'
import educationSlice from './educationSlice'
import projectSlice from './projectSlice'
import skillsSlice from './skillsSlice'
import basicDetailsSlice from './basicDetailsSlice'

export const store = configureStore({
  reducer: {
    education: educationSlice,
    project: projectSlice,
    skills: skillsSlice,
    basicdetails: basicDetailsSlice
  },
})