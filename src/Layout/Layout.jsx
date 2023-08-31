import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getGoodAPI } from "../features/goods/thunk";
import { useEffect } from "react";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!goods.length) {
      dispatch(getGoodAPI());
    }
  }, [dispatch, goods]);
  return (
    <>
      <Header />
      <main className="max-w-[2560px] mx-auto">
        <Outlet />
      </main>
      <h1>footer</h1>
    </>
  );
};

export default Layout;
