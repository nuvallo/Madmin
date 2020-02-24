import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  user: [],
  comments: [
    {
      image_url: "",
      comment_text: "Test Comment",
      id: ""
    }
  ],
  categories: [
    {
      title: "Test",
      date_created: "1-23-20",
      id: ""
    }
  ],
  posts: [
    {
      title: "",
      category: "",
      date_created: "",
      id: ""
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
