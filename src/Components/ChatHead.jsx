import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function ChatHead(props) {
  return (
    <div className='flex justify-between p-2 items-center bg-slate-600'>

        <div className='flex space-x-4'>
            <img className='h-9 w-9 rounded-full' src={props.p2?.img}/>
            <div>
                <p className='text-base text-white'>{props.p2?.name}</p>
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
