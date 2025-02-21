import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface UrlData {
  id: number
  originalUrl: string
  shortUrl: string
  totalClicks: number
  createdAt: string
  dailyClicks: { date: string; clicks: number }[]
  referrers: { name: string; count: number }[]
  browsers: { name: string; count: number }[]
}

interface DetailedUrlAnalyticsProps {
  url: UrlData
}

export function DetailedUrlAnalytics({ url }: DetailedUrlAnalyticsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>URL Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Original URL:</strong> {url.originalUrl}
          </p>
          <p>
            <strong>Short URL:</strong>{" "}
            <a href={url.shortUrl} className="text-blue-600 hover:underline">
              {url.shortUrl}
            </a>
          </p>
          <p>
            <strong>Total Clicks:</strong> {url.totalClicks}
          </p>
          <p>
            <strong>Created At:</strong> {url.createdAt}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Clicks</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Clicks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {url.dailyClicks.map((day, index) => (
                <TableRow key={index}>
                  <TableCell>{day.date}</TableCell>
                  <TableCell>{day.clicks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Referrers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Referrer</TableHead>
                  <TableHead>Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {url.referrers.map((referrer, index) => (
                  <TableRow key={index}>
                    <TableCell>{referrer.name}</TableCell>
                    <TableCell>{referrer.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Browser Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Browser</TableHead>
                  <TableHead>Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {url.browsers.map((browser, index) => (
                  <TableRow key={index}>
                    <TableCell>{browser.name}</TableCell>
                    <TableCell>{browser.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

