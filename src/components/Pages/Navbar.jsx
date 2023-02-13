import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="p-5 md:flex md:items-center justify-between ">
                <div className='mx-40 text-2xl text-green-600' ><span className="text-3xl">U</span>ride</div>
                <ul className="text-xl md:flex md:items-center ">
                    <li className="mx-6 my-5 text-blue-900 "> <a href='#'>Driver</a> </li>
                    <li className="mx-6 my-5 text-blue-900">  <a  href='#'>Rider</a> </li>
                    <li className="mx-6  mr-40 my-5 text-blue-900"><a  href='#'>Admin</a></li>
                </ul>
            </nav>
    </div>
  )
}

export default Navbar