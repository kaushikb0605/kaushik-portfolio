import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import leetcode from '../images/leetcode_logo_icon_145113.svg';

const NavBar = () => {

  return (
    <header className='bg-violet-600'>
        <div className='container mx-auto flex justify-between'>
            <nav className='flex'>
                <NavLink to="/" exact 
                activeClassName="text-red-100 bg-red-700"
                className="inline-flex items-center py-6 px-2 mr-4 text-red-800 hover:text-pink-800 text-xl font-bold cursive tracking-widest nav-home-name">
                Kaushik</NavLink>
                  <NavLink exact to="/post" className=" inline-flex items-center py-3 px-3 my-6 rounded text-green-800 hover:text-yellow-800" activeClassName="text-pink-700">Blog Posts</NavLink>
                  <NavLink exact to="/coming-soon" className=" inline-flex items-center py-3 px-3 my-6 rounded text-green-800 hover:text-pink-800" activeclassName="text-red-100 bg-red-700">Projects</NavLink>
                  <NavLink exact to="/about" className=" inline-flex items-center py-3 px-3 my-6 rounded text-green-800 hover:text-orange-800" activeclassName="text-red-100 bg-red-700">About Me!!</NavLink>
                
            </nav>

            <div className='inline-flex px-3 py-3 my-6'>
                <SocialIcon url="https://leetcode.com/kbarua21/" defaultSVG={{icon:leetcode}}  label="leetcode" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
                <SocialIcon url="https://open.spotify.com/user/15obr7sh4z9g2eirrc7q4o8xg?si=jrTX_EhvRQGfsxOIR9_E0Q" label="spotify" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
                <SocialIcon url="https://m.facebook.com/story.php?story_fbid=1964142987002302&id=100002198581261" className='mr-4' target='_blank' fgColor='#fff' style={{height:35,width:35}}/>
            </div>
        </div>
    </header>
  )
}

export default NavBar