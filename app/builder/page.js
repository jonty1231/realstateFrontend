"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { localurl } from '../components/store/baseurl'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'


const page = () => {
const router=useRouter()
    const [toglepage,settoglepage]=useState(false)
const [signupData,setSignupData]=useState({ })
const [logindata,setLogindata]=useState({ })
   
const addSignupData=(e)=>{
e.preventDefault()
setSignupData({...signupData,[e.target.name]:e.target.value})
}

const addLoginData=(e)=>{
  e.preventDefault()
  setLogindata({...logindata,[e.target.name]:e.target.value})
  }


      const HandelSignup=async()=>{
const res =await axios.post(`${localurl}/builder/signup`,{...signupData})
console.log()

if(res.data.success){
 
  localStorage.setItem(
    "builtoken",res.data.info.id
  )


  Swal.fire({
    title: 'done',
    text: res.data.message,
    icon: 'success',
    confirmButtonText: 'Done'
  })
  


   router.push(`/builder/${res.data.info.id}`)
   

}
else{
  Swal.fire({
    title: 'Error!',
    text: res.data.message,
    icon: 'error',
    confirmButtonText: 'Retry'
  })

}

      }
      const handelLogin=async()=>{
        const res =await axios.post(`${localurl}/builder/login`,{...logindata})
        setLogindata({ })
        if(res.data.success){
          localStorage.setItem(
            "builtoken",res.data.data.id
          )
          Swal.fire({
            title: 'done',
            text: res.data.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          console.log(res)
          router.push(`/builder/${res.data.data.id}`)
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: res.data.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        }



       }


  return (
    <div className='w-full min-h-[75vh] flex justify-center items-center bg-[#d5d4d4] p-10 '>
        <div className='w-2/6 relative'>
      <div className={`flex flex-col gap-9 shadow-2xl p-5 rounded-xl w-full bg-white ${toglepage?"scale-0":"scale-100"} origin-top-left duration-500`}>
    <div className='h-14 flex justify-center'> <img  src='/images/logos.png' className='h-full'  />  </div>
    <div className='flex flex-col gap-4'>
    <div className='flex flex-col gap-2'>
<label htmlFor='sname' className='font-semibold text-xl'>Full Name: </label>
<input  type='text' id='sname' name="name" value={signupData.name} onChange={(e)=>addSignupData(e)} className='border p-2 rounded-md w-full' placeholder='Full Name'  />
          </div>

          <div className='flex flex-col gap-2'>
<label htmlFor='semail' className='font-semibold text-xl'>Email: </label>
<input  type='email' id='semail' name="email" value={signupData.email} onChange={(e)=>addSignupData(e)} className='border p-2 rounded-md' placeholder='Email'  />
          </div>
          <div className='flex flex-col gap-2'>
<label htmlFor='spassword' className='font-semibold text-xl'>Password: </label>
<input  type='password' id='spassword' name="password" value={signupData.password} onChange={(e)=>addSignupData(e)}  className='border p-2 rounded-md' placeholder='Password'  />
          </div>

          <div className='flex flex-col gap-2'>
<label htmlFor='sphone' className='font-semibold text-xl'>Phone number: </label>
<input  type='text' id='sphone' name="phone_number" value={signupData.phone_number} onChange={(e)=>addSignupData(e)}  className='border p-2 rounded-md' placeholder='Phone number'  />
          </div>

          <div className='flex  justify-end gap-2 text-xl'>

<input  type='checkbox' id='sphone' name="phone"   className='border p-2 rounded-md' placeholder='Phone number'  />
<p>Terms & Conditions</p>
          </div>

          <div className='flex  justify-center'>

<button className='bg-blue-600 text-white p-2 px-5 rounded-md text-xl font-semibold' onClick={HandelSignup}>Signup</button>
          </div>
          <div className='flex  justify-end'>

<p className='text-blue-600 text-xl cursor-pointer' onClick={()=>settoglepage(!toglepage)}>Already Have Account?</p>
          </div>

    </div>

      </div>




    

      <div className={`flex flex-col gap-9   absolute top-0 right-0 shadow-2xl p-5 rounded-xl w-full bg-white ${toglepage?"scale-100":"scale-0"} origin-top-right duration-500`}>
    <div className='h-14 flex justify-center'> <img  src='/images/logos.png' className='h-full'  />  </div>
    <div className='flex flex-col gap-4'>
    
 <div className='flex flex-col gap-2 '>
<label htmlFor='lemail' className='font-semibold text-xl'>Email: </label>
<input  type='email' id='lemail' name="email"  className='border p-2 rounded-md' placeholder='Email' value={logindata.email} onChange={(e)=>addLoginData(e)}  />
          </div>
          <div className='flex flex-col gap-2'>
<label htmlFor='lpassword' className='font-semibold text-xl'>Password: </label>
<input  type='password' id='lpassword' name="password"  className='border p-2 rounded-md' placeholder='Password' value={logindata.password} onChange={(e)=>addLoginData(e)}  />
          </div>

         

          <div className='flex  justify-end gap-2 text-xl'>

<p className='text-blue-700'>Forgot Password?</p>
          </div>

          <div className='flex  justify-center'>

<button className='bg-blue-600 text-white p-2 px-5 rounded-md text-xl font-semibold' onClick={handelLogin}>Login</button>
          </div>
          <div className='flex  justify-end'>

<p className='text-blue-600 text-xl cursor-pointer' onClick={()=>settoglepage(!toglepage)}>Don't Have Account?</p>
          </div>

    </div>

      </div>
      </div>
    </div>
  )
}

export default page
