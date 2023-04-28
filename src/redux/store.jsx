import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './slices/Slice'

export const store = configureStore({
    reducer: {
        api: apiSlice,
    }
})