import React from 'react'

function SubscribersCountSkeleton() {
  return (
    <span className="flex items-end gap-2">
      <div className="w-20 md:w-28 h-12 md:h-16 bg-gray-300 rounded-lg animate-pulse" />
      <div className="w-20 h-6 md:w-24 md:h-8 bg-gray-200 rounded-md animate-pulse ml-2" />
    </span>
  )
}

export default SubscribersCountSkeleton