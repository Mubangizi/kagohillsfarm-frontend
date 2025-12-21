"use client";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiSmartphone, 
  FiCloud, 
  FiCpu, 
  FiTarget, 
  FiTool,
  FiCheck,
  FiArrowRight
} from "react-icons/fi";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored enterprise solutions built to scale with your business needs and integrate seamlessly with existing systems.",
    icon: FiCode,
    features: ["Enterprise Applications", "SaaS Platforms", "Legacy Modernization"]
  },
  {
    title: "Web & Mobile Development", 
    description: "Modern, responsive applications that deliver exceptional user experiences across all devices and platforms.",
    icon: FiSmartphone,
    features: ["Progressive Web Apps", "Native Mobile Apps", "Cross-Platform Solutions"]
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Scalable cloud infrastructure and automated deployment pipelines that reduce costs and improve reliability.",
    icon: FiCloud, 
    features: ["Cloud Migration", "DevOps Automation", "Infrastructure as Code"]
  },
  {
    title: "AI & Data Analytics",
    description: "Intelligent solutions that transform your data into actionable insights and automated business processes.",
    icon: FiCpu,
    features: ["Machine Learning", "Business Intelligence", "Process Automation"]
  },
  {
    title: "Consulting & Strategy",
    description: "Expert guidance on technology roadmaps, architecture decisions, and digital transformation initiatives.",
    icon: FiTarget,
    features: ["Technology Assessment", "Architecture Design", "Project Planning"]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support and evolution services to keep your systems secure, updated, and performing optimally.",
    icon: FiTool,
    features: ["24/7 Monitoring", "Security Updates", "Performance Optimization"]
  }
];

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
          <p className="text-base font-semibold leading-7 primary-color">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            Everything you need to drive digital transformation
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From initial concept to ongoing support, we provide comprehensive software development services 
            that accelerate business growth and deliver measurable results.
          </p>
        </motion.header>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {services.map((service, index) => {
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
                    transition: { duration: 0.12 }
                  }}
                  className="group relative pl-16 p-6 rounded-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:shadow-gray-200/50 cursor-pointer"
                >
                  <dt className="text-base font-semibold leading-7 primary-color group-hover:primary-color">
                    <motion.div 
                      className="absolute left-3 top-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-color group-hover:bg-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      whileHover={{ 
                        rotate: 6,
                        scale: 1.15,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <IconComponent className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </motion.div>
                    <h3 className="group-hover:primary-color transition-colors duration-300">
                      {service.title}
                    </h3>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </dd>
                  <dd className="mt-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
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
            href="#"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Explore all services
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </div>
  );
} 