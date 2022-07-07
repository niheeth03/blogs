import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import './sidebar.css'
import axios from "axios"
function Sidebar() {
    const [cat,setCats]=useState([]);
    useEffect(()=>{
       const getCats =async()=>{
        const res=await axios.get("/categories/");
        setCats(res.data);
       } 
       getCats();
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className ="sidebarTitle">ABOUT ME</span>
            <img src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg" alt=""></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod sint inventore cum necessitatibus. 
                Nam odit cum sequi fugiat quasi eum eveniet voluptas ea sint dolore magni minima quidem, quia nostrum?</p>
        </div>
        <div className="sidebarItem">
            <span className ="sidebarTitle">CATEGORIES</span>
            <ul  className="sidebarList">
                {cat.map((c)=>(
                    <li className="sidebarListItem"><Link className="link" to={`/?cat=${c.name}`}>{c.name}</Link></li>
                ))}
            </ul>
        </div> 
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW ME ON</span>
            <div className="sidebarSocial">
                <i className=" sidebarIcon fa-brands fa-facebook-square"></i>
                <i className=" sidebarIcon fa-brands fa-twitter-square"></i>
                <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
                <i className=" sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;
