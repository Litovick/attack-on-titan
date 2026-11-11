import { createFileRoute } from "@tanstack/react-router";
import { AttackGame } from "@/components/AttackGame";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "진격의 거인 — 조사병단 생존 시뮬레이션" },
      { name: "description", content: "벽 밖 열 가지 선택으로 당신의 조사병단 생존 확률을 확인하세요." },
      { property: "og:title", content: "진격의 거인 — 조사병단 생존 시뮬레이션" },
      { property: "og:description", content: "벽 밖 열 가지 선택으로 당신의 조사병단 생존 확률을 확인하세요." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AttackGame,
});
