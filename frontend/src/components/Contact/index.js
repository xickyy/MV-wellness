import './Contact.css';
import GoogleMap from '../GoogleMap/'

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

          <div className='flex flex justify-center custom-header-directions mb-4 mr-4'>
              <a className='text-blue-800 ml-2 pr-2 custom-footer-number' href='tel:661-947-3300'>
                <i className="fas fa-phone mr-2 custom-phone-icon text-black"></i>
                (661)-947-3300
              </a>
            </div>

        </div>

        <div className='md:w-2/6 md:px-12'>
          leave a review
        </div>

        <div className='md:w-2/6 md:pr-24'>
          get directions
        </div>
      </div>

      <div className='border-b-2 border-t-2 border-black'>
        <GoogleMap />
      </div>
    </div>
  );
}


export default Contact;
