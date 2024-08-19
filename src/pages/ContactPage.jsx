import Navbar from '../components/header';
import Icons from '../components/icons';
import Card from '../components/card';
import Feedback from '../components/feedback'
import Footer from '../components/footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className='lg:max-w-7xl lg:mx-auto lg:pt-0 lg:px-14 mt-10'>
        <Icons />
        <Card />
      </div>
      <div className='mt-[480px] lg:mt-auto'>
        <Feedback />
      </div>
      <div className='object-bottom mt-[980px]'>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
