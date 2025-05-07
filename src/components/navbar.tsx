"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { tinaField, useTina } from "tinacms/dist/react"
import { NavQuery, NavQueryVariables } from "../../tina/__generated__/types"

const Navbar = (props: { data: NavQuery; query: string; variables: NavQueryVariables }) => {

  const {data} = useTina(props)
  const info = data.nav
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative h-16 w-48" data-tina-field={tinaField(info, "logo")}>
                <Image src={info.logo || "/default-logo.png"} alt="RoshanTransport Logo" fill style={{ objectFit: "contain" }} priority />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-500 px-3 py-2 font-semibold">
              HOME
            </Link>

            <div className="relative">
              <button
                className="text-gray-700 hover:text-amber-500 px-3 py-2 font-semibold flex items-center"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    href="/services/transport"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Transport
                  </Link>
                  <Link
                    href="/services/cleaning"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Cleaning
                  </Link>
                  <Link
                    href="/services/lawn-mowing"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => setServicesOpen(false)}
                  >
                    Lawn Mowing
                  </Link>
                </div>
              )}
            </div>

            <Link href="/booking" className="text-gray-700 hover:text-amber-500 px-3 py-2 font-semibold">
              BOOKING
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-amber-500 px-3 py-2 font-semibold">
              CONTACT US
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href={`tel:${info.phone}`} className="flex items-center text-amber-500 font-bold" data-tina-field={tinaField(info, "phone")}>
              <Phone className="mr-2 h-5 w-5" />
              {info.phone}
            </a>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>

            <div>
              <button
                className="flex justify-between w-full px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES{" "}
                <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? "transform rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="pl-4">
                  <Link
                    href="/services/transport"
                    className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Transport
                  </Link>
                  <Link
                    href="/services/cleaning"
                    className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Cleaning
                  </Link>
                  <Link
                    href="/services/lawn-moving"
                    className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Lawn Moving
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/booking"
              className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
              onClick={() => setIsOpen(false)}
            >
              BOOKING
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-amber-500"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </Link>

            <a
              href="tel:{info.phone}"
              className="block px-3 py-2 text-base font-semibold text-amber-500"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center"  data-tina-field={tinaField(info, "phone")}>
                <Phone className="mr-2 h-5 w-5" />
                {info.phone}
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
