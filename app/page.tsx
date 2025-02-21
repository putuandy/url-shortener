import UrlShortenerForm from "@/components/UrlShortenerForm"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-24">
      <h1 className="mb-8 text-2xl font-semibold text-center text-foreground">Shorten Your URL</h1>
      <UrlShortenerForm />
    </div>
  )
}

