import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            title: 'Advertising',
            description: 'We create compelling advertising campaigns that resonate with your target audience, driving engagement and conversions.',
            icon: assets.ads_icon
        },
        {
            title: 'Content Writing',
            description: 'Our team of skilled writers creates high-quality content that engages your audience and drives traffic.',
            icon: assets.content_icon,
        },
        {
            title: 'Social media',
            description: 'We manage your social media presence to enhance brand awareness and engagement.',
            icon: assets.social_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='We offer a range of services to help you achieve your business goals.'/>
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    </div>
  )
}

export default Services
