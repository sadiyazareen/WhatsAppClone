import React from 'react'
import ChatHead from './ChatHead'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

function ChatScreen(props) {
  return (
    <div className='bg-yellow-500 col-span-4 h-screen relative'>
        <div className='bg-rose-100 sticky '><ChatHead p2={props.p1}/></div>
        <div className='bg-rose-700 h-full overflow-scroll'><ChatMessage/></div>
        <div className='bg-emerald-600 bottom-0 w-full h-11 absolute'><ChatInput/></div>
    </div>
  )
}

export default ChatScreen