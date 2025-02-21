import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface UrlActivity {
  id: number
  originalUrl: string
  shortUrl: string
  clicks: number
  createdAt: string
}

interface RecentUrlActivityProps {
  userId: number
}

// Mock function to get recent URL activity
const getRecentUrlActivity = (userId: number): UrlActivity[] => {
  return [
    {
      id: 1,
      originalUrl: "https://example.com/very/long/url/1",
      shortUrl: "https://short.url/abc123",
      clicks: 42,
      createdAt: "2023-06-01",
    },
    {
      id: 2,
      originalUrl: "https://example.com/another/long/url/2",
      shortUrl: "https://short.url/def456",
      clicks: 17,
      createdAt: "2023-06-05",
    },
    {
      id: 3,
      originalUrl: "https://example.com/yet/another/long/url/3",
      shortUrl: "https://short.url/ghi789",
      clicks: 31,
      createdAt: "2023-06-10",
    },
  ]
}

export function RecentUrlActivity({ userId }: RecentUrlActivityProps) {
  const recentActivity = getRecentUrlActivity(userId)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-foreground">Original URL</TableHead>
          <TableHead className="text-foreground">Short URL</TableHead>
          <TableHead className="text-foreground">Clicks</TableHead>
          <TableHead className="text-foreground">Created At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentActivity.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium truncate max-w-xs text-foreground" title={activity.originalUrl}>
              {activity.originalUrl}
            </TableCell>
            <TableCell>
              <a
                href={activity.shortUrl}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {activity.shortUrl}
              </a>
            </TableCell>
            <TableCell className="text-foreground">{activity.clicks}</TableCell>
            <TableCell className="text-foreground">{activity.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

