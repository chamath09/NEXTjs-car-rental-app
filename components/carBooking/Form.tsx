import { getStoreLocations } from "@/services";
import React, { useEffect, useState } from "react";

const Form = () => {
    const [storeLocation,setStorelocation]=useState<any>([]);
  useEffect(() => {
    getStoreLocations_();
  }, []);
  const getStoreLocations_ = async () => {
    const resp:any = await getStoreLocations();
    console.log(resp);
    setStorelocation(resp?.storesLocations)
  };
  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="flex flex-col w-full">
        <label className="text-gray-400">PickUp Location</label>
        <select className="select select-bordered w-full">
          <option disabled selected>
            PickUp Location
          </option>
          {storeLocation&&storeLocation.map((loc:any,index:number)=>(
            <option key={index}>{loc?.address}</option>
          ))}
        </select>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Form;
