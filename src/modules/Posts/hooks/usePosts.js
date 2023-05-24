import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, selectPostsState} from "../slice";

const usePosts = () => {
    const dispatch = useDispatch()
    const {postsStatus, posts, postsError} = useSelector(selectPostsState)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch]);


    return {status: postsStatus, data: posts, error: postsError}
}

export default usePosts