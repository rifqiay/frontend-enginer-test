import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, DeleteCart } from "../../../config/redux/action/AddCart";

const Card = ({ name, Img, item }) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(true);

  const handleAdd = () => {
    setAdd(false);
    dispatch(addCart(item));
  };

  const handleRemove = () => {
    setAdd(true);
    dispatch(DeleteCart(item));
  };

  return (
    <div className="card shadow-sm flex flex-col justify-between">
      <img src={Img} alt="product" className="rounded-md" />
      <p className="font-semibold text-sm mt-2 sm:text-xl">{name}</p>
      {add ? (
        <button
          className="w-full border p-1.5 border-black rounded-md mt-3 font-semibold hover:bg-slate-50 sm:p-2.5"
          onClick={handleAdd}
        >
          Add
        </button>
      ) : (
        <button
          className="w-full border p-1.5 rounded-md mt-3 font-semibold bg-red-600 text-white hover:bg-red-500 sm:p-2.5 "
          onClick={handleRemove}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Card;
