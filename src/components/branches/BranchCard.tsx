import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

interface BranchCardProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  image: string;
  href: string;
  services: string[];
}

export const BranchCard = ({
  name,
  description,
  address,
  phone,
  image,
  href,
  services,
}: BranchCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 right-4 text-2xl font-bold text-white">
          {name}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start text-gray-600">
            <svg
              className="w-5 h-5 ml-2 mt-1 flex-shrink-0"
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
            <span className="text-sm">{address}</span>
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm">{phone}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">الخدمات المتوفرة:</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <Link href={href}>
          <Button variant="outline" className="w-full">
            عرض التفاصيل
          </Button>
        </Link>
      </div>
    </div>
  );
}; 