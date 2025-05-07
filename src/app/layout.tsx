import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import client from "../../tina/__generated__/client"

const poppins = Poppins({ subsets: ["latin"], weight: ["400" , "100" , "200" , "300" , "500" , "600" , "700" , "800" , "900"]  })

export const metadata: Metadata = {
  title: "RoshanTransport - NDIS Transport, Cleaning & Lawn Moving Services",
  description:
    "RoshanTransport provides quality NDIS-approved transport, cleaning, and lawn moving services for participants across Melbourne.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const dataNav = await client.queries.nav({ relativePath: "nav.md" });
  const datafooter = await client.queries.footer({ relativePath: "footer.md" });

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar {...dataNav}/>
        <main>{children}</main>
        <Footer {...datafooter}/>
      </body>
    </html>
  )
}
