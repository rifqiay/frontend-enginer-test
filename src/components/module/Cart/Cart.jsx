import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  handleDecrement,
  handleIncrement,
} from "../../../config/redux/action/Counter";

const Cart = ({ title, image, quantity, index }) => {
  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(handleIncrement(index));
  };
  const handleMinus = () => {
    dispatch(handleDecrement(index));
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-10 md:relative" key={index}>
        <div className="w-20 md:w-56">
          <img
            src={image}
            alt="product"
            className="rounded-lg w-20 h-20 md:w-56 md:h-56"
          />
        </div>
        <div className="font-semibold w-44 relative -left-12 md:text-xl md:-left-20">
          {title}
        </div>
        <div className="flex justify-between items-center gap-2 md:w-[11%] md:absolute md:bottom-0 md:right-0 md:top-1/2 md:bottom-1/2">
          <button
            className="border p-1.5 rounded-md border-black cursor-pointer hover:bg-slate-50"
            onClick={handleMinus}
          >
            <AiOutlineMinus />
          </button>
          <p className="text-lg font-semibold">{quantity}</p>
          <button
            className="border p-1.5 rounded-md border-black cursor-pointer hover:bg-slate-50"
            onClick={handlePlus}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
