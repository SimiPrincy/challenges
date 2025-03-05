import Image from "next/image";

const testimonials = [
  {
    name: "Daniel Clifford",
    status: "Verified Graduate",
    image: "/image-daniel.jpg",
    title:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    text: "I was an EMT for many years before I joined the bootcamp...",
    bgColor: "bg-purple-700 text-white",
    colSpan: "md:col-span-2",
    quote: true,
  },
  {
    name: "Jonathan Walters",
    status: "Verified Graduate",
    image: "/image-jonathan.jpg",
    title: "The team was very supportive and kept me motivated",
    text: "I started as a total newbie with virtually no coding skills...",
    bgColor: "bg-gray-700 text-white",
    colSpan: "md:col-span-1",
  },
  {
    name: "Jeanette Harmon",
    status: "Verified Graduate",
    image: "/image-jeanette.jpg",
    title: "An overall wonderful and rewarding experience",
    text: "Thank you for the wonderful experience! I have a job I really enjoy...",
    bgColor: "bg-white text-gray-900 shadow-lg",
    colSpan: "md:row-span-4",
  },
  {
    name: "Patrick Abrams",
    status: "Verified Graduate",
    image: "/image-patrick.jpg",
    title:
      "Awesome teaching support from TAs who did the bootcamp themselves...",
    text: "The staff seemed genuinely concerned about my progress...",
    bgColor: "bg-gray-900 text-white",
    colSpan: "md:col-span-2",
  },
  {
    name: "Kira Whittle",
    status: "Verified Graduate",
    image: "/image-kira.jpg",
    title: "Such a life-changing experience. Highly recommended!",
    text: "Before joining the bootcamp, I’d never written a line of code...",
    bgColor: "bg-white text-gray-900 shadow-lg",
    colSpan: "md:col-span-1",
  },
];

export default function TestimonialGrid() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${t.bgColor} ${t.colSpan} flex flex-col relative`}
          >
            {/* User Info */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-sm opacity-75">{t.status}</p>
              </div>
            </div>

            {/* Quote Symbol for First Card */}
            {t.quote && (
              <span className="absolute text-[8rem] font-bold text-white opacity-20 top-4 right-6">
                “
              </span>
            )}

            {/* Title & Description */}
            <h3 className="font-bold text-lg leading-tight">{t.title}</h3>
            <p className="mt-2 text-sm opacity-80">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
