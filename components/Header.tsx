"use client"

import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

export function Header() {

  return (
    <header className="w-full py-4 px-6 bg-background border-b">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-foreground">
          URL Shortener
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-foreground/70 hover:text-foreground">
            Home
          </Link>
          <Link href="/analytics" className="text-foreground/70 hover:text-foreground">
            Analytics
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

