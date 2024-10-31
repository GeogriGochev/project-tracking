import {Hono} from 'hono'
import {zValidator} from '@hono/zod-validator'
import { loginFormSchema, registerFormSchema } from '../schemas';
import { createAdminClient } from '@/lib/appwrite';
import { ID } from 'node-appwrite';
import {deleteCookie, setCookie} from 'hono/cookie'
import { AUTH_COOKIE } from '../constants';

const app = new Hono().post('/login',zValidator('json',loginFormSchema), async c => {
  const {email,password} = c.req.valid('json')

  const { account } = await createAdminClient()
  const session = await account.createEmailPasswordSession(
    email,
    password,
  )

  setCookie(c,AUTH_COOKIE,session.secret,{
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60*60*24*30
  })
  
  return c.json({
    success: true,
    data: {email,password}
  })

}).post('/register',zValidator('json',registerFormSchema), async c => {
  const {name,email,password} = c.req.valid('json')
  console.log('register',{name,email,password});
  const { account } = await createAdminClient()
  const user = await account.create(
    ID.unique(),
    email,
    password,
    name
  )
  const session = await account.createEmailPasswordSession(
    email,
    password,
  )

  setCookie(c,AUTH_COOKIE,session.secret,{
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 60*60*24*30
  })

  return c.json({data: user})
}).post('/logout', c => {
  deleteCookie(c,AUTH_COOKIE)
  return c.json({success: true,})
})

export default app;