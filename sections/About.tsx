'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { PrimaryText } from '../components/CustomTexts';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyle="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <PrimaryText text="Metaverse " />
        is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world , because this is really the
        <PrimaryText text=" madness of the metaverse " />
        of today, using only
        <PrimaryText text="  VR " />
        devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's
        <PrimaryText text=" explore " />
        the madness of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

    </motion.div>
    About section
  </section>
);

export default About;
