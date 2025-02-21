import { notFound } from "next/navigation"
import { DetailedUrlAnalytics } from "@/components/DetailedUrlAnalytics"

// Mock data for demonstration
const mockUrls = [
  {
    id: 1,
    originalUrl: "https://www.example.com/very/long/url/1",
    shortUrl: "https://short.url/abc123",
    totalClicks: 42,
    createdAt: "2023-06-01",
    dailyClicks: [
      { date: "2023-06-01", clicks: 10 },
      { date: "2023-06-02", clicks: 15 },
      { date: "2023-06-03", clicks: 17 },
    ],
    referrers: [
      { name: "Direct", count: 20 },
      { name: "Twitter", count: 15 },
      { name: "Facebook", count: 7 },
    ],
    browsers: [
      { name: "Chrome", count: 25 },
      { name: "Firefox", count: 10 },
      { name: "Safari", count: 7 },
    ],
  },
  // ... (you can add more mock data here)
]

export default function DetailedAnalyticsPage({ params }: { params: { id: string } }) {
  const urlData = mockUrls.find((url) => url.id === Number.parseInt(params.id))

  if (!urlData) {
    notFound()
  }

  return (
    <div className="container mx-auto p-6 sm:p-24">
      <h1 className="mb-8 text-2xl font-semibold">Detailed Analytics for Short URL</h1>
      <DetailedUrlAnalytics url={urlData} />
    </div>
  )
}

