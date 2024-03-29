import React from 'react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa6";
import { TfiComments } from "react-icons/tfi";
import { IoMdShareAlt } from "react-icons/io";
const Post = () => {
  return (
    
      <>
      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_640.jpg" alt=""/>
              </div>
              <div className='text'>
                <h3>Post</h3>
                <p>hi this is an text to show example</p>

            </div>
          </div>
          <div className="dot"><HiOutlineDotsVertical/></div>
        </div>
        <p>this is a example</p>
        <div className="post_img">
          <img src='https://cdn.pixabay.com/photo/2017/01/19/19/24/chess-1993141_640.jpg' alt=''/>
        </div>
        <div className="like_comment">
          <div className="likes"><FaHeart className='items'/> 4.2K</div>
          <div className="comments"><TfiComments className='items'/>10.2k</div>
          <div className="share"><IoMdShareAlt className='items'/></div>
        </div>
      </div>

      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_640.jpg" alt=""/>
              </div>
              <div className='text'>
                <h3>new post</h3>
                <p>hi this is an text to show example</p>

            </div>
          </div>
          <div className="dot"><HiOutlineDotsVertical/></div>
        </div>
        <p>this is a second post</p>
        <div className="post_img">
          <img src='https://cdn.pixabay.com/photo/2016/09/13/09/25/kite-1666816_640.jpg' alt=''/>
        </div>
        <div className="like_comment">
          <div className="likes"><FaHeart className='items'/> 4.2K</div>
          <div className="comments"><TfiComments className='items'/>10.2k</div>
          <div className="share"><IoMdShareAlt className='items'/></div>
        </div>
      </div>
       </>
    
  )
}

export default Post
