"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { shortenUrl } from "@/actions/urlAction"

export default function UrlShortenerForm() {
  const [shortUrl, setShortUrl] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await shortenUrl(formData)
    setShortUrl(result.shortUrl)
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <form action={handleSubmit} className="space-y-4">
        <Input
          type="url"
          name="url"
          placeholder="Enter your long URL"
          required
          className="w-full bg-background text-foreground"
        />
        <Button type="submit" className="w-full">
          Shorten URL
        </Button>
      </form>
      {shortUrl && (
        <div className="mt-4 p-4 bg-secondary rounded">
          <p className="text-secondary-foreground">Shortened URL:</p>
          <a href={shortUrl} className="text-primary hover:underline break-all">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  )
}

