"use client";

import React, { useState, useEffect } from "react";

const Main = () => {
  const [gorevler, setGorevler] = useState([]);
  const [seciliGorevler, setSeciliGorevler] = useState([]);
  useEffect(() => {
    setGorevler(JSON.parse(localStorage.getItem("gorevler")) || []);
  }, []);

  const handleCheckboxChange = (e, id) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setSeciliGorevler((prev) => [...prev, id]);
    } else {
      setSeciliGorevler((prev) => prev.filter((gorevId) => gorevId !== id));
    }
  };

  const handleDelete = () => {
    const yeniGorevler = gorevler.filter(
      (gorev) => !seciliGorevler.includes(gorev.id)
    );
    setGorevler(yeniGorevler);
    setSeciliGorevler([]);

    localStorage.setItem("gorevler", JSON.stringify(yeniGorevler));
  };

  return (
    <div className=" overflow-x-auto flex justify-center items-center table-xs sm:table-lg	">
      <table className="table table-zebra w-9/12 ">
        <thead>
          <tr>
            <th></th>
            <th className="w-1/4 text-lg">Görev Adı</th>
            <th className="w-3/4 text-lg">Görev Açıklaması</th>
            <th>
              <button className="btn btn-error btn-sm	 " onClick={handleDelete}>
                SİL
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {gorevler.map((gorev, index) => (
            <tr key={gorev.id}>
              <th>{index + 1}</th>
              <td>
                <p>{gorev.gorevAdi}</p>
              </td>
              <td
                className="text-justify"
              >
                <p>{gorev.gorevAciklamasi}</p>
              </td>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={seciliGorevler.includes(gorev.id)}
                    onChange={(e) => handleCheckboxChange(e, gorev.id)}
                  />
                </label>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
