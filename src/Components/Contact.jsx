import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import CachedIcon from '@mui/icons-material/Cached';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ContactCards from './ContactCards';


function Contact(props) {
  const ContactArray = 
  [
   {name:'Pratiksha', msg:'Hola', time:'12:00am', img:'https://pps.whatsapp.net/v/t61.24694-24/315423624_665478868573085_6189060788976923487_n.jpg?ccb=11-4&oh=01_AdSHlEqWi1zWXqrfvStVXPbpkZaMmxSNxIYpGazhBuaCDQ&oe=639C3691'},
   {name:'Priyanka', msg:'Bro😂😂😂', time:'11:45pm', img:'https://pps.whatsapp.net/v/t61.24694-24/211388931_209197104804422_6108169581373096715_n.jpg?ccb=11-4&oh=01_AdReOBZ3BCpbkA1PpwoBMl4glO0XsFhfvrnazNdrSzIBcQ&oe=639C2E14'},
   {name:'Eijaz', msg:'Ok thank you', time:'9:19pm', img:'https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdQ5Apb34ZHCGizP7OLyfDukaNV5LevUH6lLTLs4VsDVsw&oe=639C32FD'},
   {name:'Arfat', msg:'Keyboard ☹️', time:'yesterday', img:'https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdRlC6BpZPKwLL7acplLyVf-K5eJJB6iRZ7zaqbQm7A8Jw&oe=639C1AB0'},
   {name:'Sumera', msg:'I dont know', time:'Friday', img:'https://pps.whatsapp.net/v/t61.24694-24/306804064_732639864945686_2565074498871208811_n.jpg?ccb=11-4&oh=01_AdQbVgw0ixonyF1LGw8LL2VdUgAfuLMrZYVqWsnZQDd4Pw&oe=639C1B5F'},
   {name:'Arbaz', msg:'Got it', time:'Thursday', img:'https://pps.whatsapp.net/v/t61.24694-24/312270294_1198660327725915_6552461764297499301_n.jpg?ccb=11-4&oh=01_AdTP9YNGjKmypL_jwP7upfkT9fF2guJ_7kV7aKTTsTqF7A&oe=639C0C1A'},
   {name:'Nikhat', msg:'Hey', time:'01/12/2022', img:'https://pps.whatsapp.net/v/t61.24694-24/180331887_856279525298753_2313013107755184080_n.jpg?ccb=11-4&oh=01_AdQUR7sEjchXrLHGksMctKxUa0TO1SHs27O9iINnwNwHEQ&oe=639C2736'},
   {name:'Misba', msg:'Bye', time:'02/12/2022', img:'https://pps.whatsapp.net/v/t61.24694-24/311819154_518375196901307_1939959164750011284_n.jpg?ccb=11-4&oh=01_AdRJim9Kmknl5nQ3OKN1el6XaNhiuDm55NX-Tp8uQH_6UQ&oe=63A19824'},
   {name:'Farha', msg:'Come again', time:'01/12/2019', img:'https://pps.whatsapp.net/v/t61.24694-24/307103608_5188485381263683_671062888608676686_n.jpg?ccb=11-4&oh=01_AdTzevrPeKvDvIKaIcYLZx4y7hdzq4_WL7No-cGjhsQEZQ&oe=639C0E2E'},
   {name:'Lubna', msg:'take care', time:'01/12/2018', img:'https://pps.whatsapp.net/v/t61.24694-24/106985811_556737068326838_349287456192329241_n.jpg?ccb=11-4&oh=01_AdREWF13KpHvXiJT08m4ouVD5xkxNF7eMSBRNxCTc3wDNA&oe=639C2910'},
   {name:'Pratiksha', msg:'Hola', time:'12:00am', img:'https://pps.whatsapp.net/v/t61.24694-24/315423624_665478868573085_6189060788976923487_n.jpg?ccb=11-4&oh=01_AdSHlEqWi1zWXqrfvStVXPbpkZaMmxSNxIYpGazhBuaCDQ&oe=639C3691'},
   {name:'Priyanka', msg:'Bro😂😂😂', time:'11:45pm', img:'https://pps.whatsapp.net/v/t61.24694-24/211388931_209197104804422_6108169581373096715_n.jpg?ccb=11-4&oh=01_AdReOBZ3BCpbkA1PpwoBMl4glO0XsFhfvrnazNdrSzIBcQ&oe=639C2E14'},
  ]

  function XYZ(x){
    props.setContact(x)
  }



  return (
    <div className='bg-slate-800 col-span-2 '>

    {/* Top nav of contact screen */}
      <div className='flex justify-between items-center p-2 bg-slate-600 '>
      <img className='h-9 w-9 rounded-full' src='https://pps.whatsapp.net/v/t61.24694-24/310110404_955288089195524_7301502132524348877_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTeJclAD816-AkseIwzmb1oKq1mSSoyHgH3lfKbzi19mQ&oe=6399DCF4'></img>
      <div className='flex space-x-4 text-white text-xl'>
        <GroupsIcon fontSize='inherit'/>
        <CachedIcon fontSize='inherit'/>
        <MessageIcon fontSize='inherit'/>
        <MoreVertIcon fontSize='inherit'/>
      </div>
      </div>


      {/* Search icons of contact screen */}
      <div className=' text-gray-300 text-lg space-x-2 items-center flex mx-2 '>
      <div className='flex bg-gray-600 space-x-2 px-4 rounded-md w-full py-2  items-center h-8 my-2'>
      <SearchIcon fontSize='inherit'/>
      <input placeholder='Search or start a new chat' className='w-full bg-transparent text-xs'></input>
      </div>
      <FilterListIcon fontSize='inherit'/>
      </div>


      {/* Contacts icons and messages */}
      <div className='overflow-y-scroll max-h-screen pb-28'>
      
      {
        ContactArray.map((item,index) => <button onClick={()=>XYZ(item)} key={index} className='w-full'>
        <ContactCards setName={item.name} setImg={item.img} setMsg={item.msg} setTime={item.time}/></button> )}
        {/* setImg={item.img}
        setName={item.name}
        setMsg={item.msg}
        setTime={item.time} */}
      
      

      {/* <ContactCards setName='Sumera' setMsg='Mujhe nai pata 😶' setTime='11:45pm' setImg='https://pps.whatsapp.net/v/t61.24694-24/306804064_732639864945686_2565074498871208811_n.jpg?ccb=11-4&oh=01_AdQhVBeFt5n5w9xCMq6cNYeHDSv6M3guKnhNbyfL4g15vg&oe=639AC9DF'/>
      <ContactCards setName='Arfat' setMsg='Keyboard ⌨️' setTime='8:00pm' setImg='https://pps.whatsapp.net/v/t61.24694-24/312280018_169906322326594_541453286877171405_n.jpg?ccb=11-4&oh=01_AdRGXvW2lKFMUaYn9yGVqzlu1iXudG9mZa57pUWTVtMlSw&oe=639AC930'/>
      <ContactCards setName='Eijaz' setMsg='Ok thank you' setTime='7:07pm' setImg='https://pps.whatsapp.net/v/t61.24694-24/298328542_766611371246745_4042993338047187675_n.jpg?ccb=11-4&oh=01_AdS_iXSH3Oqha5kRVJcF6Yp2MplQT0EBAwFcRdk6NsXfTg&oe=639AE17D'/>
      <ContactCards setName='Arbaz' setMsg='I got it' setTime='6:19pm' setImg='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
      <ContactCards setName='F.R.I.E.N.D.S' setMsg='Patty: Such a old school gurl😭' setTime='5:04pm' setImg='https://pps.whatsapp.net/v/t61.24694-24/305375139_493346942638711_478855963333803889_n.jpg?ccb=11-4&oh=01_AdQ3wRfEbovJ-5SUg9UntoW30gbaFE5QIRGjGPbSl_uqkg&oe=639AAEAA'/>
      <ContactCards setName='AK' setMsg='Ewww 🤧' setTime='4:39pm' setImg='https://pps.whatsapp.net/v/t61.24694-24/312289452_196053089563332_1329134612951006254_n.jpg?ccb=11-4&oh=01_AdTOS4LG-vMDzG8U3GSEKHEUAMuk_IFLCA7HwZNiFI_E7A&oe=639AD03C'/>
      <ContactCards setName='Mubin🍭' setMsg='We aint nobody' setTime='yesterday' setImg='https://pps.whatsapp.net/v/t61.24694-24/301432709_166294502649949_1866362040270193436_n.jpg?ccb=11-4&oh=01_AdR_l5sO6nXwmCrmZdTqoD9dUQ0mBN9AMEfQ1AHt1lK9dQ&oe=639AC45A'/>
      <ContactCards setName='Priyanka' setMsg='Bro 😂😂😂' setTime='yesterday' setImg='https://pps.whatsapp.net/v/t61.24694-24/211388931_209197104804422_6108169581373096715_n.jpg?ccb=11-4&oh=01_AdTm0rKsntP9SzXK64hM8_K25JbKLRRjyJKsw4xfJpAeeA&oe=639ADC94'/>
      <ContactCards setName='Ashish' setMsg='Abey yaar😡😡' setTime='yesterday' setImg='https://pps.whatsapp.net/v/t61.24694-24/296831732_1449253662248659_1102826405671074490_n.jpg?ccb=11-4&oh=01_AdTfyqKvTJDiGXAm5CC4N35mRZ8lUeW_lhWCMVqJtufP4A&oe=639AAD22'/>
      <ContactCards setName='Motie🐼' setMsg='jab mila tu ruturutuuuu' setTime='yesterday' setImg='https://pps.whatsapp.net/v/t61.24694-24/263337417_129464312876229_8043061335671340521_n.jpg?ccb=11-4&oh=01_AdRr0fTKKhc5NeY8kBRwJcBzPreVUJ_S9c9DIa3jSlvzJQ&oe=639ABC81'/>
      <ContactCards setName='Famileosca' setMsg='Emran Uncle: إِنْ شَاءَ ٱللَّٰهُ beta' setTime='Friday' setImg='https://pps.whatsapp.net/v/t61.24694-24/71545384_227918791888823_6282567829010909960_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSh9GNznYrf2vuT9T9_cK8uOS3CQ4eOZ7S5DdCCLDjGEA&oe=639AD2DD'/>
      <ContactCards setName='Pops' setMsg='OK' setTime='Friday' setImg='https://pps.whatsapp.net/v/t61.24694-24/157932037_284324076739606_5872726080476197760_n.jpg?ccb=11-4&oh=01_AdS_XbLxHTtqRG0x3XnRMtIc-nzigCWXcds2Qa8lzBQcyA&oe=639AC021'/>
      <ContactCards setName='Omma' setMsg='Call me 📞' setTime='Thursday' setImg='https://pps.whatsapp.net/v/t61.24694-24/299445371_140642865040603_3585415733561824329_n.jpg?ccb=11-4&oh=01_AdR8KRrz4Byq8-mGce8X4am78bS7rEXJGVnz_9_3CYCedw&oe=639AD3C9'/> */}

      </div>

    </div>
    
  )
}

export default Contact