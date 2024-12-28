import { getStoreLocations } from "@/services";
import React, { useEffect, useState } from "react";

const Form = ({ car }: any) => {
  const [storeLocation, setStorelocation] = useState<any>([]);
  const [formValue, setFormValue] = useState({
    location: "",
    pickupDate: "",
    dropOffDate: "",
    pickupTime: "",
    dropOffTime: "",
    ContactNumber: "",
    userName: "Chamath Upeka",
    carId: { connect: { id: "" } },
  });
  useEffect(() => {
    getStoreLocations_();
  }, []);

  useEffect(() => {
    {
      setFormValue({
        ...formValue,
        carId: { connect: { id: car.id } },
      });
    }
  }, [car]);

  const getStoreLocations_ = async () => {
    const resp: any = await getStoreLocations();
    console.log(resp);
    setStorelocation(resp?.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <div className="flex flex-col gap-2 mt-2">
      <div className="flex flex-col w-full">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select select-bordered w-full"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
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
            name="pickupDate"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="dropOffDate"
            onChange={handleChange}
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
            name="pickupTime"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            name="dropOffTime"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-lg"
          name="ContactNumber"
          onChange={handleChange}
        />
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
          <button
            className="btn bg-yellow-500 text-white  hover:bg-yellow-400"
            onClick={handleSubmit} 
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
