"use client";

import React, { useEffect } from "react";

export const LocaleStoreKontrol = () => {
  useEffect(() => {
    console.log("localeStoreKontrol", localStorage.getItem("gorevler"));
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("gorevler") == null ||
      localStorage.getItem("gorevler") == undefined
    ) {
      localStorage.setItem(
        "gorevler",
        JSON.stringify([
          {
            id: 1,
            gorevAdi: "Görev 1",
            gorevAciklamasi:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
          },
          {
            id: 2,
            gorevAdi: "Görev 2",
            gorevAciklamasi:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
          },
          {
            id: 3,
            gorevAdi: "Görev 3",
            gorevAciklamasi:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
          },
          {
            id: 4,
            gorevAdi: "Görev 4",
            gorevAciklamasi:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
          },
          {
            id: 5,
            gorevAdi: "Görev 5",
            gorevAciklamasi:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.",
          },
        ])
      );
    }
  }, []);

  return <></>;
};
