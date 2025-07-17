import { useState, useEffect } from 'react';
import { isAuthenticated } from '../lib/auth';
import Link from 'next/link';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsLoggedIn(isAuthenticated());
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-3xl">
              Welcome to{' '}
              <span className="text-blue-600">MyApp</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-10 md:relative md:left-[20vw] md:top-[3vh] md:text-xl md:max-w-3xl">
              A secure JWT authentication system built with Next.js and deployed on Vercel.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:relative md:top-[-9.5vh] md:left-[-10vw]">
              {isLoggedIn ? (
                <div className="rounded-md shadow">
                  <a
                    href="/admin"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-blue-600 hover:bg-blue-700 md:text-lg "
                  >
                    Go to Dashboard
                  </a>
                </div>
              ) : (
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50 h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for secure authentication
            </p>
          </div>

          <div className="md:relative md:top-[8vh] md:left-[2vw]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Secure Authentication</h3>
                </div>
                <p className="mt-2 text-gray-600">
                  JWT-based authentication with secure token management and automatic expiration.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Serverless Ready</h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Optimized for Vercel deployment with serverless API routes and edge functions.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Responsive Design</h3>
                </div>
                <p className="mt-2 text-gray-600">
                  Mobile-first design with Tailwind CSS for beautiful, responsive interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="bg-white py-12 md:h-[30vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Try the Demo
            </h2>
            <p className="mt-4 text-lg text-gray-600 ">
              Use these credentials to test the authentication system
            </p>
            <div className="mt-8  rounded-lg p-6 max-w-md mx-auto md:relative md:left-[43vw] md:top-[3vh]">
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">Demo Credentials:</p>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-mono  px-2 py-1 rounded">Username: admin</span>
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  <span className="font-mono px-2 py-1 rounded">Password: admin123</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}