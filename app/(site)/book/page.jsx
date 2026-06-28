/*
  This Book requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import Relieved from '@/public/relievedPatient.jpg';
import Image from 'next/image';
import Link from 'next/link';

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-secondary">
                Booking
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discovery Call{' '}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Take the first step towards a pain-free life.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            src={Relieved}
            className="lg:w-[48rem] w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <Link
                className="btn bg-secondary text-white py-2 px-8 m-6 mx-auto"
                href={'https://cal.com/jimjackson/15min'}
              >
                Book Now
              </Link>
              <p>
                Are you ready to experience the transformative power of manual
                medicine? Schedule your free discovery call today to learn more
                about how our personalized approach can help you:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MdOutlineHealthAndSafety
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-secondary"
                  />
                  <strong className="font-semibold text-gray-900">
                    Reduce chronic pain
                  </strong>{' '}
                </li>
                <li className="flex gap-x-3">
                  <MdOutlineHealthAndSafety
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-secondary"
                  />
                  <strong className="font-semibold text-gray-900">
                    Improve mobility
                  </strong>{' '}
                </li>
                <li className="flex gap-x-3">
                  <MdOutlineHealthAndSafety
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 flex-none text-secondary"
                  />
                  <strong className="font-semibold text-gray-900">
                    Enhance overall well-being
                  </strong>{' '}
                </li>
              </ul>
              <p className="mt-8">
                During your discovery call, you'll have the opportunity to
                discuss your specific needs and goals with one of our
                experienced practitioners. We'll answer any questions you may
                have and help you determine if Manual medicine is the right
                solution for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
