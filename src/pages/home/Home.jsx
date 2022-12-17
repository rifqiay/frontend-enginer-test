import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CompleteBio from "../../components/module/Modal/Complete-bio/CompleteBio";
import Navbar from "../../components/module/navbar/Navbar";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCloseModal = () => {
    setShowModal(false);
    formik.handleReset();
  };

  const formik = useFormik({
    // initialvalues
    initialValues: {
      nama: user.nama,
      email: user.email,
      telepon: user.telepon,
      alamat: user.alamat,
    },
    // validation
    validationSchema: Yup.object({
      nama: Yup.string().required("Silahkan isi dengan benar"),
      email: Yup.string()
        .required("Silahkan isi dengan benar")
        .email("format email salah"),
      telepon: Yup.number("Harus berupa angka")
        .required("Silahkan isi dengan benar")
        .test("no-leading-zero", "Tidak boleh diawali 0", (value, context) => {
          return value &&
            value >= 1 &&
            context.originalValue &&
            context.originalValue.startsWith("0")
            ? false
            : true;
        })
        .min(999999999, "Minimal 10 karakter Maksimal 13 karakter")
        .max(9999999999999, "Maksimal 13 karakter"),

      alamat: Yup.string().required("Silahkan isi dengan benar"),
    }),
    // onsubmit
    onSubmit: (values) => {
      const userUpdate = {
        nama: values.nama,
        email: values.email,
        telepon: values.telepon,
        alamat: values.alamat,
      };
      handleCloseModal();
      localStorage.setItem("user", JSON.stringify(userUpdate));
    },
  });
  return (
    <div className="w-4/5 mx-auto">
      <Navbar />
      <div className="font-semibold mt-16 text-gray-400">
        <p>Nama: {user?.nama}</p>
        <p className="mt-3">Email: {user?.email ? user.email : "-"}</p>
        <p className="mt-3">Telepon: {user?.telepon ? user.telepon : "-"}</p>
        <p className="mt-3">Alamat: {user?.alamat ? user.alamat : "-"}</p>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="border border-black p-3 w-3/4 rounded-md block mx-auto mt-72 font-semibold hover:bg-slate-50 shadow-md sm:w-1/3"
      >
        Lengkapi data diri Anda
      </button>
      <CompleteBio
        user={user}
        visible={showModal}
        onClose={handleCloseModal}
        formik={formik}
      />
    </div>
  );
};

export default Home;
