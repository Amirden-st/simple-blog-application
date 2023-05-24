import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from "./api";
import postsSlice, {name as postsSliceName} from "./modules/Posts/slice";


const reducer = combineReducers({
    [postsSliceName]: postsSlice.reducer
})


export const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
        }),
})