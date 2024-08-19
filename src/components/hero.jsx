import HeroImg from '../assets/images/hero-image2.jpeg';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import {Link} from 'react-router-dom'
export default function Hero (){
    return (
      <div className='flex flex-col items-left mt-6 lg:mt-20'>
        <div className='mb-8'>Data Solution Agency</div>
        <div className='text-3xl sm:text-4xl lg:text-6xl text-left tracking-wide lg:w-3/4 leading-tight lg:leading-tight'>
          Data-Driven Solutions To Help{' '}
          <span className='font-semibold bg-gradient-to-t from-red-400 to-red-700 text-transparent bg-clip-text'>
            Organizations{' '}
          </span>{' '}
          Make Informed Decisions &{' '}
          <span className='font-semibold bg-gradient-to-t from-red-400 to-red-700 text-transparent bg-clip-text'>
            Achieve
          </span>{' '}
          Their Goals.
        </div>
        <div className='w-1/4 flex lg:space-x-6 items-center mt-2  '>
          <div className='w-11 h-11 shrink-0 grow-0 py-2 px-3 border rounded-full bg-gradient-to-r from-red-400 to-red-700'>
            <Link to='instagram'>
              <Instagram />
            </Link>
          </div>
          <div className='w-11 h-11 shrink-0 grow-0 py-2 px-3 border rounded-full bg-gradient-to-r from-red-400 to-red-700'>
            <Link to='twitter'>
              <Twitter />
            </Link>
          </div>
          <div className='w-11 h-11 shrink-0 grow-0 py-2 px-3 border rounded-full bg-gradient-to-r from-red-400 to-red-700'>
            <Link to='linkedin'>
              <Linkedin />{' '}
            </Link>
          </div>
        </div>
        <div className='lg:mt-20'>
          <img
            className='rounded-3xl mx-2 my-4'
            src={HeroImg}
            alt='hero-image'
          />
        </div>
      </div>
    );
}