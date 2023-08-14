import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-neutral-800 flex justify-around items-center flex-row flex-wrap w-full mr-4 mb-6 p-3 minWithDüzen">
        <h1 className="text-white text-3xl text-center  ">Task Tracker</h1>
        <div className="globalMin">
          <Link
            className="myButton bg-blue-600 hover:bg-blue-500 ml-5"
            href="/"
          >
            Tüm Görevler
          </Link>
          <Link
            className="myButton bg-green-700 hover:bg-green-600 ml-2"
            href="/GorevEkle"
          >
            Yeni Görev Ekle
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
