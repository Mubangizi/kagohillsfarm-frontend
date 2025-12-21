"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter } from "react-icons/fi";
import { email, phone, address, linkedinLink, twitterLink, phone_detail } from "@/assets/data";
import ContactForm from "./ContactForm";

const contactMethods = [
  {
    icon: FiPhone,
    title: "Call Us",
    description: "Speak directly with our team",
    detail: phone_detail,
    action: `tel:${phone}`,
    available: "Mon-Fri 9AM-6PM EAT"
  },
  {
    icon: FiMail,
    title: "Email Us",
    description: "Get a detailed response within 24 hours",
    detail: email,
    action: `mailto:${email}`,
    available: "We respond within 24 hours"
  },
  {
    icon: FiMapPin,
    title: "Visit Us",
    description: "Meet us at our office",
    detail: address,
    action: "#",
    available: "By appointment only"
  }
];

const socialLinks = [
  {
    icon: FiLinkedin,
    name: "LinkedIn",
    href: linkedinLink,
    description: "Connect with us professionally"
  },
  {
    icon: FiTwitter,
    name: "Twitter", 
    href: twitterLink,
    description: "Follow us for updates"
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

export default function ContactContent() {

  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center">
        <div className="mx-auto max-w-2xl text-center px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-semibold tracking-tight text-balance primary-color sm:text-7xl">
              Get in <span className="text-gray-800">Touch</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Ready to start your digital transformation? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-base font-semibold leading-7 text-gray-600">Multiple Ways to Reach Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight primary-color sm:text-4xl">
              Choose your preferred communication method
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-center group hover:bg-gray-50 p-8 rounded-xl transition-colors duration-200"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-primary-color group-hover:bg-gray-700 transition-colors duration-200">
                      <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold primary-color">{method.title}</h3>
                    <p className="mt-2 text-gray-600">{method.description}</p>
                    <div className="mt-4">
                      <a 
                        href={method.action}
                        className="text-lg font-medium primary-color hover:text-gray-700"
                      >
                        {method.detail}
                      </a>
                      <p className="mt-2 text-sm text-gray-500">{method.available}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Office Info Section */}
      <div className="bg-white py-24 sm:py-32" style={{ display: 'none' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight primary-color sm:text-4xl">
                Visit Our Office
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Located in the heart of Kampala, our office is open for consultations and meetings. We welcome clients to visit and discuss their projects in person.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold primary-color mb-4">Office Hours</h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium primary-color">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold primary-color mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-color text-white hover:bg-gray-700 transition-colors duration-200"
                      >
                        <IconComponent className="h-5 w-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <FiMapPin className="h-12 w-12 text-gray-400 mx-auto" />
                <p className="mt-4 text-gray-600">Interactive map coming soon</p>
                <p className="text-sm text-gray-500 mt-2">Kampala, Uganda</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
