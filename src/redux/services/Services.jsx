import { createAsyncThunk } from "@reduxjs/toolkit";

// Get API
export const getAPI = createAsyncThunk(
    'api/all',
    async (rejectWithValue) => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response?.json();
            return data
        } catch (error) {
            return rejectWithValue("error")
        }
    }
)

// SinglePost Data
export const getSinglePost = createAsyncThunk(
    'api/single',
    async (id, rejectWithValue) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await response?.json();
            return data
        } catch (error) {
            return rejectWithValue("error")
        }
    }
)

getSinglePost.cancel = () => ({ type: 'api/single/rejected', meta: { requestId: getSinglePost.typePrefix } });

// Add Post
// export const addPost = (newPost) => ({ type: 'api/addPost', payload: newPost });
export const addPost = createAsyncThunk(
    "api/add",
    async (newPost, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "POST",
                    body: JSON.stringify({
                        title: newPost,
                        body: "",
                        userId: 1,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue("error");
        }
    }
);
