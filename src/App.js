import PostList from './components/PostList/PostList';
import { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';

const data=[
{name: "Akbermet", age: '20'},
 
]



function App() {
 

  const [posts, setPosts]=useState(data)

  const createPost = (newPost)=>{
setPosts([...posts, newPost].sort((a,b)=>{
  return a.age - b.age   
})) //

  }
  return (
    <div className="App">
  
  <PostForm onCreatePost={createPost}/>
  <PostList posts={posts}/>
    </div>
  );
}

export default App;
