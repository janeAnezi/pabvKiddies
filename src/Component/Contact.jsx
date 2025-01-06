import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', 
      once: false, 
      mirror: true, 
    });
  }, []);
  
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 data-aos="fade-down" className="text-4xl font-bold text-center text-orange-500">Contact Us</h2>
        <p className="text-center text-gray-600 mt-4">
          Have questions? We'd love to hear from you. Reach out to us today!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div data-aos="fade-left" className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Send Us a Message</h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-orange-300 focus:outline-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
          <div data-aos="fade-right" className="space-y-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-gray-700">Contact Details</h3>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Phone:</span> +234 900 123 4567
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Email:</span> contact@pabvkiddies.com
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-medium">Address:</span> 123 Onuiyi nsukka, Enugu. Nigeria
              </p>
            </div>
            <div className="h-64">
              <iframe
                title="Map"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.8472979492872!2d7.4890706!3d9.0578515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z9KM8xNjEuMzAiTiA37ITIzkuwS!5e0!3m2!1sen!2sng!4v1627509827389!5m2!1sen!2sng"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
