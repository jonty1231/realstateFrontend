"use client"

import { localurl } from '@/app/components/store/baseurl'
import { getBuilderinfo } from '@/app/components/store/slices/builderslice/Builderitemslice'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { LuDot } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";





const page = () => {

const dispatch=useDispatch()
const state=useSelector(state=>state.Builderitem)

const [data,setdata]=useState()
const [toggle,settogle]=useState(true)
const param=useParams().builder.split("%")[0]
const [del,setdel]=useState(true)
useEffect(()=>{
dispatch(getBuilderinfo(param))

},[ del ])
useEffect(()=>{setdata(state.data)},[state])

const handelDelete=async(id)=>{
const res= await axios.post(`${localurl}/builder/data/delete`,{id})
Swal.fire({
  title: 'done',
  text: "Property Delete ",
  icon: 'success',
  confirmButtonText: 'done'})
 
setdel(!del)
}



  return (
    <div className='bg-[#f3f2f2]  h-screen overflow-y-auto p-10  '>

  <div className='my-4'>
<p className='font-bold text-3xl'>Properties</p>
  </div>

     <div className='bg-white p-10 w-fit  rounded-2xl shadow-xl min-h-[70vh]'>
     <table  className=' '>
<thead  className=' ' >
  <tr className='text-xl font-semibold tablehead'>
  <td>
    Sr no.
  </td>
  <td>
  active
  </td>
  <td>
    Image
  </td>
  <td>
    Name
  </td>
   <td>
  Price
  </td> 
  
  <td>
  bedrooms
  </td> <td>
  bathrooms
  </td>  <td>
  multiple_features
  </td> 
  <td>
  address
  </td>
  <td>
  more
  </td>


  </tr>
</thead>
<tbody>

  {data && data.length && data.map((info,index)=>{return(
    <tr className='text-xl font-semibold tablerow'>
      <td>
        {index+1}
      </td>
      <td className=' '>
    <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" defaultChecked/>
  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>

    </td>
    <td>
      <img  src={`/images/bgimgs.jpg`} className='w-36 h-full' /> 
    </td>
    <td>
      {info.name}
    </td>
     <td>
    {info.price}
    </td> 
     <td>
    {info.bedrooms}
    </td> <td>
    {info.bathrooms}
    </td> 
     <td>
    {info.multiple_features.map((info)=>{return(<> <LuDot className='inline'/>{info}  </>)})}
    </td> 
    <td>
    {info.address}
    </td>
    
  <td className=' '>    <FaEdit className='text-green-800 text-xl cursor-pointer inline mx-2'  />
  <MdDeleteForever className='text-red-800 text-2xl cursor-pointer inline mx-2' onClick={()=>handelDelete(info.id)} />

  </td>
 
  
    </tr>
  )}) }
</tbody>
</table>
     </div>




    </div>
  )
}

export default page
