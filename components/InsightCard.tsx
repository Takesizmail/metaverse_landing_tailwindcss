'use client';

import {motion } from 'framer-motion';

import {fadeIn} from '../utils/motion';
import { FC } from 'react';
import styles from '../styles';

const InsightCard:FC<{imgUrl: string, title: string, subtitle: string, index: number }> = ({imgUrl, title, subtitle, index}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex justify-between"
  >
    <div className="flex flex-row">
      <div className="max-w-[270px] w-[270px] h-[250px] mr-[62px]">
        <img
          src={imgUrl}
          alt={imgUrl}
          className="h-full w-full rounded-[32px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center max-w-[650px]">
          <p className="font-normal text-[42px] leading-[52px] -tracking-[0.02em] text-white mb-[16px]">
            {title}
          </p>
          <p className="leading-[40px] tracking-[0.005em] text-white opacity-[0.4]">
            {subtitle}
          </p>
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <div className={`border-2 border-[#f5f5f5] rounded-full h-[100px] w-[100px] ${styles.flexCenter}`}>
        <img src="/arrow.svg" alt="arrow"/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
