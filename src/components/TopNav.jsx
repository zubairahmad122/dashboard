import { Bell, Menu, Search } from "lucide-react"
import userImg from '../assets/images/userimage.jpg'
const TopNav = ({navOpen,setNavOpen}) => {
  console.log(navOpen)
  return (
    <div className='sticky z-10 top-0 left-0 w-full px-[20px] py-[28px] bg-white h-[96px]'>
      <div className="flex items-center justify-between h-full w-full">
        {/* ---left side input etc  */}
        <div className="flex max-sm:flex-1 max-xsm:mr-0 max-sm:mr-3 items-center">

          <Menu onClick={() => setNavOpen(!navOpen)} className=" w-7 xsm:w-7 h-6 xsm:h-7 mr-2 xsm:mr-5 lg:hidden" />


        {/* for input   */}
        <div className="w-full sm:w-[400px] bg-[#F7F9FC] h-[40px] rounded border border-[#EEF0F2] px-2  flex items-center gap-2">
          <Search className="text-[19px] text-grey4" />
          <input type="text" placeholder="Search for rooms and offers" className="outline-none text-[10px] ssm:text-[12px] sm:text-[16px] font-normal font-Inter placeholder:text-gray4 border-none bg-transparent w-full h-full" />
        </div>

        </div>
        {/* right side user  */}
        <div className="flex gap-3 cursor-pointer mdd:gap-6 items-center">
        <Bell className=" w-5 xsm:w-6 h-[20] xsm:h-6 text-grey6" />
        <img src={userImg} alt={userImg} className="w-8 xsm:w-10 rounded-full object-center h-8 xsm:h-10" />
        </div>
      </div>
    </div>
  )
}

export default TopNav