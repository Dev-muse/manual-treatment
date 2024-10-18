'use client';

import avatar1 from '@/app/assets/avatar-1.png';
import avatar2 from '@/app/assets/avatar-2.png';
import avatar3 from '@/app/assets/avatar-3.png';
import avatar4 from '@/app/assets/avatar-4.png';
import avatar5 from '@/app/assets/avatar-5.png';
import avatar6 from '@/app/assets/avatar-6.png';
import avatar7 from '@/app/assets/avatar-7.png';
import avatar8 from '@/app/assets/avatar-8.png';
import avatar9 from '@/app/assets/avatar-9.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const testimonials = [
  {
    text: 'Due to COVID-19, my hospital appointments were delayed, and I was in severe pain with lower back and neck issues. Jim diagnosed the problem immediately and provided advice on alignment, breathing, and exercises. I felt much lighter both physically and mentally after my session, and my quality of life has greatly improved.',
    imageSrc: avatar1.src,
    name: 'Sharon Chung',
  },
  {
    text: "As a stroke survivor, I struggled with using my right hand. After one session with Jim, I managed to take my bus pass from my pocket for the first time in 3 years! It might seem small, but it was a huge milestone for me. Jim's expertise is amazing, and I plan to continue my sessions with him.",
    imageSrc: avatar2.src,
    name: 'Turunku Swazy Koseshi',
  },
  {
    text: 'I had reoccurring knee pain that made walking and climbing stairs difficult. After 3 weeks into Jim’s osteopathic plan, I saw noticeable improvements. By the end of 6 weeks, I was walking pain-free and climbing stairs easily. If you have a busy life and need help with everyday pains, I highly recommend Jim.',
    imageSrc: avatar3.src,
    name: 'Kalash Kaur',
  },
  {
    text: "As a retired teacher, I had suffered from lower back and joint pain for years, along with high blood pressure. After following Jim's program, I no longer need blood pressure medication, my pain levels have drastically reduced, and I feel more energetic. I’ve even quit smoking! I can’t recommend Jim enough.",
    imageSrc: avatar4.src,
    name: 'Louie Parker',
  },
  {
    text: 'I had pain in my knee and hip, and Jim diagnosed the root cause as my back, something other therapists had missed. After five sessions, my pain reduced, and I continue to feel better every day by following his advice. Jim’s professionalism and willingness to offer support outside of appointments are outstanding.',
    imageSrc: avatar5.src,
    name: 'Ervin Time',
  },
  {
    text: 'I was considering knee surgery but decided to try Jim’s holistic approach first. After just five sessions, combined with a new diet and specific exercises, my knee pain has improved significantly. While there’s still work to do, I feel positive about avoiding surgery and am confident in Jim’s expertise.',
    imageSrc: avatar6.src,
    name: 'Danilo Di Emidio',
  },
  {
    text: 'I enjoy high-intensity workouts but started experiencing injuries around my knees and calves. After seeing Jim, my symptoms improved significantly in just three months. For the first time in almost a year, I can train without major knee pain. Jim’s dedication and personalized approach have made a huge difference.',
    imageSrc: avatar7.src,
    name: 'Jade Huysmans',
  },
  {
    text: 'I’ve been to countless osteopaths and physiotherapists, but Jim is different. He’s the first person I contact whenever I fly into London because his treatment is so effective. Jim takes the time to properly diagnose and treat the root cause, and I always feel confident I’m in the right hands.',
    imageSrc: avatar8.src,
    name: 'Alison Louise',
  },
  {
    text: 'I had suffered from chronic knee pain for years. Jim’s tailored treatment plan, which combines manual therapy with specific exercises, has significantly reduced my symptoms. His dedication to my recovery, even following up after hours, shows just how committed he is to his patients’ wellbeing. I highly recommend him.',
    imageSrc: avatar9.src,
    name: 'Jade Huysmans',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(
            ({ text, imageSrc, name, username }, index) => (
              <div className="card" key={index}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={25}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
