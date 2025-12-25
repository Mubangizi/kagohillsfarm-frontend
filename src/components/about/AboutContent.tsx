"use client";
import { motion } from "framer-motion";
import { FiTarget, FiHeart, FiUsers, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";
import AnimatedButton from "@/components/common/Buttons";

const teamMembers = [
  {
    name: "Margaret Mugisha",
    role: "Founder & Inspiration",
    description: "An entrepreneurial pioneer whose coffee trading legacy built opportunities for families across Kambuga.",
    image: "/team/margaret.jpg"
  },
  {
    name: "Yvonne Atwiine Mwesige",
    role: "Program Director",
    description: "Leading community empowerment initiatives, women's training programs, and sustainable farming practices.",
    image: "/team/yvonne.jpg"
  },
  {
    name: "Community Partners",
    role: "30+ Women Farmers",
    description: "Dedicated women working daily in coffee cultivation, processing, and value addition.",
    image: "/team/community.jpg"
  }
];


const problems = [
  {
    icon: FiTarget,
    title: "Low Monetary Returns for Farmers",
    description: "Most smallholder farmers sell coffee in cherry form at giveaway prices due to lack of processing capacity, storage, and market access."
  },
  {
    icon: FiHeart,
    title: "Limited Value Addition",
    description: "Without access to hulling, drying, and grading facilities, farmers miss out on the premium earned from clean, processed coffee."
  },
  {
    icon: FiUsers,
    title: "Economic Marginalization of Women",
    description: "Women provide most of the labor but receive the least financial benefit. Their potential remains untapped."
  },
  {
    icon: FiTrendingUp,
    title: "Absence of a Coffee-Drinking Culture",
    description: "Local consumption is low, meaning farmers rarely experience the end product of their labor, and local market potential remains unexplored."
  },
  {
    icon: FiShield,
    title: "Youth Unemployment",
    description: "Young people lack skills in barista training, coffee processing, and modern agricultural methods."
  },
  {
    icon: FiZap,
    title: "Limited Financial Access",
    description: "Without proper storage, farmers cannot benefit from warehouse receipts or use their produce as collateral for credit."
  }
];

const stats = [
  { value: "2019", label: "Farm Established" },
  { value: "20+", label: "Acres of Coffee" },
  { value: "30+", label: "Women Employed" },
  { value: "100%", label: "Arabica Quality" }
];

export default function AboutContent() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl text-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-semibold tracking-tight text-balance primary-color sm:text-7xl">
              About <div className="primary-color-light">kago Hill Farm</div>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Kago Hill Farm is a women-led coffee enterprise rooted in the scenic hills of Kambuga, Kanungu District. We are committed to transforming local livelihoods through sustainable coffee farming, value addition, and women’s economic empowerment.
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
              Founded on the belief that coffee can transform lives
            </p>
            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Kago Hill Farm is inspired by the remarkable journey of our mother, Mrs. Margaret Mugisha, whose entrepreneurial resilience built a legacy of opportunity for her six children and the wider community.
              </p>
              <p>
                Through selling mandazi, supplying milk, and later trading coffee, she discovered the transformative power of coffee as a sustainable livelihood. Her success motivated families across Kambuga to plant more trees, invest in farming, and pursue better lives.
              </p>
              <p>
                Today, her story guides our mission <span className="primary-color-light">To use coffee as a tool for economic and social upliftment.</span>
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
              To use coffee as a tool for economic and social upliftment
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary-color-light rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-7">
                  To empower women and smallholder farmers through sustainable coffee farming, value addition, training, and reliable market access—ensuring communities achieve stable and dignified livelihoods.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary-color-light rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-7">
                  To be a leading model of sustainable, women-led coffee farming that transforms rural communities and elevates livelihoods across Uganda.
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
            <h2 className="text-base font-semibold leading-7 text-gray-600">The Problem we solve</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Local Communities like Kambuga face significant challenges
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary-color group-hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold primary-color">{problem.title}</h3>
                    <p className="mt-4 text-gray-600 leading-6">{problem.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-color py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Growing Impact Since 2019
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
      <div className="bg-white py-24 sm:py-32">
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
              Our team combines entrepreneurial spirit, agricultural expertise, and a deep commitment to community empowerment.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
                    <span className="text-2xl font-bold text-gray-600 align-center">
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
              Ready to partner with us?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join us in transforming lives through sustainable coffee farming and community empowerment.
            </p>
            <div className="mt-10">
              <AnimatedButton href="/contact">
                Partner With Us
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
