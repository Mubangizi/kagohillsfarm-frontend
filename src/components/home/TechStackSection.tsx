"use client";
import { motion } from "framer-motion";
import { 
  FiCode, FiLayers, FiGlobe, FiMonitor, FiFileText, FiEdit,
  FiServer, FiDatabase, FiCoffee, FiBox, FiHash, FiTrendingUp,
  FiSmartphone, FiTablet, FiCircle, FiSquare, FiGrid, FiZap,
  FiCloud, FiSettings, FiKey, FiPackage, FiRotateCw, FiTool,
  FiHardDrive, FiBookOpen, FiSearch, FiCpu, FiActivity, FiBarChart
} from "react-icons/fi";

const techCategories = [
  {
    title: "Frontend",
    description: "Modern frameworks and libraries for exceptional user experiences",
    technologies: [
      { name: "React", icon: FiCode },
      { name: "Next.js", icon: FiLayers },
      { name: "Vue.js", icon: FiGlobe },
      { name: "Angular", icon: FiMonitor },
      { name: "TypeScript", icon: FiFileText },
      { name: "Tailwind CSS", icon: FiEdit }
    ]
  },
  {
    title: "Backend",
    description: "Robust server-side technologies for scalable applications",
    technologies: [
      { name: "Node.js", icon: FiServer },
      { name: "Python", icon: FiDatabase },
      { name: "Java", icon: FiCoffee },
      { name: ".NET", icon: FiBox },
      { name: "PHP", icon: FiHash },
      { name: "Go", icon: FiTrendingUp }
    ]
  },
  {
    title: "Mobile",
    description: "Cross-platform and native mobile development solutions",
    technologies: [
      { name: "React Native", icon: FiSmartphone },
      { name: "Flutter", icon: FiTablet },
      { name: "iOS Swift", icon: FiCircle },
      { name: "Android Kotlin", icon: FiSquare },
      { name: "Xamarin", icon: FiGrid },
      { name: "Ionic", icon: FiZap }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment automation at scale",
    technologies: [
      { name: "AWS", icon: FiCloud },
      { name: "Azure", icon: FiSettings },
      { name: "Google Cloud", icon: FiKey },
      { name: "Docker", icon: FiPackage },
      { name: "Kubernetes", icon: FiRotateCw },
      { name: "Jenkins", icon: FiTool }
    ]
  },
  {
    title: "Database",
    description: "Data storage and management solutions for any scale",
    technologies: [
      { name: "PostgreSQL", icon: FiHardDrive },
      { name: "MongoDB", icon: FiBookOpen },
      { name: "MySQL", icon: FiDatabase },
      { name: "Redis", icon: FiSearch },
      { name: "ElasticSearch", icon: FiActivity },
      { name: "Firebase", icon: FiZap }
    ]
  },
  {
    title: "AI & Analytics",
    description: "Machine learning and data analytics for intelligent solutions",
    technologies: [
      { name: "TensorFlow", icon: FiCpu },
      { name: "PyTorch", icon: FiActivity },
      { name: "OpenAI API", icon: FiCode },
      { name: "Apache Spark", icon: FiZap },
      { name: "Tableau", icon: FiBarChart },
      { name: "Power BI", icon: FiTrendingUp }
    ]
  }
];

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
          <h2 className="text-base font-semibold leading-7 primary-color">Technology Stack</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
            Built with cutting-edge technologies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We leverage the latest technologies and frameworks to build scalable, secure, and high-performance solutions that grow with your business.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {techCategories.map((category, categoryIndex) => (
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
                  {category.technologies.map((tech, techIndex) => {
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