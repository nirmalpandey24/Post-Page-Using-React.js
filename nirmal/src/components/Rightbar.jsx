import React from 'react';

const Rightbar = () => {
  return (
    <div className="rightbar-container">
     
      <div className="image-column">
        <img src="https://cdn.pixabay.com/photo/2021/12/15/10/21/chess-6872239_640.jpg" alt="Image 1" className="image-item" />
        <img src="https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg" alt="Image 2" className="image-item" />
        <img src="https://cdn.pixabay.com/photo/2022/06/25/18/55/pixel-art-7284052_640.png" alt="Image 3" className="image-item" />
        <img src="https://cdn.pixabay.com/photo/2022/06/25/18/55/pixel-art-7284052_640.png" alt="Image 3" className="image-item" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Rightbar;
