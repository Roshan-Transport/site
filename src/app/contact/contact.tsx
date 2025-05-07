'use client'

import {PageBlocksContact, PageQuery, PageQueryVariables } from "../../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { featuredIcon } from "@/app/HomePage"


export default function Contact(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {

   const {data} = useTina(props)
   const prop = data.page?.blocks?.[0]
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.page.blocks?.map((block,i) => {
              
              if (block && block.__typename === "PageBlocksContact") {
                return <ContactSection key={i} {...block} />;
              }
              return null;
          })} 

            {/* END */}

            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <div>
                  <button type="submit" className="cta-button w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactSection(props: PageBlocksContact) {
  return (
        <div>
            <div  data-tina-field={tinaField(props, "message")}>
              <TinaMarkdown 
              content={props.message}
              components={{
                h2: (props?: { children: React.ReactNode }) => (props ? <h2 className="text-3xl font-bold mb-6" {...props} /> : null),
                p: (props?: { children: React.ReactNode }) => (props ? <p className="text-lg mb-8" {...props}/> : null),
              }}/>
            </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {featuredIcon.phone}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">
                      <a href={`tel:${props.phone}`} className="hover:text-amber-500" data-tina-field={tinaField(props, "phone")}>
                        {props.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {featuredIcon.mail}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">
                      <a href={`mailto:${props.email}`} className="hover:text-amber-500" data-tina-field={tinaField(props, "email")}>
                        {props.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {featuredIcon.mappin}
                  </div>
                  <div className="ml-4" data-tina-field={tinaField(props, "address")}>
                  <TinaMarkdown 
                  content={props.address}
                  components={{
                    h3: (props?: { children: React.ReactNode }) => (props ? <h3 className="text-lg font-bold" {...props} /> : null),
                    p: (props?: { children: React.ReactNode }) => (props ? <p className="text-gray-600" {...props}/> : null),
                  }}/>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {featuredIcon.clock}
                  </div>
                  <div className="ml-4" data-tina-field={tinaField(props, "hours")}>
                  <TinaMarkdown 
                  content={props.hours}
                  components={{
                    h3: (props?: { children: React.ReactNode }) => (props ? <h3 className="text-lg font-bold" {...props} /> : null),
                    p: (props?: { children: React.ReactNode }) => (props ? <p className="text-gray-600" {...props}/> : null),
                  }}/>
                  </div>
                </div>
              </div>
            </div>
  )
}
