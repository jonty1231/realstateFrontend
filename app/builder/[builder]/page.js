"use client"
import { useParams } from 'next/navigation'
import React from 'react'

import 'chart.js/auto';
import { Bar,PolarArea ,Line,Doughnut,Bubble} from 'react-chartjs-2';




const page = () => {
  const param=useParams().builder
















  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Builder Chart',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

   



  return (

    <div className='scroller grid bg-[#f3f2f2]  grid-cols-2 gap-4 px-20 py-8  h-screen overflow-y-auto '>
    <div  className='bg-white shadow-lg p-10   h-[25rem] flex flex-col justify-center'>
        <h1>Example 1</h1>
        <Bar data={data} className='h-full w-full' />
      </div>
      <div className='bg-white shadow-lg p-10 h-[25rem] flex flex-col justify-center'>
        <h1>Example 2</h1>
        <Line data={data} className='h-full w-full' />
      </div>

      <div className='bg-white shadow-lg p-10 h-[25rem] flex flex-col justify-center'>
        <h1>Example 3</h1>
        <Doughnut data={data} className='h-full w-full' />
      </div>
      <div className='bg-white shadow-lg p-10 h-[25rem] flex flex-col justify-center'>
        <h1>Example 4</h1>
        <Bubble data={data} className='h-full w-full' />
      </div>



      </div>
  )
}

export default page
