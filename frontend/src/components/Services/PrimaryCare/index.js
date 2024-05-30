import './PrimaryCare.css';
import steth from '../images/Stethescope.jpeg'

const PrimaryCare = () => {
  return (
    <div className='service-background-gradient'>

              <p className='text-center text-4xl pt-8 underline'>Primary Care</p>

              <div className='text-2xl p-4 md:p-8'>
                <img className='hidden md:block mens-health-img' src={steth} alt=''></img>

                <p className='mb-4 indent-8'>
                At our clinic, we believe that primary care is the cornerstone of a healthy life. Primary care is your first point of contact for health and wellness, offering a
                 comprehensive approach to maintaining your well-being. Here's a quick overview of what primary care involves and how it can benefit you.
                </p>

                <p className='indent-8'>
                Primary care is a broad field of medicine focused on the overall health of individuals and families. It encompasses:
                </p>

                  <div className='flex justify-around pl-4 md:px-0'>
                    <ul className='list-disc md:ml-24 py-8'>
                      <li>Preventive Care: Routine check-ups, immunizations, screenings, and counseling to prevent illnesses before they start.</li>
                      <li>Chronic Disease Management: Ongoing care and monitoring for conditions like diabetes, hypertension, and asthma to keep them under control and reduce complications.</li>
                      <li>Acute Care: Treatment for sudden illnesses or injuries, such as infections, sprains, and minor cuts.</li>
                      <li>Coordination of Care: Referrals to specialists when necessary and coordination of treatment plans to ensure comprehensive care.</li>
                    </ul>
                  </div>


                <img className='md:hidden mens-health-mobile-style' src={steth} alt=''></img>


                <p className='mb-4 indent-8'>
                Why is Primary Care Important?
                </p>

                <div className='flex justify-around pl-4 md:px-0'>
                    <ul className='list-disc md:ml-24 py-8'>
                      <li>Holistic Approach: Primary care providers consider all aspects of your health—physical, mental, and social.</li>
                      <li>Continuity of Care: Building a long-term relationship with your primary care provider ensures better personalized care.</li>
                      <li>Early Detection: Regular visits help catch health issues early, when they are most treatable.</li>
                      <li>Cost-Effective: Preventive care and early treatment can save you money in the long run by avoiding more serious health problems.</li>
                    </ul>
                  </div>




                <h2 className='text-center'>At Mountain View Wellness and Family Medical Corporation, we offer patient centered services, prioritizing your comfort and well-being as we address your health concerns.</h2>
              </div>
            </div>
  );
}

export default PrimaryCare;
