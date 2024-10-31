import {z} from 'zod'

export const registerFormSchema = z.object({
  name: z.string().trim().min(1,'Reqiored'),
  email: z.string().email(),
  password: z.string().min(8, 'Minimum 8 characters')
})

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Minimum 1 characters')
})