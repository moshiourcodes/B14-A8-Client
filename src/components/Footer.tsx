



import Link from "next/link";

import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b1510] text-gray-300 border-t border-[#26372c]">

      {/* Main Footer */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-12 md:py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand Section */}
          <div className="space-y-4">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-[#a8d9b5] flex items-center justify-center">
                <BookOpen
                  size={24}
                  className="text-[#10251a]"
                  strokeWidth={2.2}
                />
              </div>

              <span className="text-white text-2xl font-bold tracking-tight">
                BookNook
              </span>
            </Link>

            <p className="text-sm leading-6 text-gray-400 max-w-sm">
              A small neighbourhood library on the web.
              Share the books on your shelf and borrow the
              ones you have been meaning to read.
            </p>

          </div>

          {/* Contact Section */}
          <div className="space-y-5">

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:hello@booknook.app"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#a8d9b5] transition-colors"
              >
                <Mail size={19} />
                <span>hello@booknook.app</span>
              </a>

              <a
                href="tel:+8801700000000"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#a8d9b5] transition-colors"
              >
                <Phone size={19} />
                <span>+880 1700 000 000</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={19} />
                <span>12 Reading Lane, Dhaka</span>
              </div>

            </div>

          </div>

          {/* Social Media Section */}
          <div className="space-y-5">

            <h3 className="text-xl font-bold text-white">
              Follow us
            </h3>

            <div className="flex items-center gap-4">

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="w-11 h-11 rounded-full bg-[#08110c] flex items-center justify-center text-gray-300 hover:bg-[#a8d9b5] hover:text-[#10251a] transition-all duration-300"
              >
                <FaXTwitter size={19} />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-11 h-11 rounded-full bg-[#08110c] flex items-center justify-center text-gray-300 hover:bg-[#a8d9b5] hover:text-[#10251a] transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-11 h-11 rounded-full bg-[#08110c] flex items-center justify-center text-gray-300 hover:bg-[#a8d9b5] hover:text-[#10251a] transition-all duration-300"
              >
                <FaInstagram size={19} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#26372c]">

        <div className="max-w-[1600px] mx-auto px-6 py-6 text-center">

          <p className="text-sm text-gray-500">
            © 2026 BookNook. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
