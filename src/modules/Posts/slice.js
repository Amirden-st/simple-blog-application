import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {REQUEST_STATUS} from "../../common/constants";

export const name = 'posts'

export const getPosts = createAsyncThunk('getPosts', async (_, {extra: api}) => {
    const response = await api.get('todos')
    return response.data
})

const initialState = {
    postsStatus: REQUEST_STATUS.NOT_REQUESTED,
    posts: [],
    postsError: null,
}

const postsSlice = createSlice({
    name,
    initialState,
    extraReducers(builder) {
        builder.addCase(getPosts.pending, state => {
            state.postsStatus = REQUEST_STATUS.REQUESTED
        })
        builder.addCase(getPosts.fulfilled, (state, {payload}) => {
            state.postsStatus = REQUEST_STATUS.SUCCEEDED
            state.posts = payload
        })
        builder.addCase(getPosts.rejected, (state, {error}) => {
            state.postsStatus = REQUEST_STATUS.FAILED
            state.postsError = error
        })
    }
})

export const selectPostsState = state => state[name]

export default postsSlice