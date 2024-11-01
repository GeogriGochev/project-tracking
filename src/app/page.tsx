'use client'
import { useRouter } from 'next/navigation'
import { useCurrent } from '@/features/auth/api/use-current';
import { useEffect } from 'react';
import { useLogout } from '@/features/auth/api/use-logout';
import { Button } from '@/components/ui/button';
import { UserButton } from '@/features/auth/components/UserButton';


export default function Home() {
  const router = useRouter()
  const {data,isLoading} = useCurrent()
  const {mutate} = useLogout()
  


  useEffect(() => {
    if(!data && !isLoading) {
      router.push('/sign-in')
    }
  }, [data,router,isLoading])
  

  return (
    <div className='flex gap-4 p-4'>
      <UserButton/>
    </div>
  );
}
