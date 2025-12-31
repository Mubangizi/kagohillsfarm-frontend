"use client";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";
import { SERVICES } from "@/assets/data";

export default function ServicesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <p className="text-base font-semibold leading-7 primary-color">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kago Hill Farm delivers high-quality coffee while strengthening
            local livelihoods through a combination of farming excellence, value
            addition, and community development.
          </p>
        </motion.header>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.12 },
                  }}
                  className="group relative pl-16 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-200/50 cursor-pointer"
                >
                  <dt className="text-base font-semibold leading-7 primary-color group-hover:primary-color">
                    <motion.div
                      className="absolute left-3 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-color group-hover:bg-primary-color-light transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      whileHover={{
                        rotate: 6,
                        scale: 1.15,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <IconComponent
                        className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <h3 className="group-hover:primary-color transition-colors duration-300">
                      {service.title}
                    </h3>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </dd>
                  {service?.features && (
                    <dd className="mt-4">
                      <ul className="space-y-2">
                        {service?.features?.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300"
                            whileHover={{ x: 4, transition: { duration: 0.1 } }}
                          >
                            <FiCheck className="mr-2 h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </dd>
                  )}

                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                  </div>

                  {/* Subtle border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-colors duration-300"></div>
                </motion.div>
              );
            })}
          </dl>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Partner with us
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
