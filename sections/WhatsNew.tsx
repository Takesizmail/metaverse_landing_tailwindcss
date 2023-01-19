'use client'

import styles from '../styles'
import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion'
import { TitleText, TypingText } from '../components'
import { newFeatures } from '../constants'
import NewFeatures from '../components/NewFeatures'

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      // @ts-expect-error
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[1] flex justify-center flex-col'
      >
        <TypingText title='| Whats New?' textStyle='' />
        <TitleText
          title={() => (<>What's new about Metaversus? </>)}
          textStyles='mb-[50px]'
        />
        <div className='flex flex-1 flex-col md:flex-row gap-[24px] '>
          {newFeatures.map((news) => (
            <NewFeatures
              key={news.title}
              {...news}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/whats-new.png'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
)

export default WhatsNew
