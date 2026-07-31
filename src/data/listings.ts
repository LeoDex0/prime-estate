export type Listing = {
  slug: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag: string;
  image: string;
};

export const LISTINGS: Listing[] = [
  {
    slug: "harborview-house",
    title: "Harborview House",
    address: "214 Bayside Drive, Newport",
    price: "$1,240,000",
    beds: 4,
    baths: 3,
    sqft: 3200,
    tag: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "the-birchwood",
    title: "The Birchwood",
    address: "88 Maple Ridge Lane, Aspen Hills",
    price: "$895,000",
    beds: 3,
    baths: 2,
    sqft: 2450,
    tag: "New Listing",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "skyline-loft-12b",
    title: "Skyline Loft 12B",
    address: "500 Union Ave, Unit 12B, Downtown",
    price: "$2,100/mo",
    beds: 2,
    baths: 2,
    sqft: 1350,
    tag: "For Rent",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "willow-creek-cottage",
    title: "Willow Creek Cottage",
    address: "12 Creekside Path, Millbrook",
    price: "$650,000",
    beds: 3,
    baths: 2,
    sqft: 1980,
    tag: "For Sale",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "the-meridian",
    title: "The Meridian Penthouse",
    address: "1 Park Terrace, Uptown",
    price: "$3,450,000",
    beds: 5,
    baths: 4,
    sqft: 4600,
    tag: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "oakridge-family-home",
    title: "Oakridge Family Home",
    address: "45 Oakridge Court, Fairview",
    price: "$725,000",
    beds: 4,
    baths: 3,
    sqft: 2700,
    tag: "For Sale",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80",
  },
];
