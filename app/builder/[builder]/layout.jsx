"use client"
import { IoCompassOutline } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch,useSelector } from "react-redux";
import { getBuilder } from "@/app/components/store/slices/builderslice/builderSlice";
import { FaHouseUser } from "react-icons/fa";



const layout = ({children}) => {
const route=useRouter()
const dispatch=useDispatch()
const state=useSelector(state=>state.builder)
  const param=useParams().builder.split("%")[0]
const path=usePathname()

useEffect(()=>{
  dispatch(getBuilder(param))
   if(param !==localStorage.getItem("builtoken")){
    route.push("/builder")
   } 


},[ ])

const handelLogout=()=>{
  const build= localStorage.removeItem("builtoken");
route.push("/builder")

}
 
  return (
    <div className='flex  '>
     <div className='w-1/6   flex flex-col gap-3 h-screen overflow-hidden shadow-2xl shadow-slate-700 bg-[#fdfdfd] border-r-4 border-[#0505056a] '>
      <div className='pt-4'>
<div className="flex items-center gap-2 justify-center">
<b className="text-2xl">Builder : </b> 
        <b className='text-2xl text-nowrap'> {state.data.name || "Dashboard"}</b></div>
        <div className="flex flex-col items-start gap-3 my-6 px-2">
           <Link href={`/builder/${param}`} className={`flex w-full gap-2 items-center group hover:bg-[#0000009e] hover:text-white  p-3 text-2xl px-7  duration-300 rounded-md ${path==`/builder/${param}/`?"bg-[#0000009e] text-white  ":""}`}> <IoCompassOutline /> <span>Dashboard</span></Link>
           <Link href={`/builder/${param}/profile`} className={`flex gap-2 items-center group hover:bg-[#0000009e] hover:text-white w-full p-3 text-2xl px-7  duration-300 rounded-md text-nowrap ${path==`/builder/${param}/profile/`?"bg-[#0000009e] text-white ":""}`}> <FaHouseUser /> <span>My Profile</span></Link>

           <Link href={`/builder/${param}/addproperty`} className={`flex gap-2 items-center group hover:bg-[#0000009e] hover:text-white w-full p-3 text-2xl px-7  duration-300 rounded-md   ${path==`/builder/${param}/addproperty/`?"bg-[#0000009e] text-white ":""}`}> <MdAddToPhotos /> <span className="text-nowrap">Add Property</span></Link>
           <Link href={`/builder/${param}/property`} className={`flex gap-2 items-center group hover:bg-[#0000009e] hover:text-white w-full p-3 text-2xl px-7  duration-300 rounded-md text-nowrap ${path==`/builder/${param}/property/`?"bg-[#0000009e] text-white ":""}`}> <RiPagesLine /> <span>My Property</span></Link>

          
          <div className="text-center w-full">
          <button className="bg-[#191919] text-white p-2 px-5 text-xl rounded-md " onClick={handelLogout}>Logout</button>

          </div>
           </div>


      </div>



      <div className="p-3 my-2"><img  src="/images/logo2.png" className="opacity-20"/></div>

     </div>

<div className='w-5/6'>
  {
    children
}
</div>



    </div>
  )
}

export default layout
