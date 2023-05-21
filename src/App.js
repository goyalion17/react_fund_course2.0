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

  const [title, setTitle] = useState('ggg');

  const addNewPost = () => {
    console.log('title: ', title);
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Post's name"/>
        <MyInput type="text" placeholder="Post's description"/>
        <MyButton onClick={addNewPost}>Add new post</MyButton>
      </form>
      <PostList posts={posts} title={'PostList JS'}/>
    </div>
  );
}

export default App;
