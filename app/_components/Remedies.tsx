import { FaCheck } from "react-icons/fa";
import Slide1 from "@/public/slide1.jpg";
import Eyebrow from "./Eyebrow";
import BookButton from "./BookButton";

const features = [
  {
    name: "Back and Neck Pain:",
    description:
      "Ease stiffness, aches, and radiating pain in your back, neck, and shoulders. ",
    icon: FaCheck,
  },
  {
    name: "Headaches and Migraines:",
    description:
      "Reduce the frequency and intensity of headaches and migraines.",
    icon: FaCheck,
  },
  {
    name: "Sports Injuries:",
    description:
      "Recover from sports injuries quickly and return to peak performance.",
    icon: FaCheck,
  },
  {
    name: "Joint Pain:",
    description:
      "Manage pain and stiffness in your knees, hips, ankles, and other joints.",
    icon: FaCheck,
  },
  {
    name: "Arthritis Management:",
    description:
      "Improve mobility and function while managing arthritic symptoms.",
    icon: FaCheck,
  },
  {
    name: "Postural Issues",
    description: "Correct poor posture and alleviate associated pain.",
    icon: FaCheck,
  },
  {
    name: "Sciatica:",
    description:
      "Reduce pain radiating down your leg caused by pinched sciatic nerve.",
    icon: FaCheck,
  },
];

export default function Remedies() {
  return (
    <div className="  bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Eyebrow text={"Remedies"} position={"start"} />
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don&apos;t let pain <br />
                <span className="font-serif text-primary">Hold You Back</span>
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                Chronic pain can significantly impact your daily life, limiting
                your ability to enjoy the activities you love. At our Physical
                Medicine Clinic, we understand the frustration and limitations
                pain can cause. We're dedicated to helping you regain control
                and live a pain-free life.
              </p>
              <p className="mt-6 text-md font-semibold  leading-8">
                Here are some of the common conditions we effectively treat:
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-secondary"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <video
              width={2432}
              height={1442}
              controls
              poster="poster-video.jpg"
              className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10   md:-ml-4 lg:-ml-0"
            >
              <source src="Remedy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <BookButton dark={false} />
      </div>
    </div>
  );
}
