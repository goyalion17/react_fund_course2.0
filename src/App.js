import React, { useState } from "react";
import MyButton from "./component/UI/button/MyButton"
import PostList from "./component/PostList"
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript1', body: 'Description'},
    {id: 3, title: 'Javascript2', body: 'Description'},
  ])
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Post's name"/>
        <input type="text" placeholder="Post's description"/>
        <MyButton>Add new post</MyButton>
      </form>
      <PostList posts={posts} title={'PostList JS'}/>
    </div>
  );
}

export default App;
