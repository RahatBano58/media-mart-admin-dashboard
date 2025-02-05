"use client"

import { useState } from "react"
import { Shield } from "lucide-react"
import type React from "react" // Added import for React
import Dashboard from "../components/Dashboard"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === "rahat123@gmail.com" && password === "12345678") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid credentials")
    }
  }

  if (isAuthenticated) {
    return <Dashboard />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1d24]">
      <div className="w-[400px] flex flex-col items-center space-y-6">
        <Shield className="w-12 h-12 text-white mb-2" />

        <h1 className="text-xl text-white font-medium tracking-wide">SECURE ACCESS TERMINAL</h1>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 bg-white rounded-xl text-black placeholder:text-gray-500 focus:outline-none"
            placeholder="Email"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 bg-white rounded-xl text-black placeholder:text-gray-500 focus:outline-none"
            placeholder="Password"
            required
          />

          {error && <div className="text-red-500 text-center">{error}</div>}

          <button
            type="submit"
            className="w-full p-4 rounded-xl bg-black border border-[#00ff66] text-[#00ff66] font-medium tracking-wide hover:bg-[#00ff66]/10 transition-colors"
          >
            INITIATE LOGIN SEQUENCE
          </button>
        </form>
      </div>
    </div>
  )
}

