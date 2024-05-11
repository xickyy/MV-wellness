import './MensHealth.css'

import men from "./mensHealthImg.jpeg"

const MensHealth = () => {
  return (
    <div>
      <img className='w-96' src={men}></img>

      <p>What are the primary health worries for men?</p>

      Men often shy away from discussing their health concerns, including with their doctors. Yet, delaying check-ups and preventive measures can allow underlying conditions to worsen
      over time. As men age, they face heightened risks of various common conditions,
      including

      <ul className='list-disc'>
        <li>Liver disease</li>
        <li>Lung disease</li>
        <li>Colon cancer</li>
        <li>Erectile Disfunction</li>
        <li>high blood pressure</li>
        <li>stroke</li>
        <li>heart disease</li>
        <li>low testosterone</li>
        <li>diabetes</li>
        <li>prostate cancer</li>
      </ul>

      While some conditions become more prevalent with age, it's crucial to seek regular medical care irrespective of age.

      Men aged 18-40 should undergo yearly physical exams, encompassing preventive screenings for high blood pressure, cholesterol, and diabetes, along with sexually transmitted disease checks
      for sexually active individuals. Those over 40 should maintain annual exams, with frequency potentially increasing with age. Additional screenings like colonoscopies and prostate screening
      checks may be recommended to monitor age-related conditions.

      While genetics and family history play a large role in health, lifestyle choices wield significant influence over health. For example, lack of exercise, poor diet, and smoking, can escalate
      the risk of serious
      health issues. Fortunately, we're here to help mitigate these risks through tailored lifestyle recommendations. We collaborate with you to devise a wellness program aligned with
      your lifestyle, addressing your specific health needs. Recommendations may span initiating an exercise regimen, managing stress effectively,
      and cutting down on alcohol, tobacco use and or other harmful habits, and adopting a balanced diet rich in fruits, vegetables and
      lean proteins.

      How often should you undergo a physical examination?

      How can you reduce health risks?

      Regular physicals, screenings, and adherence to lifestyle recommendations can effectively manage health risks. Consistent care also facilitates early detection of developing conditions,
      enhancing treatment effectiveness. If you're at risk or already have a health condition, we collaborate with you to devise an appropriate treatment plan, which may include therapy,
      medication, surgery, or referrals for specialized care.

      <h1>"At Mountain View Wellness and Family Medical Corporation, we offer comprehensive men's health services, prioritizing your comfort and well-being as we address your health concerns.</h1>
    </div>
  );
}


export default MensHealth
