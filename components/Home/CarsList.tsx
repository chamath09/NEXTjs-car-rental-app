import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import CarCardSkelton from './CarCardSkelton';
import BookingModal from '../carBooking/BookingModal';

const CarsList = (props:any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCar,setSelectedCar]=useState<any>()

  useEffect(() => {
    if (props.carsList && props.carsList.length > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
  }, [props.carsList]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoaded && props.carsList.map((car:string, index:number) => (
        <div key={index} onClick={() => {(window as any).my_modal_4.showModal()
          setSelectedCar(car)
        }}>
          <CarCard car={car} />
        </div>
      ))}
      {!isLoaded && [1, 2, 3, 4, 5].map((item, index) => (
        <CarCardSkelton key={index} />
      ))}

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-1/2 max-w-5xl">
        <BookingModal car={setSelectedCar}/>
        </div>
      </dialog>
    </div>
  );
};

export default CarsList;
