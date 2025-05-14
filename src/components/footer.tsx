"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { FooterQuery, FooterQueryVariables } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Footer = (props: { data: FooterQuery; query: string; variables: FooterQueryVariables }) =>{

   const {data} = useTina(props)
   const info = data.footer
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div  data-tina-field={tinaField(info, "message")}>
            <TinaMarkdown
                        content={info.message}
                        components={{
                          h3: (info?: { children: React.ReactNode }) => (info ? <h3 className="text-xl font-bold mb-4" {...info} /> : null),
                          p: (info?: { children: React.ReactNode }) => (info ? <p className="mb-4" {...info}/> : null),
                        }}/>
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
                <Link href="/services/lawn-mowing" className="hover:text-amber-500">
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
                <a href={`tel:${info.phone}`} className="hover:text-amber-500"   data-tina-field={tinaField(info, "phone")}>
                  {info.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-amber-500" />
                <a href={`mailto:${info.email}`} className="hover:text-amber-500"  data-tina-field={tinaField(info, "email")}>
                  {info.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-amber-500 mt-1" />
                <span  data-tina-field={tinaField(info, "message")}>{info.address}</span>
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
