
import { useTable, usePagination } from 'react-table';



import {  Filter } from "lucide-react"
import { BsThreeDotsVertical } from 'react-icons/bs';

// Sample data 
const data = [
    {
      roomType: 'Single',
      deals: 'Family deal',
      cancellationPolicy: 'Strict',
      dealPrice: '$ 800',
      Rate: '$ 800',
      availability: '5 rooms',
      ' ': <BsThreeDotsVertical />
    },
    {
      roomType: 'Double',
      deals: 'Christmas deal',
      cancellationPolicy: 'Strict',
      dealPrice: '$ 1,200',
      Rate: '$ 1,200',
      availability: 'Full',
      ' ': <BsThreeDotsVertical />
    },
    {
      roomType: 'Triple',
      deals: 'Family deal',
      cancellationPolicy: 'Flexible',
      dealPrice: '$ 2,000',
      Rate: '$ 2,000',
      availability: '12 rooms',
      ' ': <BsThreeDotsVertical />
    },
    {
      roomType: 'VIP',
      deals: 'Black Friday',
      cancellationPolicy: 'Non refundable',
      dealPrice: '$ 4,000',
      Rate: '$ 4,000',
      availability: '10 rooms',
      ' ': <BsThreeDotsVertical />
    },
  
  
  
   
  
  ];
  
  // Sample columns
 const columns = [
    {
      Header: 'Room type',
      accessor: 'roomType',
    },
    {
      Header: 'Deals',
      accessor: 'deals',
    },
    {
      Header: 'Cancellation policy',
      accessor: 'cancellationPolicy',
    },
    {
      Header: 'Deal price',
      accessor: 'dealPrice',
    },
    {
      Header: 'Rate',
      accessor: 'Rate',
    },
    {
      Header: 'Availability',
      accessor: 'availability',
    },
    {
      Header: '',
      accessor: ' ',
    },
  ];
  


const Rate = () => {
  
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
          <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Guests</p>
          <div className="mt-4 w-full  max-sm:gap-5 flex justify-end items-center">
           
  
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
                                            <td key={index} {...cell.getCellProps()} className={`px-6 py-[17px] border-[#E8F1FD]  font-Inter leading-[21px] ${index === 0 || index === 4 ? 'text-[#2B2F38] text-sm-normal font-medium' : 'border-b text-[14px] font-normal text-grey6'}`}>
                                                {index === 5 ? <span className={` px-2 py-[2px] rounded-2xl ${cell.value === '5 rooms' && 'bg-[#FEECEB] text-[#F36960]' || cell.value === 'Full' && 'bg-[#FEECEB] text-[#F36960]'  || cell.value === '12 rooms' && 'bg-[#E8F1FD] text-[#12B76A]' || cell.value === '10 rooms' && 'bg-[#E8F1FD] text-[#12B76A]'}`}>{cell.render('Cell')}</span> : cell.render('Cell')}

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

export default Rate