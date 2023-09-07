import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getGoodAPI } from "../features/goods/thunk";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../contexts/Modal";
import PhoneInput from "react-phone-input-2";
import Footer from "../components/Footer";
import axios from "axios";
import Loading from "../components/Loading";
import { sendmessage } from "../utils/sendTgBot";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const Load = useSelector((state) => state.goods.status);
  const [OpenModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!goods.length || Load === "idle") {
      dispatch(getGoodAPI());
    }
  }, [dispatch, goods]);
  useEffect(() => {
    OpenModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [OpenModal]);
  const message = useRef(null);
  const message2 = useRef(null);

  useEffect(() => {});

  if (Load === "loading") {
    return <Loading />;
  } else if (Load === "fulfilled") {
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
                    <form
                      onSubmit={(e) => {
                        sendmessage(e , message , 
                          message2);
                      }}
                      action=""
                    >
                      <label className="inputs">
                        <input
                          ref={message}
                          className="ConsultationInpName"
                          type="text"
                          name="Name"
                          placeholder="Ваше имя"
                        />
                        <div className="ModalCons">
                          <PhoneInput
                            ref={message2}
                            className="ConsultationInpPhoneModal"
                            country={"uz"} // Укажите страну по умолчанию (например, 'us' для США)
                            value={""}
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
  }
};

export default Layout;
