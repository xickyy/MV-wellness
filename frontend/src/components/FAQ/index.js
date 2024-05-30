import React from 'react';
import './FAQ.css';
import Question from '../Question';

const FAQ = () => {
  return (
    <div className='p-4 FAQ-container'>
      <div className="md:w-3/5 lg:w-2/5 mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6 pt-6">Frequently Asked Questions</h1>
        <div className="space-y-4 mb-4">

          <Question
            question="Do we accept patients without insurance?"
            answer="Yes, you do not need insurance to be seen here. We offer competitive pricing on all our services, ensuring accessibility for uninsured individuals."
          />

          <Question
            question="What should I bring to my appointment?"
            answer="Kindly remember to bring along your insurance card and identification, as well as any pertinent documents from recent ER visits and a comprehensive list of your current medications
            to every appointment."
          />


          <Question
            question="Do we accept children?"
            answer="While pediatric care is not our primary focus, we do accommodate sick visits for children in cases where securing an appointment with their primary pediatrician proves challenging."
          />

          <Question
            question="What insurance do we accept?"
            answer="ask jesse"
          />

          <Question
            question="What forms of payment do we accept"
            answer="ask jesse!!!"
          />


          <Question
            question="Do we accept walk in's?"
            answer="We do accommodate walk-in appointments, although we do have limited availability therefore we highly recommend arriving early in the day or contacting
            us in advance to secure your spot. We prioritize sick visits, pain, and other urgent considerations"
          />

          <Question
            question="How do I schedule an appointment?"
            answer="At present, we are unable to facilitate online scheduling. We kindly ask you to reach out to our office directly for appointment arrangements. However, we will ensure to keep you
           informed about any advancements in online scheduling options."
          />

          <Question
            question="How do I reach someone for medical advice after hours?"
            answer="Unfortunately, this service is currently unavailable. Nonetheless, we will be sure to keep you updated should this service become accessible in the future."
          />

          <Question
            question="Do you have interpreters available for non-English-speaking patients?"
            answer="While we do not employ licensed interpreters, we do have bilingual staff members readily available at all times. For languages other than English or Spanish, we suggest bringing
           a friend or family member who can assist as a spokesperson on your behalf."
          />

          <Question
            question="Are telemedicine appointments available?"
            answer="Absolutely! We understand that people lead busy lives, and we are more than happy to accommodate your schedule."
          />

          <Question
            question="What should I do if I have concerns about my treatment plan?"
            answer="If you have any concerns regarding your treatment plan, it is important to recognize that you are in control of your own care. Please openly discuss any worries or questions with your
           provider, and together, we will tailor an individualized plan to meet your needs."
          />

          <Question
            question="How long will I have to wait for my appointment?"
            answer="The duration of your appointment will largely depend on its type, whether it's an annual physical, sick visit, follow-up, etc. Nonetheless, we strive to accommodate your needs to the
           best of our ability."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
