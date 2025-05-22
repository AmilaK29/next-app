import React from 'react'
import Link from 'next/link'
import Button from './button'

interface User {
  id : number
  name : string
}

const UsersPage = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await res.json()
  
  return (
    <div>
      <h1>User's Page</h1>
      
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>
              <p>{user.name}</p>
            </Link>
            <Button />
          </div>
        )
      })}
      <Button />
    </div>
  )
}

export default UsersPage
