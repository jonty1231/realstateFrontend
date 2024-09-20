'use client'

import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch } from "react-redux"
import Image from 'next/image'
import { getblog } from '../components/store/slices/blogSlice'
import { storageLink } from '../constants'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'

const page = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dispatch=useDispatch()
    const state=useSelector(state=>state.blog)
    const [blogData,setblogData] = useState()
  
  useEffect(()=>{dispatch(getblog())},[])
  useEffect(()=>{setblogData(state.data)},[state])

  return (
    <div>
    <div className='w-full px-[1rem] lg:px-[5rem] py-10 bg-[#f5f2f0] '>
   <div className="content mb-[20px]">
        <h2 className="text-4xl my-2 text-[#181a20] font-semibold">
        From Our Blog
        </h2>
        <p className="text-lg">
        Aliquam lacinia diam quis lacus euismod
        </p>
      </div>
      <div className=' flex relative'>
     <div className='lg:w-3/5 flex flex-col   gap-7  '>
     {
        blogData?.map((data,index)=>{
          const dateObj = new Date(data.date);
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();

            return (<>
            <BlogNewCard id={data.id} key={index} index={index+1}  month={month}    area={data.subheading} title={data.title} img={data.image}  date={day}   />
            </>)
        })

       }



</div>
<div className=' w-2/5   hidden lg:block   '>



<div className='sticky top-20  w-5/6 m-auto   bg-white p-6 shadow-2xl rounded-2xl '>   <ContactForm  />
</div>
</div>
</div>
     </div>

   </div>

  
  )
}

const BlogNewCard=({id,month,area,title,index,img,date})=>{
  return(
    <div className={`   h-auto  my-4 px-2 overflow-hidden  `}>
    {/* w-full h-[220px] transition-transform duration-500 ease-in-out transform hover:scale-110 */}
    <div className='bg-img overflow-hidden rounded-lg'>
      <Image 
       width={100}
       height={100}
        className='rounded-md transition-transform duration-500 ease-in-out  transform hover:scale-110 w-full h-auto' src={`${storageLink}/${img}`} 
        alt="Image description" // always good to add alt attribute for accessibility
      />
    </div>
    <div className='bg-content pt-4 pr-5 pb-0 pl-0 relative '>
      <div className={`content absolute w-16 h-16 top-[-25px] pt-2 ${index%2==0?"left-5":"right-5"} text-center shadow-md rounded-md bg-white`}>
        <span className='text-base text-slate-500'>
          {month}
        </span>
        <span className='block text-lg text-[#181a20] font-bold'>
          {date}
        </span>
      </div>
      <div className={`${index%2==0?"text-end":"text-start"}`}>
      <Link href="/" className='text-[#717171] text-sm sm:text-base font-normal'>
        {area}
      </Link>
      <h6 className='text-base sm:text-lg font-semibold mt-1'>
        {title}
      </h6>
      </div>
    </div>
  </div>
  )
}

export default page
