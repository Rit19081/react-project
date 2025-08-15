import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const workData = [
        {
            title:'Mobile app marketing',
            description:'Promoting mobile applications through various channels to increase visibility and downloads.',
            image:assets.work_mobile_app
        },
        {
            title:'Web development',
            description:'Building responsive and functional websites to enhance online presence.',
            image:assets.work_dashboard_management
        },
        {
            title:'Fitness app promotion',
            description:'Improving website visibility on search engines through optimization techniques.',
            image:assets.work_fitness_app
        }
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest Work' desc='Take a look at some of the projects we have worked on.'/>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {workData.map((work, index) => (
                <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} alt="" className='w-full rounded-xl'/>
                    <h3 className='mt-2 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurWork
