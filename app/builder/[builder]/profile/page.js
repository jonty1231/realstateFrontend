"use client"
import { getBuilder } from '@/app/components/store/slices/builderslice/builderSlice';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { RiShieldUserFill } from "react-icons/ri";
import { getBuilderinfo } from '@/app/components/store/slices/builderslice/Builderitemslice';
import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { IoIosExpand } from "react-icons/io";
import Image from 'next/image';

import Link from 'next/link';
import Skelotenloder from '@/app/components/Skelotenloder';

const page = () => {
  const [imgtime,setimgtime]=useState(true)    

    const [data,setdata]=useState()
    const [builderdata,setbuilderdata]=useState()
    const dispatch=useDispatch()
    const state=useSelector(state=>state)

    const param=useParams().builder.split("%")[0]
    useEffect(()=>{dispatch(getBuilder(param))} ,[ ])
useEffect(()=>{ setdata(state.builder.data) },[state])
   
    useEffect(()=>{
      dispatch(getBuilderinfo(param))
      setInterval(() => {
        setimgtime(false)
      }, 3500);
      },[  ])
      useEffect(()=>{setbuilderdata(state.Builderitem.data)},[state])
console.log(builderdata,"asdfnednfpweifpweiwe")
  return (
    <div className='px-20 py-8  h-screen overflow-y-auto bg-[#f3f2f2] '>
   <div className=' flex gap-3 items-center bg-white p-5 rounded-md  '>
      <RiShieldUserFill  className='text-[10rem] text-blue-600 '/>
      <div className=' grid  grid-rows-3 grid-flow-col  gap-3 text-xl  items-start  w-full'>
        <div className='flex gap-2'>
          <div>Name</div>:<p>{data && data.name }</p>
          </div>
          <div className='flex gap-2'>
          <div>Email</div> :<p>{data && data.email}</p>
          </div>
          <div className='flex gap-2'>
          <div>Contect</div> :<p>+91 {data && data.phone_number}</p>
          </div>

          <div className='flex gap-2'>
          <div>Properties Add</div> :<p>{builderdata && builderdata.length}</p>
          </div>



      </div>
      
   </div>
   <div className='grid grid-cols-4 gap-3 my-5'>
{builderdata && builderdata.map((info)=>{return(
  <Cards  {...info}  imgtime={imgtime} />
)})}</div>



    </div>
  )
}


const Cards = ({img="/images/bgimgs.jpg",name,add,bed, slug,bath,space,price,cate,flag,imgtime })=>{

  return(<>
<div className='relative sm:max-w-[360px] lg:max-w-[400px] overflow-hidden cursor-pointer  bg-white rounded-lg shadow-lg m-2'>
       <Link href={`/${slug}`} >
     
     <div className='img-box overflow-hidden relative'>
      <div className='w-full h-[220px]'>
        {imgtime? <Skelotenloder />:
      <Image
         className='w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110'
         src={`${img}`}
         width={200}
         height={200}
       />}
      </div>
     
       {cate && (


         <div className='flex absolute  bottom-0 left-0 z-10    bg-opacity-80 items-center justify-between rounded-br-lg'>
          
           <span className='text-white text-md px-4 py-1 after:content after:absolute after:z-10 after:border-l-[25px] after:border-l-[transparent]   bg-[#1d5f6fcc] font-bold relative z-20'>
             {cate}
           </span>

           <span className='text-white text-md px-4 py-1 after:content after:absolute after:z-10 after    bg-[#e23e1dcc] font-bold relative z-20 '>
           ₹ {price}
           </span>


         </div>
       )}
       

{flag && (
         <div className='flex absolute px-4 rounded-md py-2 top-1 right-1  z-10 bg-[#36c6d3] items-center justify-between'>
          
           <span className='text-white text-md font-bold relative z-20 text-[12px]'>
             {flag}
           </span>
         </div>
       )}
     </div>
     
     <div className='my-2 px-4 py-1'>
       <h2 className='text-lg text-[#181a20] font-medium transition-all duration-500 ease-in-out hover:underline'>
         {name}
       </h2>
       <p className='text-[#717171] text-md mb-[10px]'>
         {add}
       </p>
       <div className='flex border-[#ddd]'>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <MdOutlineBed className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-nowrap'>{bed} Bedrooms</span>
         </div>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <TbBath className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-nowrap '>{bath} Bathrooms</span>
         </div>
         <div className='flex items-center text-[13px] mr-[5px] lg:mr-[8px]'>
           <IoIosExpand className='text-xl mr-[6px]' />
           <span className='text-[#717171] text-sm text-nowrap'>{space} sqft</span>
         </div>
       </div>
       <hr className="mt-2 bg-[#ddd]" />
       <div className='flex justify-between my-3'>
         <h4>
           {cate}
         </h4>
         <div>
           <span className='text-[#717171] font-semibold text-[13px]'>₹{price}</span>
           <span className='text-[#717171] font-semibold text-[13px]'>/mo</span>
         </div>
       </div>
     </div>
     </Link>
   </div>
   
     
  </>)
}


export default page
