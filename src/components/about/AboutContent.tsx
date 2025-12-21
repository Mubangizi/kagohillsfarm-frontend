"use client";
import { motion } from "framer-motion";
import { FiTarget, FiHeart, FiUsers, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";
import AnimatedButton from "@/components/common/Buttons";

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    description: "15+ years in digital transformation, former CTO at major tech companies.",
    image: "/team/ceo.jpg"
  },
  {
    name: "Mubangizi Allan",
    role: "CTO",
    description: "Full-stack architect specializing in scalable cloud solutions and AI integration.",
    image: "/team/cto.jpg"
  },
  {
    name: "Michael Chen",
    role: "Lead Designer",
    description: "UX/UI expert with a passion for creating intuitive, user-centered digital experiences.",
    image: "/team/designer.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    description: "Agile specialist ensuring seamless delivery and client satisfaction.",
    image: "/team/pm.jpg"
  }
];

const values = [
  {
    icon: FiTarget,
    title: "Client-Focused",
    description: "Your success is our success. We prioritize understanding your business goals and delivering solutions that drive real results."
  },
  {
    icon: FiHeart,
    title: "Quality First",
    description: "We never compromise on quality. Every line of code, every design element is crafted with precision and attention to detail."
  },
  {
    icon: FiUsers,
    title: "Collaborative",
    description: "We work as an extension of your team, fostering open communication and transparent collaboration throughout every project."
  },
  {
    icon: FiTrendingUp,
    title: "Innovation-Driven",
    description: "We stay ahead of technology trends, constantly learning and adopting cutting-edge solutions to keep you competitive."
  },
  {
    icon: FiShield,
    title: "Reliable",
    description: "Dependable delivery, robust security practices, and ongoing support you can count on for your critical business systems."
  },
  {
    icon: FiZap,
    title: "Agile",
    description: "Rapid iteration, continuous improvement, and adaptive approaches that respond quickly to changing business needs."
  }
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" }
];

export default function AboutContent() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-semibold tracking-tight text-balance primary-color sm:text-7xl">
              About <span className="text-gray-800">kago Hill Farm</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              We&apos;re a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">Our Story</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Founded on the belief that technology should empower growth
            </p>
            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Founded in 2020, Kago Hill Farm emerged from a simple observation: too many businesses were struggling to leverage technology effectively. We saw companies with incredible potential being held back by outdated systems, poor digital experiences, and a lack of strategic technology guidance.
              </p>
              <p>
                Starting in Kampala, Uganda, we&apos;ve grown into a trusted partner for organizations worldwide, from ambitious startups to established enterprises. Our journey has been driven by one consistent mission: to bridge the gap between business objectives and technological possibilities.
              </p>
              <p>
                Today, we&apos;re proud to have helped over 30 companies transform their operations, reach new markets, and achieve sustainable growth through strategic technology implementation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-primary-color py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-300">Mission & Vision</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Empowering businesses through strategic technology
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-7">
                  To be the strategic technology partner that businesses trust to navigate digital transformation, delivering innovative solutions that drive sustainable growth and competitive advantage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-7">
                  A world where every business, regardless of size or industry, has access to world-class technology solutions that unlock their full potential and create meaningful impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">Our Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary-color group-hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold primary-color">{value.title}</h3>
                    <p className="mt-4 text-gray-600 leading-6">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-color py-24 sm:py-32" style={{ display: 'none' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white sm:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-24 sm:py-32" style={{ display: 'none' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">Meet Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              The experts behind your success
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our diverse team of senior developers, designers, and consultants brings decades of combined experience to every project.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold primary-color">{member.name}</h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="mt-4 text-sm text-gray-500 leading-6">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-color py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Let&apos;s discuss how our expertise can help you achieve your digital transformation goals.
            </p>
            <div className="mt-10">
              <AnimatedButton href="/contact">
                Get Started Today
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
