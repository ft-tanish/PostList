import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getAPI } from './redux/services/Services';
import { Link } from 'react-router-dom';

const PostList = () => {

  const [newPost, setNewPost] = useState('');

  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.api?.getApiData);
  const status = useSelector((status) => status?.api?.getApiStatus);

  useEffect(() => {
    dispatch(getAPI());
  }, [dispatch]);

  const handleAddPost = () => {
    if (newPost.trim() !== "") {
      console.log("newPost", newPost);
      dispatch(addPost(newPost));
      setNewPost("");
    }
  };

  return status === "pending" ? "...Loading" : (
    <div>
      <h2>Posts</h2>
      <div>
        <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <ul>
        {posts?.map((post) => (
          <Link to={"/post/" + post?.id} key={post.id}>
            <li>
              {post?.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
