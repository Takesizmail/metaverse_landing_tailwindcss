'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('');

  return (
    <div className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyle="text-center" />
        {/* eslint-disable-next-line react/no-unstable-nested-components */}
        <TitleText title={() => (<> Choose the world you want <br className="md:block hidden" /> to explore</>)} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-[20px]">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              index={index}
              active={active}
              handleClick={setActive}
              {...world}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Explore;
