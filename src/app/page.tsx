import Image from 'next/image';
interface Feature {
  title: string;
  description: string;
  image: string;
  borderColor: string;
}
const features = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    image: '/icon-supervisor.svg',
    borderColor: 'border-teal-400'
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    image: '/icon-team-builder.svg',
    borderColor: 'border-red-400'
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    image: '/icon-karma.svg',
    borderColor: 'border-orange-400'
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    image: '/icon-calculator.svg',
    borderColor: 'border-blue-400'
  }
];

const FeatureCard = ({ title, description, image, borderColor }: Feature) => {
  return (
    <div className={`border-t-4 p-6 rounded-lg shadow-lg bg-white ${borderColor}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <Image src={image} alt={title} width={50} height={50} />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col items-center text-center p-8">
      <h2 className="text-2xl font-bold">Reliable, efficient delivery</h2>
      <h2 className="text-2xl font-bold text-gray-800">Powered by Technology</h2>
      <p className="text-gray-600 max-w-lg mt-2">
        Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <FeatureCard {...features[0]} />
        <div className="space-y-6">
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[2]} />
        </div>
        <FeatureCard {...features[3]} />
      </div>
    </div>
  );
}