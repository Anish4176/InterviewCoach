import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg '>
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p>Practice real interview questions & get instant feedback.</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/" >
            Start an Interview
            </Link>
            </Button>
        </div>
        
        <Image src="/robot.png" alt="robot" width="400" height="400"  className='max-sm:hidden'/>
        
    </section>

    </>
  )
}

export default Home