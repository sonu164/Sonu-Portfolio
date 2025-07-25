import { PostList } from "../store/PostList";
import Data from "./DummyData";
import { useContext } from "react";
function Card() {
  const { PostMe } = useContext(PostList);
  return (
    <>
      <div class="container text-center">
        <div className="flex justify-evenly  overflow-x-auto scrollbar-hidden gap-4 px-4 py-10">
          {PostMe.map((cards, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-xl p-6 w-full sm:w-[45%] lg:w-[30%] max-w-md"
            >
              <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                {cards.firstName} {cards.lastName}
              </h2>

              <p className="text-sm text-gray-700 mb-1">
                <span className="font-semibold">Email:</span> {cards.email}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-1">Feedback:</h3>
                <p className="text-gray-600">{cards.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
