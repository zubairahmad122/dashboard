import { Search } from "lucide-react"

const months = [
  {
    id:1,
    month:'May'
  },
  {
    id:2,
    month:'Jun'
  },
  {
    id:3,
    month:'Jul'
  },
  {
    id:5,
    month:'Aug'
  },
  {
    id:6,
    month:'Sep'
  },
  {
    id:7,
    month:'Oct'
  },
  {
    id:8,
    month:'Nov'
  },
  {
    id:9,
    month:'Dec'
  },
  {
    id:10,
    month:'Jan'
  },
  {
    id:11,
    month:'Feb'
  },
  {
    id:12,
    month:'Mar'
  },
]

const data = [
  {
    name:"Ali",
    num:1,
    col:'#E8F1FD',
    textCol:'#12B76A',
    t:'10%'

  },
  {
    name:"Asfar",
    num:2,
    col:'#FEF4E6',
    textCol:'#F9A63A',
    t:'2%'

  },
  {
    name:"Ali",
    num:2,
    col:'#FEECEB',
    textCol:'#F36960',
    t:'40%'

  },
  {
    name:"Tanzell",
    num:3,
    col:'#E8F1FD',
    textCol:'#12B76A',
    t:'5%'
  },
  {
    name:"Haider",
    num:4,
    col:'#FEF4E6',
    textCol:'#F9A63A',
    t:'30%'
  },
  {
    name:"Saad",
    num:5,
    col:'#FEF4E6',
    textCol:'#F9A63A',
    t:'70%'
  },
  {
    name:"Jawad",
    num:6,
    col:'#E8F1FD',
    textCol:'#12B76A',
    t:'25%'
  },
  {
    name:"anas",
    num:8,
    col:'#FEECEB',
    textCol:'#F36960',
    t:'3%'
  },
  {
    name:"Asfar",
    num:8,
    col:'#E8F1FD',
    textCol:'#12B76A',
    t:'15%'
  },
]
const FrontDesk1 = () => {
  return (
    <div className='bg-[#eef0f2] w-full '>

      <div className="bg-white  px-5 flex-col py-[10px] w-full flex items-start justify-end ">
        {/* upper after nav  */}
        <p className=' font-Inter text-[12px] font-medium text-grey4 leading-[18px]'>Fromt desk</p>

        {/* left side  */}
        <div className="mt-4 w-full max-sm:flex-col max-sm:gap-5 flex justify-between items-center">
          <div className='flex flex-wrap items-center gap-3'>
            <button className="text-[#F9A63A] text-sm-normal bg-[#FEF4E6] p-2 rounded-lg">Due in</button>
            <button className="text-sucess-1 text-sm-normal bg-[#E8F1FD] p-2 rounded-lg">Check out</button>
            <button className="text-[#F36960] text-sm-normal bg-[#FEECEB] p-2 rounded-lg">Due out</button>
            <button className="text-sucess text-sm-normal bg-[#E7F8F0] p-2 rounded-lg">Check in</button>
          </div>

          <div className='flex max-sm:flex-col items-center gap-3'>

            <div className="w-full sm:w-[300px] bg-transparent h-[40px] rounded-lg border border-[#D0D3D9] px-4 py-2  flex items-center gap-2">
              <Search className="text-[19px] text-grey4" />
              <input type="text" placeholder="Search by room number" className="outline-none text-[10px] ssm:text-[12px] sm:text-[16px] font-normal font-Inter placeholder:text-gray6 border-none bg-transparent w-full h-full" />
            </div>
            <div>
              <button className='bg-[#12B76A] transition-all duration-200 hover:bg-[#178551] rounded-lg px-6 py-[10px] text-sm-normal text-white '>Create booking</button>
            </div>

          </div>
        </div>

      </div>

      {/* ---- main start  */}
      <main className="pt-5 pr-5 bg-white w-full h-full">
       <div>
            <div className="w-full flex items-start  flex-col justify-center">
              {/* months  */}
              <div className="flex items-center  mx-auto border-b-[#E8F1FD] border-b pb-2 gap-12">
                {months?.map((item) =>{
                  return(
                    <p key={item.id} className="text-grey6 text-sm p-2">{item.month}</p>
                  )
                })}
              </div>


{/* numbers  */}
              <div className="flex items-center ml-44 border-b-[#E8F1FD] border-b pt-2 gap-16">
              {/* parent of 1 number  */}
                    <div className="flex flex-col">
                    <p className="text-grey6 text-sm p-2">1</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                    <p className="bg-[#E8F1FD] text-sucess-1 text-sm-normal p-2 rounded-lg w-[250px] absolute top-36 left-0 z-10">Ali</p>
                   </div>
                    </div>
                      {/* parent of 2 number  */}
                    <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">2</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                    <p className="bg-[#FEF4E6] text-sm-normal  text-sucess p-2 rounded-lg w-[250px] absolute top-5 left-0 z-10">Ali</p>
                  
                    <p className="bg-[#FEECEB] text-sm-normal text-sucess p-2 rounded-lg w-[250px] absolute top-72 left-0 z-10">Ali</p>
                    <p className="bg-[#FEECEB] text-sm-normal text-[#F36960] p-2 rounded-lg w-[250px] absolute top-[90%] left-0 z-10">Yalmaz</p>
                   </div>


                    </div>
                  
                      {/* parent of 3 number  */}
                    <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">3</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                   <p className="bg-[#E8F1FD] text-sm-normal p-2 rounded-lg text-sucess-1 w-[250px] absolute top-20 left-0 z-10">Ali</p>
                   </div>


                    </div>


                      {/* parent of 4 number  */}
                    <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">4</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                   <p className="bg-[#FEF4E6] text-sm-normal text-[#F9A63A] p-2 rounded-lg w-[250px] absolute top-52 left-0 z-10">Asfar</p>
                   </div>
                    </div>
                      {/* parent of 5 number  */}
                    <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">5</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                   <p className="bg-[#FEF4E6] text-sm-normal text-[#F9A63A] p-2 rounded-lg w-[250px] absolute top-[70%] left-0 z-10">Asfar</p>
                   </div>


                    </div>
                       {/* parent of 6 number  */}
                       <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">6</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                   <p className="bg-[#E8F1FD] text-sm-normal p-2 rounded-lg w-[250px] text-sucess-1 absolute top-[57%] left-0 z-10">Ali</p>
                   </div>


                    </div>
                       {/* parent of 7 number  */}
                       <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">7</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
               
                   </div>


                    </div>
                       {/* parent of 8 number  */}
                       <div className="flex flex-col">
                    <p className="text-sucess-1 text-sm p-2">8</p>
                   <div className="bg-[#E8F1FD] ml-6 w-[2px] h-[80vh] relative">
                   <p className="bg-[#E8F1FD] text-sm-normal p-2 rounded-lg w-[250px] text-sucess absolute top-24 left-0 z-10">Afsar</p>

                   <p className="bg-[#FEECEB] text-sm-normal text-[#F36960] p-2 rounded-lg w-[250px] absolute top-2 left-0 z-10">anas</p>
                    <p className="bg-[#FEECEB] text-sm-normal text-sucess p-2 rounded-lg w-[250px] absolute top-72 left-0 z-10">anas</p>
                    <p className="bg-[#FEECEB] text-sm-normal text-sucess p-2 rounded-lg w-[250px] absolute top-[90%] left-0 z-10">Yalmaz</p>
                   </div>


                    </div>
                  
                
              </div>
            </div>
       </div>
      </main>

    </div>
  )
}

export default FrontDesk1