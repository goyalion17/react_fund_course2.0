import React, { useState } from "react";
import PostList from "./component/PostList"
import './styles/App.css'
import PostForm from "./component/PostForm"

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript1', body: 'Description'},
    {id: 3, title: 'Javascript2', body: 'Description'},
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />      
      <PostList posts={posts} title={'PostList JS'}/>
    </div>
  );
}

export default App;
