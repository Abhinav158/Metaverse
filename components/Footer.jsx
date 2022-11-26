'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion'
import styles from '../styles';

const Footer = () => (
  <motion.footer variants={footerVariants} initial='hidden' whileInView='show' className={`${styles.paddings} py-8 relative`}>
    
    <div className='footer-gradient'></div>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
      <h4 className='font-bold md:text-[64px] text-[44px] text-white'> Enter the Metaverse </h4>
      <button type='button' className='flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-12'>
        <img src='/headset.svg' alt='headset' className='w-[24px] h[24px] object-contain' />
        <span className='font-normal text-[16px] text-white'>ENTER METAVERSE</span>
      </button>
      </div>

     <div className='flex flex-col'>
        <div className='mb-[15px] h-[2px] bg-white opacitiy-10' />
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <h4 className='font-extrabold text-[24px] text-white'> Virtual Reality </h4>
          <p className='font-normal text-white text-[14px] opacity-50'>
            Copyright © 2022 Metaverse. All rights reserved. 
          </p>
          <div className='flex gap-4'>
            {socials.map((social)=> (
              <img src={social.url} key={social.name} alt={social.name} className='w-[24px] h-[24px] object-contain cursor-pointer' />
            ))}

          </div>
        </div>
     </div> 
    </div>
    
  </motion.footer>
);

export default Footer;
