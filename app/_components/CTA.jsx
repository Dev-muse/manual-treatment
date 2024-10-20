import MasssageImage from '@/public/cta-image.jpg';
import Image from 'next/image';
import Link from 'next/link';
import BookButton from './BookButton';

export default function CTA() {
  const currentColor = '#facc15';
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#3889a4" />
                <stop offset={1} stopColor="#3889a4" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready To <span className="font-serif">Reclaim</span> Your Body?
            </h2>
            <p className="mt-6 text-md leading-8 text-gray-300">
              Don't let pain hold you back any longer. Schedule your free
              consultation today and discover how manual therapy can transform
              your life. Our experienced practitioners are committed to helping
              you achieve lasting relief and regain your mobility.
            </p>
            <BookButton dark={true} />
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              alt="App screenshot"
              src={MasssageImage}
              width={1824}
              height={1080}
              className="lg:absolute left-0 top-0 w-full lg:w-[57rem]  max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
