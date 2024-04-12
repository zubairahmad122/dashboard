import { BsThreeDotsVertical } from 'react-icons/bs'

const RoomCard = ({ deals, title, value, valueSpan, price }) => {
    return (
        <div className="border flex items-start gap-1 justify-center flex-col border-[#D0D3D9] rounded-lg p-4 w-full xsm:w-[200px] lg:w-[180px] xlg:w-[210px] xll:w-[230px] h-[150px]">

            {/* card-upper  */}
            <div className={`${deals && 'justify-between'} w-full flex justify-end items-center`}>
               {deals &&  <p className="font-medium w-[59px] flex items-center justify-center h-[22px] bg-[#B6E9D1] rounded-md py-[2] px-2 font-Inter text-sucess text-[12px] leading-[18px]">2 Deals</p>}
                <BsThreeDotsVertical className="text-grey6" />
            </div>

            {/* card bottom  */}
            <div>
                <p className="font-Inter text-base-medium text-grey6">{title}</p>
                <p className="font-Inter text-body-semibold text-grey6">{value} <span className="font-Inter text-body-medium text-grey4">{valueSpan}</span></p>
                <p className="text-sucess-1 text-[23px] font-Inter font-semibold leading-[28px]">Rs {price} <span className="font-Inter text-base-medium text-grey4">/ Month</span> </p>
            </div>
        </div>
    )
}

export default RoomCard