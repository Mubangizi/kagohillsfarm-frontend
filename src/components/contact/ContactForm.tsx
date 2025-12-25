"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "@/components/common/Buttons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className=" py-24 sm:py-32" id="contact-form">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-900">
              Interested in supporting our mission, purchasing our coffee, or learning more? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md"
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900">
                  Organization / Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
                />
              </div>


            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Details *
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your interest in partnering, investing, purchasing coffee, or visiting the farm..."
                className="mt-2 block w-full rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] px-3 py-2"
              />
            </div>

            <div className="mt-8">
              <AnimatedButton
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </AnimatedButton>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-800 text-green-100 rounded-md">
                Thank you! We&apos;ve received your message and will get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-800 text-red-100 rounded-md">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
