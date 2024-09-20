"use client"

import React, { useEffect, useState } from 'react'
import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import Image from 'next/image'
import Link from 'next/link'
import { storageLink } from '@/app/constants'
import { IoIosExpand } from "react-icons/io";
import { useDispatch,useSelector } from 'react-redux';
import { getProperty } from '@/app/components/store/slices/propertySlice';


  

const  page = ({params}) => {

  const infomation= ["Pg","Buy","Plots","Commercial"]
  const dispatch=useDispatch()
  const state=useSelector(state=>state.propertySlice)
const [newData,setNewdata] = useState()
useEffect(()=>{dispatch(getProperty())},[])
 useEffect(()=>{setNewdata(state.data.filter((item)=>item.type== 1+infomation.indexOf(params.slug2)))},[state])



  return (<>
   <div className='w-full h-auto relative'>
    <Image
      width={100}
      height={100}
      className='w-full h-[300px] object-cover relative after:content-[] after:absolute after:w-full after:h-[300px] after:bg-black '
      src='/images/bgimgs.jpg'
    />
    <div className='absolute inset-0 bg-black opacity-50'></div>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
      <h2 className='text-white text-4xl text-center my-2 font-[500] '>
        DISCOVER OUR PROPERTIES
      </h2>
      <p className='text-white text-xl text-center font-normal '>
        Each place is a good choice our wonderful properties.
      </p>
      <p className='text-white text-xl text-center font-normal my-2'>
        Home / For Rent
      </p>
    </div>
  </div>
    <div className=' p-4 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4   my-8'>
  { newData &&
          newData?.map((item,index) => (
          <Cards key={index}
                  img={item.images_paths[0]}
                  head={item.name}
                  add={item.address}
                  bed={item.bedroom}
                  bath={item.bathroom}
                  slug={item.slug}
                  space={item.rate_per_square_feet}
                  price={item.price}
                  cate={item.type}
                  flag={item.type}
                  />
              
          ))
        }
    </div>
    </>
  )
}
const Cards = ({img,head,add,bed, slug,bath,space,price,cate,flag })=>{

  return(<>
<div className='relative sm:max-w-[360px] lg:max-w-[400px] overflow-hidden cursor-pointer  bg-white rounded-lg shadow-lg m-2'>
       <Link href={`/${slug}`} >
     
     <div className='img-box overflow-hidden relative'>
       <Image
         className='w-full h-[220px] transition-transform duration-500 ease-in-out transform hover:scale-110'
         src={`${storageLink}/${img}`}
         width={200}
         height={200}
       />
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
         {head}
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
