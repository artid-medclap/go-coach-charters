import type { Offer } from "@/types/common";

export const offers: Offer[] = [
  {
    id: "o-1",
    title: "First ride, 20% off",
    description: "New to GoCoach? Save on your very first booking.",
    code: "WELCOME20",
    validTill: "Dec 31, 2026",
  },
  {
    id: "o-2",
    title: "Weekday saver",
    description: "Travel Monday to Thursday and save on select routes.",
    code: "WEEKDAY15",
    validTill: "Nov 30, 2026",
  },
  {
    id: "o-3",
    title: "Group travel bonus",
    description: "Book 4 or more seats together and unlock extra savings.",
    code: "GROUP25",
    validTill: "Oct 31, 2026",
  },
];
