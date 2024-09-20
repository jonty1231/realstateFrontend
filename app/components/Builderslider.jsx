import React from 'react'

import Image from 'next/image';
export default function Builderslider() {

    const cardsData = [
        { id: 1,
        name: 'Omaxe Infratech',
        totalProjects: 10, 
        projectsInCity: 13, 
        image: '/images/builder-1.jpg' 
      },
        { id: 2, 
        name: 'Omaxe Infratech', 
        totalProjects: 20, 
        projectsInCity: 13, 
        image: '/images/builder-2.png'
       },
        { id: 3, 
          name: 'Omaxe Infratech', 
          totalProjects: 30, 
          projectsInCity: 13, 
          image: '/images/builder-3.jpg'
         },
         { id: 4, 
          name: 'Omaxe Infratech', 
          totalProjects: 40, 
          projectsInCity: 13, 
          image: '/images/builder-4.jpg'
         },
         { id: 5, 
          name: 'Omaxe Infratech', 
          totalProjects: 110, 
          projectsInCity: 13, 
          image: '/images/builder-5.jpg'
         },
         { id: 6, 
          name: 'Omaxe Infratech', 
          totalProjects: 110, 
          projectsInCity: 13, 
          image: '/images/builder-6.jpg'
         },
       
      ];
  return (
<>

<div className="px-8 lg:px-20 md:px-8 sm:px-8 mt-12 overflow-hidden">
      <div className="content">
        <h2 className="text-2xl font-bold text-gray-800 text-start">Popular builders</h2>
        <p className="text-xl font-bold text-gray-500 text-start">in Chandigarh</p>
      </div>


      <div className='my-8 flex justify-around flex-wrap'>
      {cardsData.map((card, index) => (
        <div key={index} className='flex w-full sm:w-[400px] items-center rounded-xl border border-[#ddd] p-4 mx-4 mb-8'>
          <div className='w-[80px] h-[80px] border border-[#ebecf0] flex justify-center rounded-full ml-4'>
            <Image src={card.image} width={100} height={100} className='w-[75%] h-[100%] object-contain' />
          </div>
          <div className='h-[100px] ml-4 flex flex-col justify-center'>
            <h3 className='text-[#091e42] my-1 font-medium text-xl'>
              {card.name}
            </h3>
            <p className='text-[#8993a4] text-[14px]'>
              {card.totalProjects} Total Projects | {card.projectsInCity} in this city
            </p>
          </div>
        </div>
      ))}
    </div>


</div>

</>
  )
}
