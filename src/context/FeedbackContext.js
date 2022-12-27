import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // const [feedback, setFeedback] = useState([
  //   {
  //     id: 1,
  //     text: "This item is from context",
  //     rating: 10,
  //   },
  // ]);
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function editFeedback(item) {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  }

  function updateFeedback(id, updItem) {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
