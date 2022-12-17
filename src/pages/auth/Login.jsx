import { useFormik } from "formik";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (values) => {
    const user = {
      nama: values.nama,
      email: "",
      telepon: "",
      alamat: "",
    };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "12345");
    setSubmitting(false);
    resetForm();
    navigate("/home");
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
    handleSubmit,
    setSubmitting,
    resetForm,
  } = useFormik({
    // initial values
    initialValues: {
      nama: "",
      password: "",
    },
    // schema validation
    validationSchema: Yup.object({
      nama: Yup.string()
        .required("Silahkan isi dengan benar")
        .min(3, "Min 3 karakter dan Max 30 karater")
        .max(30, "Maksimal 30 karakter"),
      password: Yup.string()
        .required("Silahkan isi dengan benar")
        .min(3, "Min 3 karakter dan Max 10 karater")
        .max(10, "Maksimal 10 karakter")
        .matches(/[A-Z]/g, "Setidaknya mengandung 1 huruf kapital"),
    }),
    // handle submission
    onSubmit: handleLogin,
  });
  // console.log(formik);
  const handleShowPassword = () => {
    !showPassword ? setShowPassword(true) : setShowPassword(false);
  };

  return (
    <>
      <main className="h-screen flex justify-center items-center">
        <section className="w-4/5 sm:w-2/5">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Masukan Nama Anda"
                className="border border-black font-semibold p-3 w-full rounded-md focus:outline-none shadow-sm"
                name="nama"
                value={values.nama}
                onChange={handleChange}
              />
              {errors.nama && <p className="text-red-500">{errors.nama}</p>}
            </div>
            <div className="mt-6 relative">
              <input
                type={!showPassword ? "password" : "text"}
                placeholder="Masukan Kata Sandi Anda"
                className="border border-black font-semibold p-3 w-full rounded-md focus:outline-none shadow-sm"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={handleShowPassword}
              >
                {!showPassword ? (
                  <AiOutlineEyeInvisible size="25px" />
                ) : (
                  <AiOutlineEye size="25px" />
                )}
              </div>
            </div>
            <button
              className="border border-black font-semibold w-1/3 block mx-auto px-6 py-3 mt-7 rounded-md cursor-pointer hover:bg-slate-100 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300 disabled:hover:cursor-default"
              disabled={!isValid}
            >
              Login
            </button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
