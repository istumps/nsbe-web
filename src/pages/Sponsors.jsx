import PageHeader from '../components/PageHeader'
const sponsors = [
  {
    name: "Micron Technology",
    image: "/micron.png",
    website: "https://www.micron.com/"
  },
  {
    name: "Infotech",
    image: "/infotech.png",
    website: "https://www.infotechfl.com/"
  },
  {
    name: "L3Harris",
    image: "/l3harris.png",
    website: "https://www.l3harris.com/"
  },
  {
    name: "Texas Instruments",
    image: "/ti.png",
    website: "https://www.ti.com/"
  }
];

const donors = [
  { name: 'John Doe' },
  { name: 'Jane Smith' },
  { name: 'Alex Johnson' },
  { name: 'Michael Brown' },
  { name: 'Sarah Wilson' },
  {name: 'David Lee' }, 
  {name: 'Emily Davis'},  
  {name: 'Chris Martin'},

];

function Sponsors() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <PageHeader 
          title="Our Sponsors" 
          description="Meet the people and organizations that support our mission"
        />

        {/* Donors Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Generous Donors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-800 text-center">{donor.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-orange-200">
                  <div className="h-48 flex items-center justify-center mb-6">
                    <img
                      src={sponsor.image}
                      alt={`${sponsor.name} logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {sponsor.name}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Become a Sponsor
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Join our community of corporate partners and help support the next generation of Black engineers.
                Together, we can make a lasting impact.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 space-x-2 group"
              >
                <span>Contact Us</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors
