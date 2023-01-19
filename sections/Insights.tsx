'use client'

import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { InsightCard, TitleText, TypingText } from '../components'
import { insights } from '../constants'

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      // @ts-expect-error
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title='| Insight' textStyle='text-center' />
      <TitleText
        title={() => <>Insight about metaverse</>}
        textStyles='text-center'
      />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard
            key={insight.imgUrl}
            index={index}
            {...insight}
          />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Insights
