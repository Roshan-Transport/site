"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import emailjs from "@emailjs/browser"

interface BookingFormProps {
  serviceType?: "transport" | "cleaning" | "lawn-moving"
}

const BookingForm = ({ serviceType }: BookingFormProps) => {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceType || "transport",
    date: "",
    time: "",
    returnTrip: "no",
    returnDate: "",
    returnTime: "",
    comments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_BOOKING!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      if (result.text === "OK") {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: serviceType || "transport",
          date: "",
          time: "",
          returnTrip: "no",
          returnDate: "",
          returnTime: "",
          comments: "",
        })
        console.log("Form submitted successfully:", formData)
      } else {
        throw new Error("Email failed to send")
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitError("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Your Service</h2>

      {submitSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Your booking has been submitted successfully! We'll contact you shortly to confirm.</p>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          {submitError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{submitError}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          <div className="mb-4">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="service" className="block text-gray-700 font-medium mb-1">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="transport">Transport</option>
                <option value="cleaning">Cleaning</option>
                <option value="lawn-moving">Lawn Moving</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-medium mb-1">
                  Pickup Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700 font-medium mb-1">
                  Pickup Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Do you need a return trip?</label>
              <div className="flex gap-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="returnTrip"
                    value="yes"
                    checked={formData.returnTrip === "yes"}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="returnTrip"
                    value="no"
                    checked={formData.returnTrip === "no"}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {formData.returnTrip === "yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="returnDate" className="block text-gray-700 font-medium mb-1">
                    Return Date *
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    required={formData.returnTrip === "yes"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label htmlFor="returnTime" className="block text-gray-700 font-medium mb-1">
                    Return Time *
                  </label>
                  <input
                    type="time"
                    id="returnTime"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleChange}
                    required={formData.returnTrip === "yes"}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="comments" className="block text-gray-700 font-medium mb-1">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" disabled={isSubmitting} className="cta-button w-full md:w-auto">
              {isSubmitting ? "Submitting..." : "Book Now"}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default BookingForm
