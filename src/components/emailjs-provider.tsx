"use client"

import type React from "react"

import { useEffect } from "react"
import { initEmailJS } from "@/lib/emailjs-init"

export function EmailJSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initEmailJS()
  }, [])

  return <>{children}</>
}
