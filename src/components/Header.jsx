// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { AiOutlineMenu } from "react-icons/Ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-b-2 border-[#DBFF00] px-[5%]">
      <nav className="mx-auto max-w-[2560px] flex justify-between items-center  ">
        <ul className="justify-start flex gap-5 items-center  p-5 md:w-[100%] md:justify-between ">
          <li className="hidden sm:block"></li>
          <li>
            <Link to={"/"}>
              <img src="/logo.svg" alt="" />
            </Link>
          </li>
          <li className="bac py-3 px-3  w-[250px] flex items-center gap-3  sm:hidden ">
            <AiOutlineSearch className="text-[#C5E500]" />
            <input
              type="text"
              className="outline-none"
              placeholder="Поиск по товарам"
            />
          </li>
          <li className="hidden md:block">
            <a href="">
              <AiOutlineMenu className="text-[#C5E500] text-[25px]" />
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li className=" md:hidden text-[14px] leading-[14px] font-[500]">
            <Link to={"/catalog"}> Каталог Продукции</Link>
          </li>
          <li className=" md:hidden">
            <select name="" id="">
              <option value="ru">ru</option>
              <option value="uz">uz</option>
            </select>
          </li>
          <li className=" md:hidden">
            <div className="flex py-[10px] button px-[30px]">КОНСУЛЬТАЦИЯ</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
