import { resourcesLinks, platformLinks, communityLinks } from '../constants';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Footer () {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='w-1/4 lg:flex lg:space-x-6 items-center mt-2  '>
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
        <div>
          <h3 className='text-md font-semibold mb-4'>Resources</h3>
          <ul className='space-y-2'>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className='text-neutral-300 hover:text-white'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-md font-semibold mb-4'>Platform</h3>
          <ul className='space-y-2'>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className='text-neutral-300 hover:text-white'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-md font-semibold mb-4'>Community</h3>
          <ul className='space-y-2'>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className='text-neutral-300 hover:text-white'
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}


