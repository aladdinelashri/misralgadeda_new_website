import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import { Carousel } from '@/components/ui/Carousel';
import { EventCard } from '@/components/events/EventCard';
import { BranchCard } from '@/components/branches/BranchCard';
import { ActivityCard } from '@/components/activities/ActivityCard';

// بيانات تجريبية للفعاليات
const featuredEvents = [
  {
    title: 'ورشة الرسم للأطفال',
    description: 'ورشة فنية مميزة للأطفال لتعلم أساسيات الرسم والتلوين',
    date: '15 مارس 2024',
    location: 'مركز الطفل للحضارة والإبداع',
    image: '/events/art-workshop.jpg',
    href: '/events/art-workshop',
  },
  {
    title: 'ندوة ثقافية: مستقبل التعليم',
    description: 'ندوة تناقش مستقبل التعليم في مصر والتحديات المعاصرة',
    date: '20 مارس 2024',
    location: 'مكتبة مصر الجديدة العامة',
    image: '/events/education-seminar.jpg',
    href: '/events/education-seminar',
  },
  {
    title: 'حفل موسيقي للأطفال',
    description: 'حفل موسيقي تفاعلي للأطفال مع فرقة موسيقية محترفة',
    date: '25 مارس 2024',
    location: 'مكتبة مصر الجديدة للطفل',
    image: '/events/music-concert.jpg',
    href: '/events/music-concert',
  },
];

// بيانات تجريبية للفروع
const branches = [
  {
    name: 'مكتبة مصر الجديدة العامة',
    description: 'مكتبة عامة تقدم خدمات القراءة والبحث العلمي مع قاعات للمطالعة ومركز للأنشطة الثقافية',
    address: 'شارع الثورة، مصر الجديدة، القاهرة',
    phone: '02-23456789',
    image: '/branches/main-library.jpg',
    href: '/branches/main-library',
    services: ['مكتبة عامة', 'قاعة مطالعة', 'ندوات ثقافية', 'ورش عمل'],
  },
  {
    name: 'مكتبة مصر الجديدة للأطفال',
    description: 'مكتبة متخصصة للأطفال تقدم برامج تعليمية وترفيهية متنوعة',
    address: 'شارع الثورة، مصر الجديدة، القاهرة',
    phone: '02-23456790',
    image: '/branches/children-library.jpg',
    href: '/branches/children-library',
    services: ['قصص أطفال', 'أنشطة تعليمية', 'ورش فنية', 'حفلات ترفيهية'],
  },
  {
    name: 'مكتبة المستقبل',
    description: 'مكتبة حديثة تقدم خدمات رقمية وبرامج تكنولوجية متطورة',
    address: 'شارع المستقبل، مصر الجديدة، القاهرة',
    phone: '02-23456791',
    image: '/branches/future-library.jpg',
    href: '/branches/future-library',
    services: ['خدمات رقمية', 'دورات كمبيوتر', 'مكتبة إلكترونية', 'تدريب تكنولوجي'],
  },
  {
    name: 'مركز الطفل للحضارة والإبداع',
    description: 'مركز متخصص في تنمية مواهب الأطفال وإبداعاتهم',
    address: 'شارع الإبداع، مصر الجديدة، القاهرة',
    phone: '02-23456792',
    image: '/branches/child-center.jpg',
    href: '/branches/child-center',
    services: ['فنون تشكيلية', 'موسيقى', 'مسرح', 'أنشطة إبداعية'],
  },
  {
    name: 'مكتبة مصر الجديدة بحي الأسمرات',
    description: 'مكتبة فرعية تخدم سكان حي الأسمرات وتقدم خدمات ثقافية وتعليمية',
    address: 'حي الأسمرات، القاهرة',
    phone: '02-23456793',
    image: '/branches/asmarat-library.jpg',
    href: '/branches/asmarat-library',
    services: ['مكتبة عامة', 'دورات تعليمية', 'أنشطة مجتمعية', 'خدمات إرشادية'],
  },
  {
    name: 'مركز العلوم بمتحف الطفل',
    description: 'مركز متخصص في العلوم والتكنولوجيا يقدم برامج تعليمية وتجارب علمية للأطفال والشباب',
    address: 'شارع المتحف، مصر الجديدة، القاهرة',
    phone: '02-23456794',
    image: '/branches/science-center.jpg',
    href: '/branches/science-center',
    services: ['تجارب علمية', 'ورش تكنولوجية', 'معارض تفاعلية', 'دورات علمية'],
  },
];

