import BookingForm from "@/components/booking-form"
import Link from "next/link"
import Image from "next/image"

export default function LawnMovingPage() {
  return (
    <div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Lawn & Garden Care</h2>
              <p className="text-lg mb-4">
                At RoshanTransport, we understand that maintaining a well-kept garden and lawn is important for creating
                a safe and enjoyable outdoor space. Our NDIS lawn moving service is designed to provide high-quality,
                reliable garden maintenance for NDIS participants across Melbourne.
              </p>
              <p className="text-lg mb-4">
                Our team of experienced gardeners specializes in providing lawn care and garden maintenance services
                that cater to the unique needs of people with disabilities, ensuring your outdoor spaces are not only
                beautiful but also safe and accessible.
              </p>
              <p className="text-lg mb-6">
                As a registered NDIS provider (Registration Number: 22416853), our lawn moving services can be included
                in your NDIS plan, making it easy and affordable to maintain your outdoor spaces.
              </p>
              <Link href="/booking" className="cta-button inline-block">
                Book Lawn Service Now
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="NDIS Lawn Moving Service"
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
          <h2 className="section-title">Our Lawn & Garden Services</h2>

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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Lawn Mowing</h3>
              <p className="text-gray-600 text-center">
                Regular lawn mowing to maintain a neat and tidy appearance, with grass clippings removed or mulched as
                preferred.
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
              <h3 className="text-xl font-bold text-center mb-2">Edging & Trimming</h3>
              <p className="text-gray-600 text-center">
                Precise edging of lawn borders and trimming around obstacles to create a clean, finished look.
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
              <h3 className="text-xl font-bold text-center mb-2">Weed Control</h3>
              <p className="text-gray-600 text-center">
                Removal of weeds from lawns, garden beds, and paved areas to maintain a neat appearance and healthy
                plant growth.
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
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Garden Bed Maintenance</h3>
              <p className="text-gray-600 text-center">
                Pruning, mulching, and general maintenance of garden beds to promote healthy plant growth and attractive
                appearance.
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
              <h3 className="text-xl font-bold text-center mb-2">Hedge Trimming</h3>
              <p className="text-gray-600 text-center">
                Precise trimming and shaping of hedges to maintain their form and promote healthy growth.
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Green Waste Removal</h3>
              <p className="text-gray-600 text-center">
                Collection and responsible disposal of garden waste, including grass clippings, pruned branches, and
                weeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Benefits of Our NDIS Lawn Moving Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
                  Removal of trip hazards such as overgrown grass and protruding branches
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
                  Maintenance of clear pathways and access points for mobility aids
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
                  Reduction of allergens and pests that can cause health issues
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
                  Creation of safe outdoor spaces for relaxation and recreation
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Improved Property Value and Appearance</h3>
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
                  Enhanced curb appeal and property presentation
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
                  Prevention of property damage from overgrown plants and trees
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
                  Maintenance of healthy lawns and gardens that enhance living environment
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
                  Compliance with local council regulations for property maintenance
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
                  Customized garden maintenance plans based on individual needs and preferences
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
                  Consideration of accessibility requirements in garden design and maintenance
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
                  Consistent service from trained gardeners who understand your specific needs
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
          <h2 className="section-title">How Our Lawn Moving Service Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
              <p className="text-gray-600">
                We assess your garden and discuss your specific lawn care and garden maintenance needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Plan</h3>
              <p className="text-gray-600">
                We create a personalized garden maintenance plan tailored to your specific needs and NDIS plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Regular Service</h3>
              <p className="text-gray-600">
                Our professional gardeners provide regular lawn and garden maintenance according to your schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We continuously monitor and adjust our services to ensure your garden remains beautiful and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Book Your Lawn Moving Service</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to book your lawn moving service? Fill out the form below, and our team will get back to you to
            confirm your booking.
          </p>

          <div className="max-w-2xl mx-auto">
            <BookingForm serviceType="lawn-moving" />
          </div>
        </div>
      </section>
    </div>
  )
}
