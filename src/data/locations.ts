import type { Emirate, SubCity } from "@/types";

export const emirates: Emirate[] = [
  {
    name: "Dubai",
    slug: "dubai",
    description: "Al Haya provides premium cleaning services across Dubai, from luxury villas in Jumeirah to high-rise apartments in Dubai Marina. Our trained professionals serve every neighborhood with the same dedication to excellence that has made us Dubai's trusted cleaning partner.",
    image: "/images/locations/dubai.webp",
    heroImage: "/images/heroes/dubai-hero.webp",
    metaTitle: "Cleaning Services in Dubai",
    metaDescription: "Professional cleaning services in Dubai. Villa, apartment, office, and deep cleaning across all Dubai neighborhoods.",
    cities: [
      { name: "Jumeirah", slug: "jumeirah", emirateSlug: "dubai", image: "/images/areas/dubai/jumeirah.jpg", description: "Al Haya delivers premium villa and apartment cleaning in Jumeirah, one of Dubai's most prestigious neighborhoods. Our teams are experienced with the luxury properties and high standards expected in this beachside community.", metaTitle: "Cleaning Services in Jumeirah, Dubai", metaDescription: "Professional cleaning in Jumeirah, Dubai. Villa and apartment cleaning for this prestigious beachside community." },
      { name: "Al Barsha", slug: "al-barsha", emirateSlug: "dubai", image: "/images/areas/dubai/al-barsha.jpg", description: "Serving the diverse residential community of Al Barsha with thorough apartment and villa cleaning. From Al Barsha 1 to Al Barsha South, we keep homes spotless across this popular Dubai neighborhood.", metaTitle: "Cleaning Services in Al Barsha, Dubai", metaDescription: "Reliable cleaning services in Al Barsha, Dubai. Apartments and villas cleaned to the highest standards." },
      { name: "Downtown Dubai", slug: "downtown-dubai", emirateSlug: "dubai", image: "/images/areas/dubai/downtown-dubai.jpg", description: "Professional cleaning for the iconic towers and residences of Downtown Dubai. We serve apartments in Burj Khalifa district, Boulevard, and surrounding developments with efficient, high-quality cleaning.", metaTitle: "Cleaning Services in Downtown Dubai", metaDescription: "Apartment cleaning in Downtown Dubai. Professional service for Burj Khalifa district and Boulevard residences." },
      { name: "Dubai Marina", slug: "dubai-marina", emirateSlug: "dubai", image: "/images/areas/dubai/dubai-marina.jpg", description: "Al Haya's apartment cleaning is perfectly suited for Dubai Marina's high-rise lifestyle. Our teams efficiently clean studios to penthouses, working around your schedule in this vibrant waterfront community.", metaTitle: "Cleaning Services in Dubai Marina", metaDescription: "Professional apartment cleaning in Dubai Marina. Studios to penthouses, flexible scheduling for your lifestyle." },
      { name: "Business Bay", slug: "business-bay", emirateSlug: "dubai", image: "/images/areas/dubai/business-bay.jpg", description: "We provide both residential and commercial cleaning in Business Bay. From sleek office spaces to modern apartments, Al Haya keeps this business hub looking its best.", metaTitle: "Cleaning Services in Business Bay, Dubai", metaDescription: "Office and apartment cleaning in Business Bay, Dubai. Commercial and residential cleaning services." },
      { name: "Palm Jumeirah", slug: "palm-jumeirah", emirateSlug: "dubai", image: "/images/areas/dubai/palm-jumeirah.jpg", description: "Luxury villa and apartment cleaning on Palm Jumeirah. Our experienced teams understand the premium standards expected on this iconic island, delivering meticulous cleaning for every property.", metaTitle: "Cleaning Services on Palm Jumeirah", metaDescription: "Premium villa and apartment cleaning on Palm Jumeirah. Luxury cleaning for Dubai's iconic island." },
      { name: "JBR", slug: "jbr", emirateSlug: "dubai", image: "/images/areas/dubai/jbr.jpg", description: "Serving the Jumeirah Beach Residence community with reliable apartment cleaning. Our teams handle everything from studios to spacious family units in this popular beachfront destination.", metaTitle: "Cleaning Services in JBR, Dubai", metaDescription: "Apartment cleaning in JBR, Dubai. Reliable service for Jumeirah Beach Residence community." },
      { name: "Silicon Oasis", slug: "silicon-oasis", emirateSlug: "dubai", image: "/images/areas/dubai/silicon.jpg", description: "Affordable, high-quality cleaning for Silicon Oasis residents. We clean apartments and townhouses in this family-friendly community, offering flexible packages to fit every budget.", metaTitle: "Cleaning Services in Silicon Oasis, Dubai", metaDescription: "Affordable cleaning services in Dubai Silicon Oasis. Apartments and townhouses cleaned professionally." },
    ],
  },
  {
    name: "Abu Dhabi",
    slug: "abu-dhabi",
    description: "As the capital of the UAE, Abu Dhabi demands cleaning services that match its world-class standards. Al Haya serves residential and commercial properties across Abu Dhabi with the professionalism and attention to detail the capital deserves.",
    image: "/images/locations/abu-dhabi.webp",
    heroImage: "/images/heroes/abu-dhabi-hero.webp",
    metaTitle: "Cleaning Services in Abu Dhabi",
    metaDescription: "Professional cleaning services in Abu Dhabi. Villa, apartment, and office cleaning across the UAE capital.",
    cities: [
      { name: "Al Reem Island", slug: "al-reem-island", emirateSlug: "abu-dhabi", image: "/images/areas/abu-dhabi/al-reem-island.jpeg", description: "Modern apartment cleaning on Al Reem Island. Our teams serve the growing residential towers with efficient, thorough cleaning services.", metaTitle: "Cleaning Services on Al Reem Island", metaDescription: "Apartment cleaning on Al Reem Island, Abu Dhabi. Professional service for modern residences." },
      { name: "Saadiyat Island", slug: "saadiyat-island", emirateSlug: "abu-dhabi", image: "/images/areas/abu-dhabi/Saadiyat-Island-Abu-Dhabi.webp", description: "Premium cleaning for the luxury villas and apartments of Saadiyat Island. We deliver cleaning services worthy of this exclusive cultural district.", metaTitle: "Cleaning Services on Saadiyat Island", metaDescription: "Luxury cleaning on Saadiyat Island, Abu Dhabi. Villa and apartment cleaning for this exclusive community." },
      { name: "Khalifa City", slug: "khalifa-city", emirateSlug: "abu-dhabi", image: "/images/areas/abu-dhabi/khalifa-city.jpg", description: "Serving the family-friendly neighborhoods of Khalifa City with reliable villa and townhouse cleaning. Regular and one-time services available.", metaTitle: "Cleaning Services in Khalifa City", metaDescription: "Villa and townhouse cleaning in Khalifa City, Abu Dhabi. Reliable service for families." },
      { name: "Corniche", slug: "corniche", emirateSlug: "abu-dhabi", image: "/images/areas/abu-dhabi/corniche.jpg", description: "Professional cleaning for the prestigious apartments along Abu Dhabi Corniche. We bring sparkle to these prime waterfront residences.", metaTitle: "Cleaning Services at Abu Dhabi Corniche", metaDescription: "Apartment cleaning along Abu Dhabi Corniche. Premium service for waterfront residences." },
      { name: "Al Ain", slug: "al-ain", emirateSlug: "abu-dhabi", image: "/images/areas/abu-dhabi/al-ain.jpg", description: "Al Haya extends its quality cleaning to Al Ain, the Garden City. We serve villas, apartments, and offices across this beautiful oasis city.", metaTitle: "Cleaning Services in Al Ain", metaDescription: "Professional cleaning in Al Ain. Villa, apartment, and office cleaning in the Garden City." },
    ],
  },
  {
    name: "Sharjah",
    slug: "sharjah",
    description: "Al Haya's cleaning services in Sharjah combine affordability with quality. We serve the cultural capital's diverse neighborhoods, from modern apartments to traditional villas, with the same high standards we bring everywhere.",
    image: "/images/locations/sharjah.jpg",
    heroImage: "/images/locations/sharjah.jpg",
    metaTitle: "Cleaning Services in Sharjah",
    metaDescription: "Affordable professional cleaning in Sharjah. Apartments, villas, and offices cleaned to the highest standards.",
    cities: [
      { name: "Al Nahda", slug: "al-nahda", emirateSlug: "sharjah", image: "/images/areas/sharjah/al-nahda.jpg", description: "Efficient apartment cleaning in Al Nahda, Sharjah's popular residential area. Affordable rates with professional quality.", metaTitle: "Cleaning Services in Al Nahda, Sharjah", metaDescription: "Apartment cleaning in Al Nahda, Sharjah. Affordable and professional cleaning services." },
      { name: "Al Majaz", slug: "al-majaz", emirateSlug: "sharjah", image: "/images/areas/sharjah/al-majaz.jpg", description: "Professional cleaning for the lakefront residences and offices of Al Majaz. We keep this vibrant district looking its best.", metaTitle: "Cleaning Services in Al Majaz, Sharjah", metaDescription: "Cleaning services in Al Majaz, Sharjah. Apartments and offices near the beautiful Al Majaz Waterfront." },
      { name: "Al Khan", slug: "al-khan", emirateSlug: "sharjah", image: "/images/areas/sharjah/al-khan..webp", description: "Serving Al Khan's beachside apartments with thorough, reliable cleaning. Flexible scheduling to fit your lifestyle.", metaTitle: "Cleaning Services in Al Khan, Sharjah", metaDescription: "Apartment cleaning in Al Khan, Sharjah. Beachside residences cleaned professionally." },
      { name: "Muwaileh", slug: "muwaileh", emirateSlug: "sharjah", image: "/images/areas/sharjah/muwaileh.jpg", description: "Growing community, growing cleaning needs. Al Haya serves Muwaileh's modern developments with quality residential cleaning.", metaTitle: "Cleaning Services in Muwaileh, Sharjah", metaDescription: "Residential cleaning in Muwaileh, Sharjah. Quality service for this growing community." },
    ],
  },
  {
    name: "Ajman",
    slug: "ajman",
    description: "Al Haya brings its professional cleaning expertise to Ajman, offering affordable services for homes and offices throughout this compact emirate. Quality cleaning does not have to break the bank.",
    image: "/images/locations/ajman.jpg",
    heroImage: "/images/heroes/ajman-hero.webp",
    metaTitle: "Cleaning Services in Ajman",
    metaDescription: "Affordable professional cleaning in Ajman. Home and office cleaning across the emirate.",
    cities: [
      { name: "Al Rashidiya", slug: "al-rashidiya", emirateSlug: "ajman", image: "/images/areas/ajman/al-rashidiya.jpg", description: "Reliable cleaning services in Al Rashidiya, Ajman's central residential area. Apartments and villas cleaned to high standards.", metaTitle: "Cleaning Services in Al Rashidiya, Ajman", metaDescription: "Cleaning in Al Rashidiya, Ajman. Professional apartment and villa cleaning." },
      { name: "Al Nuaimia", slug: "al-nuaimia", emirateSlug: "ajman", image: "/images/areas/ajman/alnuaimia.jpg", description: "Serving Al Nuaimia with thorough, affordable cleaning for apartments and small offices. Regular and one-time services.", metaTitle: "Cleaning Services in Al Nuaimia, Ajman", metaDescription: "Affordable cleaning in Al Nuaimia, Ajman. Apartments and offices cleaned professionally." },
      { name: "Emirates City", slug: "emirates-city", emirateSlug: "ajman", image: "/images/areas/ajman/emirates-city.jpg", description: "Apartment cleaning for the towers of Emirates City, Ajman. Efficient service for this popular residential development.", metaTitle: "Cleaning Services in Emirates City, Ajman", metaDescription: "Apartment cleaning in Emirates City, Ajman. Professional tower cleaning services." },
    ],
  },
  {
    name: "Umm Al Quwain",
    slug: "umm-al-quwain",
    description: "Even in the UAE's quieter emirates, Al Haya delivers premium cleaning. Our services in Umm Al Quwain cater to villas, apartments, and commercial spaces across the emirate.",
    image: "/images/locations/umm-al-quwain.jpg",
    heroImage: "/images/heroes/umm-al-quwain-hero.webp",
    metaTitle: "Cleaning Services in Umm Al Quwain",
    metaDescription: "Professional cleaning in Umm Al Quwain. Villa, apartment, and commercial cleaning services.",
    cities: [
      { name: "UAQ Marina", slug: "uaq-marina", emirateSlug: "umm-al-quwain", image: "/images/areas/umm-al-quwain/uaq-marina (2).webp", description: "Cleaning services for the waterfront residences of UAQ Marina. Professional, reliable, and affordable.", metaTitle: "Cleaning Services at UAQ Marina", metaDescription: "Cleaning at UAQ Marina, Umm Al Quwain. Waterfront residence cleaning services." },
      { name: "Old Town", slug: "old-town", emirateSlug: "umm-al-quwain", image: "/images/areas/umm-al-quwain/old-town.jpg", description: "Serving the traditional neighborhoods of Umm Al Quwain Old Town with respectful, thorough cleaning services.", metaTitle: "Cleaning in UAQ Old Town", metaDescription: "Cleaning services in Umm Al Quwain Old Town. Traditional homes cleaned professionally." },
      { name: "Al Salamah", slug: "al-salamah", emirateSlug: "umm-al-quwain", image: "/images/areas/umm-al-quwain/al-salamah2.webp", description: "Residential cleaning in Al Salamah, covering villas and apartments with our standard of excellence.", metaTitle: "Cleaning in Al Salamah, UAQ", metaDescription: "Villa and apartment cleaning in Al Salamah, Umm Al Quwain." },
    ],
  },
  {
    name: "Ras Al Khaimah",
    slug: "ras-al-khaimah",
    description: "From beachfront resorts to mountain-view villas, Ras Al Khaimah offers diverse properties — and Al Haya cleans them all. Our teams bring professional quality to this beautiful northern emirate.",
    image: "/images/locations/ras-al-khaimah2.webp",
    heroImage: "/images/heroes/ras-al-khaimah-hero.webp",
    metaTitle: "Cleaning Services in Ras Al Khaimah",
    metaDescription: "Professional cleaning in Ras Al Khaimah. Villas, apartments, and offices across the emirate.",
    cities: [
      { name: "Al Hamra", slug: "al-hamra", emirateSlug: "ras-al-khaimah", image: "/images/areas/ras-al-khaimah/al-hamra2.webp", description: "Premium cleaning for Al Hamra Village residences. Villas and townhouses maintained to resort-quality standards.", metaTitle: "Cleaning in Al Hamra, RAK", metaDescription: "Villa and townhouse cleaning in Al Hamra Village, Ras Al Khaimah." },
      { name: "Al Marjan Island", slug: "al-marjan-island", emirateSlug: "ras-al-khaimah", image: "/images/areas/ras-al-khaimah/al-marjan-island2.webp", description: "Cleaning services for the stunning island residences of Al Marjan. Waterfront properties cleaned with care.", metaTitle: "Cleaning on Al Marjan Island, RAK", metaDescription: "Waterfront residence cleaning on Al Marjan Island, Ras Al Khaimah." },
      { name: "RAK City", slug: "rak-city", emirateSlug: "ras-al-khaimah", image: "/images/areas/ras-al-khaimah/rak-city.jpg", description: "Serving the central areas of Ras Al Khaimah city with reliable residential and commercial cleaning.", metaTitle: "Cleaning in RAK City", metaDescription: "Residential and commercial cleaning in Ras Al Khaimah city center." },
      { name: "Khuzam", slug: "khuzam", emirateSlug: "ras-al-khaimah", image: "/images/areas/ras-al-khaimah/khuzam2.webp", description: "Affordable home cleaning in Khuzam, one of RAK's established residential communities.", metaTitle: "Cleaning in Khuzam, RAK", metaDescription: "Home cleaning services in Khuzam, Ras Al Khaimah. Affordable and reliable." },
    ],
  },
  {
    name: "Fujairah",
    slug: "fujairah",
    description: "Al Haya's presence in Fujairah ensures that the UAE's east coast has access to the same professional cleaning standards as the rest of the country. We serve homes and businesses throughout this scenic emirate.",
    image: "/images/locations/fujairah.jpg",
    heroImage: "/images/heroes/fujairah-hero.webp",
    metaTitle: "Cleaning Services in Fujairah",
    metaDescription: "Professional cleaning services in Fujairah. Homes and offices on the UAE's east coast.",
    cities: [
      { name: "Fujairah City", slug: "fujairah-city", emirateSlug: "fujairah", image: "/images/areas/fujairah/fujaira-city2.webp", description: "Comprehensive cleaning services in Fujairah City, from modern apartments to traditional villas. Professional quality at competitive rates.", metaTitle: "Cleaning in Fujairah City", metaDescription: "Apartment and villa cleaning in Fujairah City. Professional and affordable." },
      { name: "Dibba Al Fujairah", slug: "dibba-al-fujairah", emirateSlug: "fujairah", image: "/images/areas/fujairah/dibba-al-fujairah.jpg", description: "Bringing quality cleaning to the coastal town of Dibba. Residential properties cleaned with care and attention.", metaTitle: "Cleaning in Dibba Al Fujairah", metaDescription: "Residential cleaning in Dibba Al Fujairah. Quality coastal property cleaning." },
      { name: "Kalba", slug: "kalba", emirateSlug: "fujairah", image: "/images/areas/fujairah/kalba.jpg", description: "Serving the Kalba community with reliable home cleaning. Our teams deliver consistent quality in this historic town.", metaTitle: "Cleaning Services in Kalba", metaDescription: "Home cleaning in Kalba, Fujairah. Reliable service for the local community." },
    ],
  },
];

export function getEmirateBySlug(slug: string): Emirate | undefined {
  return emirates.find((e) => e.slug === slug);
}

export function getCityBySlug(emirateSlug: string, citySlug: string): SubCity | undefined {
  const emirate = getEmirateBySlug(emirateSlug);
  if (!emirate) return undefined;
  return emirate.cities.find((c) => c.slug === citySlug);
}
