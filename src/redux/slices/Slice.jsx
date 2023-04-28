import { createSlice } from "@reduxjs/toolkit";
import { addPost, getAPI, getSinglePost } from "../services/Services";


const initialState = {
    getApiStatus: 'idle',
    getApiData: null,
    getSinglePostStatus: 'idle',
    getSinglePostData: null,
    addPostStatus: 'idle'
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: {
        [getAPI.pending]: (state) => {
            state.getApiStatus = 'pending'
        },
        [getAPI.fulfilled]: (state, { payload }) => {
            state.getApiStatus = 'success'
            state.getApiData = payload
        },
        [getAPI.rejected]: (state) => {
            state.getApiStatus = 'failed'
        },
        [getSinglePost.pending]: (state) => {
            state.getSinglePostStatus = 'pending'
        },
        [getSinglePost.fulfilled]: (state, { payload }) => {
            state.getSinglePostStatus = 'success'
            state.getSinglePostData = payload
        },
        [getSinglePost.rejected]: (state) => {
            state.getSinglePostStatus = 'failed'
        },
        [addPost.pending]: (state) => {
            state.addPostStatus = 'pending'
        },
        [addPost.fulfilled]: (state, { payload }) => {
            state.addPostStatus = 'success'
            state.getApiData.unshift(payload);
        },
        [addPost.rejected]: (state) => {
            state.addPostStatus = 'failed'
        },
    }
})

export default apiSlice.reducer;