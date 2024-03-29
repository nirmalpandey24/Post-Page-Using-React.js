import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { GiConversation } from "react-icons/gi";
import { BsFillWalletFill } from "react-icons/bs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoLogInOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
     <div className="side_bar_content">
        <div className="top_content">
            <div className="items"><FaHome/>Home</div>
            <div className="items"><IoIosNotifications/>Notification</div>
            <div className="items"><FaShoppingBag/>Shop</div>
            <div className="items"> <GiConversation/>Conversation</div>
            <div className="items"> <BsFillWalletFill/>wallet</div>
           
            <div className="items"> <GiPlagueDoctorProfile/>My profile</div>
        </div>
        <div className="bottom_content"><IoLogInOutline/> Log out</div>
     </div>
    </>
  )
}

export default Sidebar
