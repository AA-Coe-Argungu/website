"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import PageHero from '@/components/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify you are not a robot');
      return;
    }
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      
       <PageHero img={"/about-hero.jpg"} title="Contact Us" description="We'd love to hear from you" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaPaperPlane className="text-emerald-600 mr-3" />
              Send Us a Message
            </h2>
            
            {formSubmitted ? (
              <div className="bg-emerald-100 text-emerald-800 p-4 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key
                    onChange={() => setCaptchaVerified(true)}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-emerald-600 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Along Birnin Kebbi Road, Argungu, Kebbi State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-emerald-600 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+2348068722402</p>
                    {/* <p className="text-gray-600">+234 987 654 3210</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-emerald-600 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@aacoe-argungu.edu.ng</p>
                    <p className="text-gray-600">admissions@aacoe-argungu.edu.ng</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaClock className="text-emerald-600 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d4.123456!3d12.345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDIwJzQ0LjQiTiA0wrAwNyczOS4yIkU!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
