import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  user: [],
  comments: [
    {
      image_url: "",
      comment_text: ""
    }
  ],
  categories: [
    {
      title: "Test",
      date_created: "1-23-20"
    }
  ],
  posts: [
    {
      title: "",
      category: "",
      date_created: ""
    }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        comments: state.comments,
        categories: state.categories,
        posts: state.posts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
