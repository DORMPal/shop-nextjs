import Link from 'next/link'
import React from 'react'

// export default function Home() {
//   return (
      
//   )
// }

const register = () => {
    return(
        <div className='boxx'>
        <div>Username :</div>
        <input type='string'></input>
        <div>Password :</div>
        <input type='password'></input>
        <div className='login'>
          <button>Register</button>
        </div>
      </div>
    )
}

export default register