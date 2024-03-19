'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
export default function Logout() {
  return (
    <button onClick={()=>{
        signOut();
    }}>
        Logout
    </button>
  )
}
