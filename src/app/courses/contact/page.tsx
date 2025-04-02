'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, FormEvent } from 'react';
import Logo from '../../components/Logo';

export default function CourseContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    coursesInterested: '',
    message: '',
    preferredContact: 'email',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // This would typically connect to an API endpoint
    // For demo purposes, we'll simulate a successful submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        coursesInterested: '',
        message: '',
        preferredContact: 'email',
      });
    }, 1500);
  };
  
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            <span>返回課程列表</span>
          </Link>
        </div>
        
        <div className="mx-auto flex justify-center mb-8">
          <Logo className="h-16 w-16" />
        </div>
        
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">課程諮詢表單</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            對我們的AI課程有興趣嗎？填寫以下表單，我們的課程顧問將會盡快與您聯繫，
            提供更詳細的課程資訊及客製化的學習建議。
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <div className="rounded-lg bg-green-50 p-8 text-center">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">感謝您的諮詢！</h2>
              <p className="text-green-700 mb-6">
                我們已收到您的課程諮詢表單，課程顧問將在一個工作日內與您聯繫。
              </p>
              <Link 
                href="/courses" 
                className="inline-flex items-center rounded-md bg-green-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                返回課程頁面
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    您的姓名 <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    電子郵件 <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    聯絡電話
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                    公司/組織名稱
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="coursesInterested" className="block text-sm font-semibold leading-6 text-gray-900">
                    感興趣的課程 <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="coursesInterested"
                      id="coursesInterested"
                      value={formData.coursesInterested}
                      onChange={handleChange}
                      required
                      placeholder="請填寫您感興趣的課程名稱"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                    詢問內容 <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="請詳細描述您對課程的需求、疑問或您的學習目標"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <fieldset>
                    <legend className="block text-sm font-semibold leading-6 text-gray-900">
                      偏好的聯絡方式
                    </legend>
                    <div className="mt-2.5 space-y-3">
                      <div className="flex items-center">
                        <input
                          id="contact-email"
                          name="preferredContact"
                          type="radio"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600"
                        />
                        <label htmlFor="contact-email" className="ml-3 block text-sm leading-6 text-gray-700">
                          電子郵件
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="contact-phone"
                          name="preferredContact"
                          type="radio"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-600"
                        />
                        <label htmlFor="contact-phone" className="ml-3 block text-sm leading-6 text-gray-700">
                          電話
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    submitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
                  }`}
                >
                  {submitting ? '提交中...' : '提交諮詢表單'}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                提交此表單即表示您同意我們的隱私政策，我們將會妥善保護您的個人資料，
                且僅用於回覆您的課程諮詢。
              </p>
            </form>
          )}
        </motion.div>
        
        <motion.div 
          className="mt-24 max-w-2xl mx-auto rounded-lg bg-blue-50 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">其他聯絡方式</h2>
          <p className="text-gray-600 mb-6">
            如果您有急需的課程諮詢，也可以直接透過以下方式與我們聯繫：
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-gray-600">
              <span className="font-medium mr-2">電話：</span>
              <a href="tel:0937358433" className="text-blue-600 hover:text-blue-800">0937-358-433</a>
            </li>
            <li className="flex items-center text-gray-600">
              <span className="font-medium mr-2">Email：</span>
              <a href="mailto:taipapa.ai@gmail.com" className="text-blue-600 hover:text-blue-800">taipapa.ai@gmail.com</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
} 