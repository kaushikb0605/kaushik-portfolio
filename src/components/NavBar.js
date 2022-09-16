import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className='bg-yellow-600'>
        <div className='container mx-auto flex justify-between'>
            <nav className='flex'>
                <NavLink to="/" exact 
                activeClassName="text-red-100 bg-red-700"
                className="inline-flex items-center py-6 px-2 mr-4 text-red-800 hover:text-pink-800 text-xl font-bold cursive tracking-widest nav-home-name">
                Kaushik</NavLink>
                <NavLink exact to="/post" className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-800 hover:text-green-800" activeclassName="text-red-100 bg-red-700">Blog Posts</NavLink>
                <NavLink exact to="/project" className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-800 hover:text-green-800" activeclassName="text-red-100 bg-red-700">Projects</NavLink>
                <NavLink exact to="/about" className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-800 hover:text-green-800" activeclassName="text-red-100 bg-red-700">About Me!</NavLink>
            </nav>

            <div className='inline-flex px-3 py-3 my-6'>
                <SocialIcon url="https://www.youtube.com/c/JavaScriptMastery" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
                <SocialIcon url="" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
                <SocialIcon url="" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
            </div>
        </div>
    </header>
  )
}

export default NavBar