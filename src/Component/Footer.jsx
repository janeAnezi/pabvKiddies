import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PABVkiddies</h3>
              <p className="text-sm text-gray-400">
                PABVkiddies is your one-stop shop for quality kiddies' clothing, toys, and accessories. We provide the best for your little ones!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="/" className="hover:text-orange-500">Home</a></li>
                <li><a href="/product" className="hover:text-orange-500">Products</a></li>
                <li><a href="/services" className="hover:text-orange-500">Services</a></li>
                <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>Email: <a href="mailto:info@pabvkiddies.com" className="hover:text-orange-500">info@pabvkiddies.com</a></li>
                <li>Phone: <a href="tel:+234123456789" className="hover:text-orange-500">+234 806 387 6631</a></li>
                <li>Address: 123 Onuiyi nsukka, Enugu. Nigeria</li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-2xl text-orange-500 hover:text-orange-100"><FaFacebookF/></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-2xl text-orange-500 hover:text-orange-100"><FaXTwitter/></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-2xl text-orange-500 hover:text-orange-100"><SlSocialInstagram/></i>
                </a>
                <a href="https://whatsappme.com" target="_blank" rel="noopener noreferrer">
                  <i className="text-2xl text-orange-500 hover:text-orange-100"><BsWhatsapp/></i>
                </a>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PABVkiddies. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  