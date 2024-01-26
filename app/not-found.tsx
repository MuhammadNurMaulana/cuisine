"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { push } = useRouter();
  return (
    <div>
      <title>404 Page Not Found</title>
      <div className="bg-bg-restaurant bg-cover bg-center w-screen h-screen flex items-center justify-center relative">
        <div className={`p-4 flex flex-col items-center gap-4`}>
          <h1 className="text-8xl">404</h1>
          <h3 className="text-3xl">Page not found </h3>
          <button type="button" onClick={() => push("/")} className={`bg-teal-500  text-white text-2xl py-2 px-4 rounded-md hover:bg-teal-700`}>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}
