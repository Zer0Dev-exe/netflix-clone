"use client";
import { useState } from "react";
import NetflixIntro from "./components/NetflixIntro";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  if (showIntro) {
    return (
      <NetflixIntro
        onFinish={() => {
          setShowIntro(false);
          router.push("/profiles");
        }}
      />
    );
  }

  return null;
}