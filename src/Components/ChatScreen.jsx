import React from 'react'
import ChatHead from './ChatHead'
import ChatMessage from './ChatMessage'

function ChatScreen() {
  return (
    <div className='bg-yellow-500 col-span-4 h-screen relative'>
        <div className='bg-rose-100 sticky '><ChatHead/></div>
        <div className='bg-rose-700 h-full overflow-scroll'><ChatMessage/></div>
        <div className='bg-emerald-600 bottom-0 w-full absolute'>Bottom Nav</div>
    </div>
  )
}

export default ChatScreen