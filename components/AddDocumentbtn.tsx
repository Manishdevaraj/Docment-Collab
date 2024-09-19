'use client';

import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { createdocument } from '@/lib/actions/room.action';
import { useRouter } from 'next/navigation';

function AddDocumentbtn({userId,email}:AddDocumentBtnProps) {

    const router=useRouter();

    const addDocumenthandler=async()=>
    {
        try {
            const room=await createdocument({userId,email});
            if(room) router.push(`/documents/${room.id}`)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Button type='submit' onClick={addDocumenthandler}
    className='gradient-blue flex gap-1 shodow-md'>
        <Image
        src={'/assets/icons/add.svg'}
        width={24}
        height={24}
        alt='logo'
        />
        <p className='hidden sm:block'>Start a blank document</p>
    </Button>
  )
}

export default AddDocumentbtn