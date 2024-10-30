import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import { DottedSeparator } from '@/components/DottedSeparator';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form,FormControl,FormField,FormItem,FormMessage } from "@/components/ui/form";
import Link from 'next/link';


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Minimum 1 characters')
})

export const SignInCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("submit called");
    console.log(values);
  }
   
  return (
    <Card className='w-full h-full md:w-[487px] border-none shadow-xl'>
      <CardHeader className='flex items-center justify-center text-center p-7'>
        <CardTitle className='text-2xl'>Welcome back!</CardTitle>
      </CardHeader>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name='email' render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
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
                  type='password'
                  placeholder='Enter password'
                  {...field}
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
              )}
            />
            <Button disabled={false} size='lg' className='w-full'>Login</Button>
          </form>
        </Form>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex flex-col gap-y-4'>
        <Button variant='secondary' size='lg' className='w-full'><FcGoogle className='mr-2 size-5'/> Login with Google</Button>
        <Button variant='secondary' size='lg' className='w-full'><FaGithub className='mr-2 size-5'/> Login with Github</Button>
      </CardContent>
      <div className='px-7'>
        <DottedSeparator />
      </div>
      <CardContent className='p-7 flex items-center justify-center'>
          <p>Don&apos;t have an account? <Link href='/sign-up'>  <span className='text-blue-700'>&nbsp;Sign up</span></Link></p>
      </CardContent>
    </Card>
  )
}
