import './Contact.css';
import GoogleMap from '../GoogleMap/'

const Contact = () => {
  return (
    <div>
      <p className='text-center my-6 text-3xl font-semibold'>Get in touch!</p>

      <div className='block md:flex justify-evenly mx-8'>
        <div>
          call us/locate us/ make an appointment
        </div>
        <div>
          get directions
        </div>
        <div>
          leave a review
        </div>
      </div>

      <div className='border-b-2 border-t-2 border-black'>
        <GoogleMap />
      </div>
    </div>
  );
}


export default Contact;
