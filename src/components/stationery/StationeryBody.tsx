"use client";

import { useEffect } from "react";

export function StationeryBody() {
  useEffect(() => {
    document.body.classList.add("is-stationery");
    return () => {
      document.body.classList.remove("is-stationery");
    };
  }, []);

  return null;
}
