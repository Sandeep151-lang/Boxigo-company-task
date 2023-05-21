import React from 'react'
import Moves from '../../icons/Moves'
import UserIcon from '../../icons/userIcons'
import Quote from '../../icons/Quote'
import Logout from '../../icons/Logout'

const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <div className='sidebar-list'>
                <Moves/>
                <h5 className='sidebar-text'>My Moves</h5>
            </div>
            <div className='sidebar-list'>
                <UserIcon/>
                <h5 className='sidebar-text'>My Profile</h5>
            </div>
            <div className='sidebar-list'>
                <Quote/>
                <h5 className='sidebar-text'>Get Quote</h5>
            </div>
            <div className='sidebar-list'>
                <Logout/>
                <h5 className='sidebar-text'>Logout</h5>
            </div>
        </div>
    </>
  )
}

export default Sidebar