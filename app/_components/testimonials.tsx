'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/image';

interface TestimonialItem {
  name: string;
  username?: string;
  text: string;
  image?: any;
}

interface TestimonialsProps {
  items: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Sharon Chung',
    username: 'Stroke Survivor',
    text: 'After my stroke, I struggled with mobility and chronic pain. The manual therapy here gave me my life back. I can now walk without assistance and enjoy activities I thought were gone forever.',
  },
  {
    name: 'James O\'Brien',
    username: 'Retired Teacher',
    text: 'I had been suffering from debilitating back pain for years. After just a few sessions, the difference was remarkable. I highly recommend this clinic to anyone dealing with chronic pain.',
  },
  {
    name: 'Maria Santos',
    username: 'Marathon Runner',
    text: 'A sports injury had me sidelined for months. The team here got me back on my feet faster than I thought possible. Their expertise in manual therapy is second to none.',
  },
  {
    name: 'David Okafor',
    username: 'Office Worker',
    text: 'Years of desk work left me with terrible neck and shoulder tension. The treatment plan here has completely transformed how I feel day to day. I only wish I had come sooner.',
  },
  {
    name: 'Linda Walsh',
    username: 'Arthritis Patient',
    text: 'Living with arthritis was becoming unbearable. The gentle but effective manual therapy sessions have dramatically reduced my pain levels and improved my range of motion.',
  },
  {
    name: 'Tom Byrne',
    username: 'Gym Enthusiast',
    text: 'I came in with a persistent knee injury that wouldn\'t heal. The thorough assessment and targeted treatment plan had me back training within weeks. Outstanding care.',
  },
];

const TestimonialCard = ({ text, image, name, username }: TestimonialItem) => (
  <div className="card w-[320px] flex-shrink-0 mx-3">
    <div>{text}</div>
    <div className="flex items-center gap-2 mt-5">
      {image && (
        <Image
          src={urlFor(image).url()}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
        />
      )}
      <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        {username && (
          <div className="leading-5 tracking-tight">{username}</div>
        )}
      </div>
    </div>
  </div>
);

const Testimonials = ({ items }: TestimonialsProps) => {
  const activeItems = items && items.length > 0 ? items : DEFAULT_TESTIMONIALS;

  // Duplicate so the marquee loops seamlessly
  const track = [...activeItems, ...activeItems];

  return (
    <section className="bg-white py-4">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex"
          initial={{ translateX: '0%' }}
          animate={{ translateX: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          {track.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