// بيانات تجريبية للأنشطة
const activities = [
  {
    title: 'ورشة الرسم والتلوين',
    description: 'ورشة فنية للأطفال لتعلم أساسيات الرسم والتلوين وتنمية المهارات الإبداعية',
    category: 'فني',
    ageGroup: '6-12 سنة',
    duration: 'ساعتان',
    image: '/activities/art-workshop.jpg',
    href: '/activities/art-workshop',
    features: [
      'تعلم أساسيات الرسم',
      'تنمية المهارات الإبداعية',
      'استخدام مختلف الخامات',
      'معرض للأعمال الفنية',
    ],
  },
  {
    title: 'دورة اللغة الإنجليزية',
    description: 'دورة تعليمية متكاملة لتعلم اللغة الإنجليزية للمبتدئين والمتقدمين',
    category: 'تعليمي',
    ageGroup: '12+ سنة',
    duration: '3 أشهر',
    image: '/activities/english-course.jpg',
    href: '/activities/english-course',
    features: [
      'مستويات متعددة',
      'محادثات عملية',
      'شهادة معتمدة',
      'مجموعات صغيرة',
    ],
  },
  {
    title: 'نادي القراءة',
    description: 'نادي أسبوعي لمناقشة الكتب وتنمية مهارات القراءة والتحليل',
    category: 'ثقافي',
    ageGroup: '15+ سنة',
    duration: 'ساعتان أسبوعياً',
    image: '/activities/book-club.jpg',
    href: '/activities/book-club',
    features: [
      'مناقشة أسبوعية',
      'اختيار كتب متنوعة',
      'ورش تحليل أدبي',
      'لقاءات مع كتاب',
    ],
  },
  {
    title: 'ورشة المسرح',
    description: 'ورشة مسرحية للأطفال لتنمية مهارات التمثيل والتعبير',
    category: 'فني',
    ageGroup: '8-14 سنة',
    duration: '3 أشهر',
    image: '/activities/theater-workshop.jpg',
    href: '/activities/theater-workshop',
    features: [
      'تمارين تمثيلية',
      'عروض مسرحية',
      'تنمية الثقة بالنفس',
      'عمل جماعي',
    ],
  },
  {
    title: 'دورة الكمبيوتر',
    description: 'دورة شاملة لتعلم أساسيات الكمبيوتر وتطبيقاته المختلفة',
    category: 'تعليمي',
    ageGroup: '10+ سنة',
    duration: 'شهرين',
    image: '/activities/computer-course.jpg',
    href: '/activities/computer-course',
    features: [
      'أساسيات الكمبيوتر',
      'برامج مايكروسوفت',
      'تصميم جرافيك',
      'شهادة معتمدة',
    ],
  },
  {
    title: 'حلقة قرآنية',
    description: 'حلقة لتعلم القرآن الكريم وتجويده للأطفال والكبار',
    category: 'ثقافي',
    ageGroup: 'جميع الأعمار',
    duration: 'ساعتان أسبوعياً',
    image: '/activities/quran-circle.jpg',
    href: '/activities/quran-circle',
    features: [
      'حفظ القرآن',
      'تعلم التجويد',
      'فهم المعاني',
      'مجموعات متخصصة',
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <HeroSection />
      <AboutSection />

      {/* Featured Events Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            الفعاليات القادمة
          </h2>
          <Carousel>
            {featuredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
           المؤسسات التابعة للجمعية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <BranchCard key={index} {...branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            أنشطتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
