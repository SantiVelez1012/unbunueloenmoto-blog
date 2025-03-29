"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (

    <main>



      <button type="button" onClick={() => router.push('/blog')}>
        Site Home
      </button>
    </main>

  );
}
