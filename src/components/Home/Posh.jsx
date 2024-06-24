import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import DummyData from '../DummyData';
import PoshData from './PoshData';
import { motion, AnimatePresence } from "framer-motion";

const Posh = () => {
  return (
    <div>
      <div className='lg:pt-[176px] sm:pt-[121px] md:pt-[120px]'>
        <Carousel showStatus={false} showThumbs={false}>
          {DummyData.map((data) => (
            <div key={data.id}>
              <AnimatePresence>
                <motion.div
                  initial={{ x: 100, opacity: 0 }} // Initial position and opacity
                  animate={{ x: 0, opacity: 1 }} // Final position and opacity
                  exit={{ x: -100, opacity: 0 }} // Exit position and opacity
                  transition={{ duration: 0.5 }} // Animation duration
                  style={{ display: 'flex' }} // Set display to flex
                >
                  <img className='w-full lg:h-[60vh] h-auto mb-2' src={data.img} alt="" />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </Carousel>
      </div>
      <PoshData />
    </div>
  );
};

export default Posh;
