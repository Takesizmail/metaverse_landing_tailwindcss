'use client';


import { FC } from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

interface ITypingText {
	title: string
	textStyle: string
}

export const TypingText: FC<ITypingText> = ({title, textStyle}) => (
  <motion.p
		variants={textContainer}
		className={`font-normal text-[14px] text-secondary-white ${textStyle}`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter === ' ' ? '\u00A0' : letter}
			</motion.span>
		))}

	</motion.p>
);


export const TitleText: FC<{title: any, textStyles: string}> = ({ title, textStyles}) => (
	<motion.h2
		variants={textVariant2}
		initial="hidden"
		whileInView="show"
		className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
	>
		{title()}
	</motion.h2>

);

export const PrimaryText: FC<{text: string}> = ({text}) => {
	return (
		<span className="font-extrabold text-white" >{text}</span>
	)
}
