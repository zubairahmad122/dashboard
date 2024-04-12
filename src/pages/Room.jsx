import { useTable, usePagination } from 'react-table';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';


import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

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
  
const Rooms = () => {

  const [checkbtn,setCheckBtn] = useState('All room(100)')
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        // Pagination props
        gotoPage,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            // Enable pagination
            initialState: { pageIndex: 0 },
        },
        usePagination
    );

    return (
        <>
        <div className='bg-[#eef0f2] w-full '>
  
  <div className="bg-white  px-5 flex-col py-[10px] w-full flex items-start justify-end ">
    {/* upper after nav  */}
    <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Room</p>
    <div className="mt-4 w-full  max-sm:gap-5 flex justify-between items-center">
     

      
      <div className='flex items-center gap-3'>
            <button onClick={() => setCheckBtn("All room(100)")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'All room(100)' && 'border-sucess-1 bg-[#E8F1FD] text-sucess-1'}`}>All room(100)</button>
            <button onClick={() => setCheckBtn("Available room(20)")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Available room(20)' && 'border-sucess-1 bg-[#E8F1FD] text-sucess-1'}`}>Available room(20)</button>
            <button onClick={() => setCheckBtn("Booked(80)")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Booked(80)' && 'border-sucess-1 bg-[#E8F1FD] text-sucess-1'}`}>Booked(80)</button>
          </div>
      <div>
          <button className='bg-[#12B76A] transition-all duration-200 hover:bg-[#178551] rounded-lg px-6 py-[10px] text-sm-normal text-white '>Add deal</button>
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
            {/* Pagination */}
            <div className="mt-4 w-full w flex-col ssm:flex-row px-2 xsm:px-6 pt-[13px] pb-[18px] mb-16 flex justify-between items-center">

                <button onClick={() => previousPage()} disabled={!canPreviousPage} className={`px-2 xsm:px-4 text-[12px] xsm:text-sm-normal text-tgrey-5 py-2 rounded-lg border-grey4 border flex items-center justify-center gap-1 ${!canPreviousPage && 'opacity-[0.5]'}`}>
                <MdOutlineKeyboardArrowLeft className='text-[18px] xsm:text-[25px] text-grey6' />  <span>Previous</span>
                </button>
                <div>
                    <div className='flex pagination-btn gap-1 items-center'>
                        {pageOptions.map(pageNumber => (
                            <button
                                key={pageNumber}
                                className={` px-2 xsm:px-[14px] w-10 h-10 flex items-center justify-center py-3 text-sm-normal  text-[#12B76A] rounded-lg mr-0 xsm:mr-2 ${pageNumber === pageIndex ? 'bg-[#F7F9FC] cursor-not-allowed' : 'bg-white'
                                    }`}
                                onClick={() => {
                                    gotoPage(pageNumber);
                                }}
                                disabled={pageIndex === pageNumber}
                            >
                                {pageNumber + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <button onClick={() => nextPage()} disabled={!canNextPage} className={`px-2 xsm:px-4 text-[12px] xsm:text-sm-normal text-sm-normal text-tgrey-5 py-2 rounded-lg border-grey4 border flex items-center justify-center gap-1 ${!canNextPage && 'opacity-[0.5]'}`}>
                    <span>Next</span> <MdOutlineKeyboardArrowRight className=' text-[18px] xsm:text-[25px] text-grey6' />
                </button>

            </div>
  </main>

</div>
          
        </>
    );
};

export default Rooms;
