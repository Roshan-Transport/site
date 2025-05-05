import Link from "next/link"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  showButtons?: boolean
  buttonText?: string
  buttonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  showButtons = true,
  buttonText = "ONLINE BOOKING",
  buttonLink = "/booking",
  secondaryButtonText = "ONLINE QUOTE",
  secondaryButtonLink = "/contact",
}: HeroProps) => {
  return (
    <div
      className="hero-section h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-content text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl mb-8">{subtitle}</p>}

        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={buttonLink} className="cta-button">
              {buttonText}
            </Link>
            <Link href={secondaryButtonLink} className="secondary-button">
              {secondaryButtonText}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
