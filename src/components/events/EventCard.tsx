import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  href: string;
}

export const EventCard = ({
  title,
  description,
  date,
  location,
  image,
  href,
}: EventCardProps) => {
  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="space-y-2 mb-4">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{date}</span>
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <Link href={href}>
            <Button variant="primary" className="w-full">
              احجز الآن
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}; 