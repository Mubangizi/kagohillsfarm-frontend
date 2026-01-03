"use client";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { PROCESS_STEPS } from "@/assets/data";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 primary-color">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            From Seed to Cup with Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our end-to-end coffee production process ensures exceptional quality
            at every stage, from planting to processing and market delivery.
          </p>
        </motion.div>

        {/* Process Steps with Images */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Background Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

                    {/* Step Number Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-500 text-white font-bold text-lg shadow-lg ring-4 ring-white/20">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm">
                        <IconComponent
                          className="h-5 w-5 text-primary-color"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">
                        {step.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-base leading-7 text-gray-600">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <FiCheck className="mr-2 h-4 w-4 text-accent-color flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
