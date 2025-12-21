"use client";
import { motion } from "framer-motion";
import { 
  FiSearch, 
  FiPenTool, 
  FiZap, 
  FiShield, 
  FiTool,
  FiSettings,
  FiRotateCw,
  FiStar,
  FiRefreshCw,
  FiCheck
} from "react-icons/fi";

const processSteps = [
  {
    step: "01",
    name: "Discovery & Planning",
    description: "We analyze your requirements, define project scope, and create a detailed roadmap with clear milestones.",
    details: ["Requirements Analysis", "Technical Architecture", "Project Timeline", "Risk Assessment"],
    icon: FiSearch
  },
  {
    step: "02", 
    name: "Design & Prototyping",
    description: "Creating intuitive user experiences and technical specifications before development begins.",
    details: ["UI/UX Design", "System Architecture", "Database Design", "API Specifications"],
    icon: FiPenTool
  },
  {
    step: "03",
    name: "Agile Development",
    description: "Iterative development with regular demos, feedback loops, and continuous integration.",
    details: ["Sprint Planning", "Daily Standups", "Code Reviews", "Continuous Testing"],
    icon: FiZap
  },
  {
    step: "04",
    name: "Quality Assurance",
    description: "Comprehensive testing across all scenarios to ensure reliability, security, and performance.",
    details: ["Automated Testing", "Security Audits", "Performance Testing", "User Acceptance Testing"],
    icon: FiShield
  },
  {
    step: "05",
    name: "Deployment & Launch", 
    description: "Seamless deployment with monitoring, documentation, and team training for successful launch.",
    details: ["Production Deployment", "Monitoring Setup", "Documentation", "Team Training"],
    icon: FiTool
  },
  {
    step: "06",
    name: "Support & Evolution",
    description: "Ongoing maintenance, updates, and feature enhancements to keep your solution current.", 
    details: ["24/7 Monitoring", "Regular Updates", "Feature Enhancements", "Technical Support"],
    icon: FiSettings
  }
];

const methodologies = [
  { name: "Agile/Scrum", description: "Iterative development with regular feedback", icon: FiRotateCw },
  { name: "DevOps", description: "Continuous integration and deployment", icon: FiSettings },
  { name: "Clean Code", description: "Maintainable and scalable code practices", icon: FiStar },
  { name: "CI/CD", description: "Automated testing and deployment pipelines", icon: FiRefreshCw }
];

export default function ProcessSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 primary-color">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            A proven methodology for successful delivery
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our structured approach ensures predictable outcomes, transparent communication, and successful project delivery from concept to launch.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-16"
                >
                  <dt className="text-base font-semibold leading-7 primary-color">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-color">
                      <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="absolute left-12 top-0 text-sm font-bold text-gray-400">
                      {step.step}
                    </span>
                    <div className="mt-6">{step.name}</div>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </dd>
                  <dd className="mt-4">
                                         <ul className="space-y-2">
                       {step.details.map((detail) => (
                         <li key={detail} className="flex items-center text-sm text-gray-500">
                           <FiCheck className="mr-2 h-4 w-4 text-gray-400 flex-shrink-0" />
                           {detail}
                         </li>
                       ))}
                     </ul>
                  </dd>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-gray-200">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-lg font-semibold leading-8 primary-color">
                Industry best practices
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                We follow proven methodologies to ensure quality, efficiency, and reliability
              </p>
            </div>
            <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
              {methodologies.map((methodology, index) => {
                const IconComponent = methodology.icon;
                return (
                  <motion.div
                    key={methodology.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <dt className="flex flex-col items-center gap-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-color">
                        <IconComponent className="h-5 w-5 text-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold leading-6 primary-color">
                        {methodology.name}
                      </span>
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-600">
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
  );
} 