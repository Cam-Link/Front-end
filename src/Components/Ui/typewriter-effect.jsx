import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '../../cn';

const TypewriterEffect = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }));

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.sequence((index) => ({
        display: 'inline-block',
        opacity: 1,
        width: 'fit-content',
        transition: { delay: index * 0.1, duration: 0.3, ease: 'easeInOut' },
      }));
    }
  }, [controls, inView]);

  const renderWords = () => {
    return wordsArray.map((word, idx) => (
      <div key={`word-${idx}`} className="inline-block">
        {word.text.map((char, index) => (
          <motion.span
            key={`char-${index}`}
            className={cn('dark:text-white text-black opacity-0 hidden', word.className)}
            custom={index}
            animate={controls}
          >
            {char}
          </motion.span>
        ))}
        &nbsp;
      </div>
    ));
  };

  return (
    <div className={cn('text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center', className)}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className={cn('inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500', cursorClassName)}
      />
    </div>
  );
};

export default TypewriterEffect;