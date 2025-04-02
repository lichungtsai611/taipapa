'use client';

import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BoltIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  UsersIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '教育推廣',
    description: '辦理人工智慧教育課程、講座、研討會與工作坊，促進全民AI素養。',
    icon: AcademicCapIcon,
  },
  {
    name: '學習資源',
    description: '出版與提供人工智慧應用之教材、研究與數位學習資源。',
    icon: BookOpenIcon,
  },
  {
    name: '實務應用',
    description: '推廣AI技術於教育、生活、職場與產業上的實務應用。',
    icon: BoltIcon,
  },
  {
    name: 'AI導入輔導',
    description: '協助個人與組織導入AI工具，提升工作效率與創新能力。',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'AI倫理推廣',
    description: '提升社會對AI倫理、法律、資料保護與風險意識之認知。',
    icon: ShieldCheckIcon,
  },
  {
    name: '國際交流',
    description: '促進國內外在人工智慧應用領域的經驗交流與跨界合作。',
    icon: GlobeAltIcon,
  },
  {
    name: '資源平台',
    description: '建立AI應用資源平台，分享AI工具、案例與學習管道。',
    icon: ServerIcon,
  },
  {
    name: '支援轉型',
    description: '支援政府、企業與學校推動AI普及教育與轉型計畫。',
    icon: UsersIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export default function FeatureSection() {
  return (
    <div className="bg-white py-28 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600 mb-4">協會任務</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            全方位推動AI普及應用
          </p>
          <p className="mt-8 text-xl leading-8 text-gray-600">
            台灣人工智慧實務應用推廣協會致力於協助全民理解並運用AI工具，
            提升生活品質與職場競爭力，促進數位轉型與全民科技素養。
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                className="relative pl-20"
                variants={itemVariants}
              >
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
} 