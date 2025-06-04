import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface ActivityCardProps {
  title: string;
  description: string;
  category: string;
  ageGroup: string;
  duration: string;
  image: string;
  href: string;
  features: string[];
}

export const ActivityCard = ({
  title,
  description,
  category,
  ageGroup,
  duration,
  image,
  href,
  features,
}: ActivityCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تعليمي':
        return 'bg-primary/10 text-primary';
      case 'فني':
        return 'bg-accent/10 text-accent';
      case 'ثقافي':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">{ageGroup}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">مميزات النشاط:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg
                  className="w-4 h-4 ml-2 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <Link href={href} className="flex-1">
            <Button variant="primary" className="w-full">
              احجز الآن
            </Button>
          </Link>
          <Link href={`${href}/details`} className="flex-1">
            <Button variant="outline" className="w-full">
              التفاصيل
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}; 