import Hero from "@/components/hero"
import BookingForm from "@/components/booking-form"
import Link from "next/link"
import Image from "next/image"

export default function TransportPage() {
  return (
    <div>
      {/* <Hero
        title="DISABILITY TRANSPORT SERVICES"
        subtitle="Safe, Reliable Transport for NDIS Participants"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      /> */}

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Transport for Your Needs</h2>
              <p className="text-lg mb-4">
                At RoshanTransport, we understand that reliable transportation is essential for maintaining independence
                and accessing community services. Our disability transport service is designed to provide safe,
                comfortable, and accessible transportation for NDIS participants across Melbourne.
              </p>
              <p className="text-lg mb-4">
                Whether you need transportation for medical appointments, social activities, educational purposes, or
                daily errands, our team of experienced drivers and specially equipped vehicles are here to help you get
                where you need to go.
              </p>
              <p className="text-lg mb-6">
                As a registered NDIS provider (Registration Number: 22416853), our transport services can be included in
                your NDIS plan, making it easy and affordable to access the transportation you need.
              </p>
              <Link href="/booking" className="cta-button inline-block">
                Book Transport Now
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Disability Transport Service"
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
          <h2 className="section-title">Our Transport Services</h2>

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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Individual Transport</h3>
              <p className="text-gray-600 text-center">
                Personalized door-to-door transport service for individual NDIS participants, ensuring privacy and
                comfort.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Group Transport</h3>
              <p className="text-gray-600 text-center">
                Efficient and cost-effective transport for groups attending the same activities or destinations.
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
              <h3 className="text-xl font-bold text-center mb-2">Medical Appointments</h3>
              <p className="text-gray-600 text-center">
                Reliable transport to and from medical appointments, with waiting service available if required.
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
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Social & Recreational</h3>
              <p className="text-gray-600 text-center">
                Transport to social events, recreational activities, and community engagements to enhance social
                inclusion.
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Educational Transport</h3>
              <p className="text-gray-600 text-center">
                Regular transport to educational institutions, training centers, and learning facilities.
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Shopping & Errands</h3>
              <p className="text-gray-600 text-center">
                Assistance with shopping trips and daily errands, with support for loading and unloading if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Accessible Vehicle Fleet</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our fleet of vehicles is specially equipped to accommodate various mobility needs, ensuring comfortable and
            safe transportation for all passengers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Wheelchair Accessible Van"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wheelchair Accessible Vans</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hydraulic lifts for easy wheelchair access
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
                    Secure wheelchair restraint systems
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
                    Comfortable seating for additional passengers
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
                    Climate control for year-round comfort
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Accessible Sedan"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Accessible Sedans</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Spacious and comfortable seating
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
                    Easy entry and exit for passengers with limited mobility
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
                    Ample trunk space for mobility aids and equipment
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
                    Professional, courteous drivers trained in disability support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">How Our Transport Service Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Book Your Ride</h3>
              <p className="text-gray-600">
                Contact us by phone, email, or through our online booking form to schedule your transport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Confirmation</h3>
              <p className="text-gray-600">
                Receive confirmation of your booking with details of your pickup time and location.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Your Journey</h3>
              <p className="text-gray-600">
                Our driver arrives at the scheduled time to transport you safely to your destination.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Return Trip</h3>
              <p className="text-gray-600">
                If you've booked a return journey, our driver will pick you up at the agreed time and location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Book Your Transport</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ready to book your transport service? Fill out the form below, and our team will get back to you to confirm
            your booking.
          </p>

          <div className="max-w-2xl mx-auto">
            <BookingForm serviceType="transport" />
          </div>
        </div>
      </section>
    </div>
  )
}
