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
  if (!items || items.length === 0) return null;

  // Duplicate items so the marquee loops seamlessly
  const track = [...items, ...items];

  return (
    <section className="bg-white">
      <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex"
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
