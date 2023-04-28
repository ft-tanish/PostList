import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import PostList from './PostList'
import SinglePost from './SinglePost';

function App() {

  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PostList />
  },
  {
    path: "post/:id",
    element: <SinglePost />
  }
])
