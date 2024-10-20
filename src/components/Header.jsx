"use client";

import { FaCoins } from "react-icons/fa6";

import Link from "next/link";
import { usePoints } from "../context/PointsContext";
import Image from "next/image";
import logo from "../../public/images/logo.png"

const Header = () => {
  const { points } = usePoints();

  return (
    <header className="bg-gray-200  text-black py-8  px-6 flex justify-center items-center shadow-xl">
      {/* Logo / Home Link */}
      <Link
        href="#"
        className="text-3xl font-bold text-white  hover:text-blue-400 transition-colors duration-300"
      >
        <Image src={logo} alt="logo" className="object-cover" width={228} height={124}/>
      </Link>

      {/* Points Display */}
      {/* <div className="text-lg font-medium flex">
        <span>
          <FaCoins className="text-yellow-500 text-3xl mr-2" />
        </span>
        <span className="text-black mr-2">Points:</span>
        <span className="font-semibold text-blue-500">{points}</span>
      </div> */}
    </header>
  );
};

export default Header;
