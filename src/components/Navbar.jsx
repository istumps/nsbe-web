import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/members', label: 'Members' },
    { path: '/sponsors', label: 'Sponsors' },
    { path: '/events', label: 'Events' },
  ]

  return (
    <nav className="bg-[#1B3666] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/nsbe-logo.png" 
              alt="NSBE Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">National Society of Black Engineers</span>
              <span className="text-sm font-medium text-orange-500">Cal State Fullerton</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-white underline'
                    : 'text-white hover:underline'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 