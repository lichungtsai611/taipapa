'use client';

import ContactSection from '@/app/components/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection />
      </motion.div>
    </main>
  );
} 