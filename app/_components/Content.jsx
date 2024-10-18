import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Jim from '@/public/jimJackson.jpg';
import { FaStethoscope } from 'react-icons/fa6';
import { MdOutlineHealthAndSafety } from 'react-icons/md';

import Image from 'next/image';

const Expertise = [
  {
    name: 'Pain Management:',
    description:
      'Treating chronic and acute pain conditions, including back pain, neck pain, sports injuries, and arthritis.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Postural Correction:',
    description: 'Addressing postural imbalances and their associated pain.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Metabolic Conditions:',
    description:
      'Managing chronic inflammatory and autoimmune conditions using holistic techniques.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Allergies:',
    description:
      'Utilizing osteopathic techniques, light therapy, and other modalities to address allergies.',
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: 'Performance Enhancement:',
    description:
      'Supporting athletes and individuals seeking to optimize their physical performance.',
    icon: MdOutlineHealthAndSafety,
  },
];
const Qualifications = [
  {
    name: 'Registered Neuro-Muscular Exercise Therapist',

    icon: FaStethoscope,
  },
  {
    name: 'Registered Joint Manipulation Therapist (Phys) (LCSP)',

    icon: FaStethoscope,
  },
  {
    name: 'Clinical Osteopathic Techniques Practitioner',

    icon: FaStethoscope,
  },

  {
    name: 'Advanced Personal Training Instructor',

    icon: FaStethoscope,
  },
  {
    name: 'Research Scientist in Bioscience',

    icon: FaStethoscope,
  },
  {
    name: 'Remedial Masseur',

    icon: FaStethoscope,
  },
  {
    name: 'Sports Scientist',

    icon: FaStethoscope,
  },
];

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-24 lg:overflow-visible lg:px-0">
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
              <p className="text-lg font-serif font-semibold leading-7 text-secondary">
                About
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Jim Jackson (LCSP registered)
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Jim Jackson is a dedicated healthcare professional with a unique
                blend of expertise in osteopathic techniques, sports science,
                and bioscience research. His extensive experience and
                qualifications make him a trusted authority in the field of
                manual therapy.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="Image of Jim Jackson"
            src={Jim}
            className="bg-center w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h3 className="font-bold">A Passion for Healing:</h3>
              <p>
                Jim's passion for helping others led him to pursue a career in
                healthcare. He has spent over a decade working as a freelance
                clinical joint manipulation therapist, remedial masseur, and
                neuromuscular exercise specialist, treating patients with a wide
                range of conditions.
              </p>
              <h3 className="font-bold mt-4">A Holistic Approach:</h3>
              <p>
                Jim's approach to treatment is holistic, encompassing various
                modalities to address the root causes of pain and dysfunction.
                His expertise in osteopathic techniques, sports science, and
                bioscience research allows him to provide comprehensive care
                tailored to each individual's needs.
              </p>

              <h3 className="font-bold mt-4">
                Key Qualifications and Experience:
              </h3>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {Qualifications.map((qualification, index) => {
                  return (
                    <li key={index} className="flex gap-x-3">
                      <qualification.icon
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 flex-none text-primary"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {qualification.name}
                        </strong>{' '}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                A Commitment to Excellence
              </h2>
              <p className="mt-8">
                A Commitment to Excellence Jim's dedication to continuous
                learning and professional development is evident in his numerous
                qualifications and certifications. His commitment to providing
                the highest quality care is reflected in his positive patient
                outcomes and reputation as a trusted healthcare provider.
              </p>
              <h3 className="font-bold mt-4">Areas of Expertise:</h3>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {Expertise.map((point, index) => {
                  return (
                    <li key={index} className="flex gap-x-3">
                      <point.icon
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 flex-none text-secondary"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {point.name}
                        </strong>{' '}
                        {point.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
