import './WomensHealth.css';

import women from './women.jpeg'

const WomensHealth = () => {
    return (
            <div className='service-background-gradient'>

              <p className='text-center text-4xl pt-8 underline'>Womens health</p>

              <div className='text-2xl p-4 md:p-8'>

                <p className='mb-4 indent-8'>
                Women's health is a specialized field of medicine focusing on conditions and diseases that primarily or exclusively affect women. This area of healthcare is crucial
                 due to the unique physiological and hormonal differences between women and men, which can influence the presentation, progression, and treatment of various health issues.
                </p>

                <p className='indent-8'>
                Here at Mountain View Wellness we address conditions that predominantly impact women, often involving female sex hormones, reproductive organs, and other health issues specific to women.
                We specialize in treating various women’s health conditions, including:
                </p>

                  <div className='flex justify-around pl-4 md:px-0'>
                    <ul className='list-disc md:ml-24 py-8'>
                      <li>Breast Cancer</li>
                      <li>Osteoporosis</li>
                      <li>Menopause symptom management</li>
                      <li>Cervical Cancer</li>
                      <li>Pelvic inflammatory disease</li>
                    </ul>
                    <ul className='list-disc md:ml-24 py-8' >
                      <li>Endometriosis</li>
                      <li>Ovarian Cancer</li>
                      <li>Uterine fibroids</li>
                      <li>Pelvic organ prolapses</li>
                      <li>Ovarian cysts</li>
                    </ul>
                  </div>

                <img className='hidden md:block mens-health-img' src={women} alt=''></img>

                <img className='md:hidden mens-health-mobile-style' src={women} alt=''></img>


                <p className='mb-4 indent-8'>
                A well-woman exam is a cornerstone of preventive healthcare for women. This annual examination is designed to ensure overall health, with a particular focus on sexual and reproductive health.
                 It provides an opportunity for women to engage with their healthcare provider about various topics, including:
                </p>

                <div className='flex justify-around pl-4 md:px-0'>
                    <ul className='list-disc md:ml-24 py-8'>
                      <li>Contraceptives</li>
                      <li>STD and STI Testing</li>
                      <li>Hormonal Imbalances</li>
                      <li>Cancer Screenings</li>
                    </ul>
                    <ul className='list-disc md:ml-24 py-8' >
                      <li>Pap Smear</li>
                      <li>Mammogram</li>
                      <li>Pelvic Exam</li>
                      <li>Colorectal Screening</li>
                    </ul>
                  </div>

                <p className='mb-4 indent-8 custom-while-genetics'>
                During a well-woman exam, we may conduct preventive screenings for cervical cancer, endometrial cancer, breast cancer, and colorectal cancer to ensure your ongoing health and wellness.
                </p>

                <p className='mb-4 indent-8 custom-we-collab'>
                We aim to identify any underlying causes of your symptoms or concerns and offer personalized treatment options that align with your lifestyle and health needs.
                In conclusion, women's health is a comprehensive field dedicated to addressing the specific health needs of women. Regular well-woman exams and preventive care are key to maintaining
                 health and well-being, allowing for early detection and effective management of various conditions. Through personalized care and treatment, women can achieve and maintain optimal
                  health throughout their lives.
                </p>


                <h2 className='text-center'>At Mountain View Wellness and Family Medical Corporation, we offer comprehensive men's health services, prioritizing your comfort and well-being as we address your health concerns.</h2>
              </div>
            </div>
    );
};

export default WomensHealth;
