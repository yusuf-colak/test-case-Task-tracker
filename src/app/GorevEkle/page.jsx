"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9); // Rastgele ID oluşturma
};

const Page = () => {
  const router = useRouter();

  const [gorevler, setGorevler] = useState(null);
  const [eskiGorevler, setEskiGorevler] = useState("");

  const eskiGorevleriGetir = () => {
    const storedGorevler = localStorage.getItem("gorevler");
    if (storedGorevler !== null) {
      setEskiGorevler(JSON.parse(storedGorevler));
    }
  };

  useEffect(() => {
    eskiGorevleriGetir();
  }, []);

  const handleChange = (e) => {
    setGorevler({
      ...gorevler,
      [e.target.name]: e.target.value,
      id: generateRandomId(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("görev eklendi");
    localStorage.setItem("gorevler", JSON.stringify(eskiGorevler));
  };

  const gorevEkle = () => {
    if (
      gorevler == null ||
      gorevler.gorevAdi == "" ||
      gorevler.gorevAciklamasi === ""
    ) {
      toast.error("Lütfen Görev Adı ve Görev Açıklaması Giriniz");
    } else {
      setEskiGorevler([...eskiGorevler, gorevler]);
      toast.success("Görev Eklendi");
      router.push("/");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <form
          className="flex flex-col w-10/12 max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h1 className="mb-5 flex justify-center items-center text-3xl ">
            Görev Ekle
          </h1>
          <hr className="mb-5" />
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Görev Adı</span>
            </label>
            <input
              type="text"
              placeholder="Görev Adı"
              onChange={handleChange}
              className="input input-bordered w-full "
              name="gorevAdi"
            />
            <label className="label">
              <span className="label-text-alt"></span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Görev Açıklaması</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              type="text "
              onChange={handleChange}
              name="gorevAciklamasi"
              placeholder="Görev Açıklaması"
            ></textarea>
            <label className="label">
              <span className="label-text-alt"></span>
            </label>
          </div>
          <div className="flex justify-center items-center ">
            <button
              className="myButton bg-green-700 hover:bg-green-600 w-10/12  max-w-md"
              type="submit"
              onClick={gorevEkle}
            >
              Görev Ekle
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
