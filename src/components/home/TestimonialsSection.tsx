"use client";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

const testimonials = [
  {
    body: "Quantlin delivered exactly what we needed on time and within budget. Their team's expertise in cloud architecture saved us significant infrastructure costs.",
    author: {
      name: "Sarah Chen",
      handle: "sarahchen",
      title: "CTO",
      company: "TechFlow Solutions"
    },
  },
  {
    body: "The mobile app they built for us increased our customer engagement by 300%. Their agile approach kept us involved throughout the entire process.",
    author: {
      name: "Michael Rodriguez",
      handle: "mrodriguez",
      title: "Founder & CEO",
      company: "RetailBoost"
    },
  },
  {
    body: "Working with Quantlin felt like having an extended in-house team. Their proactive communication and technical excellence exceeded our expectations.",
    author: {
      name: "Jennifer Kim",
      handle: "jenkim",
      title: "Head of Digital",
      company: "FinanceFirst Bank"
    },
  },
  {
    body: "They transformed our legacy system into a modern, scalable platform. The ROI was evident within the first quarter after launch.",
    author: {
      name: "David Thompson",
      handle: "dthompson",
      title: "VP of Technology",
      company: "Manufacturing Pro"
    },
  },
  {
    body: "Quantlin's AI solutions helped us automate 70% of our manual processes. Their expertise in machine learning is truly impressive.",
    author: {
      name: "Dr. Lisa Wang",
      handle: "lisawang",
      title: "Chief Innovation Officer",
      company: "HealthTech Innovations"
    },
  },
  {
    body: "From concept to deployment, they guided us through every step. The final product exceeded our initial vision and user adoption has been incredible.",
    author: {
      name: "Alex Morgan",
      handle: "alexmorgan",
      title: "Product Manager",
      company: "EduStream"
    },
  }
];

export default function TestimonialsSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 primary-color">Client Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            We have worked with alot of amazing people
          </p>
        </motion.div>


        {/* Testimonials */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-1 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <motion.div
                key={testimonial.author.handle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (testimonialIdx * 0.1) }}
                viewport={{ once: true }}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="primary-color">
                    <p>&ldquo;{testimonial.body}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full primary-color">
                      <FiUser className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold primary-color">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.title}</div>
                      <div className="text-gray-600">{testimonial.author.company}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold leading-8 primary-color">
              Trusted by companies worldwide
            </h3>
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
              {["TechFlow", "RetailBoost", "FinanceFirst", "ManufacturingPro", "HealthTech", "EduStream"].map((company) => (
                <div key={company} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                  <div className="text-lg font-bold text-gray-400">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 