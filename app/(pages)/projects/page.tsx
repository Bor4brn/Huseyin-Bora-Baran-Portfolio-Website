"use client"
import ShowCase from '@/components/ShowCase'
import SectionHeading from '@/components/SectionHeading'
import { flyIcon } from '@/app/assets/assets'
import { motion } from 'framer-motion'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-almost-black text-white">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <SectionHeading 
            title='All Projects' 
            icon={flyIcon} 
            description='Explore my complete portfolio of innovative projects and creative solutions.' 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ShowCase showData={10} isMore={false} />
        </motion.div>
      </div>
    </div>
  )
}
