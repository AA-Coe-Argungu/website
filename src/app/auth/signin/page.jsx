'use client';

import { signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Disable scrolling on mount and re-enable on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn('credentials', {
        username,
        password,
        callbackUrl: '/admin',
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        /* Hide navbar and scrollbars globally when on this page */
        header {
          display: none !important;
        }
        body {
          overflow: hidden !important;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="relative flex justify-center items-center min-h-screen bg-gray-100 w-screen h-screen overflow-hidden">
        {/* Blurred background image */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <Image
            src="/login-bg.jpg"
            alt="Background"
            fill
            className="object-cover blur-sm"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Login card - centered with fixed positioning */}
        <div className="relative z-10 w-full max-w-md px-6 py-8 overflow-hidden">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/20">
            {/* Decorative header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-center">
              <h1 className="text-3xl font-bold text-white">Admin Portal</h1>
              <p className="text-blue-100 mt-1">Sign in to access the dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Form content remains the same as before */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your username"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>

            <div className="px-6 py-4 bg-gray-50 text-center border-t border-gray-200">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Your College Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}