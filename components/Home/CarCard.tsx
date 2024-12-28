import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { FaGasPump } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const CarCard = (props: any) => {
  const [car, setCar] = useState(props.car);

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);
  return (
    car && (
      <div
        className="group bg-gray-50 p-5 hover:bg-white 
    hover:border-[1px] cursor-pointer duration-150 border-blue-500 shadow-lg mx-5 rounded-3xl h-full mt-3
    "
      >
        <h2 className="text-[20px] font-medium mb-2">{car?.name}</h2>
        <h2 className="text-[28px] font-bold mb-2">
          <span className="text-[12px] font-light">$ </span>
          {car.price}
          <span className="text-[12px] font-light"> /day</span>
        </h2>
        <Image
          src={car.image?.url}
          alt={car.name}
          width={220}
          height={200}
          className="w-[250px] h-[150px] mb-3 object-contain"
        />
        <div className="flex justify-around group-hover:hidden">
          <div className="text-center text-gray-500">
            <GiSteeringWheel className="w-full text-[22px] mb-2" />
            <h2 className="text-[14px] font-light">{car.carType}</h2>
          </div>
          <div className="text-center text-gray-500">
            <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
            <h2 className="text-[14px] font-light">seat</h2>
          </div>
          <div className="text-center text-gray-500">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="text-[14px] font-light">{car.carAvg}</h2>
          </div>
        </div>
        <button className="hidden group-hover:flex items-center justify-around bg-blue-500 text-white p-3 rounded-lg w-full mt-4 hover:bg-blue-600 transition-all duration-200">
          <span>Rent Now</span>
          <FaArrowCircleRight size={20} />
        </button>
      </div>
    )
  );
};

export default CarCard;
