import { useState } from "react"
import DateBox from "../components/DatePicker"
import {Plus,Minus} from 'lucide-react'
import { useTable, usePagination } from 'react-table';
import { BsThreeDotsVertical } from 'react-icons/bs';



// Sample data 
const data = [
    {
      roomNumber: '#001',
      bedType: 'Double bed',
      roomFloor: 'Floor -1',
      roomFacility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Available',
      ' ': <BsThreeDotsVertical />
    },   
    {
      roomNumber: '#002',
      bedType: 'Single bed',
      roomFloor: 'Floor -2',
      roomFacility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Booked',
      ' ': <BsThreeDotsVertical />
    },   
    {
      roomNumber: '#003',
      bedType: 'VIP',
      roomFloor: 'Floor -4',
      roomFacility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Reserved',
      ' ': <BsThreeDotsVertical />
    },   
    {
      roomNumber: '#004',
      bedType: 'VIP',
      roomFloor: 'Floor -3',
      roomFacility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Waitlist',
      ' ': <BsThreeDotsVertical />
    },   
    {
      roomNumber: '#005',
      bedType: 'VIP',
      roomFloor: 'Floor -5',
      roomFacility: 'AC, shower, Double bed, towel bathtub, TV',
      status: 'Blocked',
      ' ': <BsThreeDotsVertical />
    },   
  ];
  
  // Sample columns
 const columns = [
    {
      Header: 'Room number',
      accessor: 'roomNumber',
    },
    {
      Header: ' Bed type',
      accessor: 'bedType',
    },
    {
      Header: 'Room floor',
      accessor: 'roomFloor',
    },
    {
      Header: 'Room facility',
      accessor: 'roomFacility',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: '',
      accessor: ' ',
    },
  ];
  
