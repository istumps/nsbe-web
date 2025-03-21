import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to NSBE @ CSUF
            </h1>
            <p className="text-xl text-orange-50 mb-8 leading-relaxed">
              Empowering Black Engineers to Excel Academically, Succeed Professionally, and Positively Impact the Community
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://discord.gg/QP2XnrgX"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Join NSBE
              </a>
              <a
                href="/about"
                className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Hero Image - Adjusted size */}
          <div className="flex-1 max-w-md mx-auto lg:max-w-lg">
            <img
              src="/group.png"
              alt="NSBE CSUF Group"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To increase the number of culturally responsible Black Engineers who excel academically, 
            succeed professionally and positively impact the community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Excellence</h3>
            <p className="text-gray-600">
              Supporting members through study groups, mentorship, and academic resources.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
            <p className="text-gray-600">
              Connecting students with industry leaders and career opportunities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600">
              Creating positive change through outreach and leadership initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 