import './MensHealth.css'

import men from "./mensHealthImg.jpeg"

const MensHealth = () => {
  return (
    <div>

      <p className='text-center text-4xl mt-8 underline'>Mens health</p>

      <div className='text-2xl p-8'>

        <p className='indent-8'>
          Men often shy away from discussing their health concerns, including with their doctors. Delaying check-ups and preventive measures can allow underlying conditions to worsen
          over time. As men age, they face heightened risks of various common conditions,
          including but not limited to:
        </p>

        <div className='flex w-full'>
          <div>
            <div className='flex justify-around'>
              <ul className='list-disc ml-24 py-8'>
                <li>Liver disease</li>
                <li>Lung disease</li>
                <li>Colon cancer</li>
                <li>Erectile Disfunction</li>
                <li>high blood pressure</li>
              </ul>
              <ul className='list-disc ml-24 py-8' >
                <li>stroke</li>
                <li>heart disease</li>
                <li>low testosterone</li>
                <li>diabetes</li>
                <li>prostate cancer</li>
              </ul>
            </div>

            <div>
              <p className='mb-4 indent-8'>
                While some conditions become more prevalent with age, it's crucial to seek regular medical care irrespective of age.
                Men aged 18-40 should undergo yearly physical exams, encompassing preventive screenings for high blood pressure, cholesterol, and diabetes, along with sexually transmitted disease checks
                for sexually active individuals. Those over 40 years old should maintain annual exams, with frequency potentially increasing with age. Additional screenings like colonoscopies and prostate screening
                checks may be recommended to monitor age-related conditions.
              </p>

              <p className='mb-4 indent-8'>
                While genetics and family history play a large role in health, lifestyle choices have a significant influence over health. For example, lack of exercise, poor diet, and smoking, can escalate
                the risk of serious health issues. Fortunately, we're here to help mitigate these risks through tailored lifestyle recommendations.
              </p>
            </div>
          </div>

          <img className='mens-health-img' src={men} alt=''></img>

        </div>


        <p className='mb-4 indent-8'>
          We collaborate with you to devise a wellness program aligned with
          your lifestyle, addressing your specific health care needs. Recommendations may span initiating an exercise regimen, managing stress effectively,
          and cutting down on alcohol, tobacco use and or other harmful habits. Furthermore adopting a balanced diet rich in fruits, vegetables and lean proteins is beneficial for health promotion.
          Regular physicals, screenings, and adherence to lifestyle recommendations can effectively manage health risks.
        </p>

        <p className='mb-4 indent-8'>
          Consistent care also facilitates early detection of developing conditions, enhancing treatment effectiveness with early intervention. If you're at risk or already have a health condition,
          we collaborate with you to devise an appropriate treatment plan, which may include therapy, medication, surgery, or referrals for specialized care if indicated.
        </p>

        <h2 className='text-center'>At Mountain View Wellness and Family Medical Corporation, we offer comprehensive men's health services, prioritizing your comfort and well-being as we address your health concerns.</h2>
      </div>
    </div>
  );
}


export default MensHealth
