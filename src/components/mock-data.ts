import {
  BedDouble,
  Check,
  CircleAlert,
  DoorOpen,
  Sparkles,
  UserCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Room statuses — always paired with a text label, never color alone */
/* ------------------------------------------------------------------ */

export type RoomStatus =
  | "ready"
  | "occupied"
  | "dirty"
  | "cleaning"
  | "arriving"
  | "due-out"
  | "maintenance";

export const STATUS_META: Record<
  RoomStatus,
  { label: string; dot: string; pill: string; icon: LucideIcon }
> = {
  ready: {
    label: "Ready",
    dot: "bg-brand-accent",
    pill: "bg-brand-soft text-brand-dark",
    icon: Check,
  },
  occupied: {
    label: "Occupied",
    dot: "bg-ink-soft",
    pill: "bg-cream-100 text-ink",
    icon: BedDouble,
  },
  dirty: {
    label: "Dirty",
    dot: "bg-warn",
    pill: "bg-[#faf0dd] text-warn",
    icon: CircleAlert,
  },
  cleaning: {
    label: "Cleaning",
    dot: "bg-info",
    pill: "bg-[#e8f0fc] text-info",
    icon: Sparkles,
  },
  arriving: {
    label: "Arriving",
    dot: "bg-brand-accent",
    pill: "bg-brand-soft text-brand-dark",
    icon: UserCheck,
  },
  "due-out": {
    label: "Due out",
    dot: "bg-[#c26a1b]",
    pill: "bg-[#fbe9d9] text-warn",
    icon: DoorOpen,
  },
  maintenance: {
    label: "Maintenance",
    dot: "bg-[#b33737]",
    pill: "bg-[#f7e3e3] text-[#9c2b2b]",
    icon: Wrench,
  },
};

export type Room = {
  number: string;
  status: RoomStatus;
  guest?: string;
};

/* ------------------------------------------------------------------ */
/* Fictional sample data — clearly labelled as illustrative on the site */
/* ------------------------------------------------------------------ */

export type Arrival = {
  name: string;
  room: string | null;
  time: string;
  source: "Direct" | "Walk-in" | "OTA" | "Company";
};

export const ARRIVALS: Arrival[] = [
  { name: "Aarav Sharma", room: "104", time: "11:30 AM", source: "Direct" },
  { name: "Priya Nair", room: "205", time: "12:00 PM", source: "Direct" },
  { name: "Rohan Mehta", room: null, time: "1:15 PM", source: "Walk-in" },
  { name: "Kavya Reddy", room: "108", time: "2:00 PM", source: "OTA" },
  { name: "Arjun Malhotra", room: "301", time: "3:30 PM", source: "Direct" },
  { name: "Divya Iyer", room: null, time: "4:00 PM", source: "Direct" },
  { name: "Vikram Rao", room: "207", time: "5:45 PM", source: "Company" },
  { name: "Sneha Kulkarni", room: "112", time: "6:30 PM", source: "OTA" },
];

export type Departure = {
  name: string;
  room: string;
  time: string;
  folio: string;
};

export const DEPARTURES: Departure[] = [
  { name: "Aditya Menon", room: "101", time: "10:00 AM", folio: "Settled" },
  { name: "Ishaan Kapoor", room: "102", time: "11:00 AM", folio: "Settled" },
  { name: "Meera Joshi", room: "203", time: "11:30 AM", folio: "Balance due" },
  { name: "Kabir Anand", room: "206", time: "12:00 PM", folio: "Settled" },
  { name: "Ritu Verma", room: "305", time: "1:00 PM", folio: "Company billing" },
];

export const HERO_ROOMS: Room[] = [
  { number: "101", status: "ready" },
  { number: "102", status: "occupied", guest: "Ishaan Kapoor" },
  { number: "103", status: "due-out", guest: "Meera Joshi" },
  { number: "104", status: "cleaning" },
  { number: "105", status: "arriving", guest: "Aarav Sharma" },
  { number: "106", status: "maintenance" },
  { number: "201", status: "occupied", guest: "Nisha Pillai" },
  { number: "202", status: "ready" },
  { number: "203", status: "dirty" },
  { number: "204", status: "maintenance" },
  { number: "205", status: "arriving", guest: "Priya Nair" },
  { number: "206", status: "due-out", guest: "Kabir Anand" },
];

export const ROOM_BOARD: Room[] = [
  { number: "101", status: "ready" },
  { number: "102", status: "occupied", guest: "Ishaan Kapoor" },
  { number: "103", status: "due-out", guest: "Meera Joshi" },
  { number: "104", status: "cleaning" },
  { number: "105", status: "arriving", guest: "Aarav Sharma" },
  { number: "106", status: "maintenance" },
  { number: "201", status: "occupied", guest: "Nisha Pillai" },
  { number: "202", status: "ready" },
  { number: "203", status: "dirty" },
];

export function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
