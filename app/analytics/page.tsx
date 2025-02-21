import { UrlAnalytics } from "@/components/UrlAnalytics"

// Mock data for demonstration
const mockUrls = [
  {
    id: 1,
    originalUrl: "https://www.example.com/very/long/url/1",
    shortUrl: "https://short.url/abc123",
    clicks: 42,
    createdAt: "2023-06-01",
  },
  {
    id: 2,
    originalUrl: "https://www.example.com/another/long/url/2",
    shortUrl: "https://short.url/def456",
    clicks: 17,
    createdAt: "2023-06-05",
  },
  {
    id: 3,
    originalUrl: "https://www.example.com/yet/another/long/url/3",
    shortUrl: "https://short.url/ghi789",
    clicks: 31,
    createdAt: "2023-06-10",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6 sm:p-24">
      <h1 className="mb-8 text-2xl font-semibold">Your Shortened URLs</h1>
      <UrlAnalytics urls={mockUrls} />
    </div>
  )
}

