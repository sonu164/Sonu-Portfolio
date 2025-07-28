import { useContext, useRef, useState } from "react";
import { PostList } from "../store/PostList";

function Form() {
  const { AddMe } = useContext(PostList);
  const [success, setSucess] = useState(false);

  const userName = useRef();
  const userLast = useRef();
  const userEmail = useRef();
  const userFeedback = useRef();

  const handleMyForm = (event) => {
    event.preventDefault();

    const firstName = userName.current.value;
    const lastName = userLast.current.value;
    const email = userEmail.current.value;
    const feedback = userFeedback.current.value;

    AddMe(firstName, lastName, email, feedback);

    userName.current.value = " ";
    userLast.current.value = " ";
    userEmail.current.value = " ";
    userFeedback.current.value = " ";

    setSucess(true);

    setTimeout(() => setSucess(false), 8000);
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg border">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
          Feedback Form
        </h2>
        {success && (
          <div>
            <div class="alert alert-success" role="alert">
              Thanks for Gives Your Valueable Feedback...&#128516;
            </div>
          </div>
        )}
        <form className="space-y-4 " onSubmit={handleMyForm}>
          {/* First Name */}
          <div>
            <label className="block font-semibold mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              ref={userName}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-semibold mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              ref={userLast}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              ref={userEmail}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="block font-semibold mb-1">Your Feedback</label>
            <textarea
              name="feedback"
              ref={userFeedback}
              rows="4"
              className="w-full border border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
