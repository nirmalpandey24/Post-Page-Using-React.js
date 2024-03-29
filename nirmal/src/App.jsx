import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Post from './components/Post.jsx';
import Rightbar from './components/Rightbar.jsx';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">   
        <div className="side_bar">
          <Sidebar />
        </div>
   
        <div className="post_section">
          <Post />
        </div>
      
        <div className="right_bar">
          <Rightbar />
        </div>
      </div>
    </>
  );
}

export default App;
