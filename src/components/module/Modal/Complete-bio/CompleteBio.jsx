import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CompleteBio = ({ visible, onClose, formik, user }) => {
  if (!visible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white px-4 py-2 rounded-sm w-11/12 relative md:w-1/2">
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-black p-3 rounded-md my-2.5"
                  name="nama"
                  value={formik.values.nama}
                  onChange={formik.handleChange}
                />
                {formik.errors.nama && (
                  <p className="text-red-500">{formik.errors.nama}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Masukan email anda"
                  className="w-full border border-black p-3 rounded-md my-2.5"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Masukan nomor telepon"
                  className="w-full border border-black p-3 rounded-md my-2.5"
                  name="telepon"
                  value={formik.values.telepon}
                  onChange={formik.handleChange}
                />
                {formik.errors.telepon && (
                  <p className="text-red-500">{formik.errors.telepon}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Masukan alamat lengkap"
                  className="w-full border border-black p-3 rounded-md my-2.5"
                  name="alamat"
                  value={formik.values.alamat}
                  onChange={formik.handleChange}
                />
                {formik.errors.alamat && (
                  <p className="text-red-500">{formik.errors.alamat}</p>
                )}
              </div>
              <button
                type="submit"
                className="border p-3 w-1/2 border-black rounded-md block mx-auto my-5"
              >
                Save
              </button>
            </form>
          </div>
          {/* close butto */}
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

export default CompleteBio;
