import React from "react";
import { useNavigate } from "react-router-dom";

const CompleteBio = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="font-semibold md:w-1/2">
        Anda harus melengkapi data diri di halaman Home sebelum dapat melihat
        barang yang tersedia.
      </p>
      <button
        className="border shadow-sm  border-black p-3 block mx-auto mt-20 w-3/5 rounded-md md:ml-0 md:w-1/6"
        onClick={() => navigate("/home")}
      >
        kembali ke Home
      </button>
    </>
  );
};

export default CompleteBio;
