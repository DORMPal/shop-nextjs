import Link from 'next/link'
import React from 'react'

// export default function Home() {
//   return (
      
//   )
// }

const hhome = () => {
    return(
      <div className='boxx'>
        <div>Username :</div>
        <input type='string'></input>
        <div>Password :</div>
        <input type='password'></input>
        <div className='login'>
          <button>Login</button>
        </div>
        <div className='register'>
          <Link href="/user">Register ?</Link>
        </div>
      </div>
    )
}
export default hhome  