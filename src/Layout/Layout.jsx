import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getGoodAPI } from "../features/goods/thunk";
import { useEffect, useState } from "react";
import { Modal } from "../contexts/Modal";
import PhoneInput from "react-phone-input-2";
import Footer from "../components/Footer";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const [OpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!goods.length) {
      dispatch(getGoodAPI());
    }
  }, [dispatch, goods]);
  useEffect(() => {
    OpenModal
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "visible";
  }, [OpenModal]);
  return (
    <>
      <Modal.Provider value={{ setOpenModal, OpenModal }}>
        {OpenModal ? (
          <>
            <div className="ConsultationModalWindow">
              <img
                src="/icons/close.png"
                className="CloseModalWindow"
                id="CloseWindow"
                onClick={() => {
                  setOpenModal(false);
                }}
                alt=""
              />
              <h1>Заказать консультацию</h1>
              <p>
                Оставьте заявку на консультацию и мы свяжемся с вами в течении
                2х рабочих дней
              </p>
              <div className="OrderConsultationForm">
                <form action="">
                  <label className="inputs">
                    <input
                      className="ConsultationInpName"
                      type="text"
                      name="Name"
                      placeholder="Ваше имя"
                    />
                    <div className="ModalCons">
                      <PhoneInput
                        className="ConsultationInpPhoneModal"
                        country={"uz"} // Укажите страну по умолчанию (например, 'us' для США)
                        value={""}
                        // onChange={}handleOnChange
                      />
                    </div>
                  </label>

                  <label className="FormBtn">
                    <button id="ConsultationSubmit">ОТПРАВИТЬ</button>
                    <span>
                      Нажимая кнопку «Отправить», я даю своё согласие на
                      обработку и распространение персональных данных.
                    </span>
                  </label>
                </form>
              </div>
            </div>
            <div
              onClick={() => {
                setOpenModal(false);
              }}
              className="modal_bg"
              id="CloseWindow"
            ></div>
          </>
        ) : null}

        <Header />
        <main className="max-w-[2560px]  mx-auto">
          <Outlet />
        </main>
        <Footer />
      </Modal.Provider>
    </>
  );
};

export default Layout;
