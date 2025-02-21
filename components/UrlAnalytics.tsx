import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Url {
  id: number
  originalUrl: string
  shortUrl: string
  clicks: number
  createdAt: string
}

interface UrlAnalyticsProps {
  urls: Url[]
}

export function UrlAnalytics({ urls }: UrlAnalyticsProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Original URL</TableHead>
          <TableHead>Short URL</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {urls.map((url) => (
          <TableRow key={url.id}>
            <TableCell className="font-medium truncate max-w-xs" title={url.originalUrl}>
              {url.originalUrl}
            </TableCell>
            <TableCell>
              <a
                href={url.shortUrl}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {url.shortUrl}
              </a>
            </TableCell>
            <TableCell>{url.clicks}</TableCell>
            <TableCell>{url.createdAt}</TableCell>
            <TableCell>
              <Link href={`/analytics/${url.id}`} className="text-blue-600 hover:underline">
                View Details
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

