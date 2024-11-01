import { SettingsIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from 'react-icons/go'
import {cn} from '@/lib/utils'
const routes = [
  {
    label: 'Home',
    href: '',
    icon: GoHome,
    activIcon: GoHomeFill
  },
  {
    label: 'My Tasks',
    href: '/tasks',
    icon: GoCheckCircle,
    activIcon: GoCheckCircleFill
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    activIcon: SettingsIcon
  },
  {
    label: 'Members',
    href: '/members',
    icon: UsersIcon,
    activIcon: UsersIcon
  },
]

const Navigation = () => {
  return (
    <ul className='flex flex-col'>
      {
        routes.map((Item,key) => {
          const isActive = false;
          const Icon = isActive ? Item.activIcon : Item.icon 
          return (
            <li key={key}>
              <Link href={Item.href}>
                <div className={cn('flex gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500 items-center', isActive && 'bg-white shadow-sm text-primary hover:opacity-100')}>
                  <Icon className='size-5 text-neutral-500 mr-2'/>
                  {Item.label}
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Navigation