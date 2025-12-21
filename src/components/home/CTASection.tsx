"use client";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

export default function CTASection() {
  return (
    <div className="primary-color">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your project?
              <br />
              Let&apos;s build something amazing together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Get a free consultation and project estimate. We&apos;ll discuss your goals and show you how we can help transform your business with the right technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/contact#contact-form"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold primary-color shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Free Consultation
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              View Our Work <span aria-hidden="true">→</span>
             </a> */}
          </motion.div>
        </div>
      </div>

      {/* Contact options */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center text-lg font-semibold leading-8 text-white">
              Get in touch
            </h3>
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-8 sm:max-w-xl sm:grid-cols-3 sm:gap-10 lg:mx-0 lg:max-w-none">
              {[
                {
                  icon: FiPhone,
                  title: "Call Us",
                  description: "Speak directly with our team",
                  action: "+256 705754073"
                },
                {
                  icon: FiMail,
                  title: "Email Us", 
                  description: "Get a detailed response",
                  action: "info@kagohillfarm.com"
                },
                {
                  icon: FiMessageCircle,
                  title: "Live Chat",
                  description: "Chat with our experts now",
                  action: "Start Conversation"
                }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                      <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{contact.title}</h3>
                    <p className="mt-2 text-base text-gray-400">{contact.description}</p>
                    <p className="mt-2 text-sm font-medium text-white">{contact.action}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 


