import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* صورة الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/library.jpeg"
          alt="جمعية مصر الجديدة"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          جمعية مصر الجديدة
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          نعمل على نشر الثقافة والفنون وتنمية المجتمع من خلال برامج تعليمية وثقافية متنوعة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link href="/about">
            <Button variant="primary" size="lg">
              تعرف علينا
            </Button>
          </Link>
          <Link href="/activities">
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white">
              اكتشف أنشطتنا
            </Button>
          </Link>
        </div>

        {/* إحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-300">سنوات الخبرة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">5</div>
            <div className="text-gray-300">فروع</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-300">نشاط شهري</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
            <div className="text-gray-300">عضو</div>
          </div>
        </div>
      </div>
    </section>
  );
} 