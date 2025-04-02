import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h2>
      <p className="mt-4 text-xl text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
      <Link 
        href="/"
        className="px-6 py-3 mt-8 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Go back home
      </Link>
    </div>
  );
} 