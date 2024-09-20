'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// import { MdOutlineElectricBolt } from "react-icons/md";

// import { FaHeart, FaShareAlt } from 'react-icons/fa';

import { MdOutlineBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { IoIosExpand } from "react-icons/io";
import Link from 'next/link'
import {useDispatch,useSelector} from "react-redux"


import { getProperty } from './store/slices/propertySlice';
import { storageLink } from '../constants';
import Skelotenloder from './Skelotenloder';








export default function Slidercom() { 




const [activeCategory, setActiveCategory] = useState(0); 
const state=useSelector((state)=>state.propertySlice)
const [newData, setNewData] = useState(""); 
const [imgtime,setimgtime]=useState(true)    
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getProperty())
setInterval(() => {
  setimgtime(false)
}, 2500);
},[])


const data= state.data && state.data
useEffect(()=>{
  if(!activeCategory){
    setNewData(data)

  }
  else{
    const filteredData = data.filter(item => item.type == activeCategory);
      setNewData(filteredData)
  }
},[data,activeCategory])



  return (
    <>
      <div className="w-full px-[1rem] lg:px-[5rem] py-10">
        <div className="content flex justify-between items-center ">
   
  
          <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl my-2 sm:my-4 lg:my-6 text-[#181a20] font-semibold">
  Discover Popular Properties
</h2>
<p className="text-base sm:text-lg lg:text-xl">
  Aliquam lacinia diam quis lacus euismod
</p>


          </div>

          <div className='hidden lg:block'>
          {['All', 'Rent', 'Pg', 'Buy', 'Commercial'].map((value, index) => (
        <button
          key={index}
          className={`px-4 py-[7px] mr-[10px] text-[18px] font-semibold text-black border-2 rounded-[6px] border-black ${activeCategory == index ? 'bg-black text-white' : ''}`}
          onClick={() => setActiveCategory(index)}
        >
          {value}
        </button>
      ))}

          </div>
         


        </div>

        <div className="cards-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  lg:gap-4   mt-4 lg:mt-8 relative">



        

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
                  imgtime={imgtime}
                  />
              
          ))
        }
          










          



        </div>

      </div>
    </>
  )
}



const Cards = ({img,head,add,bed, slug,bath,space,price,cate,flag,imgtime })=>{

  return(<>
<div className='relative sm:max-w-[360px] lg:max-w-[400px] overflow-hidden cursor-pointer  bg-white rounded-lg shadow-lg m-2'>
       <Link href={`/${slug}`} >
     
     <div className='img-box overflow-hidden relative'>
      <div className='w-full h-[220px]'>
        {imgtime? <Skelotenloder />:
      <Image
         className='w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110'
         src={`${storageLink}/${img}`}
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