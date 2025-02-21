"use server"

export async function shortenUrl(formData: FormData) {
  const longUrl = formData.get("url") as string

  // Here you would typically interact with a database or API to create and store the short URL
  // For this example, we'll just simulate the process
  const shortUrl = `https://short.url/${Math.random().toString(36).substr(2, 6)}`

  console.log(`Original URL: ${longUrl}`)
  console.log(`Shortened URL: ${shortUrl}`)

  return { shortUrl }
}