const Frontdesk = () => {
    const [checkbtn,setCheckBtn] = useState('All room(5)')
    const [adultQuantity,setAdultQuantity] = useState(0)
    const [childrenQuantity,setChildrenQuantity] = useState(0)
        // Initialize table instance
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
        } = useTable(
            {
                columns,
                data,
               
            },
            usePagination
        );
  return (
    <div className='bg-white p-5 w-full '>

    <div className="bg-[#F7F9FC] fub rounded-lg  p-8 flex-col  w-full flex items-start justify-end ">
      {/* upper after nav  */}
      <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Front desk</p>
      <div className="mt-4 w-full max-sm:flex-col max-sm:gap-5 flex justify-between items-start">
      
      {/* upper-left  */}
      <div>
      <div className='flex flex-wrap items-center gap-3'>
          <button onClick={() => setCheckBtn("All room(5)")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'All room(5)' && 'border-sucess-1 text-sucess-1'}`}>All room(5)</button>
          <button onClick={() => setCheckBtn("Single")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Single' && 'border-sucess-1 text-sucess-1'}`}>Single</button>
          <button onClick={() => setCheckBtn("Double")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Double' && 'border-sucess-1 text-sucess-1'}`}>Double</button>
          <button onClick={() => setCheckBtn("Triple")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Triple' && 'border-sucess-1 text-sucess-1'}`}>Triple</button>
          <button onClick={() => setCheckBtn("VIP")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'VIP' && 'border-sucess-1 text-sucess-1'}`}>VIP</button>
        </div>

        {/* main date div  */}
        <div className="flex flex-wrap my-6 items-center gap-8">
            <div>
                <p className="text-sm-normal mt-[6px] text-grey8">Check in</p>
                <DateBox />
            </div>
            <div>
                <p className="text-sm-normal mt-[6px] text-grey8">Check out</p>
                <DateBox />
            </div>
        </div>

        {/* main age feild  */}
       

        <div className="flex items-center gap-8 py-[6px]">
            <div className="flex items-center gap-8 flex-wrap">
                <div className="">
                    <p className="text-sm-normal mb-[4px] text-grey8">Adult</p>
                    <p className="text-sm mt-[6px] text-grey6">Older than 12 years</p>
                </div>
                <div className="flex items-center gap-[17px]">
                    <button onClick={() => setAdultQuantity(adultQuantity > 0 ? adultQuantity - 1 : 0)} className="w-9 h-9 rounded-full bg-[#E8f1fd] flex items-center justify-center">   <Minus className="text-sucess-1 w-7 h-7 " /></button>
                    <p className="text-[18px] text-grey8 font-medium leading-[27px]">{adultQuantity}</p>
                    <button onClick={() => setAdultQuantity(adultQuantity < 20 ? adultQuantity + 1 : 20)} className="w-9 h-9 rounded-full bg-[#E8f1fd] flex items-center justify-center">
                    <Plus className="text-sucess-1 w-7 h-7 " />
                    </button>
                </div>
            </div>
            {/* Children quantity */}
            <div className="flex items-center gap-8 flex-wrap">
                <div className="">
                    <p className="text-sm-normal mb-[4px] text-grey8">Children</p>
                    <p className="text-sm mt-[6px] text-grey6">0 - 12 years</p>
                </div>
                <div className="flex items-center gap-[17px]">
                    <button onClick={() => setChildrenQuantity(childrenQuantity > 0 ? childrenQuantity - 1 : 0)} className="w-9 h-9 rounded-full bg-[#E8f1fd] flex items-center justify-center">   <Minus className="text-sucess-1 w-7 h-7 " /></button>
                    <p className="text-[18px] text-grey8 font-medium leading-[27px]">{childrenQuantity}</p>
                    <button onClick={() => setChildrenQuantity(childrenQuantity < 20 ? childrenQuantity + 1 : 20)} className="w-9 h-9 rounded-full bg-[#E8f1fd] flex items-center justify-center">
                    <Plus className="text-sucess-1 w-7 h-7 " />
                    </button>
                </div>
            </div>
        </div>
      </div>

      <div>
          <button className='bg-[#12B76A] transition-all duration-200 hover:bg-[#178551] rounded-lg px-6 py-[10px] text-sm-normal text-white '>Check availability</button>
      </div>
      </div>

    </div>

      {/* ---- main start  */}
      <main className="pt-5 pr-5 bg-white w-full h-full">
      <div className="container w-full border border-[#E8F1FD] rounded-lg overflow-x-scroll md:overflow-x-hidden mx-auto  ">
                <table {...getTableProps()} className=" w-auto md:w-full  table-fixed md:table-auto md:border-collapse">
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, index) => (
                                    <th key={index} {...column.getHeaderProps()} className="px-6 py-[10px] border-[#E8F1FD] text-left bg-[#F7F9FC] text-[12px] font-medium text-tgrey-5 font-Inter leading-[18px]">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr key={index} {...row.getRowProps()} className="border">
                                    {row.cells.map((cell, index) => {
                                        return (
                                            <td key={index} {...cell.getCellProps()} className={`px-6 py-[17px] border-[#E8F1FD]  font-Inter leading-[21px] ${index === 0 ? 'text-[#2B2F38] text-sm-normal font-medium' : 'border-b text-[14px] font-normal text-grey6'}`}>
                                                {index === 4 ? <span className={` px-2 py-[2px] rounded-2xl ${cell.value === 'Available' && 'bg-[#E8F1FD] text-[#12B76A]' || cell.value === 'Booked' && 'bg-[#FEECEB] text-[#F36960]' || cell.value === 'Reserved' && 'bg-[#E7F8F0] text-[#12B76A]' || cell.value === 'Waitlist' && 'bg-[#FEF4E6] text-[#F9A63A]'  || cell.value === 'Blocked' && 'bg-[#FEF4E6] text-[#F9A63A]'}`}>{cell.render('Cell')}</span> : cell.render('Cell')}

                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        </main>
    </div>
  )
}

export default Frontdesk