import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sjbx67a", // replace with your EmailJS service ID
        "template_0nva3m8", // replace with your EmailJS template ID
        form.current,
        "ga-1dHvrw5Sb9gMUN" // replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          alert("Failed to send message, try again.");
        }
      );
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold pt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400">
        C O N T A C T
      </h1>
      <div className="pl-10 pr-10 text-white text-center font-bold mt-8">
        <h4>Feel free to contact me by filling out the form below.</h4>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col bg-gray-800 p-8 rounded-lg mt-8 w-full max-w-md shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="mb-4 px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
          rows={5}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 text-gray-900 font-bold py-2 rounded hover:scale-105 transition-transform"
        >
          Send
        </button>
        {sent && (
          <span className="text-green-400 mt-4">
            Message sent successfully!
          </span>
        )}
      </form>
    </div>
  );
}

export default Contact;
