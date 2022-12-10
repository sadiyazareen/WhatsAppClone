import React from 'react'

function ClassScreen() {

  return (
    <div>

    <div className='grid grid-col-1 divide-y p-4 mt-3 text-xl shadow w-1/3 h-1/3 ml-96 border-2 bg-rose-300'>
      
      {/* <!-- top container --> */}
        <div className='bg-teal-900 rounded-t-3xl h-48'>
             <img className='h-48 mx-auto' src='https://freesvg.org/img/Cartoon-Ant.png'></img>
        </div>
        

        {/* <!-- profile --> */}
        <div>
          <img className='absolute h-24 w-24 rounded-full inset-y-48 ml-40' src='https://img.freepik.com/premium-vector/cartoon-avatar-aesthetic-illustration_569774-79.jpg'></img>
        </div>

        {/* second half container */}
        <div className='bg-white rounded-b-3xl'>

          <div>
            <img className='w-6 mt-5 ml-96' src='https://cdn-icons-png.flaticon.com/512/61/61140.png'></img>
            <h1 className='text-center font-bold mt-8 text-2xl'>MORGAN SWEENEY</h1>
            <p className='text-center text-sm text-slate-400'>Ant Collector</p>
          </div>
              
          <div className='flex justify-around text-center mt-4'>
            <div>
              <h3 className='text-2xl text-blue-500 font-bold'>12</h3>
              <p className='text-slate-400'>Followers</p>
            </div>
                
            <div>
              <h3 className='text-2xl text-blue-500 font-bold'>1000</h3>
              <p className='text-slate-400'>Following</p>
            </div>          
          </div>
          
          <div className='text-center'>
            <button className='rounded-full bg-yellow-400 px-32 py-3 font-bold mt-5'>Follow</button>
          </div>

          <div className='px-11 py-4 text-justify'>
            <p className='text-slate-700'>
              Morgan has collected ants since 
              they were six years old and now has
              many dozen ants but none in their 
              pants.
            </p>
          </div> 
        </div>   
      </div>
    </div>
  )
  }


export default ClassScreen