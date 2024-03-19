'use client'
import React from 'react'
import { useForm , FieldValues } from 'react-hook-form'
import axios from 'axios'
export default function Form() {
    const {register , handleSubmit} = useForm()
    const onSubmit = async(data:FieldValues)=>{
      try {
        const response = await axios.post('/api/auth/register',data)
        console.log(response,'data')
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <form onSubmit={handleSubmit((data)=>onSubmit(data))} >
        <div>
            <label htmlFor="">Email</label>
            <input type="text" {...register('email')} />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="password" {...register("password")} />
        </div>
        <button type='submit' className='px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-700 font-bold text-white'>
                register
        </button>
    </form>
  )
}
