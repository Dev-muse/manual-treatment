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
  {
    name: 'Aoife Murphy',
    username: 'Yoga Instructor',
    text: 'As a yoga instructor I thought I knew my body well. This clinic showed me what real structural alignment feels like. My flexibility and strength have improved dramatically.',
  },
  {
    name: 'Conor Fitzpatrick',
    username: 'Construction Worker',
    text: 'Heavy lifting for 20 years had destroyed my lower back. I was sceptical at first but the results speak for themselves. Pain-free for the first time in a decade.',
  },
];

const getInitials = (name: string) =>
  name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);

const Avatar = ({ image, name }: { image?: any; name: string }) => {
  if (image) {
    return (
      <Image
        src={urlFor(image).width(80).height(80).fit('crop').url()}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  return (
    <div className="h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center bg-primary text-white text-sm font-semibold">
      {getInitials(name)}
    </div>
  );
};

const TestimonialCard = ({ text, image, name, username }: TestimonialItem) => (
  <div className="card w-[320px] flex-shrink-0 mx-3">
    <div className="text-sm leading-6 text-gray-600">{text}</div>
    <div className="flex items-center gap-3 mt-5">
      <Avatar image={image} name={name} />
      <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        {username && (
          <div className="text-sm leading-5 tracking-tight text-gray-500">{username}</div>
        )}
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction }: { items: TestimonialItem[]; direction: 'left' | 'right' }) => {
  const track = [...items, ...items];
  const initial = direction === 'left' ? '0%' : '-50%';
  const animate = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex"
        initial={{ translateX: initial }}
        animate={{ translateX: animate }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {track.map((item, idx) => (
          <TestimonialCard key={idx} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = ({ items }: TestimonialsProps) => {
  const activeItems = items && items.length > 0 ? items : DEFAULT_TESTIMONIALS;

  // Split into two rows — odd items top row, even items bottom row
  const row1 = activeItems.filter((_, i) => i % 2 === 0);
  const row2 = activeItems.filter((_, i) => i % 2 !== 0);

  return (
    <section className="bg-white py-6 flex flex-col gap-4">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  );
};

export default Testimonials;
