import './Contact.css';
import GoogleMap from '../GoogleMap/'
import googlepng from './google.png'

const Contact = () => {
  return (
    <div>
      <p className='text-center my-6 text-3xl font-semibold underline'>Get in touch!</p>

      <div className='block md:flex justify-evenly mx-8'>
        <div className='md:w-2/6 md:pl-24'>

          <p className='text-lg text-center mb-4'>Feel free to give us a call at any time during our operating hours shown below.</p>

          <div className='w-full px-4 mb-2'>
            <h3 className='text-xl custom-footer-hours mt-8 text-center md:mt-0'>Hours Of Operation:</h3>
            <p className='mt-2 text-center'>Monday - Friday:</p>
            <p className='mt-1 text-green-600 text-center'>9:00am - 5:00pm</p>
            <div className='mt-2'>
              <p className='mt-1 text-center'>Saturday - Sunday:</p>
              <p className='text-red-600 text-center'>Closed</p>
            </div>
          </div>

          <div className='flex justify-center custom-header-directions mb-4 mr-4'>
            <a className='text-blue-800 ml-2 pr-2 custom-footer-number' href='tel:661-947-3300'>
              <i className="fas fa-phone mr-2 custom-phone-icon text-black"></i>
              (661)-947-3300
            </a>
          </div>

        </div>

        <div className='md:w-2/6 md:px-12'>
          <p className='text-lg text-center mb-4'>Click on the Google logo to go straight to our Google business profile where you can get an overview about Mountain View Wellness as well as see all reviews or leave a review</p>

          <div className='flex justify-center mb-4'>
            <a className='' href='https://www.google.com/maps/place/Mountain+View+Wellness+and+Family+Medical+Corporation/@34.5835745,-118.140039,17z/data=!4m16!1m9!3m8!1s0x80c2593aa5e9ecd5:0xe0bf4e09ace3a629!2sMountain+View+Wellness+and+Family+Medical+Corporation!8m2!3d34.5835745!4d-118.140039!9m1!1b1!16s%2Fg%2F11vz5lv3v6!3m5!1s0x80c2593aa5e9ecd5:0xe0bf4e09ace3a629!8m2!3d34.5835745!4d-118.140039!16s%2Fg%2F11vz5lv3v6?entry=ttu' target='blank'>
              <img className='w-36 google-button' src={googlepng}></img>
            </a>
          </div>
        </div>

        <div className='md:w-2/6 md:pr-24'>
          <p className='text-lg text-center'>To get directions to our clinic you may click on the take me there buttom below! </p>
          <div className='flex justify-center custom-header-directions mt-12 mr-4'>
            <a className='mr-2 text-blue-800 font-bold custom-header-directions-text' href="https://www.google.com/maps/dir/?api=1&destination=34.5835789,-118.1404100" target="_blank" rel="noreferrer">
              <i className="ml-2 mr-2 fa-solid fa-location-dot text-black"></i>
              Take Me There!
            </a>
          </div>
        </div>
      </div>

      <div className='border-b-2 border-t-2 border-black'>
        <GoogleMap />
      </div>
    </div>
  );
}


export default Contact;
