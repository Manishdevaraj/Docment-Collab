import {  useOthers } from '@liveblocks/react/suspense'
import Image from 'next/image';
import React from 'react'

const ActiveCollabratorlist = () => {
    const others=useOthers();

    const collabrators=others.map((other)=>other.info);
  return (
    <ul className='collabrators-list'>
           {collabrators.map(({id,name,avatar,color})=>(
            <li key={id}>
                     <Image
                     src={avatar}
                     alt={name}
                     width={100}
                     height={100}
                     className='inline-block size-8 round-full ring-2 ring-dark-100'
                    style={{border:`3px solid ${color}`}}
                     />
            </li>
           ))}
    </ul>
  )
}

export default ActiveCollabratorlist