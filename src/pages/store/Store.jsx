import React, { Fragment, useEffect, useState } from "react";
import Card from "../../components/module/card/Card";
import Navbar from "../../components/module/navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../config/redux/action/GetData";
import Spinner from "../../components/base/loading/Spinner";
import CompleteBio from "../../components/module/complete-bio/CompleteBio";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const _isUser = Object.values(user).every((value) => value);

  const dispatch = useDispatch();
  const { film } = useSelector((state) => state.getAllData);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchData(setLoading));
  }, [dispatch]);
  return (
    <main className="w-10/12 mx-auto">
      <Navbar />
      {!_isUser ? (
        <div className="mt-20">
          <CompleteBio />
        </div>
      ) : (
        <>
          {loading ? (
            <div className="h-screen flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-10 mt-10 mb-20 md:grid-cols-4">
              {film.map((item, key) => (
                <Fragment key={key}>
                  <Card
                    key={key}
                    name={item.Title}
                    Img={item.Poster}
                    item={item}
                  />
                </Fragment>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Store;
