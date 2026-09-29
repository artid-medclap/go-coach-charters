import type { GalleryItem } from "@/types/gallery";

export const galleryItemsRow1: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Executive Mini Coach",
    category: "Fleet",
    location: "Calgary, AB",
    image: "/images/bus1.webp",
    description: "Compact luxury travel for small teams and private groups.",
  },
  {
    id: "gal-2",
    title: "Rocky Mountain Scenic Tours",
    category: "Tours",
    location: "Banff & Jasper",
    image: "/services/private-tours.webp",
    description: "Panoramic group sightseeing expeditions across Alberta's finest national parks.",
  },
  {
    id: "gal-3",
    title: "56-Passenger Charter Coach",
    category: "Fleet",
    location: "Edmonton, AB",
    image: "/images/bus3.webp",
    description: "Spacious long-distance touring coach with onboard amenities and restrooms.",
  },
  {
    id: "gal-4",
    title: "Corporate Conference Shuttles",
    category: "Corporate",
    location: "Downtown Calgary",
    image: "/services/corporate.webp",
    description: "Punctual, professional transport for conventions, summits, and business events.",
  },
  {
    id: "gal-5",
    title: "Luxury High-Deck Coach",
    category: "Fleet",
    location: "Red Deer, AB",
    image: "/images/bus4.webp",
    description: "Top-tier ride quality with plush reclining seats and individual climate vents.",
  },
  {
    id: "gal-6",
    title: "Athletic Team & League Travel",
    category: "Sports",
    location: "Alberta Tournaments",
    image: "/services/sports.webp",
    description: "Dedicated gear storage and team transport for schools and athletic clubs.",
  },
  {
    id: "gal-7",
    title: "Express Intercity Route",
    category: "Tours",
    location: "Edmonton ↔ Calgary",
    image: "/services/intercity.webp",
    description: "Seamless point-to-point corridor connections with onboard Wi-Fi and power.",
  },
];

export const galleryItemsRow2: GalleryItem[] = [
  {
    id: "gal-8",
    title: "Mid-Size Group Coach",
    category: "Fleet",
    location: "Sherwood Park, AB",
    image: "/images/bus2.webp",
    description: "Versatile 36-passenger coach ideal for family gatherings and corporate outings.",
  },
  {
    id: "gal-9",
    title: "Private Custom Group Charters",
    category: "Events",
    location: "Canmore, AB",
    image: "/services/charters.webp",
    description: "Personalized itineraries built completely around your group's schedule.",
  },
  {
    id: "gal-10",
    title: "VIP Executive Bus",
    category: "Fleet",
    location: "Edmonton, AB",
    image: "/images/bus5.webp",
    description: "Premium leather seating with ample workspace and high-speed Wi-Fi.",
  },
  {
    id: "gal-11",
    title: "Airport & Wedding Shuttles",
    category: "Weddings",
    location: "Calgary International (YYC)",
    image: "/services/shuttle.webp",
    description: "Reliable airport transfers and seamless guest shuttles for special celebrations.",
  },
  {
    id: "gal-12",
    title: "High-Capacity 60-Pax Coach",
    category: "Fleet",
    location: "Fort Saskatchewan, AB",
    image: "/images/bus6.webp",
    description: "Maximum seating capacity designed for large events, schools, and festivals.",
  },
  {
    id: "gal-13",
    title: "Highway Fleet in Motion",
    category: "Fleet",
    location: "Queen Elizabeth II Hwy",
    image: "/hero/commitment.webp",
    description: "Modern, rigorously inspected fleet ready for Alberta all-season travel.",
  },
  {
    id: "gal-14",
    title: "Interior Comfort & Styling",
    category: "Fleet",
    location: "Edmonton, AB",
    image: "/images/why-section-cta.webp",
    description: "Generous legroom, overhead luggage compartments, and modern LED cabin lighting.",
  },
];

export const allGalleryItems: GalleryItem[] = [
  ...galleryItemsRow1,
  ...galleryItemsRow2,
];
