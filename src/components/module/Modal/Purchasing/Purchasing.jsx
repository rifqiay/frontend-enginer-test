import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Purchasing = ({ visible, onClose, handleOrder }) => {
  const { cart } = useSelector((state) => state.carts);
  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white px-4 py-2 rounded-sm w-11/12 relative md:w-1/2">
          <h1 className="text-2xl font-semibold text-center">
            Purchasing List
          </h1>
          <div className="w-5/6 flex justify-between font-semibold text-lg mt-7 mb-5 text-gray-600">
            <p>Name</p>
            <p>Qty</p>
          </div>
          {cart.map((item, key) => (
            <div
              className="w-5/6 flex justify-between font-semibold text-gray-600 my-1"
              key={key}
            >
              <p>{item.name}</p>
              <p>{item.quantity}</p>
            </div>
          ))}

          <button
            className="border border-black rounded-md p-2 block mx-auto w-1/2 mt-28 mb-10"
            onClick={handleOrder}
          >
            Order
          </button>
          <div
            onClick={onClose}
            className="text-3xl font-semibold absolute text-white font-bold bg-red-600 top-1 right-1 cursor-pointer"
          >
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchasing;
