"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { UserProfile } from "../components/UserProfile"
import { EditProfileForm } from "../components/EditProfileForm"
import { RecentUrlActivity } from "../components/RecentUrlActivity"

export default function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div className="container mx-auto p-6 sm:p-24">
      <h1 className="mb-8 text-2xl font-semibold">User Profile</h1>
      {isEditing ? (
        <EditProfileForm user={user} onDone={() => setIsEditing(false)} />
      ) : (
        <UserProfile user={user} onEdit={() => setIsEditing(true)} />
      )}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Recent URL Activity</h2>
        <RecentUrlActivity userId={user.id} />
      </div>
    </div>
  )
}

