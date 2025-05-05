import Hero from "@/components/hero"
import BookingForm from "@/components/booking-form"
import Link from "next/link"
import Image from "next/image"

export default function CleaningPage() {
  return (
    <div>
      {/* <Hero
        title="NDIS CLEANING SERVICES"
        subtitle="Professional Cleaning for NDIS Participants"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      /> */}

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Cleaning Services</h2>
              <p className="text-lg mb-4">
                At RoshanTransport, we understand that maintaining a clean and hygienic living environment is essential
                for health and wellbeing. Our NDIS cleaning service is designed to provide high-quality, personalized
                cleaning solutions for NDIS participants across Melbourne.
              </p>
              <p className="text-lg mb-4">
                Our team of experienced and trained cleaners specializes in providing cleaning services that cater to
                the unique needs of people with disabilities, ensuring your home is not only clean but also safe and
                accessible.
              </p>
              <p className="text-lg mb-6">
                As a registered NDIS provider (Registration Number: 22416853), our cleaning services can be included in
                your NDIS plan, making it easy and affordable to maintain a clean and healthy living environment.
              </p>
              <Link href="/booking" className="cta-button inline-block">
                Book Cleaning Now
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="NDIS Cleaning Service"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Cleaning Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Regular Home Cleaning</h3>
              <p className="text-gray-600 text-center">
                Comprehensive cleaning of living spaces, including dusting, vacuuming, mopping, and sanitizing surfaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Deep Cleaning</h3>
              <p className="text-gray-600 text-center">
                Thorough cleaning of hard-to-reach areas, including behind appliances, inside cabinets, and detailed
                bathroom cleaning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Kitchen Cleaning</h3>
              <p className="text-gray-600 text-center">
                Specialized cleaning of kitchen areas, including appliances, countertops, sinks, and cabinets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Bathroom Sanitization</h3>
              <p className="text-gray-600 text-center">
                Thorough cleaning and sanitization of bathroom fixtures, tiles, and surfaces to ensure hygiene and
                safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Laundry Services</h3>
              <p className="text-gray-600 text-center">
                Washing, drying, and folding of clothes, bedding, and other textiles to maintain cleanliness and
                hygiene.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Specialized Cleaning</h3>
              <p className="text-gray-600 text-center">
                Customized cleaning solutions for specific needs, including allergen reduction, mold removal, and
                sensory-friendly cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Benefits of Our NDIS Cleaning Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Improved Health and Wellbeing</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Reduction of allergens, dust, and other irritants that can trigger respiratory issues
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Prevention of mold and mildew growth that can cause health problems
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sanitization of high-touch surfaces to reduce the spread of germs and bacteria
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Creation of a clean and organized environment that promotes mental wellbeing
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Enhanced Safety and Accessibility</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Removal of clutter and obstacles that can pose tripping hazards
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Cleaning of pathways and access points to ensure easy mobility
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Organization of personal items for easy access and use
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Prevention of slip hazards through proper cleaning of floors and surfaces
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Personalized Service</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Customized cleaning plans based on individual needs and preferences
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Consideration of sensory sensitivities when selecting cleaning products and methods
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible scheduling to accommodate routines and preferences
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Consistent service from trained cleaners who understand your specific needs
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">NDIS Compliance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  All services provided by registered NDIS provider (Registration Number: 22416853)
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent pricing that aligns with NDIS guidelines
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed documentation for NDIS reporting and plan reviews
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Staff trained in NDIS Code of Conduct and quality standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">How Our Cleaning Service Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your specific cleaning needs, preferences, and any special requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Plan</h3>
              <p className="text-gray-600">
                We create a personalized cleaning plan tailored to your specific needs and NDIS plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Service</h3>
              <p className="text-gray-600">
                Our professional cleaners provide regular cleaning services according to your schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We continuously monitor and adjust our services to ensure your needs are being met.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Book Your Cleaning Service</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to book your cleaning service? Fill out the form below, and our team will get back to you to confirm
            your booking.
          </p>

          <div className="max-w-2xl mx-auto">
            <BookingForm serviceType="cleaning" />
          </div>
        </div>
      </section>
    </div>
  )
}
