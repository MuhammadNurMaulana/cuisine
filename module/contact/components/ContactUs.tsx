"use client";
import { Playfair_Display } from "next/font/google";
import React, { FormEvent, useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function ContactUs() {
  const [pesan, setPesan] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();

    if (
      formData.get("name") == null ||
      formData.get("email") == null ||
      formData.get("subject") == null ||
      formData.get("message") == null ||
      formData.get("name") == "" ||
      formData.get("email") == "" ||
      formData.get("subject") == "" ||
      formData.get("message") == ""
    ) {
      setPesan(true);
    } else {
      const data = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const res = await data.json();

      if (res && res.id) {
      } else {
        alert("Thank you for contacting me. The form you filled out was sent to me late.");
      }

      setPesan(false);
    }
  };

  return (
    <div className="md:mt-32">
      <div className="w-[80%] md:w-1/2 mx-auto">
        <h1 className={`${playfair.className} text-3xl md:text-5xl text-center mb-4`}>Book A Table</h1>
        <p className="text-center">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
      </div>
      <form onSubmit={submit} className="w-[70%] md:w-[60%] mx-auto mt-12">
        <div className="grid mx-auto gap-12">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="rounded-md border border-neutral-500 focus:border-neutral-700 p-2" placeholder="Enter Your Name" />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" className="rounded-md border border-neutral-500 focus:border-neutral-700 p-2 placeholder:text-sm placeholder:font-bold" placeholder="Enter Your Email" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" className="rounded-md border border-neutral-500 focus:border-neutral-700 p-2 placeholder:text-sm placeholder:font-bold" placeholder="Enter Your Subject" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols={5} rows={5} className="rounded-md border border-neutral-500 focus:border-neutral-700 p-2" placeholder="Enter Your Message" />
          </div>
        </div>
        {pesan && <p className="text-red-500 text-center mt-4 font-bold text-sm">Please fill in the form</p>}
        <button type="submit" className="w-full bg-primary rounded-full font-bold text-white py-2 md:py-4 mt-8">
          Send
        </button>
      </form>
    </div>
  );
}
