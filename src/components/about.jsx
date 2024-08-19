import AboutImg from '../assets/images/about-img2.jpg';


export default function AboutUs() {
    return (
      <>
        <div className='relative mt-20 border-b border-neutral-800 min-h-[720px] lg:min-h-[500px] ' id='about'>
          <div className='lg:w-2/3'>
            <h3 className='mt-20 font-bold text-1xl sm:text-2xl lg:text-3xl text-left tracking-wide leading-tight mb-10 lg:leading-tight'>
              About Datanet Africa
            </h3>
            <p className='text-lg text-justify sm:text-xl lg:text-1xl lg:text-left tracking-wide lg:w-3/4 leading-tight lg:leading-tight text-secondary_text_color'>
              At Datanet Africa, we specialize in harnessing the power of data
              to drive meaningful insights and enable informed decision-making
              for organizations across diverse industries. In the present
              rapidly evolving business landscape, data has become the
              cornerstone of success, and we are here to ensure that you stay
              ahead of the curve.
              <br />
              <br />
              We believe that every data point holds invaluable potential, and
              by leveraging advanced analytics and technology, we unlock this
              potential to fuel your success.
            </p>
            <div className='relative lg:w-2/3 lg:mt-[-250px] space-x-3 border-dashed  border-cyan-900 lg:ml-[620px] mt-4 items-center z-10 '>
              <div className='hidden lg:block lg:rotate-1 lg:inset-0 lg:bg-purple-200 lg:rounded-tl-full lg:z-20 lg:w-96 lg:h-40'></div>
              <div className='hidden lg:block lg:rotate-20 lg:inset-0 lg:bg-white lg:w-96 lg:h-40 lg:z-30'>
              </div>
              <div className='hidden lg:block lg:rotate-2 lg:inset-0 lg:bg-purple-200 lg:w-80 lg:h-10 rounded-tr-full lg:mt-[-30px] lg:z-40'></div>
              <img
                src={AboutImg}
                className='w-full lg:absolute lg:rotate-10 lg:inset-0 rounded-xl lg:z-50'
                alt='people in office'
              />
            </div>
          </div>
        </div>
      </>
    );
}