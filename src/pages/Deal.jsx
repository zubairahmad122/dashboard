import { useState } from 'react';
import { useTable, usePagination } from 'react-table';



import {  Filter } from "lucide-react"
import { BsThreeDotsVertical } from 'react-icons/bs';

// Sample data 
const data = [
    {
      id: '#5644',
      name: '2 student deal',
      Reservationsleft: '10',
      Enddate: '21/3/23',
      Roomtype: 'VIP',
      status: 'Ongoing',
      ' ': <BsThreeDotsVertical />
    },
    {
      id: '#6112',
      name: 'Group deal',
      Reservationsleft: '12',
      Enddate: '25/3/23',
      Roomtype: 'Single, Double',
      status: 'Full',
      ' ': <BsThreeDotsVertical />
    },
    {
      id: '#6141',
      name: 'Group deal',
      Reservationsleft: '15',
      Enddate: '-',
      Roomtype: 'Triple',
      status: 'Inactive',
      ' ': <BsThreeDotsVertical />
    },
    {
      id: '#6145',
      name: 'Group deal',
      Reservationsleft: '12',
      Enddate: '1/5/23',
      Roomtype: 'VIP',
      status: 'New',
      ' ': <BsThreeDotsVertical />
    },
  
  
   
  
  ];
  
  // Sample columns
 const columns = [
    {
      Header: 'Reference number',
      accessor: 'id',
    },
    {
      Header: 'Deal name',
      accessor: 'name',
    },
    {
      Header: 'Reservations left',
      accessor: 'Reservationsleft',
    },
    {
      Header: 'End date',
      accessor: 'Enddate',
    },
    {
      Header: 'Room type',
      accessor: 'Roomtype',
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
  


const Deal = () => {
    const [checkbtn,setCheckBtn] = useState('Ongoing')
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
        <div className='bg-[#eef0f2] w-full '>
  
        <div className="bg-white  px-5 flex-col py-[10px] w-full flex items-start justify-end ">
          {/* upper after nav  */}
          <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Deal</p>
          <div className="mt-4 w-full max-sm:flex-col max-sm:gap-5 flex justify-between items-center">
            <div className='flex items-center gap-3'>
              <button onClick={() => setCheckBtn("Ongoing")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Ongoing' && 'border-sucess-1 text-sucess-1'}`}>Ongoing</button>
              <button onClick={() => setCheckBtn("Finished")} className={`px-4 py-2 border border-[#989FAD] text-grey6 rounded-full text-sm-normal ${checkbtn === 'Finished' && 'border-sucess-1 text-sucess-1'}`}>Finished</button>
            </div>
  
            <div className='flex max-sm:flex-col items-center gap-3'>
            <div>
                <button className='bg-[#12B76A] transition-all duration-200 hover:bg-[#178551] rounded-lg px-6 py-[10px] text-sm-normal text-white '>Add deal</button>
            </div>
              <div className='border cursor-pointer max-sm:w-full max-sm:justify-center border-grey4 text-tgrey-5 text-sm flex items-center gap-2 py-[10px] px-4 rounded-lg'>
              <Filter className='w-[15px] h-[15px] text-tgrey-5' />
              filter
              </div>
             
  
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
                                            <td key={index} {...cell.getCellProps()} className={`px-6 py-[17px] border-[#E8F1FD]  font-Inter leading-[21px] ${index === 0 ? 'text-[#2B2F38] text-sm font-medium' : 'border-b text-[14px] font-normal text-grey6'}`}>
                                                {index === 5 ? <span className={` px-2 py-[2px] rounded-2xl ${cell.value === 'Ongoing' && 'bg-[#E8F1FD] text-[#12B76A]' || cell.value === 'Full' && 'bg-[#FEECEB] text-[#F36960]'  || cell.value === 'Inactive' && 'bg-[#FEECEB] text-[#F36960]' || cell.value === 'New' && 'bg-[#E7F8F0] text-[#41C588]'}`}>{cell.render('Cell')}</span> : cell.render('Cell')}

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

export default Deal