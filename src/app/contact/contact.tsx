"use client"

import type React from "react"

import { useState, useRef } from "react"
import type { PageBlocksContact, PageQuery, PageQueryVariables } from "../../../tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { featuredIcon } from "@/app/HomePage"
import emailjs from "@emailjs/browser"

export default function Contact(props: { data: PageQuery; query: string; variables: PageQueryVariables }) {
  const { data } = useTina(props)
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      if (result.text === "OK") {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Email failed to send")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {data.page.blocks?.map((block, i) => {
              if (block && block.__typename === "PageBlocksContact") {
                return <ContactSection key={i} {...block} />
              }
              return null
            })}

            {/* END */}

            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Your message has been sent successfully! We'll get back to you soon.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p>{submitError}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    ></textarea>
                  </div>

                  <div>
                    <button type="submit" className="cta-button w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
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
      <div data-tina-field={tinaField(props, "message")}>
        <TinaMarkdown
          content={props.message}
          components={{
            h2: (props?: { children: React.ReactNode }) =>
              props ? <h2 className="text-3xl font-bold mb-6" {...props} /> : null,
            p: (props?: { children: React.ReactNode }) => (props ? <p className="text-lg mb-8" {...props} /> : null),
          }}
        />
      </div>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">{featuredIcon.phone}</div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">Phone</h3>
            <p className="text-gray-600">
              <a
                href={`tel:${props.phone}`}
                className="hover:text-amber-500"
                data-tina-field={tinaField(props, "phone")}
              >
                {props.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">{featuredIcon.mail}</div>
          <div className="ml-4">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-gray-600">
              <a
                href={`mailto:${props.email}`}
                className="hover:text-amber-500"
                data-tina-field={tinaField(props, "email")}
              >
                {props.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">{featuredIcon.mappin}</div>
          <div className="ml-4" data-tina-field={tinaField(props, "address")}>
            <TinaMarkdown
              content={props.address}
              components={{
                h3: (props?: { children: React.ReactNode }) =>
                  props ? <h3 className="text-lg font-bold" {...props} /> : null,
                p: (props?: { children: React.ReactNode }) =>
                  props ? <p className="text-gray-600" {...props} /> : null,
              }}
            />
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">{featuredIcon.clock}</div>
          <div className="ml-4" data-tina-field={tinaField(props, "hours")}>
            <TinaMarkdown
              content={props.hours}
              components={{
                h3: (props?: { children: React.ReactNode }) =>
                  props ? <h3 className="text-lg font-bold" {...props} /> : null,
                p: (props?: { children: React.ReactNode }) =>
                  props ? <p className="text-gray-600" {...props} /> : null,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
