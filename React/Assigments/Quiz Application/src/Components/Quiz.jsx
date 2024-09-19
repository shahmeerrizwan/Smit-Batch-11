import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marks, setMarks] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple"
        );
        const formattedQuestions = response.data.results.map((question) => ({
          ...question,
          options: [
            ...question.incorrect_answers,
            question.correct_answer,
          ]
        }));
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const checkAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentIndex].correct_answer) {
      setMarks((prevMarks) => prevMarks + 1);
    }
    if (currentIndex + 1 === questions.length) {
      toggleModal();
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const obtainedMarks = questions.length ? (marks / questions.length) * 100 : 0;

  const totalMarks = () => {
    return obtainedMarks >= 70 ? (
      <h2>Congratulations You Are Passed 🫡</h2>
    ) : (
      <h2>
        You Are Fail 😢 <br /> Better Luck Next Time 🥹{" "}
      </h2>
    );
  };

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      setCurrentIndex(0);
      setMarks(0);
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="p-2">
        <div className="container">
          {questions.length > 0 ? (
            <>
              <div className="p-2 mb-3 bg-light rounded shadow">
                <p className="text-center fw-semibold">
                  Question {currentIndex + 1} / {questions.length}
                </p>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: questions[currentIndex].question,
                  }}
                />
              </div>
              <div className="row fw-semibold">
                {questions[currentIndex].options.map((option, i) => (
                  <div key={i} className="col-md-4 p-2">
                    <button
                      onClick={() => checkAnswer(option)}
                      className="btn w-100 btn-danger rounded-0"
                      dangerouslySetInnerHTML={{ __html: option }}
                    />
                  </div>
                ))}
              </div>
              <div className="right">
                {currentIndex < questions.length - 1 && (
                  <button
                    onClick={() =>
                      setCurrentIndex((prevIndex) => prevIndex + 1)
                    }
                    className="btn btn-success rounded-2 fw-semibold"
                  >
                    Skip
                  </button>
                )}
                <p className="fw-bolder">Total Marks: {marks}</p>
              </div>
            </>
          ) : (
            <p>Loading questions...</p>
          )}
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2 className="h1-1">Quiz Completed</h2>
            <p className="p-l-1">QUIZ APP</p>
            {totalMarks()}
            <p>
              <i>Remember "Practice Makes Perfect 💯"</i>
            </p>
            <h4>
              Correct answers: {marks} out of {questions.length}
            </h4>
            <h3>Your Percentage: {obtainedMarks.toFixed(2)}%</h3>
            <button
              onClick={toggleModal}
              className="btn btn-danger d-flex justify-content-center shadow m-auto"
            >
              Restart Quiz
            </button>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
