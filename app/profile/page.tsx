"use client"

import { useState } from "react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)


  return (
    <div className="container mx-auto p-6 sm:p-24">
      <h1 className="mb-8 text-2xl font-semibold">User Profile</h1>
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold">Recent URL Activity</h2>
      </div>
    </div>
  )
}

