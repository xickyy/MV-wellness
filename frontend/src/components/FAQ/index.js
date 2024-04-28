import React from 'react';
import './FAQ.css';
import Question from '../Question';

const FAQ = () => {
  return (
    <div className="max-w-lg mx-auto FAQ-container">
      <h1 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4 mb-4">
        <Question
          question="Do we accept patients without insurance?"
          answer="Yes! We off a 24 hour emergency garage door repair service. Call or text us at (661) 202-8255"
        />

        <Question
          question="Do we accept walk in's?"
          answer="Yes! But please call or text and we will get you in the next appointment slot we have available, Sometimes we can come right away! (661) 202-8255"
        />

        <Question
          question="Do we accept children?"
          answer="That all depends on the type of repair you need. Please call or Text us to talk about the details. Our phone number is: (661) 202-8255"
        />

        <Question
          question="What type of insurances do we accept?"
          answer="We are based in Palmdale Ca. and Lancaster Ca. however we cover most of the Antelope Valley including Littlerock, Lake Los Angeles, Quartz Hill, Rosamond, Mojave, and everything in between! Our phone number is: (661) 202-8255"
        />

        <Question
          question="Do you sell new Garage Doors?"
          answer="Yes! On top of repairs we also sell new garage doors. Please call us for more details at (661) 202-8255"
        />
      </div>
    </div>
  );
};

export default FAQ;
