import Jim from "@/public/jimJackson.jpg";
import { FaStethoscope } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import Image from "next/image";

const Expertise = [
  {
    name: "Pain Management:",
    description:
      "Treating chronic and acute pain conditions, including back pain, neck pain, sports injuries, and arthritis.",
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: "Postural Correction:",
    description: "Addressing postural imbalances and their associated pain.",
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: "Metabolic Conditions:",
    description:
      "Managing chronic inflammatory and autoimmune conditions using holistic techniques.",
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: "Allergies:",
    description:
      "Utilizing osteopathic techniques, light therapy, and other modalities to address allergies.",
    icon: MdOutlineHealthAndSafety,
  },
  {
    name: "Performance Enhancement:",
    description:
      "Supporting athletes and individuals seeking to optimize their physical performance.",
    icon: MdOutlineHealthAndSafety,
  },
];
const Qualifications = [
  {
    name: "Registered Neuro-Muscular Exercise Therapist",

    icon: FaStethoscope,
  },
  {
    name: "Registered Joint Manipulation Therapist (Phys) (LCSP)",

    icon: FaStethoscope,
  },
  {
    name: "Clinical Osteopathic Techniques Practitioner",

    icon: FaStethoscope,
  },

  {
    name: "Advanced Personal Training Instructor",

    icon: FaStethoscope,
  },
  {
    name: "Research Scientist in Bioscience",

    icon: FaStethoscope,
  },
  {
    name: "Remedial Masseur",

    icon: FaStethoscope,
  },
  {
    name: "Sports Scientist",

    icon: FaStethoscope,
  },
];

export default function Meet() {
  return (
    <section>
      <div className="container">
        <div className="overflow-hidden bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-xl font-serif font-semibold leading-8 tracking-tight text-secondary">
                    About
                  </h2>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    Meet Jim Jackson (LCSP registered)
                  </p>
                  <p className="mt-6 text-md leading-6">
                    <span className=" font-semibold">Jim Jackson</span> is a
                    dedicated healthcare professional with a unique blend of
                    expertise in osteopathy, sports science, and bioscience
                    research. His extensive experience and qualifications make
                    him a trusted authority in the field of manual therapy.
                  </p>
                  <h2 className="mt-6 mb-2 font-bold">
                    A Passion for Healing:
                  </h2>
                  <p className=" text-md leading-6">
                    Jim's passion for helping others led him to pursue a career
                    in healthcare. He has spent over a decade working as a
                    freelance clinical joint manipulation therapist, remedial
                    masseur, and neuromuscular exercise specialist, treating
                    patients with a wide range of conditions.
                  </p>
                  <h2 className="mt-6 mb-2 font-bold">A Holistic Approach:</h2>
                  <p className=" text-md leading-6">
                    Jim's approach to treatment is holistic, encompassing
                    various modalities to address the root causes of pain and
                    dysfunction. His expertise in osteopathic techniques, sports
                    science, and bioscience research allows him to provide
                    comprehensive care tailored to each individual's needs.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <h2 className="mt-6 mb-2 font-bold text-black">
                      Key Qualifications and Experience:
                    </h2>
                    {Qualifications.map((qualification) => (
                      <div key={qualification.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <qualification.icon
                            className="absolute top-1 left-1 h-5 w-5 text-secondary"
                            aria-hidden="true"
                          />
                          {qualification.name}
                        </dt>{" "}
                      </div>
                    ))}
                  </dl>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <h2 className="mt-6 mb-2 font-bold text-black">
                      Areas of Expertise:
                    </h2>
                    {Expertise.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute top-1 left-1 h-5 w-5 text-secondary"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                  <h2 className="mt-6 mb-2 font-bold">
                    A Commitment to Excellence{" "}
                  </h2>
                  <p className=" text-md leading-6">
                    Jim's dedication to continuous learning and professional
                    development is evident in his numerous qualifications and
                    certifications.
                  </p>
                  <p className="mt-2 text-md leading-6">
                    His commitment to providing the highest quality care is
                    reflected in his positive patient outcomes and reputation as
                    a trusted healthcare provider.
                  </p>
                </div>
              </div>
              <Image
                src={Jim}
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
