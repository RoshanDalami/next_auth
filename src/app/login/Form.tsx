'use client'
import React from 'react'
import { useForm , FieldValues } from 'react-hook-form'
import { signIn } from 'next-auth/react'
export default function Form() {
    const {register , handleSubmit} = useForm()
    const onSubmit = async(data:FieldValues)=>{
      const response = await signIn('credentials',{
        email:data.email,
        password:data.password,
        redirect:false
      })
      console.log({response},'response')
    }
  return (
    <form onSubmit={handleSubmit((data)=>onSubmit(data))} className=''>
        <div>
            <label htmlFor="" >Email</label>
            <input type="text" className='text-black' {...register('email')} />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" className='text-black' {...register("password")} />
        </div>
        <button type='submit' className='px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 font-bold text-white'>
                Login
        </button>
    </form>
  )
}
