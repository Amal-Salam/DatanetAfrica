 import { BotMessageSquare } from 'lucide-react';
 import { GlobeLock } from 'lucide-react';
 import { BrainCircuit } from 'lucide-react';
 import { FileBox } from 'lucide-react';


import user1 from '../assets/profile-pictures/user1.png';
import user2 from '../assets/profile-pictures/user2.jpg';
import user3 from '../assets/profile-pictures/user3.webp';
import user4 from '../assets/profile-pictures/user4.webp';
import user5 from '../assets/profile-pictures/user5.jpg';
import user6 from '../assets/profile-pictures/user6.webp';

export const navItems = [
  
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const testimonials = [
  {
    user: 'John Doe',
    company: 'Stellar Solutions',
    image: user1,
    text: 'I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.',
  },
  {
    user: 'Jane Smith',
    company: 'Blue Horizon Technologies',
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: 'David Johnson',
    company: 'Quantum Innovations',
    image: user3,
    text: 'Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.',
  },
  {
    user: 'Ronee Brown',
    company: 'Fusion Dynamics',
    image: user4,
    text: 'Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!',
  },
  {
    user: 'Michael Wilson',
    company: 'Visionary Creations',
    image: user5,
    text: 'I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.',
  },
  {
    user: 'Emily Davis',
    company: 'Synergy Systems',
    image: user6,
    text: 'The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.',
  },
];

export const services = [
  {
    icon: <GlobeLock />,
    title: 'Data Analytics',
    description:
      'Uncover hidden patterns, trends, and correlations within your data to gain actionable insights that drive strategic decision-making.',
  },
  {
    icon: <FileBox />,
    title: 'Predictive Modelling',
    description:
      'Anticipate future trends and outcomes with confidence through our predictive modeling solutions, enabling proactive planning and risk management.',
  },
  {
    icon: <BrainCircuit />,
    title: 'Machine Learning',
    description:
      'Harness the power of machine learning algorithms to automate processes, optimize operations, and drive continuous improvement.',
  },
  {
    icon: <BotMessageSquare />,
    title: 'Custom Solutions',
    description:
      'From bespoke software development to tailored consulting services, we collaborate closely with you to develop customized solutions that address your unique challenges and objectives.',
  },
];

export const resourcesLinks = [
  { href: '#about', text: 'About Us' },
  { href: '#services', text: 'Services' },
  { href: '#testimonials', text: 'Testimonials' },
  
];

export const platformLinks = [
  { href: '#', text: 'Features' },
  { href: '#', text: 'Supported Devices' },
  { href: '#', text: 'System Requirements' },
];

export const communityLinks = [
  { href: '#', text: 'FAQ' },
  { href: '#', text: 'Privacy Policy' },
  { href: '#', text: 'Terms and Conditions' },
  
];
