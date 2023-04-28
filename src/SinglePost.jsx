import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "./redux/services/Services";
import { useParams } from "react-router-dom";


const SinglePost = () => {

    const { id } = useParams()

    const dispatch = useDispatch();
    const post = useSelector((state) => state?.api?.getSinglePostData)
    const status = useSelector((state) => state?.api?.getSinglePostStatus)

    useEffect(() => {
        dispatch(getSinglePost(id))
        return () => { dispatch(getSinglePost.cancel()) }
    }, [dispatch, id])

    return status === "pending" ? "...Loading" : (
        <div>
            <h2>
                Title: {post?.title}
            </h2>
            <h3>
                Body: {post?.body}
            </h3>
        </div>
    )
}

export default SinglePost;