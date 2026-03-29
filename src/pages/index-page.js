import React from "react"
import { navigate } from "gatsby"

export default function Home() {
  if (typeof window !== "undefined") {
    navigate("/species")
  }
  return <p>Redirecting...</p>
}
