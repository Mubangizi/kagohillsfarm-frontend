"use client";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiZap, FiShield } from "react-icons/fi";

const features = [
  {
    name: "Premium Ugandan Arabica",
    description: "Grown in rich volcanic soils and processed with precision.",
    icon: FiUsers,
  },
  {
    name: "Ethical & Sustainable Farming",
    description: "Climate-smart, environmentally responsible techniques guide everything we do.",
    icon: FiZap,
  },
  {
    name: "High Social Impact",
    description: "Every purchase supports farmers, women’s groups, and youth employment",
    icon: FiShield,
  },
  {
    name: "Full Value Chain Control",
    description: "From seedlings to storage and processing, we ensure consistent quality and fair returns for farmers.",
    icon: FiAward,
  },
];


export default function WhyChooseSection() {
  return (
    <div className="bg-primary-color py-24 sm:py-32">
      
      <div className="mx-auto max-w-9xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-gray-300">Why Choose Kago Hill Farm</h2>
          <p className="mt-2 text-3xl font-bold max-w-2xl mx-auto tracking-tight text-gray-200 sm:text-4xl">
            Your trusted Coffee Farm
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-400 mx-auto">
          Our unique model integrates ethical farming, quality-first production, and community empowerment, delivering coffee that creates meaningful impact.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <IconComponent className="h-6 w-6 text-gray-900" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div> 
    </div>
  );
} 

