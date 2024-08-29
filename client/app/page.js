'use client'

import useUserStore from "@/lib/userStore";

export default function Home() {
  const {currentUserID} = useUserStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Welcome</h1>
    </main>
  );
}
