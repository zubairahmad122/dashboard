import  { useState } from 'react'
import Table from '../components/Table'

import { gustData,gustColumns } from '../../constents';

import { Search, Filter } from "lucide-react"



const Guest = () => {
  const [checkbtn,setCheckBtn] = useState('Check in')
  return (
    <div className='bg-[#eef0f2] w-full '>

      <div className="bg-white  px-5 flex-col py-[10px] w-full flex items-start justify-end ">
        {/* upper after nav  */}
        <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Guests</p>
        <div className="mt-4 w-full max-sm:flex-col max-sm:gap-5 flex justify-between items-center">
          <div className='flex items-center gap-3'>
            <button onClick={() => setCheckBtn("Check in")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Check in' && 'border-sucess-1 text-sucess-1'}`}>Check in</button>
            <button onClick={() => setCheckBtn("Check out")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Check out' && 'border-sucess-1 text-sucess-1'}`}>Check out</button>
          </div>

          <div className='flex max-sm:flex-col items-center gap-3'>
            <div className='border cursor-pointer max-sm:w-full max-sm:justify-center border-grey4 text-tgrey-5 text-sm flex items-center gap-2 py-[10px] px-4 rounded-lg'>
            <Filter className='w-[15px] h-[15px] text-tgrey-5' />
            filter
            </div>
            <div className="w-full sm:w-[300px] bg-transparent h-[40px] rounded-lg border border-[#D0D3D9] px-4 py-2  flex items-center gap-2">
              <Search className="text-[19px] text-grey4" />
              <input type="text" placeholder="Search by room number" className="outline-none text-[10px] ssm:text-[12px] sm:text-[16px] font-normal font-Inter placeholder:text-gray6 border-none bg-transparent w-full h-full" />
            </div>

          </div>
        </div>

      </div>

      {/* ---- main start  */}
      <main className="pt-5 pr-5 bg-white w-full h-full">
        <Table data={gustData} columns={gustColumns} />
      </main>

    </div>
  )
}

export default Guest