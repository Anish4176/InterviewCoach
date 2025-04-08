import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { Button } from './ui/button';
import { getRandomInterviewCover, getTechLogos } from '@/utils';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({userId,role,type,techstack,createdAt}:InterviewCardProps) => { 
  const feedback= null as Feedback | null;
  const formattedDate= dayjs(feedback?.createdAt || createdAt || new Date()).format("MMM D,YYYY")
  
  return (
    <div className='card-border max-sm:w-full w-[360px] min-h-96'>
      <div className='card-interview'>
            <div className='absolute top-0 right-0 bg-gray-500 px-4 py-2 rounded-bl-xl'>
               <p>{type}</p>
            </div>
           
              <Image src={getRandomInterviewCover()} alt='image' width={50} height={50}/>
            
            <h3>{role}</h3>
            <div className='flex gap-5'>
               <div className='flex items-center gap-2'>
                <Image
                src="/calendar.svg" alt='image' width={20} height={20}
                />
                <p>{formattedDate}</p>
               </div>
               <div className='flex items-center gap-2'>
                <Image
                src="/star.svg" alt='image' width={20} height={20}
                />
                <p>{feedback ? `${feedback.totalScore}/100`:"---/100" }</p>
               </div>

            </div>
            
            <p className='line-clamp-2'>This interview does not reflect serious interest or engagement from the candidate. Their responses are dismissive, vague, or outright negative, making it more</p>

            <div className='flex justify-between items-center'>
              {<DisplayTechIcons techStack={techstack} />}
               
               <Button variant='outline' className='btn-primary'>
                 View Interview
               </Button>
              
            </div>
      </div>
    </div>
  )
}

export default InterviewCard