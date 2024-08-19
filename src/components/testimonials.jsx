import { testimonials } from '../constants';

export default function Testimonials () {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-xl sm:text-1xl lg:text-3xl text-center tracking-wide mb-8 leading-tight lg:leading-tight' id='testimonials'>
        What Our Clients Are Saying
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral-50 rounded-md p-6 text-md border border-neutral-50 font-thin text-secondary_text_color'>
              <p>{testimonial.text}</p>
              <div className='flex mt-8 items-start'>
                <img
                  className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                  src={testimonial.image}
                  alt=''
                />
                <div>
                  <h6 className=' text-neutral-600'>{testimonial.user}</h6>
                  <span className='text-sm font-normal italic text-neutral-600'>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


