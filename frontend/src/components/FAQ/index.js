import React from 'react';
import './FAQ.css';
import Question from '../Question';

const FAQ = () => {
  return (
    <div className="max-w-lg mx-auto FAQ-container">
      <h1 className="text-3xl font-semibold text-center mb-6 mt-6">Frequently Asked Questions</h1>
      <div className="space-y-4 mb-4">
        <Question
          question="Do we accept patients without insurance?"
          answer="answer will go here"
        />

        <Question
          question="Do we accept walk in's?"
          answer="answer will go here"
        />

        <Question
          question="Do we accept children?"
          answer="answer will go here"
        />

        <Question
          question="Question will go here"
          answer="answer will go here"
        />

        <Question
          question="Question will go here"
          answer="answer will go here"
        />

        <Question
          question="Question will go here"
          answer="answer will go here"
        />

        <Question
          question="Question will go here"
          answer="answer will go here"
        />
      </div>
    </div>
  );
};

export default FAQ;
