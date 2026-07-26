"use client";

import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Osteopathic Techniques",
    id: "tier-osteo",
    href: "https://cal.com/jimjackson/15min",
    price: "£110",
    description: "Full 1-hour session including consultation.",
    features: [
      "Joint manipulation (nerve release)",
      "Joint mobilisation",
      "Recommended for chronic pain and joint stiffness",
    ],
    mostPopular: false,
  },
  {
    name: "Trigger Point Therapy",
    id: "tier-trigger",
    href: "https://cal.com/jimjackson/15min",
    price: "£110",
    description:
      "Full 1-hour session. Acupressure-inspired relief for muscular tension.",
    features: [
      "Muscle energy techniques",
      "Counter strain techniques",
      "Effective for soft tissue pain",
    ],
    mostPopular: false,
  },
  {
    name: "Medical Deep Tissue Massage",
    id: "tier-massage",
    href: "https://cal.com/jimjackson/15min",
    price: "£110",
    description: "Therapeutic 1-hour massage with full consultation.",
    features: [
      "Fascial sliding massage",
      "Myofascial stretching",
      "Remedial soft tissue work",
    ],
    mostPopular: false,
  },
  {
    name: "Neuromuscular Activation",
    id: "tier-nm-activation",
    href: "https://cal.com/jimjackson/15min",
    price: "£110",
    description: "1-hour session combining therapy & guided exercise.",
    features: [
      "Sit-to-stand intervention",
      "Isometric & isotonic activation",
      "Fast stretch & compound movements",
    ],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function OsteoPricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-secondary">Pricing</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Your Hour of Healing Starts Here
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-2xl text-center text-base text-gray-600 sm:text-xl">
          <p className="mb-4">
            Please be advised that any patient who has not attended the clinic
            for a period of three months or more will be required to undergo a
            full reassessment before resuming treatment. This is to ensure we
            have an up-to-date understanding of their condition and can deliver
            the most appropriate and effective clinical care.
          </p>
          <p className="mb-2 font-semibold text-primary">
            Reassessment process includes:
          </p>
          <ul className="list-disc list-inside text-left text-base sm:text-lg mx-auto max-w-md">
            <li>
              <strong>Consultation – £35</strong>: A review of your medical
              history, current symptoms, and any changes since your last visit.
            </li>
            <li>
              <strong>Treatment Session – £110</strong>: A personalised
              treatment based on your updated clinical needs and condition.
            </li>
          </ul>
        </div>

        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-secondary"
                  : "ring-1 ring-gray-200",
                "group rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-secondary hover:-translate-y-1"
              )}
            >
              <h3
                id={tier.id}
                className={
                  "group-hover:text-secondary text-gray-900 text-lg font-semibold"
                }
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
              <p className="mt-6 text-4xl font-bold text-gray-900">
                {tier.price}
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  "hover:bg-secondary hover:text-white  text-primary ring-1 ring-indigo-200 hover:ring-seondary",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold ring-inset"
                )}
              >
                Book now
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 text-primary"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
