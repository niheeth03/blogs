import React from 'react';
import './single.css'
import Sidebar from '../../components/sidebar/sidebar'
import SinglePost from '../../components/singlePost/singlePost'
function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  );
}

export default Single;
