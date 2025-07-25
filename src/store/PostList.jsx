// create the CreateContext

import { createContext, useReducer } from "react";

export const PostList = createContext({
  // isme hame card main jo feature chahiye add like add logic card , post card, delete Card
  PostMe: [],
  AddMe: () => {},
  DeleteMe: () => {},
});

// fivth step to create the myUserReducer who dfine in useReducer ok..
// iska use ham action and currpost ke liye karte hai pk ..
const myUserReducer = (myCurrPost, action) => {
  if (action.type === "Add_Post") {
    return [action.payload, ...myCurrPost];
  }

  return myCurrPost;
};

// third ab PostList ko Provider mian add karge
const PostListProvider = ({ children }) => {
  // fouth step create  the UseReducer

  const [PostMe, DispatchData] = useReducer(myUserReducer, []);

  // Define AddMe and DeleteMe functions
  const AddMe = (firstName, lastName, email, feedback) => {
    DispatchData({
      type: "Add_Post",
      payload: {
        id: Date.now(), // for future use
        firstName,
        lastName,
        email,
        feedback,
      },
    });
  };

  const DeleteMe = (index) => {};

  return (
    <PostList.Provider
      value={{ PostMe: PostMe, AddMe: AddMe, DeleteMe: DeleteMe }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
// now sixth stap add first dummy data from store ok --
/* const DEFAULT_DATA = [
  {
    firstName: "Anjali",
    lastName: "Gupta",
    email: "anjali.g@email.com",
    feedback: "Feedback system is really nice. UX is awesome!",
  },
]; */
