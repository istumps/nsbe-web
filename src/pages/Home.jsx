import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'

function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50 },
    visible: { 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div>
      <PageHeader 
        title="Welcome to NSBE" 
        subtitle="Empowering Black Engineers to Excel Academically, Succeed Professionally, and Positively Impact the Community"
      />
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={cardVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-nsbe-blue mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              NSBE's mission is to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-nsbe-blue mb-3">Our Vision</h2>
              <p className="text-gray-700">
                To be the premier organization serving Black Engineers worldwide, dedicated to excellence and innovation.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-nsbe-blue mb-3">Get Involved</h2>
              <p className="text-gray-700">
                Join us in our mission to support and promote excellence in engineering through mentorship, leadership, and professional development.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home 