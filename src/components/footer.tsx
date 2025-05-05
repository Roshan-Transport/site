import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RoshanTransport</h3>
            <p className="mb-4">NDIS Provider Registration Number: 22416853</p>
            <p className="mb-4">
              Providing quality transport, cleaning, and lawn moving services for NDIS participants across Melbourne.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-500">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-amber-500">
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/transport" className="hover:text-amber-500">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="hover:text-amber-500">
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link href="/services/lawn-moving" className="hover:text-amber-500">
                  Lawn Moving Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-amber-500">
                  Book a Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-amber-500" />
                <a href="tel:1300XXXXXX" className="hover:text-amber-500">
                  1300XXXXXX
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-500" />
                <a href="mailto:info@roshantransport.com.au" className="hover:text-amber-500">
                  info@roshantransport.com.au
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-500 mt-1" />
                <span>Melbourne, Victoria, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} RoshanTransport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
