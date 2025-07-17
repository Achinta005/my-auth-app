export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About MyApp</h1>
          <div className="max-w-3xl mx-auto md:relative md:left-[20vw] md:top-[6vh]">
            <p className="text-lg text-gray-600 mb-6">
              This is a demonstration of a secure JWT authentication system built with Next.js and optimized for Vercel deployment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The system includes user authentication, protected routes, token management, and a responsive admin dashboard.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:relative md:top-[20vh] md:left-[2vw]">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js (Pages Router)</li>
              <li>• JWT Authentication</li>
              <li>• Tailwind CSS</li>
              <li>• Vercel Deployment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• JWT Token Authentication</li>
              <li>• Password Hashing (bcrypt)</li>
              <li>• Protected Routes</li>
              <li>• Automatic Token Expiry</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Responsive Design</li>
              <li>• Admin Dashboard</li>
              <li>• Real-time Auth State</li>
              <li>• Serverless Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}