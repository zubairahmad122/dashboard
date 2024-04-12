import { Link } from 'react-router-dom'
import {navLinks} from '../../constents'
import { useState } from 'react'
const LeftSideBar = ({navOpen}) => {

    const [active,setActive] = useState("Home")

    return (
        <div className={`${navOpen ? 'visible' : 'max-lg:hidden'} h-screen duration-300 bg-white left-0 top-0 sticky pt-[32px] pb-[12px] pl-[0px] pr-[12px] flex flex-col w-[220px] `}>
            <div className='w-full h-full flex flex-col items-center justify-start'>
            <h2 className='text-sucess font-medium font-Inter text-[26px] pb-[32px]'>Hostel Ease</h2>

            <ul className=''>
                {
                    navLinks?.map((item) => (
                        <li onClick={() => setActive(item.label)} key={item.label} className={` ${active === item.label ? 'text-sucess-1 rounded-[8px] bg-[#E8F1FD]' : 'text-grey6' } mt-[16px] w-[180px]  px-2 py-3`}>
                        <Link to={item.url} className='flex items-center text-[14px] font-medium gap-3' > {item.icon} <p>{item.label}</p> </Link>
                    </li>
                    ))
                }
               
            </ul>
            </div>
        </div>
    )
}

export default LeftSideBar