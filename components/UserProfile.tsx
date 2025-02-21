import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface User {
  id: number
  name: string
  email: string
  joinDate: string
}

interface UserProfileProps {
  user: User
  onEdit: () => void
}

export function UserProfile({ user, onEdit }: UserProfileProps) {
  return (
    <Card className="max-w-2xl mx-auto bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Member since</p>
          <p>{user.joinDate}</p>
        </div>
        <Button onClick={onEdit} className="w-full">
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}

