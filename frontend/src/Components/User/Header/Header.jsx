import logo from './../../../assets/Images/logo.png'
import profile from './../../../assets/Images/profile.png'
import { MdArticle  ,MdPermContactCalendar } from "react-icons/md";

import { GoHomeFill } from "react-icons/go";
import { PiTelegramLogoFill } from "react-icons/pi";
import HeaderItems from './HeaderItems';


function Header() {
    const menu=[
        {
            name:'Home',
            icon:GoHomeFill
        },
        {
            name:'Trips',
            icon:PiTelegramLogoFill
        },
        {
            name:'About',
            icon:MdArticle  
        },
        {
            name:'Contact',
            icon:MdPermContactCalendar
        },

    ]
    return (
        <div className='flex p-5 items-center justify-between'>
        <div className="flex gap-10 ">
            <img src={logo} className='w-[150px] md:w-[200px] object-cover cursor-pointer mr-20' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item ,index)=>(
                    <HeaderItems key={index} name={item.name} Icon={item.icon} />
                ))}
            </div>
        </div>
        <div className="flex items-center gap-12"> {/* Flex container for profile picture */}
            <div className='md:hidden flex gap-8'>
                {menu.map((item ,index)=>(
                    <HeaderItems key={index} name={item.name} Icon={item.icon} />
                ))}
            </div>
            <img className='flex w-[30px] rounded-full cursor-pointer' src={profile} />
        </div>
    </div>
    
  )
}

export default Header