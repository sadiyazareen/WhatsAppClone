import React from 'react'

function ContactCards(props) {
  return (
    <div className='border-black border-y p-2 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500'>
    <div className='justify-between flex mx-4'>
    <div className='flex space-x-2 items-center '>
        <img className='h-10 w-10 rounded-full' src={props.setImg}></img>
        <div>
            <p className='text-base text-white'>{props.setName}</p>
            <p className='text-xs text-slate-400'>{props.setMsg}</p>     
        </div>
    </div>
    
    <div className='text-xs text-slate-400'>
        <h1>{props.setTime}</h1>
    </div>
      
    </div>

    </div>
  )
}

export default ContactCards

