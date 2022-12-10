import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import ChatScreen from '../Components/ChatScreen'
import Contact from '../Components/Contact'


function Homescreen() {
  const [active, setActive] = useState(null)



  return (
    <div className='w-full max-w-[60rem] grid grid-cols-6 h-screen mx-auto overflow-y-hidden bg-slate-400'>
    {/* <Contact/> */}
    <Contact setContact={setActive}/>

    {/* <ChatScreen/> */}
    {active ? <ChatScreen p1={active}/>: "" }
    
    </div>
  )
}

export default Homescreen