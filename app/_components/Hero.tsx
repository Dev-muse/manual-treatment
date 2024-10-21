import Link from 'next/link';
import Slider from './Slider';
import Eyebrow from './Eyebrow';
import Logos from './Logos';
import LogoTicker from './LogoTicker';
import BookButton from '@/app/_components/BookButton';

export default function Hero() {
  const currentColor = '#facc15';
  return (
    <section className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pt-8 pb-4">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow text="Chronic Pain Holding You Back?" position="center" />
          </div>
          <h1 className=" text-6xl font-semibold tracking-normal text-gray-900 sm:text-6xl ">
            <span className="font-serif italic font-bold text-primary">
              Move{' '}
            </span>{' '}
            Better,{' '}
            <span className="font-serif italic font-bold text-primary">
              Feel{' '}
            </span>{' '}
            Better,{' '}
            <span className="font-serif italic font-bold text-primary">
              Live{' '}
            </span>{' '}
            Better.
          </h1>
          <p className="mt-6 text-lg text-center leading-8 text-gray-500 text-md ">
            Hippocrates, often called the Father of Medicine, asserts that
            <strong>"movement is medicine"</strong>. At Manual Treatment and
            Physical Medicine Clinic, we specialise in Manual medicine to help
            restore balance and alignment within your body. Let us guide you
            towards pain-free movement, improved mobility, and lasting health &
            wellness.
          </p>
          {/* cta */}
          <BookButton dark={false} />
        </div>
      </div>
      <Slider />
      <LogoTicker />
    </section>
  );
}
