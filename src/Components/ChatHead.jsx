import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function ChatHead() {
  return (
    <div className='flex justify-between p-2 items-center bg-slate-600'>

        <div className='flex space-x-4'>
            <img className='h-9 w-9 rounded-full' src='https://pps.whatsapp.net/v/t61.24694-24/211388931_209197104804422_6108169581373096715_n.jpg?ccb=11-4&oh=01_AdReOBZ3BCpbkA1PpwoBMl4glO0XsFhfvrnazNdrSzIBcQ&oe=639C2E14'></img>
            <div>
                <p className='text-base text-white'>Priyanka</p>
                <p className='text-xs text-slate-400 leading-3'>Online</p>
            </div>  
        </div>

        <div className='flex space-x-4 text-white text-xl'>
        <SearchIcon fontSize='inherit'/>
        <MoreVertIcon fontSize='inherit' />  
        </div>
    </div>
  )
}

export default ChatHead
