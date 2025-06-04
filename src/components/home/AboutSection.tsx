import Image from 'next/image';
import { Button } from '../ui/Button';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* صورة الجمعية */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-image.jpg"
              alt="جمعية مصر الجديدة"
              fill
              className="object-cover"
            />
          </div>

          {/* محتوى القسم */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">عن الجمعية</h2>
              <p className="text-gray-600 leading-relaxed">
                تأسست جمعية مصر الجديدة في عام 1981 تحت اسم "جمعية مصر الجديدة للثقافة والفنون"، وكانت تتبع وزارة الثقافة. في عام 2003، تم تغيير اسمها إلى "جمعية مصر الجديدة" وتغير تبعيتها لتكون تحت إشراف وزارة التضامن الاجتماعي. تعمل الجمعية على نشر الثقافة والفنون وتنمية المجتمع من خلال برامج تعليمية وثقافية مفى عام 1981 تبنى نخبة من أبناء حى مصر الجديدة الأوفياء الذين نشأوا وتربوا فى هذا الحى العريق فكرة تأسيس وتكوين جمعية تعمل على النهوض بحى مصر الجديدة والرقى به ليكون نموذجاً يحتذى به فى باقى أحياء القاهرة والمحافظة على تراث مصر الجديدة وذلك إيماناً منهم بأن المشاركة الشعبية فى عالمنا المعاصر أصبحت تلعب دوراً بارزاً ومؤثراً فى حل ما تعانى منه الجماهير من مشكلات ومن ثم كان تأسيس ( جمعية تنمية خدمات حى مصر الجديدة) برقم 2589 بتاريخ 14/3/1981 وفقاً للقانون رقـم 32 لسنة 1964 بشـأن الجمعيـات والمؤسسات الخاصة لتعمـل فى نطـاق ( حى مصر الجديدة ) فى مجال الخدمات الثقافية والعلمية وتنمية المجتمع المحلى ومنذ تأسيسها عملت الجمعية بكل جد ونشاط لتحقيق الأهداف التى وضعتها فى سبيل خدمة حى مصر الجديدة .  

ومع اتساع نشاط الجمعية وصدرو قانون الجميعات الجديد رقم 84 لسنة 2002 فقد تم تعديل لائحة النظام الأساسى للجمعية فى عام (2003) وفقاً للقانون رقم 84 لسنة 2002 الخاص بالجمعيات والمؤسسات الأهلية وتضمن هذا التعديل تغيير نطاق عمل الجمعية الجغرافى ليكون على مستوى (محافظة القاهرة) وإضافة ميادين ومجالات عمل جديدة للجمعية ، كما تم تعديل اسمهما ليكون (جمعية تنمية خدمات مصر الجديدة) .  

ونظراً لاتساع حجم أعمال وأنشطة الجمعية ورغبتها فى تبنى وتنفيذ مشروعات قومية فقد تم تعديل بعض بنود لائحة النظام الأساسى للجمعية خلال عام (2008) وفقاً للقانون رقم 84 لسنة 2002 الخاص بالجمعيات والمؤسسات الأهلية وتضمن هذا التعديل تغيير نطاق عمل الجمعية الجغرافى ليكون على مستوى (جمهورية مصر العربية) وإضافة ميادين جديدة للجمعية كما تم تعديل اسم الجمعية ليكون الإسم الحالى لها   

( جمعية مصر الجديدة – Heliopolis Association )  

وفى عام 2021 تم توفيق أوضاع الجمعية وفقا للقانون رقم 149 لسنة 2019 الخاص بتنظيم ممارسة العمل الأهلى وتم تعديل لائحة النظام الاساسى للجمعية وفقا للقانون المذكور مع زيادة ميادين عمل الجمعية لتصبح أحد عشر ميدان بدلاً من ستة ميادين. تنوعة.
              </p>
            </div>

            {/* الرؤية والرسالة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">رؤيتنا</h3>
                <p className="text-gray-600">
                  أن نكون مركزاً رائداً في نشر الثقافة والفنون وتنمية المجتمع من خلال برامج تعليمية وثقافية متميزة
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">رسالتنا</h3>
                <p className="text-gray-600">
                  تقديم خدمات ثقافية وتعليمية متميزة تساهم في تنمية المجتمع وبناء جيل واعي ومثقف
                </p>
              </div>
            </div>

            {/* القيم الأساسية */}
            <div>
              <h3 className="text-xl font-semibold mb-4">قيمنا الأساسية</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">الجودة</h4>
                    <p className="text-sm text-gray-600">نلتزم بتقديم خدمات عالية الجودة</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">العمل الجماعي</h4>
                    <p className="text-sm text-gray-600">نؤمن بقوة العمل المشترك</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">الإبداع</h4>
                    <p className="text-sm text-gray-600">نشجع الأفكار الإبداعية والابتكار</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">الموثوقية</h4>
                    <p className="text-sm text-gray-600">نحافظ على ثقة مجتمعنا</p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about">
              <Button variant="primary">
                اقرأ المزيد عنا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 