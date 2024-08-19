export default function Card() {
  return (
    <div>
      <div className='h-52 ml-11 lg:ml-48 float-left  w-72 lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl'>
        <div className='p-6'>
          <h5
            className='text-center mr-4 mb-2 
                                   block font-sans text-xl 
                                   font-semibold text-blue-gray-900 
                                   antialiased'
          >
            Reach Us At
          </h5>
          <ul>
            <li className='mt-2'>
              <span>
                <i className='fa fa-phone mr-2'></i>{' '}
              </span>
              +91-9998887776
            </li>
            <li className='mt-2'>
              <span>
                <i className='fa fa-envelope mr-2'></i>{' '}
              </span>
              <span>datanetafrica@gmail.org</span>
            </li>
            <li className='mt-2'>
              <span>
                <i className='fa-solid fa-map-pin mr-2'></i>
              </span>
              Somewhere is maiguguri or in chad
              <span className='pl-4'>
                or in the future in switzerland and abuja
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className=' lg:mr-36 lg:mt-16 text-center float-right 
                         w-2/3 lg:w-1/3 flex-col rounded-xl 
                         bg-white text-gray-700 shadow-2xl sm:mt-[100px]'
      >
        <div className='p-6 '>
          <h5
            className='mb-2 block font-sans 
                                   text-xl font-semibold 
                                   text-blue-gray-900 antialiased'
          >
            Branding & Collaboration
          </h5>
          <i className='fa fa-handshake fa-2xl'></i>
          <div className='text-left mt-4'>
            <span>
              <i className='fa fa-envelope mr-2'></i>{' '}
            </span>
            <span>collaboration@datanetafrica.org</span>
          </div>
          <div className='mt-2 text-left'>
            <span>
              <i className='fa-solid fa-map-pin mr-2'></i>{' '}
            </span>
            A really nice and chill environment tbh
            <span className='pl-5'>maiduguri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
