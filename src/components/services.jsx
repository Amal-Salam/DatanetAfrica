import { services } from '../constants';
export default function Services() {
  return (
    <div className='flex flex-col items-left mt-6 lg:mt-20' id='services'>
      <div className='mb-8'>Solution for Every Factor</div>
      <div className='text-xl sm:text-1xl lg:text-2xl text-left tracking-wide lg:w-2/3 leading-tight lg:leading-tight'>
        Empower Businesses and institutions with cutting edge data solutions
      </div>
      <div className='flex flex-wrap '>
        {services.map((service, index) => (
          <div key={index} className='w-full h-2/5 sm:w-1/2 lg:w-1/4 p-2 '>
            <div className='p-10 lg:h-[350px] border rounded-xl'>
              <p className='text-lg  mb-8'>
                <p className='text-blue-300'>{service.icon}</p>
                {service.title}
              </p>
              <p className='mb-2 mt-11'>
                <span className='text-xs lg:text-sm text-secondary_text_color text-center mt-6 mr-2'>
                  {service.description}
                </span>
                {/* <span className='text-neutral-400 tracking-tight'>/Month</span> */}
              </p>

              {/* <a
                href='#'
                className='inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200'
              >
                Subscribe
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
