import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function BookingConfirmationPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for booking with RoshanTransport. We have received your booking request and will contact you shortly
          to confirm the details.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          If you have any questions or need to make changes to your booking, please don't hesitate to contact us at{" "}
          <a href="tel:1300XXXXXX" className="text-amber-500 font-bold">
            1300XXXXXX
          </a>{" "}
          or{" "}
          <a href="mailto:info@roshantransport.com.au" className="text-amber-500 font-bold">
            info@roshantransport.com.au
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="cta-button">
            Return to Home
          </Link>
          <Link href="/contact" className="secondary-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
