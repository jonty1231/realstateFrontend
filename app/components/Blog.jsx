'use client'

import React,{useState,useEffect} from 'react'
import Blogcard from './Blogcard'
import axios from 'axios'
import { apiLink } from '../constants'
import {useSelector,useDispatch } from "react-redux"
import { getblog } from './store/slices/blogSlice'



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function Blog() {
  const dispatch=useDispatch()
  const state=useSelector(state=>state.blog)
  const [blogData,setblogData] = useState()

useEffect(()=>{dispatch(getblog())},[])
useEffect(()=>{setblogData(state.data)},[state])

  console.log(blogData,"blog")

  return (
   <>
   <div className='w-full px-[1rem] lg:px-[5rem] py-10 '>
   <div className="content mb-[20px]">
        <h2 className="text-4xl my-2 text-[#181a20] font-semibold">
        From Our Blog
        </h2>
        <p className="text-lg">
        Aliquam lacinia diam quis lacus euismod
        </p>
      </div>
     <div className='w-full  justify-center lg:justify-between  grid lg:grid-cols-3 gap-3'>
       {
        blogData?.map((data,index)=>{
          const dateObj = new Date(data.date);
    const month = monthNames[dateObj.getMonth()];
    const day = dateObj.getDate();

            return (<>
            <Blogcard id={data.id}    month={month}    area={data.subheading} title={data.title} img={data.image}  date={day}   />
            </>)
        })

       }
     </div>

   </div>
   </>
  )
}
