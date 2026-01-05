"use client";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/common/Buttons";
import { FaEnvelope, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { TEAM_MEMBERS, PROBLEMS, STATS, CORE_VALUES } from "@/assets/data";

export default function AboutContent() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
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
              Kago Hill Farm is a women-led coffee enterprise rooted in the
              scenic hills of Kambuga, Kanungu District. We are committed to
              transforming local livelihoods through sustainable coffee farming,
              value addition, and women’s economic empowerment.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Our Story
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Founded on the belief that coffee can transform lives
            </p>
            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                Kago Hill Farm is inspired by the remarkable journey of our
                mother, Mrs. Margaret Mugisha, whose entrepreneurial resilience
                built a legacy of opportunity for her six children and the wider
                community.
              </p>
              <p>
                Through selling mandazi, supplying milk, and later trading
                coffee, she discovered the transformative power of coffee as a
                sustainable livelihood. Her success motivated families across
                Kambuga to plant more trees, invest in farming, and pursue
                better lives.
              </p>
              <p>
                Today, her story guides our mission{" "}
                <span className="primary-color-light">
                  To use coffee as a tool for economic and social upliftment.
                </span>
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
            <h2 className="text-base font-semibold leading-7 text-gray-300">
              Mission & Vision
            </h2>
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-7">
                  To empower women and smallholder farmers through sustainable
                  coffee farming, value addition, training, and reliable market
                  access—ensuring communities achieve stable and dignified
                  livelihoods.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-primary-color-light rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-7">
                  To be a leading model of sustainable, women-led coffee farming
                  that transforms rural communities and elevates livelihoods
                  across Uganda.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="relative bg-white py-24 sm:py-32 overflow-hidden">
        {/* Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Our Core Values
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Guided by sustainable practices and ethical principles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-6xl"
          >
            <div className="rounded-3xl bg-primary-color-light p-8 sm:p-10 shadow-2xl">
              <div className="mx-auto max-w-2xl text-center">
                <p className="leading-7 text-gray-100">
                  We follow sustainable practices and ethical principles that
                  benefit both coffee quality and our community
                </p>
              </div>

              <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
                {CORE_VALUES.map((methodology, index) => {
                  const IconComponent = methodology.icon;
                  return (
                    <motion.div
                      key={methodology.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center text-center"
                    >
                      <dt className="flex flex-col items-center gap-y-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                          <IconComponent
                            className="h-5 w-5 text-gray-800"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="text-sm font-semibold leading-6 text-white">
                          {methodology.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-300">
                        {methodology.description}
                      </dd>
                    </motion.div>
                  );
                })}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              The Problem we solve
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Local Communities like Kambuga face significant challenges
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PROBLEMS.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary-color group-hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent
                        className="h-8 w-8 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold primary-color">
                      {problem.title}
                    </h3>
                    <p className="mt-4 text-gray-600 leading-6">
                      {problem.description}
                    </p>
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
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white sm:text-5xl">
                    {stat.value}
                  </div>
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
            <h2 className="text-base font-semibold leading-7 text-gray-600">
              Meet Our Team
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              The experts behind your success
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team combines entrepreneurial spirit, agricultural expertise,
              and a deep commitment to community empowerment.
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-15 md:grid-cols-2 lg:grid-cols-3">
              {TEAM_MEMBERS.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold primary-color">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  {member.social && (
                    <div className="mt-3 flex items-center gap-2 text-gray-400 justify-center">
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="inline-flex h-9 w-9 items-center rounded-full justify-center transition-colors hover:bg-gray-100 hover:text-gray-600"
                        >
                          <FaLinkedinIn className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on X (Twitter)`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
                        >
                          <FaTwitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.email && (
                        <a
                          href={`mailto:${member.social.email}`}
                          aria-label={`Email ${member.name}`}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
                        >
                          <FaEnvelope className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
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
              Join us in transforming lives through sustainable coffee farming
              and community empowerment.
            </p>
            <div className="mt-10">
              <AnimatedButton href="/contact">Partner With Us</AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
