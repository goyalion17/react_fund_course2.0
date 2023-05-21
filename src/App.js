import React, { useEffect, useState } from "react";
import MyButton from "./component/UI/button/MyButton"
import PostList from "./component/PostList"
import './styles/App.css'
import MyInput from "./component/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript1', body: 'Description'},
    {id: 3, title: 'Javascript2', body: 'Description'},
  ])

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Post's name"/>
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Post's description"/>
        <MyButton onClick={addNewPost}>Add new post</MyButton>
      </form>
      <PostList posts={posts} title={'PostList JS'}/>
    </div>
  );
}

export default App;
