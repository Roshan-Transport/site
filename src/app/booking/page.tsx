import Hero from "@/components/hero"
import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <div>
      {/* <Hero
        title="BOOK YOUR SERVICE"
        subtitle="Easy Online Booking for NDIS Participants"
        backgroundImage="/placeholder.svg?height=800&width=1600"
        showButtons={false}
      /> */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Book Your Service</h2>
            <p className="text-lg text-center text-gray-600 mb-8">
              Please fill out the form below to book your transport, cleaning, or lawn moving service. Our team will get
              back to you within 24 hours to confirm your booking.
            </p>

            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  )
}
