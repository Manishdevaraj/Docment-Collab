"use client";
import Loader from "@/components/Loader";
import { getClerkUsers, getDocumentUsers } from "@/lib/actions/user.action";
import { useUser } from "@clerk/nextjs";
import {
    LiveblocksProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import { ReactNode } from "react";
const Provoider = ({children}:{children:ReactNode}) => {
  const {user:clerkuser}=useUser();
  return (
    <LiveblocksProvider
     authEndpoint={"/api/liveblocks-auth"}
     resolveUsers={async({userIds})=>{
      const users=await getClerkUsers({userIds});

      return users;
     }}
     resolveMentionSuggestions={async ({ text, roomId }) => {
      const roomUsers = await getDocumentUsers({
        roomId,
        currentUser: clerkuser?.emailAddresses[0]?.emailAddress ?? "defaultEmail@example.com",
        text,
      })

      return roomUsers;
    }}

     >
    
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
 
  </LiveblocksProvider>
  )
}

export default Provoider