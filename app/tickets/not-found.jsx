import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>Ticket not found.</h2>
        <p>Go back to <Link href='/tickets'>Tickets</Link></p>
    </main>
  )
}
