import { configureStore } from '@reduxjs/toolkit'
import fileTreeSlice from './fetures/fileTreeSlice'
// ...

export const store = configureStore({
  reducer: {
    tree: fileTreeSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch