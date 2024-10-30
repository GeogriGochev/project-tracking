import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import { DottedSeparator } from '@/components/DottedSeparator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const SignInCard = () => {
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-none'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <form action="" className='space-y-4'>
          <Input
            required
            type='email'
            value={''}
            placeholder='Enter email Address'
            onChange={() => {}}
            disabled={false}
          />
          <Input
            required
            type='password'
            value={''}
            placeholder='Enter password'
            onChange={() => {}}
            disabled={false}
            min={8}
            max={20}
          />
          <Button disabled={false} size='lg' className='w-full'>Login</Button>
        </form>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button variant='secondary' size='lg' className='w-full'><FcGoogle className='mr-2 size-5'/> Login with Google</Button>
        <Button variant='secondary' size='lg' className='w-full'><FaGithub className='mr-2 size-5'/> Login with Github</Button>
      </CardContent>
    </Card>
  )
}
