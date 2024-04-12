import { overViewData } from "../../constents"
import OverviewCrad from "../components/OverviewCrad"
import "react-circular-progressbar/dist/styles.css";

import RoomCard from "../components/RoomCard";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Calendar } from "lucide-react";
import Barchart from "../components/BarCharts";
import { BsThreeDotsVertical } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className='bg-[#eef0f2] w-full '>

<div className="bg-white px-5 py-[10px] w-full flex items-start justify-end h-[55px]">
        {/* upper after nav  */}
        <div className=" w-full xlg:w-1/2 flex justify-between items-center">
          <p className="font-Inter text-grey6 text-[12px] xsm:text-sm">Friday, May 16, 2023</p>
          <button className="btn">Create booking</button>
        </div>

      </div>

      {/* ---- main start  */}
      <main className="py-5 w-full h-full  px-5">

        {/* overview 1  */}
        <div className="w-full bg-white px-4 py-5 rounded-lg h-auto xlg:h-[135px]">
          <p className="text-[20px] text-grey8 leading-5 font-Inter font-medium">Overview</p>

          <div className="flex max-xlg:flex-wrap items-center justify-center md:justify-between mt-4 gap-10 xll:gap-[76px]">
            {
              overViewData?.map((item, index) => (
                <OverviewCrad key={index} name={item.name} des={item.des} num={item.num} />
              ))
            }
          </div>

        </div>





        {/* Rooms 2  */}
        <div className="w-full my-5 bg-white px-4 py-5 rounded-lg h-auto">
          <p className="text-[20px] text-grey8 leading-5 font-Inter font-medium">Rooms</p>

          <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 mdd:grid-cols-4 place-items-center mt-4 gap-[23px]">

            {/* maincard  */}
            <RoomCard deals={true} title="Single sharing" value='2' valueSpan='/30' price="7000" />
            <RoomCard deals={true} title="Double sharing" value='2' valueSpan='/30' price="8000" />
            <RoomCard deals={false} title="Triple sharing" value='2' valueSpan='/30' price="9000" />
            <RoomCard deals={false} title="LUXURY ROOM" value='4' valueSpan='/30' price="9500" />

          </div>

        </div>

        {/* Room Status 3 */}


        <section className="my-5 flex w-full flex-wrap items-start gap-5">

          {/* left   */}
          <div className="flex-1  bg-white flex flex-col justify-center px-4 py-5 rounded-lg min-h-[200px]">
            <p className="text-[20px] text-grey8 leading-5 font-Inter font-medium">Room status</p>

            <div className="flex mt-4 items-center flex-wrap justify-between place-items-center gap-[58px]">

              <div className="w-full md:w-[300px] ">
                <div className="flex justify-between items-center text-base-medium text-grey6">
                  <p>Occupied rooms</p>
                  <p>104</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Clean</p>
                  <p>90</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Dirty</p>
                  <p>4</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Inspected</p>
                  <p>60</p>
                </div>

              </div>


              <div className="w-full md:w-[300px] ">
                <div className="flex justify-between items-center text-base-medium text-grey6">
                  <p>Available rooms</p>
                  <p>20</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Clean</p>
                  <p>30</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Dirty</p>
                  <p>19</p>
                </div>
                <div className="flex mt-2 justify-between items-center font-Inter text-[16px] font-normal leading-6 text-grey4">
                  <p>Inspected</p>
                  <p>30</p>
                </div>

              </div>

            </div>
          </div>


          <div className=" w-full md:max-w-[400px]  bg-white px-4 py-5 rounded-lg h-[200px]">
            <p className="text-[20px] text-grey8 leading-5 font-Inter font-medium">Floor status</p>

            <div className="w-full flex  items-start mt-6 justify-center">

              <div className=" w-[110px] ssm:w-[130px] xsm:w-[180px] relative h-[100px] ">
                <CircularProgressbar
                  value={80}
                  circleRatio={0.5}
                  strokeWidth={10}
                  styles={{
                    root: {
                      transform: "rotate(0.75turn)",
                    },
                    path: { stroke: "#12B76A" },
                    trailColor: "#12B76A",
                    trail: { stroke: "#EEF0F2" },
                    backgroundColor: "#12B76A",
                  }}
                />
                <p className="absolute text-heading4-bold xsm:text-lg text-grey8 w-full top-[40%] ssm:top-[50%] left-[38%]">80%</p>
              </div>
              <div>
                <div className="flex items-center mb-[10px] gap-2">
                  <span className="w-2 h-2 bg-sucess-1 rounded-full"></span>
                  <p className="text-[12px] font-medium text-grey4 font-Inter leading-[18px]">Competed</p>
                </div>
                <div className="flex items-center mb-[10px] gap-2">
                  <span className="w-2 h-2 bg-[#EEF0F2] rounded-full"></span>
                  <p className="text-[12px] font-medium text-grey4 font-Inter leading-[18px]">Competed</p>
                </div>
              </div>

            </div>

          </div>

        </section>





        {/* Occupancy Statistic 4 */}


        <section className="my-5 flex w-full flex-wrap items-start gap-5">

          {/* left   */}
          <div className="flex-1  bg-white flex flex-col justify-center px-4 py-5 rounded-lg h-auto xsm:h-[280px]">
           <dir className="flex items-center justify-between w-full">
           <p className=" text-[12px] xsm:text-[16px] sm:text-[18px] lg:text-[20px] text-grey8 leading-5 font-Inter font-medium">Occupancy Statistics</p>

           <div className="border-grey4 flex items-center justify-center gap-2 rounded-lg w-[110px] h-[40px]">
           <Calendar className="w-[15px] h-[15px] text-grey6" />
                  <p className="text-[14px] font-medium text-grey4">Monthly</p>
           </div>
           </dir>

            <div className="flex mt-4 items-center flex-wrap justify-between place-items-center gap-[58px]">

              <Barchart />

            </div>
          </div>


          <div className=" w-full md:max-w-[400px]  bg-white px-4 py-5 rounded-lg h-auto xsm:h-[280px]">

            {/* upper  */}
          <div className='justify-between w-full flex items-center'>
          <p className=" text-[16px] sm:text-[18px] lg:text-[20px] text-grey8 leading-5 font-Inter font-medium">Customers feedback</p>
                <BsThreeDotsVertical className="text-grey6" />
            </div>


           <div className=" font-Inter">

                <div className="flex pb-2 my-4 border-b border-[#D0D3D9] items-center justify-between max-xsm:flex-col flex-wrap">
                  <div className="max-xsm:text-center">
                    <p className="text-sm-normal text-grey6 ">Ali</p>
                    <p className="  text-sm-normal text-grey4 ">Food could be better.</p>
                  </div>
                  <p className="text-sm-normal text-grey8 ">A201</p>
                </div>
                <div className="flex pb-2 my-4 border-b border-[#D0D3D9] items-center justify-between max-xsm:flex-col flex-wrap">
                  <div className="max-xsm:text-center">
                    <p className="text-sm-normal text-grey6 ">Tanzeel</p>
                    <p className="  text-sm-normal text-grey4 "> Facilities are not enough for amount paid.</p>
                  </div>
                  <p className="text-sm-normal text-grey8 ">A101</p>
                </div>
                <div className="flex pb-2 my-4 border-b border-[#D0D3D9] items-center justify-between max-xsm:flex-col flex-wrap">
                  <div className="max-xsm:text-center">
                    <p className="text-sm-normal text-grey6 ">Asfar</p>
                    <p className="  text-sm-normal text-grey4 ">Room cleaning could be better.</p>
                  </div>
                  <p className="text-sm-normal text-grey8 ">A301</p>
                </div>

           </div>

          </div>

        </section>

      </main>
    </div>
  )
}

export default HomePage