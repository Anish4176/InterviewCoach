import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='root-layout'>
        <nav>
        <Link href="/" className="flex items-center space-x-2 mx-auto">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <h2>InterviewCoach</h2>
        </Link>
        </nav>
        {children}
    </div>
  )
}

export default RootLayout