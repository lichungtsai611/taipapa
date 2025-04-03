'use client';

import { motion } from 'framer-motion';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-section w-full overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[100vw] py-8"
      >
        {children}
      </motion.div>
    </div>
  );
}