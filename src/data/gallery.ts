export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  slug: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { slug: "all", label: "All Work" },
  { slug: "villa-cleaning", label: "Villa Cleaning" },
  { slug: "deep-cleaning", label: "Deep Cleaning" },
  { slug: "sofa-cleaning", label: "Sofa Cleaning" },
  { slug: "apartment-cleaning", label: "Apartment Cleaning" },
  { slug: "office-cleaning", label: "Office Cleaning" },
  { slug: "window-cleaning", label: "Window Cleaning" },
  { slug: "curtains-cleaning", label: "Curtains Cleaning" },
  { slug: "post-construction", label: "Post Construction" },
  { slug: "mattress-cleaning", label: "Mattress Cleaning" },
  { slug: "car-seats", label: "Car Seats Cleaning" },
  { slug: "move-in-out", label: "Move In/Out Cleaning" },
];

export const galleryImages: GalleryImage[] = [
  // Villa Cleaning
  { src: "/images/services/villa-cleaning/villa1.webp", alt: "Professional villa deep cleaning in Dubai - living room transformation by Al Haya", category: "villa-cleaning" },
  { src: "/images/services/villa-cleaning/villa3.webp", alt: "Villa cleaning service Dubai - spotless bedroom after deep clean by Al Haya team", category: "villa-cleaning" },
  { src: "/images/services/villa-cleaning/villa4.webp", alt: "Complete villa sanitization and cleaning across UAE by Al Haya professionals", category: "villa-cleaning" },
  { src: "/images/services/villa-cleaning/villa5.webp", alt: "Villa deep cleaning Dubai Marina - professional floor and surface cleaning result", category: "villa-cleaning" },
  { src: "/images/services/villa-cleaning/villa6.webp", alt: "Luxury villa cleaning service in Palm Jumeirah Dubai by Al Haya Cleaning", category: "villa-cleaning" },
  { src: "/images/services/villa-cleaning/villa9.webp", alt: "Professional villa cleaning team working in Dubai residential property", category: "villa-cleaning" },

  // Deep Cleaning
  { src: "/images/services/deep-cleaning/deep2.webp", alt: "Deep cleaning services Dubai - thorough kitchen deep clean result by Al Haya", category: "deep-cleaning" },
  { src: "/images/services/deep-cleaning/deep3.webp", alt: "Professional deep cleaning of bathroom and tiles in Dubai apartment", category: "deep-cleaning" },
  { src: "/images/services/deep-cleaning/deep5.webp", alt: "Deep cleaning service UAE - before and after floor restoration", category: "deep-cleaning" },
  { src: "/images/services/deep-cleaning/deep6.webp", alt: "Comprehensive deep cleaning service for homes and offices in Dubai", category: "deep-cleaning" },
  { src: "/images/services/deep-cleaning/deep7.webp", alt: "Professional deep cleaning Dubai - sparkling clean living space by Al Haya", category: "deep-cleaning" },
  { src: "/images/services/deep-cleaning/deep8.webp", alt: "Deep home cleaning across all Emirates UAE by trained Al Haya staff", category: "deep-cleaning" },

  // Sofa Cleaning
  { src: "/images/services/sofa/sofa2.webp", alt: "Professional sofa cleaning Dubai - fabric upholstery steam cleaning by Al Haya", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa3.webp", alt: "Sofa deep cleaning service - stain removal from couch in Dubai home", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa4.webp", alt: "Leather sofa cleaning and conditioning service in Dubai by Al Haya team", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa6.webp", alt: "Professional upholstery cleaning - sofa sanitization service in UAE", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa7.webp", alt: "Steam sofa cleaning Dubai - eco-friendly deep clean for all fabric types", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa8.webp", alt: "Sofa cleaning service result - spotless cushions after Al Haya cleaning", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa9.webp", alt: "Professional couch and sofa cleaning service across Dubai and UAE", category: "sofa-cleaning" },
  { src: "/images/services/sofa/sofa10.webp", alt: "Expert sofa deep cleaning with stain removal in Dubai residential property", category: "sofa-cleaning" },

  // Apartment Cleaning
  { src: "/images/services/apartment-cleaning/apartment1.webp", alt: "Apartment cleaning service Dubai - full unit deep clean by Al Haya", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt2.webp", alt: "Professional apartment cleaning in Dubai Marina - kitchen and living areas", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt3.webp", alt: "Studio apartment deep cleaning service across all Emirates UAE", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt4.webp", alt: "Apartment sanitization and cleaning service in Downtown Dubai", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt5.webp", alt: "Professional apartment cleaning - bedroom and living room deep clean", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt6.webp", alt: "Move-in apartment cleaning service Dubai by Al Haya professionals", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt7.webp", alt: "Complete apartment deep cleaning in JBR Dubai by Al Haya team", category: "apartment-cleaning" },
  { src: "/images/services/apartment-cleaning/apt8.webp", alt: "Apartment cleaning and disinfection service across UAE", category: "apartment-cleaning" },

  // Office Cleaning
  { src: "/images/services/office-cleaning/ofic1.webp", alt: "Professional office cleaning Dubai - workspace sanitization by Al Haya", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic2.webp", alt: "Commercial office deep cleaning service in Business Bay Dubai", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/offic3.webp", alt: "Office cleaning and maintenance service across Dubai commercial areas", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic5.webp", alt: "Professional workspace cleaning - desk and floor sanitization in UAE", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic6.webp", alt: "Corporate office cleaning service by Al Haya - conference room deep clean", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic7.webp", alt: "Office deep cleaning Dubai - reception and lobby cleaning result", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic8.webp", alt: "Professional office sanitization service for UAE businesses by Al Haya", category: "office-cleaning" },
  { src: "/images/services/office-cleaning/ofic9.webp", alt: "Complete office floor and carpet cleaning service in Dubai", category: "office-cleaning" },

  // Window Cleaning
  { src: "/images/services/window-cleaning/wind1.webp", alt: "Professional window cleaning service Dubai - crystal clear glass results", category: "window-cleaning" },
  { src: "/images/services/window-cleaning/wind2.webp", alt: "Window cleaning for villas and apartments across Dubai UAE", category: "window-cleaning" },
  { src: "/images/services/window-cleaning/wind5.webp", alt: "High-rise window cleaning service in Dubai by trained professionals", category: "window-cleaning" },
  { src: "/images/services/window-cleaning/wind6.webp", alt: "Residential window cleaning - streak-free results by Al Haya team", category: "window-cleaning" },
  { src: "/images/services/window-cleaning/wind7.webp", alt: "Professional glass and window cleaning service for UAE properties", category: "window-cleaning" },
  { src: "/images/services/window-cleaning/wind8.webp", alt: "Villa window cleaning Dubai - exterior and interior glass deep clean", category: "window-cleaning" },

  // Curtains Cleaning
  { src: "/images/services/curtains-cleaning/cartains.webp", alt: "Professional curtains cleaning service Dubai - fabric care by Al Haya", category: "curtains-cleaning" },
  { src: "/images/services/curtains-cleaning/curains-cleaning-dubai.webp", alt: "Curtains deep cleaning and sanitization service in Dubai UAE", category: "curtains-cleaning" },
  { src: "/images/services/curtains-cleaning/curtains-building-uae.webp", alt: "Building curtains cleaning service across all Emirates by Al Haya", category: "curtains-cleaning" },
  { src: "/images/services/curtains-cleaning/curtains-cleaning.webp", alt: "Professional curtain steam cleaning and stain removal in Dubai", category: "curtains-cleaning" },

  // Post Construction
  { src: "/images/services/const/post1.webp", alt: "Post construction cleaning Dubai - debris removal and deep clean by Al Haya", category: "post-construction" },
  { src: "/images/services/const/post2.webp", alt: "After renovation cleaning service - dust and material removal in UAE", category: "post-construction" },
  { src: "/images/services/const/post3.webp", alt: "Post-construction cleanup for new villa in Dubai by professional team", category: "post-construction" },
  { src: "/images/services/const/post4.webp", alt: "Construction site cleaning service - floor polishing after renovation", category: "post-construction" },
  { src: "/images/services/const/post5.webp", alt: "Professional post-construction cleaning in Dubai residential building", category: "post-construction" },
  { src: "/images/services/const/post6.webp", alt: "After building cleaning service - window and surface deep clean UAE", category: "post-construction" },
  { src: "/images/services/const/post7.webp", alt: "Post renovation apartment cleaning in Dubai by Al Haya professionals", category: "post-construction" },
  { src: "/images/services/const/post8.webp", alt: "Complete post-construction cleaning and sanitization service in UAE", category: "post-construction" },

  // Mattress Cleaning
  { src: "/images/services/mattress-cleaning/mattress-cleaning-dubai.webp", alt: "Professional mattress cleaning Dubai - deep sanitization by Al Haya", category: "mattress-cleaning" },
  { src: "/images/services/mattress-cleaning/mattress-cleaning.webp", alt: "Mattress steam cleaning and dust mite removal service in UAE", category: "mattress-cleaning" },
  { src: "/images/services/mattress-cleaning/mattress.webp", alt: "Mattress deep cleaning and stain removal service across Dubai", category: "mattress-cleaning" },

  // Car Seats
  { src: "/images/services/carSeats/car-interior-cleaning.webp", alt: "Professional car interior cleaning Dubai - upholstery deep clean by Al Haya", category: "car-seats" },
  { src: "/images/services/carSeats/car-seats-interior.webp", alt: "Car seat cleaning and sanitization service in Dubai UAE", category: "car-seats" },
  { src: "/images/services/carSeats/carSeats-cleaning.webp", alt: "Car seats steam cleaning - stain removal from vehicle interior", category: "car-seats" },
  { src: "/images/services/carSeats/carSeatsCleaning-details.webp", alt: "Professional car interior detailing and seats cleaning in Dubai", category: "car-seats" },

  // Move In/Out
  { src: "/images/services/movein/move1.webp", alt: "Move-in cleaning service Dubai - complete property preparation by Al Haya", category: "move-in-out" },
  { src: "/images/services/movein/move2.webp", alt: "Move-out deep cleaning for apartments and villas in Dubai UAE", category: "move-in-out" },
  { src: "/images/services/movein/move3.webp", alt: "Professional move-in cleaning - kitchen and bathroom deep clean", category: "move-in-out" },
  { src: "/images/services/movein/move4.webp", alt: "End of tenancy cleaning service across all Emirates by Al Haya", category: "move-in-out" },
];
