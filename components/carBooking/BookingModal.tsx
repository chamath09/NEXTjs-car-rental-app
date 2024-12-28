import React from "react";
import CarCard from "../Home/CarCard";
import Form from "./Form";

const BookingModal = ({ car }: any) => {
  return (
    <div>
      <div className="border-b-[1px] pb-2">
        <h3 className="text-[30px] font-light text-gray-400">
          Rent A Car Now!
        </h3>
      </div>
      <div>
        <Form />
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn">Close</button>
          <button className="btn bg-blue-500 text-white  hover:bg-blue-800">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
