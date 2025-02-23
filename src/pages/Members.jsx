import PageHeader from '../components/PageHeader'

const boardMembers = [
  {
    name: "John Doe",
    title: "President",
    major: "Senior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  },
  {
    name: "Jane Smith",
    title: "Vice President",
    major: "Junior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  },
  {
    name: "Mike Johnson",
    title: "Treasurer",
    major: "Junior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  },
  {
    name: "Sarah Williams",
    title: "Secretary",
    major: "Junior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  },
  {
    name: "Alex Brown",
    title: "Event Coordinator",
    major: "Junior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  },
  {
    name: "Chris Davis",
    title: "STEM Chair",
    major: "Junior | Computer Science",
    image: "/placeholder.png",
    linkedinUrl: "#"
  }
];

function Members() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Board Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boardMembers.map((member, index) => (
          <div 
            key={index} 
            className="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm mx-auto"
          >
            <a 
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-40 object-cover"
                />
                {/* LinkedIn hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 text-white"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{member.name}</h2>
                <p className="text-md text-blue-600 font-medium">{member.title}</p>
                <p className="text-sm text-gray-600">{member.major}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members
