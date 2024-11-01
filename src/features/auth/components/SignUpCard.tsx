'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import { DottedSeparator } from '@/components/DottedSeparator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { Form,FormControl,FormField,FormItem,FormMessage } from "@/components/ui/form";
import { registerFormSchema } from '../schemas';
import { useRegister } from '../api/use-register';



export const SignUpCard = () => {
  const { mutate,isPending } = useRegister()
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log("register called");
    mutate({json: values})
  }
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-xl'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Sign Up</CardTitle>
        <CardDescription>
          By signing up you agree to our{' '}
          <Link href={'/privacy'}>
            <span className='text-blue-700'>Privacy Policy</span>
          </Link> {' '}
          and {' '}
          <Link href={'/terms'}>
            <span className='text-blue-700'>Terms</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name='name' render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                    disabled={isPending}
                    type='text'
                    placeholder='Enter Your name'
                    {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField control={form.control} name='email' render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                     disabled={isPending}
                    type='email'
                    placeholder='Enter email Address'
                    {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField control={form.control} name='password' render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                   disabled={isPending}
                  type='password'
                  placeholder='Enter password'
                  {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )}
            />
            <Button  disabled={isPending} size='lg' className='w-full'>Register</Button>
          </form>
        </Form>

      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button disabled={isPending} variant='secondary' size='lg' className='w-full'><FcGoogle className='mr-2 size-5'/> Login with Google</Button>
        <Button disabled={isPending} variant='secondary' size='lg' className='w-full'><FaGithub className='mr-2 size-5'/> Login with Github</Button>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex items-center justify-center'>
          <p>Already have an account? <Link href='/sign-in'>  <span className='text-blue-700'>&nbsp;Sign In</span></Link></p>
      </CardContent>
    </Card>
  )
}
