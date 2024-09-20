"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { space } from 'postcss/lib/list';
import React, { useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2'





const page = () => {
  const param=useParams().builder.split("%")[0]

const [detailfild,setdetailfild]=useState("Description")
const [imagelength,setimagelength]=useState([1,2])
const [addprop,setadprop]=useState(false)
const [feature,setfeature]=useState("")


const [allinput,setallinput]=useState({ multiple_features:[],images_paths:[]})
const handelmultipleFeatures=()=>{
if(allinput.multiple_features.length<16 && feature ){

  setallinput({...allinput,multiple_features:[...allinput.multiple_features,feature.trim()]})

  setfeature("")}

}

const handelInput=(e)=>{
  e.preventDefault();
  setallinput({...allinput,[e.target.name]:e.target.value})



}




const handelimg=(e)=>{
  e.preventDefault()

  setallinput({...allinput,images_paths:[...allinput.images_paths,e.target.files]})


}

const handelAddproperty=()=>{
  const slug=allinput.name.split(" ").join("-") 
  setallinput({...allinput,slug:`${slug}-${param}`,agent_post_id:param,active:true})
setadprop(true)
console.log({...allinput})

}

const handelAlldata=async()=>{

const res= await axios.post(`http://localhost:8000/api/v1/property`,{...allinput})
if(res.status==201){
  
  Swal.fire({
    title: 'done',
    text: "Property add ",
    icon: 'success',
    confirmButtonText: 'done'})
    setallinput({ multiple_features:[],images_paths:[]})
    setdetailfild("Description")
}

}


  return (
    <div className='bg-[#f3f2f2] h-screen overflow-y-auto '>
      <div className='p-10 px-20  '>
   <p className='font-bold text-3xl my-6  '>Add New Properties</p>
    
   <div className='bg-white p-4 rounded-md'>
<div className=' flex gap-10 text-xl border-b ps-5'>
 
 <div className={`p-2 hover:text-black  font-semibold  hover:border-b-black border-b-4 cursor-pointer border-b-transparent ${detailfild=="Description"?"border-b-black text-black ":"text-gray-500"} `} onClick={()=>setdetailfild("Description")}>1. Description</div>
 <div className={`p-2 hover:text-black  font-semibold  hover:border-b-black border-b-4 cursor-pointer border-b-transparent ${detailfild=="Media"?"border-b-black text-black ":"text-gray-500"} `} onClick={()=>setdetailfild("Media")}>2. Media</div>
 <div className={`p-2 hover:text-black  font-semibold  hover:border-b-black border-b-4 cursor-pointer border-b-transparent ${detailfild=="Location"?"border-b-black text-black ":"text-gray-500"} `} onClick={()=>setdetailfild("Location")}>3. Location </div>
 <div className={`p-2 hover:text-black  font-semibold  hover:border-b-black border-b-4 cursor-pointer border-b-transparent ${detailfild=="Detail"?"border-b-black text-black ":"text-gray-500"} `}  onClick={()=>setdetailfild("Detail")}>4. Detail</div>
 <div className={`p-2 hover:text-black  font-semibold  hover:border-b-black border-b-4 cursor-pointer border-b-transparent ${detailfild=="Amenities"?"border-b-black text-black ":"text-gray-500"} `}  onClick={()=>setdetailfild("Amenities")}>5. Amenities</div>


</div>

{/* Description      */}

{detailfild == "Description" &&<section className='my-5'>
<p className='text-2xl'>Property Description</p>
<div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='name' className='text-xl' >Property Name</label>
<input   onChange={(e)=>handelInput(e)} value={allinput.name} type='text' id="name" name='name' placeholder='Property name' className='text-lg border  p-2 rounded-md' />

</div>
<div className=' grid grid-cols-2  gap-3 m-6 p-2'>
<div className='flex flex-col gap-3 '><label htmlFor='propertyid' className='text-xl' >Property id</label>
<input onChange={(e)=>handelInput(e)}  value={allinput.property_id}  type='text' id="propertyid" name='property_id' placeholder='Property id' className='text-lg border  p-2 rounded-md' /></div>
<div className='flex flex-col gap-3'>
<label htmlFor='price' className='text-xl' >Property price</label>
<input  onChange={(e)=>handelInput(e)}  value={allinput.price}  type='text' id="price" name='price' placeholder='Property price' className='text-lg border  p-2 rounded-md' />
</div>
</div>
<div className=' grid grid-cols-2  gap-3 m-6 p-2'>
<div className='flex flex-col gap-3 '><label htmlFor='bedrooms' className='text-xl' >bedrooms</label>
<input  type='text' id="bedrooms" name='bedrooms' placeholder='bedrooms' onChange={(e)=>handelInput(e)}  value={allinput.bedrooms}  className='text-lg border  p-2 rounded-md' /></div>
<div className='flex flex-col gap-3'>
<label htmlFor='bathrooms' className='text-xl' >bathrooms</label>
<input  type='text' id="bathrooms" name='bathrooms' placeholder='bathrooms' onChange={(e)=>handelInput(e)}  value={allinput.bathrooms} className='text-lg border  p-2 rounded-md' />
</div>
</div>

<div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='description1' className='text-xl' >Property description 1</label>
<textarea onChange={(e)=>handelInput(e)}  value={allinput.property_description_1}   type='text' id="property_description_1" rows={7} name='property_description_1' placeholder='Property description 1' className='text-lg border  p-2 rounded-md' />

</div>
<div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='description2' className='text-xl' >Property description 2</label>
<textarea onChange={(e)=>handelInput(e)}  value={allinput.property_description_2}   type='text' id="property_description_2" rows={7} name='property_description_2' placeholder='Property description 2' className='text-lg border  p-2 rounded-md' />

</div>
<div className='my-5 text-end'>
  <button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={()=>setdetailfild("Media")}>Next</button>
</div>
</section>}


{/* media    */}

{
detailfild == "Media" && <section className='my-5'>
<p className='text-2xl'> Add Images</p>


{imagelength.map((num,index)=>
<div class="flex items-center justify-center w-full my-4">
   { allinput.images_paths.length>=index+1 ? <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <img src={`/images/${allinput.images_paths[index].name}`} className='max-w-full h-full min-w-fit' />
   </div> :
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file"  type="file" className="hidden" onChange={(e)=>handelimg(e)} />
    </label>}

</div> 
)}
<div className='my-5 flex justify-between items-center'>
<button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={()=>setimagelength([...imagelength,2])}>Add image</button>

  <button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={()=>setdetailfild("Location")}>Next</button>
</div>

</section>
}



{/* Addresss */}



{detailfild == "Location" && <section className='my-5'>
  <p className='text-2xl'> Add Property Location</p>

  <div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='Address' className='text-xl' >Property Address</label>
<textarea onChange={(e)=>handelInput(e)} value={allinput.address}  type='text' id="Address" rows={7} name='address' placeholder='Property Address' className='text-lg border  p-2 rounded-md' />

</div>
<div ><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
<div className='my-5 text-end'>
  <button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={()=>setdetailfild("Detail")}>Next</button>
</div>
</section>}


{/* Detail    */}
{detailfild == "Detail" && <section  className='my-5'>

  <div className=' grid grid-cols-2 gap-2 items-center'>

<div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='rate' className='text-xl' >Rate per square feet</label>
<input  type='text'  id="rate" name='rate_per_square_feet' onChange={(e)=>handelInput(e)} value={allinput.rate_per_square_feet}  placeholder='Rate per square feet' className='text-lg border  p-2 rounded-md' />

</div>
<div className=' flex flex-col gap-3 m-6 p-2 relative'>
<label htmlFor='features' className='text-xl' >Multiple features</label>
<input value={feature}     onChange={(e)=>setfeature(e.target.value)} type='text' id="features" name='multiple_features' placeholder='Multiple features' className='text-lg border  p-2 rounded-md' />
<IoMdAddCircleOutline onClick={handelmultipleFeatures}  className='absolute right-4 top-[55%] cursor-pointer text-blue-700 text-2xl'/>
</div>

</div>



<div className=' flex flex-col gap-3 m-6 p-2'>
<label htmlFor='Category' className='text-xl' >Category Id</label>
<select id="Category" onChange={(e)=>handelInput(e)} value={allinput.type} name='type' class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer p-3">
      <option selected disabled className='text-center'>Select an option</option>
      <option value="1"  className='m-2'>PG</option>
      <option value="2"  className='m-2'>BUY</option>
      <option value="3"  className='m-2'>Plots</option>
      <option value="4"  className='m-2'>Commercial</option>
     
  </select>


</div>

<div className='flex flex-wrap gap-5'>
{allinput.multiple_features.map((val,index)=>{return(
  <span className=' mx-2 font-semibold text-xl relative'>{val} <RxCross2 onClick={()=>setallinput({...allinput,multiple_features:allinput.multiple_features.filter((e,i)=>i!=index)})}  className='absolute -right-5 cursor-pointer -top-2 text-red-700'/></span>
)})


}



</div>
<div className='my-5 text-end'>
  <button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={()=>setdetailfild("Amenities")}>Next</button>
</div>

</section>

}


   
   {/* all data */}


{detailfild == "Amenities" && <section className='my-5'>
  <div className='flex justify-between'>
   <div className='flex flex-col gap-4' >
  <div className='flex gap-1 font-semibold text-xl'><p>Name</p>: <p>{allinput.name}</p></div> 
  <div className='flex gap-1 font-semibold text-xl'><p>price</p>: <p>₹ {allinput.price}</p></div> 
    <div className='flex gap-1 font-semibold text-xl'><p>Per Square feet</p>: <p>₹ {allinput.rate_per_square_feet} per square</p></div> 

  <div className='flex gap-1 font-semibold text-xl'><p>bedrooms</p>: <p>{allinput.bedrooms}</p></div> 
  <div className='flex gap-1 font-semibold text-xl'><p>bathrooms</p>: <p>{allinput.bathrooms}</p></div> 
  <div className='flex gap-1 font-semibold text-xl'><p>Category</p>: <p>{["pg","Buy","Plots","Commercial"].filter((e,index)=>allinput.type==index+1)}</p></div> 
  <div className='flex gap-1 font-semibold text-xl'><p>Property Id</p>: <p>{allinput.property_id}</p></div> 

  <div className='flex gap-1 font-semibold text-xl'><p>features</p>: <p>{allinput.multiple_features.map((item)=>{return(
    <span>{item} , </span>
  )})}</p></div> 


  <div className='flex gap-1 font-semibold text-xl'><p>description</p>: <div><p> {allinput.property_description_1}</p><p>: {allinput.property_description_2}</p></div></div> 
  {/* <div className='flex gap-1 font-semibold text-xl'><p></p>: <p>{allinput.description2}</p></div>  */}

  <div className='flex gap-1 font-semibold text-xl text-nowrap'><p>Property Address</p>: <p>{allinput.address}</p></div> 

   </div>
   
  
<div className=' grid grid-cols-2 gap-3 w-[60%] '>
   {allinput.images_paths.map((img,index)=>{
    return(
      <div className='w-full '>
<img   src={`/images/${img[0].name}`} className='w-full h-[16rem]' />

      </div>
    )
   })}

</div>

   </div>
   <div className='my-10 text-center'>
   { !addprop && <button className='p-2 px-5 bg-green-800 text-white font-semibold rounded-lg' onClick={handelAddproperty}>Save Property</button>}

 { addprop && <button onClick={handelAlldata} className='p-2 px-5 bg-red-800 text-white font-semibold rounded-lg'>Add Property</button>}
</div>
</section>




}


   </div>

      </div>
    </div>
  )
}

export default page
