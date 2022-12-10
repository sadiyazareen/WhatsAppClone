import React from 'react'
import ChatScreen from '../Components/ChatScreen'
import Contact from '../Components/Contact'


function Homescreen() {
  return (
    <div className='w-full max-w-[60rem] grid grid-cols-6 h-screen mx-auto overflow-y-hidden'>
    <Contact/>
    <ChatScreen/>
    
    </div>
  )
}

export default Homescreen