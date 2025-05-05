import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/hero"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <div>
      <Hero
        title="ROSHAN TRANSPORT SERVICES"
        subtitle="FOR NDIS PARTICIPANTS"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Welcome to RoshanTransport</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                RoshanTransport is a registered NDIS provider (Registration Number: 22416853) dedicated to delivering
                high-quality transport, cleaning, and lawn moving services to NDIS participants across Melbourne.
              </p>
              <p className="text-lg mb-4">
                Our mission is to enhance the independence and quality of life for people with disabilities by providing
                reliable, accessible, and personalized services that meet their unique needs.
              </p>
              <p className="text-lg mb-6">
                With a team of experienced professionals and a fleet of specially equipped vehicles, we ensure safe,
                comfortable, and timely transportation for all our clients.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About RoshanTransport"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of services designed to support NDIS participants in their daily lives. All
            our services are NDIS-approved and can be included in your NDIS plan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Transport Services"
              description="Safe and reliable transportation for medical appointments, social activities, and daily needs."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/services/transport"
            />

            <ServiceCard
              title="Cleaning Services"
              description="Professional cleaning services tailored to meet the specific needs of NDIS participants."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/services/cleaning"
            />

            <ServiceCard
              title="Lawn Moving Services"
              description="Comprehensive lawn care and garden maintenance services to keep your outdoor spaces beautiful."
              imageSrc="/placeholder.svg?height=400&width=600"
              link="/services/lawn-moving"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Why Choose RoshanTransport</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
              <h3 className="text-xl font-bold text-center mb-2">NDIS Registered</h3>
              <p className="text-gray-600 text-center">
                Fully registered NDIS provider with all necessary accreditations and insurances.
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-center">
                Punctual, dependable service with flexible scheduling to meet your needs.
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
              <h3 className="text-xl font-bold text-center mb-2">Experienced Staff</h3>
              <p className="text-gray-600 text-center">
                Trained professionals with expertise in supporting people with disabilities.
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-center">
                Customized services tailored to your individual needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule your transport, cleaning, or lawn moving service. We're here to help you live
            more independently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/booking"
              className="bg-white text-amber-500 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-all duration-300"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="secondary-button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
