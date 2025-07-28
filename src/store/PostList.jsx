import { ref, push, onValue } from "firebase/database";
import { db } from "../firebase.config.js";
import { createContext, useReducer, useEffect } from "react";

// 1. Create Context
export const PostList = createContext({
  PostMe: [],
  AddMe: () => {},
});

// 2. Reducer
const myUserReducer = (state, action) => {
  if (action.type === "Add_Post") {
    return [action.payload, ...state];
  }

  if (action.type === "Load_Posts") {
    return action.payload;
  }

  return state;
};

// 3. Provider
const PostListProvider = ({ children }) => {
  const [PostMe, DispatchData] = useReducer(myUserReducer, []);

  // AddMe Function (to push into Firebase and local state)
  const AddMe = (firstName, lastName, email, feedback) => {
    const feedbackData = {
      firstName,
      lastName,
      email,
      feedback,
      createdAt: new Date().toISOString(),
    };

    // Push to Firebase Realtime DB
    const feedbackRef = ref(db, "feedbacks");
    push(feedbackRef, feedbackData);

    // Optional: Add to local immediately
    /*    DispatchData({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        ...feedbackData,
      },
    }); */
  };

  // Fetch feedback from Firebase
  useEffect(() => {
    const myFeedback = ref(db, "feedbacks");

    const unsubscribe = onValue(myFeedback, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const feedbackList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        DispatchData({
          type: "Load_Posts",
          payload: feedbackList.reverse(), // latest first
        });
      }
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <PostList.Provider value={{ PostMe, AddMe }}>{children}</PostList.Provider>
  );
};

export default PostListProvider;
