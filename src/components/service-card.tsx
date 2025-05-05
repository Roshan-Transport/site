import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
}

const ServiceCard = ({ title, description, imageSrc, link }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="relative h-48 mb-4 rounded-md overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-amber-500 font-medium hover:text-amber-600">
        Learn More →
      </Link>
    </div>
  )
}

export default ServiceCard
