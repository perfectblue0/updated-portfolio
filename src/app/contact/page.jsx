"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

export default function ContactPage() {
  const [sent, isSent] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    setError(false);
    isSent(false);

    const sanitizedMessage = DOMPurify.sanitize(
      form.current.user_message.value
    );

    const isValidEmail = validateEmail(form.current.user_email.value);
    if (!isValidEmail) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          ...form.current,
          user_message: sanitizedMessage,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        // eslint-disable-next-line no-unused-vars
        (result) => {
          isSent(true);
          form.current.reset();
        },
        (err) => {
          console.log(err.text);
          setError(true);
        }
      );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/;

    return emailRegex.test(email);
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
