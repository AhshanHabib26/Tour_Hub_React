import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Styles from '../../Styles/SearchInputs.module.css'






const SearchInput = () => {

  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className={`flex mx-4 justify-center items-center lg:mx-auto  lg:max-w-4xl my-4 ${Styles.shdowStyle}`}>
      <div className=" grid grid-cols-2 lg:grid-cols-5 p-5">
      
      <div className=" flex flex-col justify-start items-start">
        <label className=" text-lg font-bold text-neutral" htmlFor="destination">Destination</label>
        <select className=" border-0 outline-none p-2 w-[150px]">
            <option value="bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Paris">Paris</option>
            <option value="Singapore">Singapore</option>
        </select>
      </div>
      <div className=" flex flex-col justify-start items-start">
        <label className=" text-lg font-bold text-neutral" htmlFor="travelType">Travel Type</label>
        <select className=" border-0 outline-none p-2 w-[150px]">
            <option value="single">Single Tour</option>
            <option value="couple">Couple Tour</option>
            <option value="group">Group Tour</option>
            <option value="mountain">Mountain Tour</option>
        </select>
      </div>
      <div className=" mt-4 lg:mt-0 flex flex-col justify-start items-start">
        <label className=" text-lg font-bold text-neutral" htmlFor="price">Price</label>
        <select className=" border-0 outline-none p-2 w-[150px]">
            <option value="">$ 10000</option>
            <option value="">$ 20000</option>
            <option value="">$ 30000</option>
            <option value="">$ 40000</option>
        </select>
      </div>
        <div className="mt-4 lg:mt-0">
            <label className=" text-lg font-bold text-neutral" htmlFor="date">Date</label>
            <DatePicker className=" outline-none  cursor-pointer" selected={startDate} onChange={(date) => setStartDate(date)} />
         
        </div>
        <div>
            <button className=" btn btn-primary h-0 lg:h-[60px] w-[140px] mt-4 lg:mt-1 ml-0 lg:ml-5 ">Find Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
