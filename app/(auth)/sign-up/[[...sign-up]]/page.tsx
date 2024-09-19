import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignupPage() {
  return (
    <main className='auth-page'>
    <SignIn/>
    </main>
  )
}

export default SignupPage