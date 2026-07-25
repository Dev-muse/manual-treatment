'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
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

const TestimonialsColumn = (props: { className?: string; duration?: number; items: TestimonialItem[] }) => {
  return (
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
          <div key={index}>
            {props.items.map(
              ({ text, image, name, username }, idx) => (
                <div className="card" key={idx}>
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
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      {username && (
                        <div className="leading-5 tracking-tight">{username}</div>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = ({ items }: TestimonialsProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const columnCount = 3;
  const columns: TestimonialItem[][] = Array.from(
    { length: columnCount },
    () => []
  );
  items.forEach((item, index) => {
    columns[index % columnCount].push(item);
  });

  const durations = [20, 22, 25];

  return (
    <section className="bg-white">
      <div className="container">
        {/* Mobile & tablet: single responsive column with all items */}
        <div className="mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden lg:hidden">
          <TestimonialsColumn items={items} duration={20} />
        </div>
        {/* lg and above: three-column distributed layout */}
        <div className="mt-10 hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden lg:flex justify-center gap-6">
          {columns.map((column, idx) => (
            <TestimonialsColumn
              key={idx}
              items={column}
              duration={durations[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
