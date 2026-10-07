import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { RoomBoard } from "@/components/RoomBoard";
import { Reservations } from "@/components/Reservations";
import { Billing } from "@/components/Billing";
import { OwnerView } from "@/components/OwnerView";
import { Security } from "@/components/Security";
import { Copilot } from "@/components/Copilot";
import { WhoFor } from "@/components/WhoFor";
import { Comparison } from "@/components/Comparison";
import { TechStack } from "@/components/TechStack";
import { Founder } from "@/components/Founder";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <RoomBoard />
      <Reservations />
      <Billing />
      <OwnerView />
      <Security />
      <Copilot />
      <WhoFor />
      <Comparison />
      <TechStack />
      <Founder />
      <Cta />
    </>
  );
}
