import styles from '../styles'
import { FC } from 'react'

interface INewFeatures {
  imgUrl: string
  title: string
  subtitle: string
}

const NewFeatures: FC<INewFeatures> = ({ imgUrl, title, subtitle }) => (
  <div className='flex flex-1 flex-col items-start sm: max-w-[340px] '>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d] mb-[24px]`}>
      <img src={imgUrl} alt={title} />
    </div>
    <p className='text-white text-[24px] leading-[30px] font-bold mb-[16px]'>
      {title}
    </p>
    <p className='text-[#B0B0B0] text-[24px] font-normal leading-[29px]'>
      {subtitle}
    </p>
  </div>
)

export default NewFeatures
