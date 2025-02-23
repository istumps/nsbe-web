import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    <div>
      <PageHeader 
        title="About NSBE" 
        subtitle="Learn about our rich history and the foundation of our organization"
      />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-nsbe-blue mb-6">Our History</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs 