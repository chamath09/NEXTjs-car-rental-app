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
        <div>
          <CarCard car={car}/>
        </div>
        <div>
          <div>
            <Form car={car} />
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
