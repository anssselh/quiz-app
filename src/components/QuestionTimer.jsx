"use client";
import { useState, useEffect } from "react";

const QuestionTimer = ({ onTimeUp, setTimePerQuestion, isAnswered, resetTimer }) => {
  const [seconds, setSeconds] = useState(20); // 10 seconds for each question

  useEffect(() => {
    if (!isAnswered && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev - 1);
        setTimePerQuestion(20 - seconds);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (seconds === 0 && !isAnswered) {
      onTimeUp();
    }
  }, [seconds, isAnswered]);

  // Reset the timer whenever a new question is loaded
  useEffect(() => {
    setSeconds(20); // Reset the timer to 10 seconds
  }, [resetTimer]); // `resetTimer` is a prop that changes when a new question is loaded

  return <div className="text-lg  text-black roboto">Temps Restant : {seconds}s</div>;
};

export default QuestionTimer;
