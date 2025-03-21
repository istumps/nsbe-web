import PageHeader from "../components/PageHeader";

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "NSBE and HP",
      date: "Mar 15",
      time: "6:00pm - 7:00pm",
      image: "/event.png",
    },
    {
      id: 2,
      title: "IEEE and NSBE - Lockheed Martin presentation",
      date: "Mar 20",
      time: "6:00pm - 7:00pm",
      image: "/event.png",
    },
    {
      id: 3,
      title: "Watch White Chicks with NSBE",
      date: "Apr 3",
      time: "6:00pm - 8:00pm",
      image: "/event.png",
    },
    {
      id: 4,
      title: "Process vs Computer Technology Advancements",
      date: "Apr 10",
      time: "6:00pm - 7:00pm",
      image: "/event.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <PageHeader 
        title="Events" 
        description="Join us for our upcoming events and activities"
      />

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-orange-600 mb-2">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  <span className="text-sm font-medium">{event.date}</span>
                  <span className="text-sm text-gray-500">{event.time}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <a 
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Integration CTA */}
        <div className="mt-16 text-center">
          <a
            href="/calendar"
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-300 gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Events;
