export function Footer() {
  return (
    <footer className="w-full py-4 px-6 bg-background border-t mt-auto">
      <div className="max-w-7xl mx-auto text-center text-foreground/70 text-sm">
        © {new Date().getFullYear()} URL Shortener. All rights reserved.
      </div>
    </footer>
  )
}

