import type { NavItem } from "@/types/common";

export const mainNav: NavItem[] = [
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Calgary", href: "/locations/calgary" },
      { label: "Edmonton", href: "/locations/edmonton" },
      { label: "Sherwood Park", href: "/locations/sherwood-park" },
      { label: "Lloydminster", href: "/locations/lloydminster" },
      { label: "St. Albert", href: "/locations/st-albert" },
      { label: "Fort Saskatchewan", href: "/locations/fort-saskatchewan" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const contactPhone = {
  label: "+1 780-238-3866",
  href: "tel:+17802383866",
};
