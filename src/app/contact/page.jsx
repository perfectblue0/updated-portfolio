"use client";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [sent, isSent] = useState(false);
  const [error, setError] = useState(true);

  // todo: need to download mailjs and import

  const form = useRef();

  const sendMessage = (m) => {
    m.preventDefault();
    setError(false);
    isSent(false);

    // todo: create .env file, get key, save key, finish this function with key and other info needed (service id, template id, etc.)
  };

  return (
    <div className="flex justify-center py-12 px-8">
      <form
        ref={form}
        onSubmit={sendMessage}
        className=" flex flex-col justify-center text-xl gap-5  p-10 lg:full lg:w-1/2"
      >
        <span>Write your message here:</span>
        <textarea name="user_message" className="rounded" rows={10}></textarea>
        <span>Your email address:</span>
        <input name="user_email" type="text" className="rounded" />
        <button className="bg-transparent rounded text-gray-800 border border-gray-500 hover:bg-sky-800 transition ease-out duration-500 p-2 mb-2 hover:text-white">
          Send
        </button>
        {sent && (
          <span className="text-green-500 font-bold">
            Your message has been sent
          </span>
        )}
        {error && (
          <span className="text-red-500 font-bold">
            Something went wrong, email me directly at aviddev77@gmail.com
          </span>
        )}
      </form>
    </div>
  );
}
