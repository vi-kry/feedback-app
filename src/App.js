import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
// import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
// import FeedbackData from "./data/FeedBackData";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);

  // function addFeedback(newFeedback) {
  //   newFeedback.id = uuidv4();
  //   setFeedback([newFeedback, ...feedback]);
  // }

  // moving deleteFeedback function to FeedbackContext
  // function deleteFeedback(id) {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {/* <FeedbackForm handleAdd={addFeedback} /> */}
                  <FeedbackForm />
                  <FeedbackStats />
                  {/* <FeedbackList handleDelete={deleteFeedback} /> */}
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;

//   const title = "Blog post";
//   const body = "This is blog post";

//   const comments = [
//     { id: 1, text: "Comment one" },
//     { id: 2, text: "Comment two" },
//     { id: 3, text: "Comment three" },
//   ];

//   const loading = false;
//   const showComments = true;
//   const commentBlock = (
//     <div className="comments">
//       <h3>Comments ({comments.length})</h3>
//       <ul>
//         {comments.map((comment, index) => (
//           <li key={comment.id}>{comment.text}</li>
//         ))}
//       </ul>
//     </div>
//   );

//   if (loading) return <h1>Loading...</h1>;
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", {}, "My App")
//   );

//   return (
//     <div className="container">
//       {/* <h1>My App</h1>  */}
//       <h1>{title.toUpperCase()}</h1>
//       <p>{body}</p>
//       {/* {Math.random() * (5 + 5)} */}
//       {showComments && commentBlock}
//     </div>
//   );
