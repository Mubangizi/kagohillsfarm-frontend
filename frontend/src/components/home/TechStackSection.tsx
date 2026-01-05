"use client";
import { motion } from "framer-motion";
import { COLLABORATORS } from "@/assets/data";

export default function TechStackSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 primary-color">Our Collaborators</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            Building together for sustainable impact
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We work hand-in-hand with local communities, financial institutions, training organizations, and government partners to create lasting change through coffee.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {COLLABORATORS.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-lg font-semibold leading-8 primary-color">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {category.partners.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (techIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="group relative rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-5 w-5 text-gray-600 group-hover:primary-color" />
                          <span className="text-sm font-medium text-gray-700 group-hover:primary-color">
                            {tech.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 