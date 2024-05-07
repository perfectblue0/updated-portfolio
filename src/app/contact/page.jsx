"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [sent, isSent] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    setError(false);
    isSent(false);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          isSent(true);
          form.current.reset;
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  return (
    <div className="flex justify-center py-12 px-8">
      <form
        ref={form}
        onSubmit={sendMessage}
        className="flex flex-col justify-center text-xl gap-5 p-10 xs:w-[90%] w-[80%] lg:w-[70%] xl:w-[60%]"
      >
        <span>Write your message here:</span>
        <textarea name="user_message" className="rounded" rows={10}></textarea>
        <span>Your email address:</span>
        <input name="user_email" type="text" className="rounded p-2" />
        <button className="bg-transparent rounded text-gray-800 border border-gray-500 hover:bg-sky-800 transition ease-out duration-500 p-2 mb-2 hover:text-white">
          Send
        </button>
        {sent && (
          <span className="text-green-600 font-bold">
            Your message has been sent
          </span>
        )}
        {error && (
          <span className="text-red-600 font-bold">
            Something went wrong, email me directly at aviddev77@gmail.com
          </span>
        )}
      </form>
    </div>
  );
}
