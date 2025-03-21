function PageHeader({ title, description }) {
  return (
    <div className="relative bg-[#D85A00]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#D85A00] via-[#F47B20] to-[#D85A00]"></div>
      <div 
        className="relative container mx-auto px-6 py-16"
        style={{
          background: 'linear-gradient(90deg, #D85A00 0%, #F47B20 50%, #D85A00 100%)',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-3 text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white font-medium max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#B54A00]"></div>
    </div>
  )
}

export default PageHeader 