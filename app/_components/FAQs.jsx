'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  {
    question: 'What is manual medicine?',
    answer:
      "Manual medicine is a hands-on form of treatment that focuses on restoring the body's natural function and reducing pain. It involves techniques like medical deep tissue massage,  osteopathic manipulation techniques, and mobilization to improve mobility and alleviate discomfort.",
  },
  {
    question: 'Is manual medicine painful?',
    answer:
      'manual medicine is generally a gentle and comfortable treatment. However, you may experience some temporary discomfort or soreness after a session. This is normal and should subside quickly.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'The number of sessions required varies depending on the severity of your condition and your individual response to treatment.Your therapist will be able to provide you with an estimated timeline.',
  },
  {
    question: 'Can manual medicine be combined with other treatments?',
    answer:
      'Yes, manual medicine can often be effectively combined with other complementary therapies, such as physiotherapy, acupuncture, or massage.',
  },
  {
    question: 'Is manual medicine safe?',
    answer:
      "Yes, manual medicine is generally considered safe when performed by a qualified practitioner. However, it's important to inform your therapist about any underlying health conditions or medications you are taking.",
  },
  {
    question: 'What can I expect during a manual medicine session?',
    answer:
      'A typical session involves a thorough assessment to identify the root cause of your pain. Your therapist will then use a variety of techniques to address the underlying issues and improve your mobility.',
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className=" py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold ">{question}</span>
        {!isOpen ? <FaPlus /> : <FaMinus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ marginTop: 0, opacity: 0, height: 0 }}
            animate={{ marginTop: '16px', opacity: 1, height: 'auto' }}
            exit={{ marginTop: 0, opacity: 0, height: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  return (
    <section className="bg-white text-white bg-gradient-to-b from-[#3889a4] to-black py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className="sm:max-w-[648px] text-center mx-auto text-5xl sm:text-6xl font-bold tracking-wide">
          Frequently Asked <span className="font-serif">Questions</span>
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
