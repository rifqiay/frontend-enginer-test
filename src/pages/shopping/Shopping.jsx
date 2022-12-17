import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/module/Cart/Cart";
import Purchasing from "../../components/module/Modal/Purchasing/Purchasing";
import Navbar from "../../components/module/navbar/Navbar";
import Order from "../../components/module/order-success/Order";
import { OrderCart } from "../../config/redux/action/AddCart";

const Shopping = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);
  const [order, setOrder] = useState(false);

  let ListCart = [];
  Object.keys(cart).forEach(function (item) {
    ListCart.push(cart[item]);
  });

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOrder = () => {
    dispatch(OrderCart(cart));
    setOrder(true);
    setShowModal(false);
  };
  return (
    <div className="w-4/5 mx-auto">
      <Navbar />
      {order ? (
        <Order />
      ) : (
        <>
          <div className="mt-12">
            {ListCart.map((item, key) => (
              <Fragment key={key}>
                <Cart
                  title={item.name}
                  image={item.image}
                  quantity={item.quantity}
                  index={key}
                />
              </Fragment>
            ))}
            {ListCart.length > 0 ? (
              <button
                onClick={() => setShowModal(true)}
                className="border border-black p-3 w-3/5 rounded-md block cursor-pointer hover:bg-slate-50 mx-auto mb-10 mt-20 sm:w-1/3"
              >
                Review
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      )}
      {/* <CompleteBio /> */}
      <Purchasing
        visible={showModal}
        onClose={handleCloseModal}
        handleOrder={handleOrder}
      />
    </div>
  );
};

export default Shopping;
