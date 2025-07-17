"use client"
import type React from "react"

interface AILoadingSpanProps {
  children?: React.ReactNode
  className?: string
}

export function AILoadingSpan({ children = "Loading...", className = "" }: AILoadingSpanProps) {
  return (
    <span
      className={`
        relative inline-block overflow-hidden
        bg-gradient-to-l from-gray-600 via-gray-400 to-gray-600
        bg-clip-text text-transparent
        animate-shimmer
        ${className}
      `}
      style={{
        backgroundSize: "200% 100%",
        animation: "shimmer 1s ease-in-out infinite",
      }}
    >
      {children}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  )
}