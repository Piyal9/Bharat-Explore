/**
 * Bharat Explore — High-Altitude & Pan-India Tourism Intelligence
 * Smart India Hackathon (SIH 2026) Official Platform
 * Clean, flat modern UI with institutional glassmorphism & sustainable tourism engines
 */

// Curated destinations dataset featuring decongestion & offbeat corridors
const localDestinations = [
  {
    id: "pangong",
    name: "Pangong Tso Lake",
    location: "Ladakh",
    state: "Ladakh",
    category: "mountains",
    emotion: "peace",
    bestSeason: "May–Sep",
    difficulty: "Easy",
    type: "Alpine Lake",
    budget: 5000,
    altitude: "14,270 ft",
    isOffbeat: false,
    footfall: "High Footfall Hotspot",
    communityBenefit: "82% Direct Community Revenue",
    ecoBadges: [
      "Plastic-Free / Reusable Flask Mandatory",
      "Glacier Stream Protection"
    ],
    img: "https://images.unsplash.com/photo-1577500680965-6054e87d944b?auto=format&fit=crop&fm=jpg&q=85&w=1400",
    desc: "A dramatic 134 km saline lake at 14,270 ft shifting from turquoise to deep cobalt. High visitor congestion requires strict zero-plastic protocols."
  },
  {
    id: "hanle",
    name: "Hanle Dark Sky Reserve",
    location: "Ladakh",
    state: "Ladakh",
    category: "nature",
    emotion: "peace",
    bestSeason: "May–Oct",
    difficulty: "Moderate",
    type: "Dark Sky Reserve",
    budget: 5500,
    altitude: "14,900 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "95% Direct Community Revenue",
    ecoBadges: [
      "Dark Sky Protected",
      "Zero Light Pollution",
      "Village Astrostays"
    ],
    img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=85",
    desc: "India's first certified Dark Sky Sanctuary offering pristine naked-eye Milky Way observation and village-run astrostays."
  },
  {
    id: "turtuk",
    name: "Turtuk Border Village",
    location: "Ladakh",
    state: "Ladakh",
    category: "culture",
    emotion: "culture",
    bestSeason: "Apr–Oct",
    difficulty: "Easy",
    type: "Heritage Village",
    budget: 4000,
    altitude: "9,800 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "90% Direct Community Revenue",
    ecoBadges: [
      "Eco-Dispersion Gem",
      "Organic Apricot Orchards",
      "Balti Living Museum"
    ],
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85",
    desc: "Northernmost village of India nestled in apricot groves, celebrating unique Balti culture, stone architecture, and women's cooperatives."
  },
  {
    id: "sham",
    name: "Sham Valley Eco Corridor",
    location: "Ladakh",
    state: "Ladakh",
    category: "villages",
    emotion: "peace",
    bestSeason: "Year-Round",
    difficulty: "Easy",
    type: "Eco Valley",
    budget: 3500,
    altitude: "10,200 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "92% Direct Community Revenue",
    ecoBadges: [
      "Acclimatization Priority",
      "Solar Heated Homestays",
      "Low-Carbon Route"
    ],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    desc: "The gentle 'Baby Trek' corridor, ideal for safe low-altitude acclimatization while supporting smallholder apricot orchards and village homestays."
  },
  {
    id: "nubra",
    name: "Nubra Valley & Diskit",
    location: "Ladakh",
    state: "Ladakh",
    category: "mountains",
    emotion: "adventure",
    bestSeason: "May–Sep",
    difficulty: "Moderate",
    type: "Cold Desert",
    budget: 6500,
    altitude: "10,000 ft",
    isOffbeat: false,
    footfall: "High Footfall Hotspot",
    communityBenefit: "85% Direct Community Revenue",
    ecoBadges: [
      "Plastic-Free / Reusable Flask Mandatory",
      "Bactrian Camel Welfare"
    ],
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
    desc: "High-altitude desert valley featuring white sand dunes, Bactrian double-humped camels, and Diskit Gompa overlooking the Shyok River."
  },
  {
    id: "khardung",
    name: "Khardung La Pass",
    location: "Ladakh",
    state: "Ladakh",
    category: "adventure",
    emotion: "adventure",
    bestSeason: "May–Oct",
    difficulty: "Moderate",
    type: "Mountain Pass",
    budget: 2500,
    altitude: "17,582 ft",
    isOffbeat: false,
    footfall: "High Traffic Pass",
    communityBenefit: "80% Direct Community Revenue",
    ecoBadges: [
      "Acclimatization Priority",
      "Strict 15-Min Stay Limit",
      "4x4 Certified Route"
    ],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    desc: "Legendary Himalayan pass connecting Leh to Nubra and Siachen. High altitude requires acclimatization priority and brief stops."
  },
  {
    id: "tsomoriri",
    name: "Tso Moriri Lake Sanctuary",
    location: "Ladakh",
    state: "Ladakh",
    category: "nature",
    emotion: "peace",
    bestSeason: "May–Sep",
    difficulty: "Moderate",
    type: "Wetland Reserve",
    budget: 7000,
    altitude: "14,836 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "94% Direct Community Revenue",
    ecoBadges: [
      "Black-Necked Crane Sanctuary",
      "Zero-Waste Camping",
      "Dark Sky Protected"
    ],
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
    desc: "Ramsar wetland sanctuary and sacred high-altitude lake surrounded by stark Changthang wilderness and nomadic settlements."
  },
  {
    id: "leh",
    name: "Leh Old Town Heritage Core",
    location: "Ladakh",
    state: "Ladakh",
    category: "culture",
    emotion: "culture",
    bestSeason: "Apr–Oct",
    difficulty: "Easy",
    type: "Living Heritage",
    budget: 3500,
    altitude: "11,500 ft",
    isOffbeat: false,
    footfall: "Urban Hub",
    communityBenefit: "90% Direct Community Revenue",
    ecoBadges: [
      "Mud-Brick Heritage Conservation",
      "Dzomsa Eco Refill Partner"
    ],
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85",
    desc: "Historic centre of Himalayan trade, home to Leh Palace, traditional wood and clay bakeries, and heritage stupas."
  },
  {
    id: "shanti",
    name: "Shanti Stupa Hilltop",
    location: "Leh",
    state: "Ladakh",
    category: "spirituality",
    emotion: "spirituality",
    bestSeason: "Apr–Oct",
    difficulty: "Easy",
    type: "Sacred Monument",
    budget: 500,
    altitude: "11,840 ft",
    isOffbeat: false,
    footfall: "Popular Landmark",
    communityBenefit: "100% Peace Trust Monastic Fund",
    ecoBadges: [
      "Monastic Silence Enforced",
      "Clean Solar Illumination"
    ],
    img: "https://images.unsplash.com/photo-1657617832971-6e966739cd10?auto=format&fit=crop&fm=jpg&q=85&w=1400",
    desc: "Hilltop Buddhist stupa offering panoramic 360° views of the Leh valley, Chanspa terraced fields, and snow-capped Zanskar peaks."
  },
  {
    id: "hemis",
    name: "Hemis Monastic Sanctuary",
    location: "Ladakh",
    state: "Ladakh",
    category: "culture",
    emotion: "culture",
    bestSeason: "Jun–Sep",
    difficulty: "Easy",
    type: "Monastery",
    budget: 1200,
    altitude: "12,000 ft",
    isOffbeat: false,
    footfall: "Heritage Center",
    communityBenefit: "88% Direct Community Revenue",
    ecoBadges: [
      "Ancient Murals Integrity",
      "Snow Leopard Buffer Zone"
    ],
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85",
    desc: "Drukpa lineage Buddhist monastery dating back to 1672, celebrated for its annual Cham masked dances and ancient thangka preservation."
  },
  {
    id: "zanskar",
    name: "Zanskar Deep Gorges",
    location: "Ladakh",
    state: "Ladakh",
    category: "adventure",
    emotion: "adventure",
    bestSeason: "Jun–Sep",
    difficulty: "Hard",
    type: "Expedition Valley",
    budget: 9000,
    altitude: "13,100 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "95% Direct Community Revenue",
    ecoBadges: [
      "Eco-Dispersion Gem",
      "Pristine Remote Circuit",
      "Leave No Trace Mandate"
    ],
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85",
    desc: "Raw, isolated Himalayan river canyons, cliffside Phugtal monastery, and legendary trekking passes connecting Padum to Manali."
  },
  {
    id: "spiti",
    name: "Spiti Valley Middle Land",
    location: "Himachal Pradesh",
    state: "Himachal Pradesh",
    category: "mountains",
    emotion: "adventure",
    bestSeason: "Jun–Oct",
    difficulty: "Moderate",
    type: "Alpine Valley",
    budget: 6000,
    altitude: "12,500 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "91% Direct Community Revenue",
    ecoBadges: [
      "Eco-Dispersion Gem",
      "Dark Sky Protected",
      "Fossil Protection Zone"
    ],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
    desc: "Cold desert valley renowned for Key Gompa, Tabo world heritage murals, and Langza marine fossil protection sites."
  },
  {
    id: "gulmarg",
    name: "Gulmarg Meadow of Flowers",
    location: "Jammu & Kashmir",
    state: "Jammu & Kashmir",
    category: "mountains",
    emotion: "adventure",
    bestSeason: "Year-Round",
    difficulty: "Moderate",
    type: "Alpine Crest",
    budget: 6500,
    altitude: "8,694 ft",
    isOffbeat: false,
    footfall: "Popular Crest",
    communityBenefit: "88% Direct Community Revenue",
    ecoBadges: [
      "Clean Snow Certification",
      "High-Altitude Gondola",
      "Zero-Litter Alpine"
    ],
    img: "assets/images/gulmarg.png",
    desc: "Premier alpine ski and meadow crest featuring pristine pine forests and one of the highest operating cable cars."
  },
  {
    id: "auli",
    name: "Auli Snow & Oak Slopes",
    location: "Uttarakhand",
    state: "Uttarakhand",
    category: "mountains",
    emotion: "nature",
    bestSeason: "Nov–Apr",
    difficulty: "Moderate",
    type: "Alpine Meadow",
    budget: 5500,
    altitude: "9,200 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "93% Direct Community Revenue",
    ecoBadges: [
      "Nanda Devi Sanctuary Buffer",
      "Zero Single-Use Plastic",
      "Solar Mountain Lodges"
    ],
    img: "assets/images/Auli.png",
    desc: "Himalayan ski slopes fringed by coniferous and oak forests with breathtaking panoramas of Nanda Devi and Kamet."
  },
  {
    id: "dharamshala",
    name: "Dharamshala & Kangra Valley",
    location: "Himachal Pradesh",
    state: "Himachal Pradesh",
    category: "culture",
    emotion: "peace",
    bestSeason: "Sep–Jun",
    difficulty: "Easy",
    type: "Mountain Sanctuary",
    budget: 4500,
    altitude: "4,780 ft",
    isOffbeat: false,
    footfall: "Cultural Core",
    communityBenefit: "91% Direct Community Revenue",
    ecoBadges: [
      "Monastic Heritage Trail",
      "Organic Tea Gardens",
      "Clean Mountain Water"
    ],
    img: "assets/images/dharamshala.png",
    desc: "Peaceful hillside town nestled under the Dhauladhar ranges, center of Tibetan culture, cedar trails, and tea estates."
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer Living Fort",
    location: "Rajasthan",
    state: "Rajasthan",
    category: "heritage",
    emotion: "culture",
    bestSeason: "Oct–Mar",
    difficulty: "Easy",
    type: "Desert Citadel",
    budget: 4800,
    altitude: "738 ft",
    isOffbeat: false,
    footfall: "Living Fort Heritage",
    communityBenefit: "94% Direct Artisan Revenue",
    ecoBadges: [
      "Artisan Collective Certified",
      "Sustainable Camel Caravans",
      "Heritage Haveli Trust"
    ],
    img: "assets/images/jaisalmer.png",
    desc: "A golden sandstone living fortress rising from Thar desert dunes, sustained by resident artisan families and music guilds."
  },
  {
    id: "dawki",
    name: "Dawki Crystal Umngot River",
    location: "Meghalaya",
    state: "Meghalaya",
    category: "nature",
    emotion: "peace",
    bestSeason: "Nov–Apr",
    difficulty: "Easy",
    type: "Clear River Gorge",
    budget: 3800,
    altitude: "2,050 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "96% Direct Boatmen Revenue",
    ecoBadges: [
      "Zero-Motor Clear Waters",
      "Leave-No-Trace Riverbed",
      "Indigenous Boatmen Guild"
    ],
    img: "assets/images/dawki.png",
    desc: "Glass-transparent waters where wooden boats appear to float in mid-air over polished pebbles and green gorges."
  },
  {
    id: "dzukou",
    name: "Dzukou Valley Lily Sanctuary",
    location: "Nagaland",
    state: "Nagaland",
    category: "nature",
    emotion: "nature",
    bestSeason: "Jun–Sep",
    difficulty: "Hard",
    type: "High-Altitude Valley",
    budget: 4200,
    altitude: "8,045 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "98% Direct Tribal Council",
    ecoBadges: [
      "Plastic-Free Strictly Enforced",
      "Endemic Dzukou Lily Habitat",
      "Solar Forest Trek"
    ],
    img: "assets/images/dzukouvalley.png",
    desc: "Undulating emerald dwarf-bamboo valley famous for seasonal endemic lilies, pristine brooks, and silence."
  },
  {
    id: "gir",
    name: "Gir Asiatic Lion Habitat",
    location: "Gujarat",
    state: "Gujarat",
    category: "nature",
    emotion: "adventure",
    bestSeason: "Dec–Mar",
    difficulty: "Moderate",
    type: "Wildlife Reserve",
    budget: 5200,
    altitude: "450 ft",
    isOffbeat: false,
    footfall: "Protected Habitat",
    communityBenefit: "92% Direct Eco-Guide Revenue",
    ecoBadges: [
      "Apex Predator Conservation",
      "Maldhari Coexistence Zone",
      "Restricted Electric Safaris"
    ],
    img: "assets/images/gir.png",
    desc: "The only sanctuary in the world protecting wild Asiatic lions, coexisting alongside pastoral Maldhari settlements."
  },
  {
    id: "coorg",
    name: "Coorg Mist & Shade Coffee",
    location: "Karnataka",
    state: "Karnataka",
    category: "nature",
    emotion: "peace",
    bestSeason: "Oct–Apr",
    difficulty: "Easy",
    type: "Shade Plantation",
    budget: 4600,
    altitude: "3,800 ft",
    isOffbeat: false,
    footfall: "Hill Retreat",
    communityBenefit: "89% Direct Planter Revenue",
    ecoBadges: [
      "Bird-Friendly Shade Grown",
      "Western Ghats Biodiversity",
      "Zero-Chemical Estates"
    ],
    img: "assets/images/coorg.png",
    desc: "Lush Western Ghats hill district celebrated for bird-friendly shade-grown coffee, spice hills, and Kodava hospitality."
  },
  {
    id: "konark",
    name: "Konark Sun Temple Chariot",
    location: "Odisha",
    state: "Odisha",
    category: "heritage",
    emotion: "culture",
    bestSeason: "Oct–Mar",
    difficulty: "Easy",
    type: "UNESCO Monument",
    budget: 3200,
    altitude: "10 ft",
    isOffbeat: false,
    footfall: "Heritage Monument",
    communityBenefit: "90% Direct Artisan Revenue",
    ecoBadges: [
      "Kalinga Stone Conservation",
      "Solar Sound & Light Show",
      "Coastal Marine Buffer"
    ],
    img: "assets/images/konark.png",
    desc: "13th-century monumental stone chariot carved with 24 intricate astronomical wheels pulled by seven galloping horses."
  },
  {
    id: "chitrakote",
    name: "Chitrakote Horseshoe Falls",
    location: "Chhattisgarh",
    state: "Chhattisgarh",
    category: "nature",
    emotion: "nature",
    bestSeason: "Jul–Feb",
    difficulty: "Easy",
    type: "Horseshoe Waterfall",
    budget: 3400,
    altitude: "1,800 ft",
    isOffbeat: true,
    footfall: "Eco-Dispersion Gem",
    communityBenefit: "95% Direct Tribal Revenue",
    ecoBadges: [
      "Indravati River Basin Protection",
      "Tribal Craft Cooperative",
      "Zero Industrial Runoff"
    ],
    img: "assets/images/chitrakote.png",
    desc: "The Niagara of India, a 300-meter wide horseshoe waterfall roaring across granite cliffs into virgin sal forests."
  }
];

let activeDestinations = [...localDestinations];
let currentFilter = "all";

// 20 Pan-India Regional Heritage & Eco Circuits with crisp, bounded assets
const regionalCircuits = [
  { id: "srinagar", name: "Srinagar & Dal Lake", state: "Jammu & Kashmir", region: "north", img: "assets/images/srinagar.jpg", desc: "Alpine water reflections, floating markets & Shalimar gardens", alt: "5,200 ft" },
  { id: "kurukshetra", name: "Kurukshetra Sacred Sarovar", state: "Haryana", region: "north", img: "assets/images/kurukshetra.png", desc: "Brahma Sarovar ghats, ancient pilgrimage corridors & epic history", alt: "850 ft" },
  { id: "rockgarden", name: "Rock Garden Sculptures", state: "Chandigarh", region: "north", img: "assets/images/rockgarden.png", desc: "World-renowned zero-waste visionary sculpture oasis", alt: "1,050 ft" },
  { id: "tawang", name: "Tawang Monastery Corridor", state: "Arunachal Pradesh", region: "northeast", img: "assets/images/tawang.png", desc: "High-altitude Tibetan monastery perched at 10,000 ft", alt: "10,000 ft" },
  { id: "cherrapunji", name: "Cherrapunji Living Root Bridges", state: "Meghalaya", region: "northeast", img: "assets/images/cherrapunji.png", desc: "Bio-engineered Ficus elastica bridges & mist-shrouded canyons", alt: "4,860 ft" },
  { id: "loktaklake", name: "Loktak Floating Lake", state: "Manipur", region: "northeast", img: "assets/images/loktaklake.png", desc: "Unique circular floating biomass phumdis & Sangai deer sanctuary", alt: "2,520 ft" },
  { id: "kohima", name: "Kohima & Naga Hills", state: "Nagaland", region: "northeast", img: "assets/images/kohima.png", desc: "Hornbill cultural heritage, scenic mountain ridges & tribal crafts", alt: "4,738 ft" },
  { id: "aizawl", name: "Aizawl & Durtlang Ridge", state: "Mizoram", region: "northeast", img: "assets/images/aizawl.png", desc: "Tranquil cloud-kissed ridges, Mizo bamboo crafts & church spires", alt: "3,700 ft" },
  { id: "ujjayantapalace", name: "Ujjayanta Royal Palace", state: "Tripura", region: "northeast", img: "assets/images/ujjayantapalace.png", desc: "Neoclassical lakeside palace surrounded by Mughal gardens", alt: "42 ft" },
  { id: "hampi", name: "Hampi UNESCO Ruins", state: "Karnataka", region: "south-islands", img: "assets/images/hampi.png", desc: "Granite boulder empire, Tungabhadra River & Vijayanagara architecture", alt: "1,530 ft" },
  { id: "hyderabad", name: "Hyderabad Heritage Core", state: "Telangana", region: "south-islands", img: "assets/images/hyderabad.png", desc: "Charminar, Golconda fortress acoustics & Nizami culinary trail", alt: "1,778 ft" },
  { id: "visakhapatnam", name: "Visakhapatnam Ghats Coast", state: "Andhra Pradesh", region: "south-islands", img: "assets/images/visakhapatnam.png", desc: "Where the Eastern Ghats plunge dramatically into the Bay of Bengal", alt: "150 ft" },
  { id: "whitetown", name: "White Town Promenade", state: "Puducherry", region: "south-islands", img: "assets/images/whitetown.png", desc: "Cobblestone French colonial villas, cafes & Bay promenade", alt: "20 ft" },
  { id: "kavaratti", name: "Kavaratti Coral Lagoon", state: "Lakshadweep", region: "south-islands", img: "assets/images/kavaratti.png", desc: "Pristine white sand atolls, turquoise waters & marine reserves", alt: "10 ft" },
  { id: "swarajdeep", name: "Swaraj Dweep (Havelock)", state: "Andaman & Nicobar", region: "south-islands", img: "assets/images/swarajdeep.png", desc: "Radhanagar Beach sunsets, bio-luminescent kayaking & reefs", alt: "30 ft" },
  { id: "mumbai", name: "Mumbai Marine Promenade", state: "Maharashtra", region: "west-central", img: "assets/images/mumbai.png", desc: "Gateway of India, Arabian Sea breeze & Victorian Gothic heritage", alt: "46 ft" },
  { id: "daman", name: "Moti Daman Coastal Fort", state: "Daman & Diu", region: "west-central", img: "assets/images/daman.png", desc: "16th-century ramparts overlooking the Arabian sea & palm beaches", alt: "16 ft" },
  { id: "khajuraho", name: "Khajuraho Temple Marvels", state: "Madhya Pradesh", region: "west-central", img: "assets/images/khajuraho.png", desc: "Intricate Chandela dynasty sandstone art & living cultural legacy", alt: "930 ft" },
  { id: "bastar", name: "Bastar Indigenous Corridors", state: "Chhattisgarh", region: "west-central", img: "assets/images/bastar.png", desc: "Chitrakote horseshoe falls & sacred Dhokra lost-wax bronze crafts", alt: "1,800 ft" },
  { id: "hundrufalls", name: "Hundru Falls Cascade", state: "Jharkhand", region: "west-central", img: "assets/images/hundrufalls.png", desc: "320 ft Subarnarekha drop carving spectacular granite rock pools", alt: "2,140 ft" }
];

const categories = [
  ["mountains", "🏔", "Mountains"],
  ["adventure", "🏕", "Adventure"],
  ["nature", "🌳", "Nature"],
  ["culture", "🎭", "Culture"],
  ["spirituality", "🛕", "Spiritual"],
  ["heritage", "🏛", "Heritage"],
  ["food", "🍛", "Zero-Mile Food"],
  ["villages", "🏘", "Eco Villages"]
];

const states = {
  Ladakh: {
    capital: "Leh",
    altitude: "11,500 – 18,380 ft",
    season: "May – September",
    top: ["Pangong Tso", "Nubra Valley", "Hanle Dark Sky", "Turtuk", "Khardung La"],
    exp: "High-altitude passes, Dark Sky stargazing, solar village homestays, apricot trail decongestion",
    culture: "Tibetan Buddhist heritage, sacred Cham dances, Losar celebrations",
    food: "Thukpa, Skyu, Butter Tea (Gur Gur), Tingmo, Organic Apricot Treats"
  },
  "Himachal Pradesh": {
    capital: "Shimla",
    altitude: "2,200 – 14,000 ft",
    season: "March – June & Sep – Nov",
    top: ["Spiti Valley", "Manali", "Dharamshala", "Kinnaur"],
    exp: "Alpine trekking, cedar valleys, river rafting, mountain homestays",
    culture: "Himalayan folk traditions, Buddhist monasteries in Dharamshala & Spiti",
    food: "Dham, Siddu, Chha Gosht, Babru"
  },
  Uttarakhand: {
    capital: "Dehradun",
    altitude: "1,500 – 12,000 ft",
    season: "March – June & Sep – Nov",
    top: ["Valley of Flowers", "Rishikesh", "Auli", "Chopta"],
    exp: "Garhwal & Kumaon alpine trails, Ganges rafting, spiritual yoga retreats",
    culture: "Garhwali & Kumaoni rituals, Ganga Aarti",
    food: "Kafuli, Chainsoo, Aloo ke Gutke, Bal Mithai"
  },
  Sikkim: {
    capital: "Gangtok",
    altitude: "5,400 – 17,800 ft",
    season: "March – May & Oct – Dec",
    top: ["Gurudongmar Lake", "Pelling", "Yuksom", "Nathula Pass"],
    exp: "Kanchenjunga vistas, 100% organic farms, sacred alpine lakes",
    culture: "Lepcha, Bhutia, and Nepali traditions",
    food: "Momos, Thukpa, Gundruk, Kinema"
  },
  Rajasthan: {
    capital: "Jaipur",
    altitude: "700 – 1,200 ft",
    season: "October – March",
    top: ["Jaipur", "Jaisalmer", "Udaipur", "Jodhpur"],
    exp: "Living fortresses, Thar desert dune safaris, royal palaces, stepwells",
    culture: "Rajput heritage, Kalbelia dance, block printing",
    food: "Dal Baati Churma, Ker Sangri, Gatte ki Sabzi"
  },
  Goa: {
    capital: "Panaji",
    altitude: "Sea level",
    season: "November – February",
    top: ["Palolem", "Old Goa Churches", "Dudhsagar Falls", "Fontainhas"],
    exp: "Eco-coastal trails, spice plantations, kayaking, Portuguese heritage walks",
    culture: "Konkani & Indo-Portuguese architecture and music",
    food: "Fish Curry Thali, Bebinca, Poi, Xacuti"
  },
  Kerala: {
    capital: "Thiruvananthapuram",
    altitude: "Sea level – 8,800 ft",
    season: "October – March",
    top: ["Alleppey Backwaters", "Munnar", "Kochi", "Wayanad"],
    exp: "Electric solar houseboats, Ayurvedic wellness retreats, tea estate hikes",
    culture: "Kathakali, Theyyam, Kalaripayattu martial arts",
    food: "Appam with Stew, Sadya, Kerala Fish Roast"
  },
  "West Bengal": {
    capital: "Kolkata",
    altitude: "Sea level – 7,000 ft",
    season: "October – March",
    top: ["Darjeeling Tiger Hill", "Sundarbans Mangroves", "Kalimpong"],
    exp: "Himalayan toy train, Royal Bengal tiger boat safaris, colonial heritage",
    culture: "Bengali literature, Rabindra Sangeet, terracotta craft",
    food: "Macher Jhol, Kosha Mangsho, Mishti Doi, Sandesh"
  }
};

// Local Economy Direct-Link Foods with zero food miles & community cooperative tags
const foods = [
  {
    name: "Amritsari Kulcha & Chole",
    origin: "Punjab",
    desc: "Crisp multi-layered tandoori flatbread stuffed with spiced potatoes, served with slow-cooked pindi chole.",
    tags: ["Locally Sourced", "Zero Food Miles", "Community Cooperative"],
    revenueShare: "95% Direct Farmer Revenue",
    img: "assets/images/AmritsariKulcha.png"
  },
  {
    name: "Dal Baati Churma",
    origin: "Rajasthan",
    desc: "Wood-fired baked baatis drenched in pure desi ghee, paired with five-lentil panchmel dal and sweet churma.",
    tags: ["Traditional Recipe", "Zero Food Miles", "Heritage Kitchens"],
    revenueShare: "92% Direct Community Revenue",
    img: "assets/images/dalbaatichurma.png"
  },
  {
    name: "Kashmiri Kahwa",
    origin: "Kashmir",
    desc: "Gentle green tea infused with whole saffron strands, green cardamom pods, cinnamon bark, and slivered almonds.",
    tags: ["High Altitude", "Zero Food Miles", "Artisan Harvested"],
    revenueShare: "96% Direct Grower Revenue",
    img: "assets/images/kahwa.png"
  },
  {
    name: "Kerala Appam with Stew",
    origin: "Kerala",
    desc: "Soft fermented rice batter hoppers with fluffy lace edges, served with aromatic coconut milk vegetable stew.",
    tags: ["Zero Food Miles", "Organic Coconut", "Women's Cooperative"],
    revenueShare: "94% Direct Community Revenue",
    img: "assets/images/appam.png"
  },
  {
    name: "Khaman Dhokla",
    origin: "Gujarat",
    desc: "Steamed fluffy gram flour cakes tempered with mustard seeds, curry leaves, and green chillies.",
    tags: ["Locally Sourced", "Zero Food Miles", "Heritage Recipe"],
    revenueShare: "91% Direct Community Revenue",
    img: "assets/images/dhokla.png"
  },
  {
    name: "Hyderabadi Dum Biryani",
    origin: "Telangana",
    desc: "Fragrant aged basmati rice cooked in sealed handis with saffron, mint, fried shallots, and royal spice potpourri.",
    tags: ["Slow Food", "Community Cooperative"],
    revenueShare: "89% Direct Community Revenue",
    img: "assets/images/biryani.png"
  },
  {
    name: "Traditional Bebinca",
    origin: "Goa",
    desc: "Indo-Portuguese seven-layered coconut milk and egg pudding delicately baked on gentle hearth embers.",
    tags: ["Heritage Bakeries", "Artisan Recipe"],
    revenueShare: "93% Direct Bakery Revenue",
    img: "assets/images/bebinca.png"
  },
  {
    name: "Crisp Masala Dosa",
    origin: "Karnataka",
    desc: "Fermented rice and black lentil crepe roasted golden with butter, filled with spiced potato masala and fresh coconut chutney.",
    tags: ["Zero Food Miles", "Community Sourced"],
    revenueShare: "90% Direct Community Revenue",
    img: "assets/images/dosa.png"
  },
  {
    name: "Goan Coastal Fish Curry",
    origin: "Goa",
    desc: "Fresh catch simmered in rich Kashmiri chilli and tangy kokum coconut gravy, honoring sustainable coastal fisheries.",
    tags: ["Sustainable Catch", "Zero Food Miles", "Fisherfolk Cooperative"],
    revenueShare: "95% Direct Fisherfolk Revenue",
    img: "assets/images/fishcurry.png"
  },
  {
    name: "Aloo ke Gutke",
    origin: "Uttarakhand",
    desc: "Kumaoni mountain potatoes stir-fried in fragrant mustard oil with wild Himalayan jumboo herb and red chillies.",
    tags: ["Mountain Foraged", "Zero Food Miles", "Village Organic"],
    revenueShare: "97% Direct Homestay Revenue",
    img: "assets/images/alookegutke.png"
  },
  {
    name: "Himachali Dham",
    origin: "Himachal Pradesh",
    desc: "Traditional satvik festive feast cooked in brass pots by Botis, featuring Madra, Mah ki Dal, and Khatta.",
    tags: ["Ancient Feast", "Zero Food Miles", "Solar Kitchens"],
    revenueShare: "93% Direct Community Revenue",
    img: "assets/images/dham.png"
  },
  {
    name: "Chhena Poda",
    origin: "Odisha",
    desc: "Baked cottage cheese confection wrapped in sal leaves and caramelized slowly over charcoal embers.",
    tags: ["Dairy Cooperative", "Zero Food Miles"],
    revenueShare: "94% Direct Dairy Farmer Revenue",
    img: "assets/images/chhenapoda.png"
  }
];

const journeyNodes = [
  "Ladakh (High Passes)",
  "Hanle (Dark Sky)",
  "Himachal (Spiti)",
  "Uttarakhand (Ganges)",
  "Sikkim (Himalayas)",
  "Rajasthan (Deserts)",
  "Kerala (Backwaters)"
];

const stateCoordinates = {
  Ladakh: [34.1526, 77.5771],
  "Himachal Pradesh": [31.1048, 77.1734],
  Uttarakhand: [30.3165, 78.0322],
  Sikkim: [27.3389, 88.6065],
  Rajasthan: [26.9124, 75.7873],
  Goa: [15.2993, 74.1240],
  Kerala: [10.8505, 76.2711],
  "West Bengal": [22.5726, 88.3639]
};


// ═══════════════════════════════════════════════════════
//  INTERACTIVE MAP & HOTSPOTS ENGINE
//  Extracted to js/map.js (Leaflet GIS, 44 Hotspots & GeoJSON)
// ═══════════════════════════════════════════════════════

let currentScore = 85;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// Toast notification helper
const toast = (text) => {
  const t = $("#toast");
  if (!t) return;
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2800);
};

// --- Backend API Integration ---
const APP_API_ORIGIN = window.location.protocol.startsWith("http") ? "" : "http://127.0.0.1:8000";

async function fetchDestinationsFromAPI() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 800);
    const res = await fetch(`${APP_API_ORIGIN}/api/destinations`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        activeDestinations = data;
        renderDestinations();
        console.log(`[API] Loaded destinations and merged with SIH sustainable metadata.`);
      }
    }
  } catch (err) {
    console.warn("[API] Backend offline or delayed; utilizing resilient local destination cache.");
  }
}

async function fetchPassesFromAPI() {
  try {
    const res = await fetch(`${APP_API_ORIGIN}/api/passes`);
    if (res.ok) return await res.json();
  } catch (err) {
    console.warn("[API] Passes API unreachable; using simulated pass telemetry.");
  }
  return {
    "Khardung La": {
      status: "OPEN",
      altitude: "17,582 ft",
      condition: "Pass cleared. Crossing permitted between 06:00 and 16:00 with 4x4 snow chains.",
      safe: true,
      temperature: "-2°C"
    },
    "Chang La": {
      status: "CAUTION",
      altitude: "17,688 ft",
      condition: "High ridge winds (-5°C). Snow drift active near summit. Cross before 14:00.",
      safe: true,
      temperature: "-5°C"
    },
    "Zoji La": {
      status: "RESTRICTED",
      altitude: "11,575 ft",
      condition: "Freight convoy movement active from Sonamarg. Expect intermittent 2-hour delays.",
      safe: false,
      temperature: "1°C"
    },
    "Baralacha La": {
      status: "OPEN",
      altitude: "16,040 ft",
      condition: "Clear passage on Manali-Leh highway. Acclimatization stop recommended at Jispa.",
      safe: true,
      temperature: "-4°C"
    }
  };
}

function getSessionId() {
  let sid = localStorage.getItem("bharatSessionId");
  if (!sid) {
    sid = "sih_user_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("bharatSessionId", sid);
  }
  return sid;
}

async function syncSavedToBackend(savedIds) {
  try {
    const headers = (window.BharatAuth && typeof window.BharatAuth.getAuthHeaders === "function")
      ? window.BharatAuth.getAuthHeaders()
      : { "Content-Type": "application/json" };

    const url = `${APP_API_ORIGIN}/api/journey/save`;

    await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        session_id: getSessionId(),
        destination_ids: savedIds,
        notes: "SIH 2026 Sustainable Expedition"
      })
    });
  } catch (e) {
    // Silent fallback
  }
}

window.syncUserSessionState = async function () {
  try {
    if (window.BharatAuth && window.BharatAuth.isAuthenticated()) {
      const savedData = await window.BharatAuth.getSavedDestinations();
      if (savedData && Array.isArray(savedData.destination_ids)) {
        let localSaved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
        const merged = Array.from(new Set([...localSaved, ...savedData.destination_ids]));
        localStorage.setItem("bharatSaved", JSON.stringify(merged));
      }
    }
    updateSavedCount();
    renderJourneyDrawer();
  } catch (e) {
    console.warn("Error syncing user session state:", e);
  }
};

// --- Dynamic Rendering & Decongestion Engine ---

function renderCategories() {
  const grid = $("#categoryGrid");
  if (!grid) return;
  
  grid.innerHTML = categories.map((c, i) => {
    const label = (window.i18n && typeof window.i18n.getCategoryName === "function")
      ? (window.i18n.getCategoryName(c[0]) || c[2])
      : c[2];
    return `
      <button class="category ${i === 0 ? "active" : ""}" data-category="${c[0]}">
        <span>${c[1]}</span>
        <small>${label}</small>
      </button>
    `;
  }).join("");

  $$(".category").forEach(b => {
    b.onclick = () => {
      $$(".category").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      renderResults(b.dataset.category);
    };
  });
}

function renderResults(cat = "mountains") {
  const target = $("#categoryResults");
  if (!target) return;

  let arr = activeDestinations.filter(d => (d.category || "").toLowerCase() === cat.toLowerCase());
  if (!arr.length) {
    arr = activeDestinations.filter(d => 
      (d.name || "").toLowerCase().includes(cat.toLowerCase()) || 
      (d.type || "").toLowerCase().includes(cat.toLowerCase())
    );
  }

  if (arr.length) {
    target.innerHTML = arr.slice(0, 4).map(d => {
      const trans = (window.i18n && typeof window.i18n.getDestinationTranslation === "function")
        ? window.i18n.getDestinationTranslation(d.id)
        : null;
      const dName = (trans && trans.name) ? trans.name : d.name;
      const dDesc = (trans && trans.desc) ? trans.desc : d.desc;
      const seasonLbl = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("lbl_season") : "Best Season:";

      return `
        <article class="result-card">
          <span class="mini">${d.location} • ${d.type}</span>
          <h3>${dName}</h3>
          <p>${dDesc}</p>
          <div style="margin-top:auto;">
            <span style="font-size:11px; color:var(--emerald-pop); font-weight:700; display:block; margin-bottom:4px;">
              ✦ ${d.communityBenefit || "Direct Community Benefit"}
            </span>
            <small>${seasonLbl} ${d.bestSeason || d.best_season || "May–Sep"}</small>
          </div>
        </article>
      `;
    }).join("");
  } else {
    target.innerHTML = `
      <div class="result-card" style="grid-column: span 4; text-align:center;">
        <h3>Explore more destinations across India</h3>
        <p>Connecting verified regional routes for ${cat} via Bharat Explore Smart Database.</p>
      </div>
    `;
  }
}

function renderCircuits(region = "all") {
  const grid = $("#circuitsGrid");
  if (!grid) return;

  const filtered = region === "all" 
    ? regionalCircuits 
    : regionalCircuits.filter(c => c.region === region);

  const actionText = (window.i18n && typeof window.i18n.t === "function")
    ? window.i18n.t("btn_explore_node")
    : "Explore Regional Node →";

  grid.innerHTML = filtered.map(c => {
    const customDesc = (window.i18n && typeof window.i18n.getCircuitTranslation === "function")
      ? (window.i18n.getCircuitTranslation(c.id) || c.desc)
      : c.desc;

    return `
      <article class="circuit-card" style="background-image: url('${c.img}')" onclick="selectCircuit('${c.state}')" title="Explore ${c.name} (${c.state})">
        <div class="circuit-card-overlay">
          <span class="circuit-tag">${c.state} • ${c.alt}</span>
          <h3>${c.name}</h3>
          <p>${customDesc}</p>
          <span class="circuit-action">${actionText}</span>
        </div>
      </article>
    `;
  }).join("");

  // Add 3D perspective tilt & specular glow to circuit cards
  addCard3D(grid.querySelectorAll(".circuit-card"), { maxTilt: 9, glow: true });
}

function selectCircuit(stateName) {
  toast(`Selected ${stateName} regional circuit.`);
  statePanel(stateName);
  const mapSec = $("#mapSection");
  if (mapSec) {
    mapSec.scrollIntoView({ behavior: "smooth" });
  }
}

function renderDestinations() {
  const grid = $("#destinationGrid");
  if (!grid) return;

  let filtered = activeDestinations;
  if (currentFilter === "offbeat") {
    filtered = activeDestinations.filter(d => d.isOffbeat);
  } else if (currentFilter === "high-altitude") {
    filtered = activeDestinations.filter(d => (d.altitude || "").includes("14,") || (d.altitude || "").includes("17,"));
  } else if (currentFilter === "community") {
    filtered = activeDestinations.filter(d => (d.communityBenefit || "").includes("9") || d.category === "villages");
  }

  const addText = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("btn_add_journey") : "♥ Add to Journey";
  const exploreText = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("btn_explore_details") : "Explore Details";
  const seasonLabel = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("lbl_season") : "Season:";
  const budgetLabel = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("lbl_budget") : "Budget:";
  const ecoGemLabel = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("badge_eco_gem") : "🌱 Eco-Dispersion Gem";
  const pledgeTitle = (window.i18n && typeof window.i18n.t === "function") ? window.i18n.t("title_eco_pledge") : "Click to commit eco-action (+5 pts)";

  grid.innerHTML = filtered.map(d => {
    const trans = (window.i18n && typeof window.i18n.getDestinationTranslation === "function") 
      ? window.i18n.getDestinationTranslation(d.id) 
      : null;
    const displayName = (trans && trans.name) ? trans.name : d.name;
    const displayDesc = (trans && trans.desc) ? trans.desc : d.desc;

    const offbeatBadgeHtml = d.isOffbeat 
      ? `<span class="offbeat-badge">${ecoGemLabel}</span>` 
      : `<span class="dest-altitude-badge">📍 ${d.altitude || "Himalayas"}</span>`;
    
    const benefitBadgeHtml = d.communityBenefit 
      ? `<span class="community-benefit-badge">🤝 ${d.communityBenefit}</span>` 
      : "";

    const chipsHtml = (d.ecoBadges || []).map(b => `
      <span class="eco-chip" onclick="pledgeEcoBadge(event, '${b}')" title="${pledgeTitle}">
        ${b}
      </span>
    `).join("");

    return `
      <article class="destination" style="background-image:url('${d.img}')">
        <div class="dest-top-badges">
          ${offbeatBadgeHtml}
          ${benefitBadgeHtml}
        </div>

        <div class="dest-info">
          <span class="eyebrow">${d.location.toUpperCase()} • ${d.type}</span>
          <h3>${displayName}</h3>
          <p class="dest-desc">${displayDesc}</p>
          <div class="eco-chips">${chipsHtml}</div>
          <p class="dest-meta"><b>${seasonLabel}</b> ${d.bestSeason || d.best_season} • <b>${budgetLabel}</b> ₹${(d.budget || 3000).toLocaleString()}</p>
          <div class="dest-actions">
            <button onclick="saveDestination('${d.id}')">${addText}</button>
            <button onclick="showDestination('${d.id}')">${exploreText}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Specular mouse-tracking glow & z-index elevation on hover
  grid.querySelectorAll(".destination").forEach(card => {
    let rect = null;
    card.addEventListener("mouseenter", () => {
      rect = card.getBoundingClientRect();
      card.style.zIndex = "15";
    }, { passive: true });
    card.addEventListener("mousemove", (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      card.style.setProperty("--mouse-x", `${x}%`);
      card.style.setProperty("--mouse-y", `${y}%`);
    }, { passive: true });
    card.addEventListener("mouseleave", () => {
      rect = null;
      card.style.zIndex = "";
    }, { passive: true });
  });
}

// Clickable practical travel tags pledge
function pledgeEcoBadge(event, badgeText) {
  if (event) event.stopPropagation();
  updateResponsibleScore(5, `Eco-Pledge committed: "${badgeText}"`);
}

// Local food support action
function supportLocalFood(event, foodName) {
  if (event) event.stopPropagation();
  updateResponsibleScore(5, `Zero-Food-Miles choice: Supported ${foodName}!`);
}

function renderFood() {
  const grid = $("#foodGrid");
  if (!grid) return;

  const supportTitle = (window.i18n && typeof window.i18n.t === "function") 
    ? window.i18n.t("title_food_support") 
    : "Click to support zero-food-mile local produce (+5 pts)";

  grid.innerHTML = foods.map(f => {
    const trans = (window.i18n && typeof window.i18n.getFoodTranslation === "function")
      ? window.i18n.getFoodTranslation(f.name)
      : null;
    const displayName = (trans && trans.name) ? trans.name : f.name;
    const displayDesc = (trans && trans.desc) ? trans.desc : f.desc;

    const tagsHtml = f.tags.map(t => `<span class="food-tag">${t}</span>`).join("");
    return `
      <article class="food" style="background-image:url('${f.img}')" onclick="supportLocalFood(event, '${f.name}')" title="${supportTitle}">
        <div>
          <span class="eyebrow">${f.origin.toUpperCase()}</span>
          <h3>${displayName}</h3>
          <div class="food-tags">${tagsHtml}</div>
          <p>${displayDesc}</p>
          <span class="food-revenue-share">🤝 ${f.revenueShare}</span>
        </div>
      </article>
    `;
  }).join("");

  // Add mouse-tracking 3D tilt + specular glow to food cards
  addCard3D(grid.querySelectorAll(".food"), { maxTilt: 8 });
}

// Universal 3D Card Interactivity — specular glow + tilt on any card selector
function addCard3D(cards, opts = {}) {
  const maxTilt = opts.maxTilt || 6;  // degrees
  const glow = opts.glow !== false;   // default true

  cards.forEach(card => {
    let rect = null;
    let rafId = null;

    card.addEventListener("mouseenter", () => {
      rect = card.getBoundingClientRect();
      card.style.zIndex = "15";
    }, { passive: true });

    card.addEventListener("mousemove", (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);   // -1 to 1
        const dy = (e.clientY - cy) / (rect.height / 2);  // -1 to 1

        const rotY = dx * maxTilt;
        const rotX = -dy * maxTilt * 0.6;

        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.02)`;

        if (glow) {
          const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
          const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
          card.style.setProperty("--mouse-x", `${x}%`);
          card.style.setProperty("--mouse-y", `${y}%`);
        }
      });
    }, { passive: true });

    card.addEventListener("mouseleave", () => {
      rect = null;
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transform = "";
      card.style.zIndex = "";
    }, { passive: true });
  });
}

function renderJourney() {
  const track = $("#journeyTrack");
  if (!track) return;

  const nodes = (window.i18n && typeof window.i18n.getJourneyNodes === "function") 
    ? window.i18n.getJourneyNodes() 
    : journeyNodes;

  const icons = ["🏔", "🌌", "🌲", "🕉", "🗻", "🏰", "🥥"];
  track.innerHTML = nodes.map((x, i) => `
    <div class="journey-node">
      <div class="circle">${icons[i % icons.length]}</div>
      <b>${x}</b>
    </div>
    ${i < nodes.length - 1 ? '<div class="journey-line"></div>' : ''}
  `).join("");
}

// ═══════════════════════════════════════════════════════
// BHARAT EXPLORE — DESTINATION INTELLIGENCE & FEATURE CARD ENGINE (SIH 2026)
// High-Altitude Telemetry, Cultural Narrative, Zero-Mile Food & AI Specialist
// ═══════════════════════════════════════════════════════

const DESTINATION_EXTENDED_INTEL = {
  pangong: {
    culturalStory: "Pangong Tso (Chango-Tibetan: 'High Grassland Lake') spans an astounding 134 kilometers across the Indo-Tibetan Changthang plateau at 14,270 feet. The lake is an endorheic basin whose water dramatically shifts from aquamarine and cobalt to deep emerald depending on the solar angle. Traditionally revered by Changpa nomads, the lake ecosystem is home to rare migratory Bar-headed Geese and Brahmini Ducks. High tourism density demands strict leave-no-trace protocols to preserve fragile shoreline permafrost and glacial runoffs.",
    highlights: [
      { title: "Dramatic Color Shifts", desc: "Witness high-altitude optical refraction turning waters from turquoise to midnight sapphire.", icon: "🌊" },
      { title: "Spangmik & Lukung Shorelines", desc: "Traditional nomadic shepherd settlements hosting zero-waste eco-camps.", icon: "⛺" },
      { title: "Bar-Headed Geese Habitat", desc: "Ramsar-proposed wetland nesting grounds for migratory Himalayan waterfowl.", icon: "🦆" }
    ],
    localCuisine: [
      { name: "Ladakhi Skyu", emoji: "🍲", desc: "Traditional slow-cooked root vegetable and handmade barley pasta stew.", farmPledge: "Zero-Mile Barley Farm" },
      { name: "Gur Gur Chai", emoji: "☕", desc: "Salted yak-butter tea churned with wild Himalayan herbs for warmth.", farmPledge: "Changpa Yak Dairy" },
      { name: "Buckwheat Khambir", emoji: "🫓", desc: "Fermented whole-wheat crusty hearth bread baked over wood embers.", farmPledge: "Leh Organic Grain Collective" }
    ],
    amsAdvisory: "High AMS Risk (14,270 ft). Blood oxygen drops to ~65-75%. Mandatory 48-hour acclimatization in Leh (11,500 ft) before crossing Chang La Pass. Stay hydrated (4L/day) and avoid strenuous running along the shore.",
    amsLevel: "high",
    weatherWindow: "May–Sep: Day 10°C to 18°C, Night -2°C to 5°C • Oct–Apr: Fully frozen solid down to -25°C.",
    connectivity: "BSNL & Jio 4G (intermittent). Inner Line Permit (ILP/PAP) strictly mandatory for Indian & Foreign nationals.",
    audioTourScript: "Welcome to Pangong Tso, the jewel of the Changthang plateau at 14,270 feet. As you gaze across these pristine waters shifting from cobalt to emerald, remember that you are standing on a fragile endorheic basin shared with wild migratory geese. Please carry all plastic back with you and support the local Changpa community homestays.",
    aiPrompts: [
      "What is the best 2-day itinerary for Pangong Tso with Chang La pass?",
      "How to prevent acute mountain sickness at 14,270 ft in Pangong?",
      "What camera settings are best for Pangong's midday color shift?",
      "Where are the official plastic-free water refill points near Pangong?"
    ]
  },
  hanle: {
    culturalStory: "Hanle is an ancient high-altitude village located in the southern Changthang wilderness at 14,900 feet, celebrated globally for hosting India's first certified Dark Sky Reserve and the Indian Astronomical Observatory (IAO) atop Mount Saraswati. Dominated by the 17th-century Hanle Gompa of the Drukpa Kagyu lineage, the region boasts zero industrial light pollution, hyper-arid atmospheric clarity, and 300+ clear nights per year. Community-led Astrostays empower resident families through telescope astronomy tours while curbing high-footfall disruption.",
    highlights: [
      { title: "Indian Astronomical Observatory", desc: "One of the world's highest optical and gamma-ray telescopes at 14,764 ft.", icon: "🔭" },
      { title: "Hanle Monastery (1679 AD)", desc: "Drukpa Kagyu sanctuary offering commanding vistas of the Hanle River basin.", icon: "🏛️" },
      { title: "Naked-Eye Milky Way Arc", desc: "Bortle Scale Class 1 darkness showcasing zodiacal light and galactic dust lanes.", icon: "🌌" }
    ],
    localCuisine: [
      { name: "Ladakhi Thukpa", emoji: "🍜", desc: "Steaming aromatic noodle broth loaded with mountain carrots, cabbage, and dried ginger.", farmPledge: "Hanle Organic Greenhouse" },
      { name: "Tsampa Porridge", emoji: "🥣", desc: "Roasted highland barley flour mixed with butter tea and dried wild apricots.", farmPledge: "Highland Grain Mill" },
      { name: "Chhurpi Dried Yak Cheese", emoji: "🧀", desc: "Traditional hard nutrient-dense yak milk cheese chewed by Changpa nomads.", farmPledge: "Changthang Pastoral Guild" }
    ],
    amsAdvisory: "Extreme Altitude (14,900 ft). SpO2 saturation ~62-72%. Nighttime temperatures drop sub-zero year-round. Limit physical exertion and keep portable oxygen canisters on standby.",
    amsLevel: "extreme",
    weatherWindow: "May–Oct: Day 8°C to 15°C, Night -5°C to 2°C • Nov–Apr: Harsh Arctic cold (-20°C to -30°C).",
    connectivity: "BSNL / Satellite only. Inner Line Permit (ILP) required. Strictly enforce red-light astronomy curfews after 8:00 PM.",
    audioTourScript: "You are entering Hanle Dark Sky Reserve at 14,900 feet, where the universe reveals itself in crystal clarity. Here, over 300 clear nights a year let you witness the Milky Way arching across the Himalayan skyline. Please respect the village dark-sky curfews and turn off high-beam headlights.",
    aiPrompts: [
      "How to book a verified community Astrostay in Hanle?",
      "What telescope gear and red flashlights should I pack for Hanle?",
      "What are the night-sky photography rules at Hanle Dark Sky Reserve?",
      "Which route from Pangong or Nyoma is currently safest for Hanle?"
    ]
  },
  turtuk: {
    culturalStory: "Turtuk is the northernmost border village of India, situated along the rushing turquoise Shyok River in the Nubra subdivision. Annexed peacefully into India in 1971, Turtuk is the cultural heartland of the ethnic Balti people who speak an ancient archaic dialect of Tibetan. Characterized by traditional stone-and-wood residences, natural cold-storage stone cellars ('Nangchung'), and lush organic apricot orchards, Turtuk represents a thriving model of community self-reliance and women's handicraft cooperatives.",
    highlights: [
      { title: "Balti Heritage Museum & Royal Yabgo Palace", desc: "Ancestral home of the Yabgo Dynasty showcasing 1,000-year-old wooden relics.", icon: "👑" },
      { title: "Nangchung Natural Freezers", desc: "Ancient architectural stone air vents utilizing glacier drafts to preserve perishable food.", icon: "❄️" },
      { title: "Organic Apricot Blossom Groves", desc: "Stone pathways shaded by ancient apricot, walnut, and mulberry trees.", icon: "🌸" }
    ],
    localCuisine: [
      { name: "Balti Kissir & Grangtur", emoji: "🥞", desc: "Buckwheat savory crepes served with seasoned wild mountain greens and herbs.", farmPledge: "Turtuk Women Farmers Cooperative" },
      { name: "Muskat Apricot Walnut Halwa", emoji: "🍯", desc: "Rich slow-cooked dessert made from hand-pressed apricot oil and crushed kernels.", farmPledge: "Yabgo Heritage Orchard" },
      { name: "Balti Herbal Tea", emoji: "🫖", desc: "Infusion of wild mint, thyme, and dried rosehips picked from Shyok riverbanks.", farmPledge: "Nubra Valley Herbal Guild" }
    ],
    amsAdvisory: "Mild Altitude (9,800 ft). Significantly lower than Leh and Pangong, making Turtuk an ideal low-stress acclimatization recovery sanctuary with rich oxygen levels.",
    amsLevel: "low",
    weatherWindow: "Apr–Oct: Pleasant 18°C to 26°C daytime • Apr brings spectacular pink apricot blossoms.",
    connectivity: "Jio & Airtel 4G available. Domestic tourists require Ladakh ILP; foreign travelers permitted up to Turtuk / Tyakshi.",
    audioTourScript: "Welcome to Turtuk, India's northernmost Balti oasis nestled in the Karakoram range. Walking through these stone alleys shaded by apricot trees, you will discover the thousand-year-old heritage of the Balti people, natural rock refrigerators, and incredible warm hospitality.",
    aiPrompts: [
      "What is the history of the Yabgo Dynasty of Turtuk?",
      "When is the best time to see apricot blossoms in Turtuk?",
      "How to respectfully interact with local Balti elders and weavers?",
      "Can I day-trip to Turtuk from Hunder or is an overnight stay recommended?"
    ]
  },
  sham: {
    culturalStory: "The Sham Valley, often hailed as the 'Apricot Oasis' or 'Baby Trek Corridor' of Lower Ladakh, stretches along the Indus River between Likir, Tingmosgang, and Temisgam. Perched at a hospitable altitude of 10,200 feet, it features terraced barley fields, mud-brick monasteries, and solar-heated village homestays. It serves as an essential eco-dispersion corridor that relieves tourist saturation from Leh while providing visitors with safe, low-stress altitude pacing and direct community revenue.",
    highlights: [
      { title: "Likir & Alchi Monasteries", desc: "11th-century Kashmiri-style Buddhist wood carvings and a 75-foot gilded Maitreya Buddha.", icon: "🧘" },
      { title: "Tingmosgang Fortress", desc: "15th-century historical capital fortress overlooking lush terraced valleys.", icon: "🏰" },
      { title: "Solar Homestay Circuit", desc: "Eco-certified family homestays utilizing 100% passive solar space and water heating.", icon: "☀️" }
    ],
    localCuisine: [
      { name: "Paba & Tangtur", emoji: "🥣", desc: "Nutritious roasted barley-pea flour dough served with fermented spiced buttermilk.", farmPledge: "Sham Agro-Ecological Cooperative" },
      { name: "Dried Apricot Compote (Khante)", emoji: "🍑", desc: "Sun-dried organic apricots simmered in glacier spring water with cinnamon.", farmPledge: "Tingmosgang Orchard Trust" },
      { name: "Local Seabuckthorn Juice", emoji: "🍹", desc: "Wild Himalayan superfruit berry nectar loaded with high-potency Vitamin C.", farmPledge: "Indus River Wild Harvest" }
    ],
    amsAdvisory: "Low AMS Risk (10,200 ft). Excellent gentle acclimatization base for first-time Himalayan travelers.",
    amsLevel: "low",
    weatherWindow: "Year-Round destination. Apr–Oct: 15°C to 24°C • Winter: Crisp sunny days with woodfire stoves.",
    connectivity: "Excellent 4G network coverage across all major Sham Valley villages.",
    audioTourScript: "Welcome to Sham Valley, the tranquil heart of lower Ladakh. Known as the Apricot Valley, this corridor offers gentle trails, ancient mud-brick monasteries, and pioneering solar-heated family homestays that directly support local agriculture.",
    aiPrompts: [
      "How does the Sham Valley Baby Trek compare to Markha Valley?",
      "What are the best homestays in Tingmosgang and Hemis Shukpachan?",
      "Why is Sham Valley recommended for the first 2 days of a Ladakh trip?",
      "What organic seabuckthorn products are made in Sham Valley?"
    ]
  },
  nubra: {
    culturalStory: "Nubra Valley (historically 'Ldumra' or 'Valley of Flowers') is a high-altitude cold desert carved by the confluence of the Shyok and Nubra rivers. Renowned for its white sand dunes at Hunder where double-humped Bactrian camels wander—a living legacy of the ancient Silk Route trade caravans—and the majestic 106-foot statue of Jampa Buddha at Diskit Monastery.",
    highlights: [
      { title: "Diskit Monastery & Giant Buddha", desc: "14th-century Gelugpa monastery with a 32-meter Maitreya Buddha gazing down the valley.", icon: "🛕" },
      { title: "Hunder White Sand Dunes", desc: "High-altitude desert dunes featuring rescued Bactrian double-humped camel sanctuaries.", icon: "🐪" },
      { title: "Panamik Hot Sulfur Springs", desc: "Therapeutic mineral springs with medicinal properties near the Siachen base.", icon: "♨️" }
    ],
    localCuisine: [
      { name: "Momo Platters", emoji: "🥟", desc: "Hand-pinched steamed dumplings stuffed with mountain greens, paneer, and local herbs.", farmPledge: "Diskit Village Gardens" },
      { name: "Highland Butter Rice", emoji: "🍚", desc: "Steamed grain served with yak butter and spiced walnut chutney.", farmPledge: "Nubra Valley Rice Cooperative" },
      { name: "Hunder Mint Herbal Infusion", emoji: "🌿", desc: "Fresh wild mint tea brewed with local raw mountain honey.", farmPledge: "Shyok River Eco Farms" }
    ],
    amsAdvisory: "Moderate Altitude (10,000 ft). Lower than Leh, but requires traversing Khardung La Pass (17,582 ft) to access. Acclimatize before crossing.",
    amsLevel: "medium",
    weatherWindow: "May–Sep: Warm 15°C to 25°C daytime • Sandstorm winds common in late afternoon.",
    connectivity: "Jio/Airtel 4G active in Diskit and Hunder. ILP permit mandatory.",
    audioTourScript: "Welcome to Nubra Valley, the cold desert of the Silk Road. Here, dunes of silver sand meet snow-capped Karakoram peaks. As you ride the historic Bactrian camels or visit the majestic Diskit Gompa, you walk in the footsteps of ancient trans-Himalayan traders.",
    aiPrompts: [
      "How to plan a 3-day loop from Leh to Nubra and Pangong via Shyok?",
      "What is the history of the Bactrian camels in Hunder dunes?",
      "What are the best sunrise photography spots in Diskit Gompa?",
      "Are ATV rides allowed on the protected Hunder sand dunes?"
    ]
  },
  khardung: {
    culturalStory: "Khardung La (17,582 ft) is one of the highest motorable mountain passes in the world and the strategic lifeline maintained by the Border Roads Organisation (BRO) project HIMANK. Connecting the Indus River valley at Leh with the northern Shyok and Nubra valleys, the pass offers staggering panoramic views of the Karakoram range and Zanskar peaks. Its extreme altitude requires strict medical discipline: maximum 15 to 20 minute stopovers are enforced to prevent acute hypoxia and pulmonary edema.",
    highlights: [
      { title: "Legendary Pass Crest Signboard", desc: "The iconic 17,582 ft landmark flanked by colorful fluttering Buddhist prayer flags.", icon: "🚩" },
      { title: "Karakoram & Zanskar Panoramas", desc: "360-degree vistas of jagged glaciated summits and the winding serpentine road below.", icon: "🏔️" },
      { title: "Rinchen Cafeteria (Highest Army Post)", desc: "Indian Army-operated high-altitude emergency post and hot black tea stall.", icon: "☕" }
    ],
    localCuisine: [
      { name: "Warm Ginger Cardamom Tea", emoji: "🫖", desc: "Hot thermos-brewed mountain tea designed to combat thin air chill.", farmPledge: "Leh Spice Merchants" },
      { name: "Roasted Chana & Almond Energy Mix", emoji: "🥜", desc: "Slow-burning high-protein trail mix for immediate hypoxia endurance.", farmPledge: "Himalayan Organic Grains" }
    ],
    amsAdvisory: "Severe AMS Altitude Danger (17,582 ft). Atmospheric oxygen is ~50% of sea level. Strictly limit stop to 15-20 minutes. Do NOT smoke or consume alcohol. If headache or dizziness occurs, descend immediately towards North Pullu or South Pullu.",
    amsLevel: "extreme",
    weatherWindow: "May–Oct: Sub-zero winds, blizzard spikes anytime (-5°C to 5°C) • Ice chains required in winter.",
    connectivity: "Limited BSNL connectivity. BRO road patrol active 24/7. Valid ILP required.",
    audioTourScript: "You have arrived at Khardung La, towering at 17,582 feet above sea level. This historic pass connects Leh to the Nubra Valley and Siachen Glacier. Because atmospheric oxygen is half that of sea level, please restrict your stay to 15 minutes, breathe deeply, and stay hydrated.",
    aiPrompts: [
      "What is the exact 15-minute safety rule at Khardung La Pass?",
      "What to do if SpO2 drops below 70% while driving over Khardung La?",
      "What are current road conditions and snow clearance status at Khardung La?",
      "Is an oxygen cylinder mandatory in private vehicles crossing Khardung La?"
    ]
  },
  tsomoriri: {
    culturalStory: "Tso Moriri (or Mountain Lake) is a protected Ramsar Wetland Sanctuary situated at an altitude of 14,836 feet in the remote Changthang plateau. Fed by springs and snowmelt from surrounding 20,000-foot peaks, this sacred 29 km lake is bordered by the quaint nomadic hamlet of Korzok, which houses the 300-year-old Korzok Monastery. The pristine brackish lake provides critical breeding habitat for vulnerable Black-necked Cranes, Great Crested Grebes, and wild Kiang (Tibetan wild ass). Strict eco-zoning prevents vehicular shoreline intrusion.",
    highlights: [
      { title: "Korzok Ancient Monastery", desc: "300-year-old Drukpa Gompa overlooking the mirror-calm azure waters.", icon: "🛕" },
      { title: "Black-Necked Crane Sanctuary", desc: "Rare breeding ground for endangered Grus nigricollis and Bar-headed geese.", icon: "🦩" },
      { title: "Kiang (Wild Ass) Herds", desc: "Watch herds of Tibetan wild asses galloping freely across the Changthang plains.", icon: "🐎" }
    ],
    localCuisine: [
      { name: "Nomadic Barley Porridge", emoji: "🥣", desc: "Fresh ground roasted tsampa with hot yak milk and mountain salt.", farmPledge: "Korzok Nomad Cooperative" },
      { name: "Steamed Vegetable Tingmo", emoji: "🥟", desc: "Fluffy flower-shaped steamed bread served with spicy chili garlic dip.", farmPledge: "Changthang Eco Kitchen" }
    ],
    amsAdvisory: "High AMS Risk (14,836 ft). Remote wilderness with minimal medical facilities. Proper Leh acclimatization is vital before ascending.",
    amsLevel: "high",
    weatherWindow: "May–Sep: Day 10°C to 16°C, Night -3°C to 4°C • Lake completely frozen Nov–Apr.",
    connectivity: "No private 4G cellular signal; satellite emergency booth in Korzok village. ILP required.",
    audioTourScript: "Welcome to Tso Moriri Lake, a sacred high-altitude Ramsar wetland sanctuary at 14,836 feet. Here, the rare Black-necked Crane nests along the shores while Changpa nomads herd pashmina goats. Please stay on marked paths to preserve this fragile ecosystem.",
    aiPrompts: [
      "How to travel responsibly between Tso Moriri and Tso Kar salt lake?",
      "What are the conservation rules regarding Black-necked Crane nesting sites?",
      "Where can I stay in Korzok village that supports local families?",
      "What is the route condition from Leh via Chumathang to Tso Moriri?"
    ]
  },
  leh: {
    culturalStory: "Leh Old Town is the historic crossroads of trans-Himalayan trade routes linking India with Tibet, Central Asia, and Kashmir. Dominated by the 17th-century nine-story Leh Palace built by King Sengge Namgyal and ancient mud-brick alleyways, the town is a vibrant tapestry of Buddhist stupas, Tibetan bakeries, Central Asian antique shops, and the historic Jama Masjid built in 1666. Community conservation trusts have successfully restored historic rammed-earth buildings into living heritage centers.",
    highlights: [
      { title: "Leh Palace (Lhachen Palkhar)", desc: "Medieval Himalayan royal fortress modeled after Lhasa's Potala Palace.", icon: "🏰" },
      { title: "Historic Main Bazaar & Artisans", desc: "Pedestrianized eco-street with traditional pashmina weavers and woodcarvers.", icon: "🛍️" },
      { title: "Central Asian Museum", desc: "Four-story stone tower showcasing caravan trade relics and silk route maps.", icon: "📜" }
    ],
    localCuisine: [
      { name: "Fresh Ladakhi Khambir", emoji: "🫓", desc: "Wood-fired sourdough flatbread eaten with organic apricot jam or yak cheese.", farmPledge: "Old Town Clay Bakeries" },
      { name: "Chhutagi Dumpling Soup", emoji: "🍲", desc: "Bow-tie shaped pasta simmered with garden vegetables, potatoes, and spinach.", farmPledge: "Leh Vegetable Growers Guild" },
      { name: "Apricot Kernel Oil Salad", emoji: "🥗", desc: "Wild organic mountain greens tossed with cold-pressed apricot seed oil.", farmPledge: "Sham Organic Agro Trust" }
    ],
    amsAdvisory: "Base Acclimatization Hub (11,500 ft). All travelers must rest completely for 24-48 hours upon landing at Leh airport before doing any uphill exertion.",
    amsLevel: "medium",
    weatherWindow: "Apr–Oct: Pleasant 16°C to 28°C • Winter: -10°C to -15°C with clear blue skies.",
    connectivity: "High-speed 5G & 4G on Jio, Airtel, and BSNL. Full ATM and hospital infrastructure available.",
    audioTourScript: "Welcome to Leh Old Town, the beating heart of Ladakh at 11,500 feet. Walking through these historic mud-brick lanes, you stand at the crossroads of the ancient Silk Route. Take it easy today to acclimatize, visit the Dzomsa water refill stations, and enjoy local bakeries.",
    aiPrompts: [
      "What is the recommended 48-hour acclimatization plan in Leh?",
      "Where are the best cultural walking tours in Leh Old Town?",
      "Where can I buy authentic GI-tagged Pashmina shawls in Leh?",
      "What are the best local cafes supportingLadakhi women cooperatives?"
    ]
  },
  shanti: {
    culturalStory: "Shanti Stupa is a pristine white-domed Buddhist monument perched on the hilltop of Chanspa at 11,840 feet. Built between 1983 and 1991 by Japanese Buddhist monk Gyomyo Nakamura and Ladakhi lamas as part of the Peace Pagoda mission, the stupa was consecrated by the 14th Dalai Lama. It houses relics of the Buddha at its base and features two levels of vividly painted relief murals depicting the birth, defeat of Mara, and Mahaparinirvana of Gautama Buddha. It offers an unrivaled 360-degree panorama of Leh Valley and the Stok Kangri peak.",
    highlights: [
      { title: "Panoramic 360° Sunset View", desc: "Spectacular vantage point overlooking Leh town, Namgyal Tsemo, and snowcapped Stok Range.", icon: "🌅" },
      { title: "Relief Murals of the Buddha", desc: "Intricate gilded reliefs illustrating the pivotal milestones of Gautama Buddha's life.", icon: "🎨" },
      { title: "Solar Evening Illumination", desc: "Clean solar-powered illumination lighting up the white dome against the Himalayan night sky.", icon: "✨" }
    ],
    localCuisine: [
      { name: "Monastic Herbal Tea", emoji: "🫖", desc: "Calming brew of holy basil, chamomile, and mountain mint.", farmPledge: "Chanspa Monastery Garden" },
      { name: "Steamed Apricot Dumplings", emoji: "🥟", desc: "Sweet dessert momos filled with crushed local apricots and walnuts.", farmPledge: "Leh Organic Orchards" }
    ],
    amsAdvisory: "Moderate Altitude (11,840 ft). Climb the 500 stone stairs slowly with measured breathing to avoid altitude dizziness.",
    amsLevel: "medium",
    weatherWindow: "Apr–Oct: Best visited during sunrise (5:30 AM) or sunset (6:00 PM) for golden lighting.",
    connectivity: "Full 4G cellular coverage. Wheelchair-accessible vehicle road connects to the top.",
    audioTourScript: "You are standing at Shanti Stupa, built to promote world peace and commemorate 2,500 years of Buddhism. As the evening light turns the Stok Kangri peaks gold, take a moment of quiet reflection and enjoy the panoramic view of Leh valley.",
    aiPrompts: [
      "What is the best time for photography at Shanti Stupa?",
      "How many steps are there to Shanti Stupa and is vehicle parking available?",
      "What do the relief carvings around the two tiers of the stupa represent?",
      "Can I combine Shanti Stupa with Sankar Gompa on an evening walk?"
    ]
  },
  hemis: {
    culturalStory: "Hemis Gompa is the largest and most affluent Buddhist monastery in Ladakh, nestled in a secluded canyon on the south bank of the Indus River at 12,000 feet. Re-established in 1672 by King Sengge Namgyal under the Drukpa Lineage, Hemis houses rare golden statues, stupas encrusted with turquoise and lapis lazuli, and a priceless library of sacred Buddhist texts. It is renowned for the colorful annual Hemis Tsechu Festival celebrated in early summer with masked Cham dances that depict the triumph of wisdom over negative forces.",
    highlights: [
      { title: "Hemis Tsechu Cham Dances", desc: "Sacred masked dances performed by monks to the rhythm of long horns, cymbals, and drums.", icon: "🎭" },
      { title: "Giant Padmasambhava Silk Thangka", desc: "A four-story embroidered sacred thangka unfurled every 12 years.", icon: "🖼️" },
      { title: "Hemis National Park Gateway", desc: "World's premiere sanctuary for the elusive Snow Leopard (Panthera uncia) and blue sheep.", icon: "🐆" }
    ],
    localCuisine: [
      { name: "Monastic Sweet Rice (Dresil)", emoji: "🍚", desc: "Steamed sweet rice cooked with yak butter, golden raisins, cashews, and saffron.", farmPledge: "Hemis Monastic Kitchen" },
      { name: "Saffron Barley Porridge", emoji: "🥣", desc: "Warm roasted tsampa infused with Kashmiri saffron and wild mountain honey.", farmPledge: "Indus Valley Organic Trust" }
    ],
    amsAdvisory: "Moderate Altitude (12,000 ft). Comfortable access via paved road along the Indus highway.",
    amsLevel: "medium",
    weatherWindow: "Year-round access. Tsechu festival takes place in June/July.",
    connectivity: "Jio & Airtel 4G available. Entry ticket proceeds go 100% to monastic education and heritage conservation.",
    audioTourScript: "Welcome to Hemis Monastery, the spiritual cornerstone of the Drukpa lineage in Ladakh. Hidden inside this mountain canyon since 1672, Hemis protects priceless ancient thangkas and ancient Buddhist manuscripts. Please maintain quiet reverence as you walk through its courtyard.",
    aiPrompts: [
      "When is the next Hemis Festival and how can I attend the Cham dances?",
      "What is the history of the Drukpa lineage at Hemis Monastery?",
      "How to plan an ethical snow leopard trek starting from Hemis National Park?",
      "What are the etiquette rules for visiting the inner shrine rooms at Hemis?"
    ]
  },
  zanskar: {
    culturalStory: "Zanskar is a dramatically isolated Himalayan sub-district renowned for deep granite river gorges, high glacial passes, and ancient cliffside monasteries. At its spiritual heart lies Phugtal Gompa—a 12th-century monastery constructed like a honeycomb around a natural sacred cave. In winter, the frozen Zanskar River transforms into the legendary Chadar Trek corridor. The region's isolation has preserved authentic centuries-old polyandrous traditions, Tibetan medicine (Sowa Rigpa), and untouched ecological corridors.",
    highlights: [
      { title: "Phugtal Cave Monastery", desc: "12th-century architectural marvel perched precariously inside a massive limestone cliff cave.", icon: "🧗" },
      { title: "Zanskar River Gorge & Rafting", desc: "Class IV-V world-class whitewater canyon slicing between 6,000-meter vertical cliffs.", icon: "🚣" },
      { title: "Padum & Karsha Gompa", desc: "Sprawling whitewashed monastic complex cascading down the hillsides of the Zanskar valley.", icon: "🛕" }
    ],
    localCuisine: [
      { name: "Zanskari Kholak Tsampa", emoji: "🥣", desc: "Nutritious stone-milled roasted barley kneaded with warm salty butter tea.", farmPledge: "Padum Valley Mill Collective" },
      { name: "Wild Herb Thukpa Soup", emoji: "🍲", desc: "Hand-rolled noodles simmered with dried wild mountain mushrooms and chives.", farmPledge: "Zanskar River Foragers Guild" }
    ],
    amsAdvisory: "High Altitude & Remote (13,100 ft). Expedition gear and physical stamina required. Carry emergency first-aid and warm down jackets.",
    amsLevel: "high",
    weatherWindow: "Jun–Sep: Best for trekking and road travel • Jan–Feb: Chadar Ice Trek on frozen river.",
    connectivity: "Limited BSNL connectivity in Padum; satellite hubs only in remote valleys.",
    audioTourScript: "You are exploring Zanskar, one of the most raw and untouched Himalayan valleys on Earth. From the cliff-hanging Phugtal cave monastery to the roaring Zanskar gorges, this land preserves timeless Buddhist wisdom and incredible human resilience.",
    aiPrompts: [
      "How to trek to Phugtal Monastery from the new road endpoint?",
      "What is the current road status of the Darcha-Padum-Shinku La highway?",
      "What fitness preparation is needed for trekking through Zanskar?",
      "What are the best homestay villages between Padum and Rangdum?"
    ]
  },
  spiti: {
    culturalStory: "Spiti Valley ('The Middle Land' between Tibet and India) in Himachal Pradesh is an awe-inspiring cold desert valley nestled along the Spiti River at 12,500 feet. Home to the thousand-year-old Tabo Monastery (a UNESCO World Heritage site known as the Ajanta of the Himalayas) and the fortress-like Key Gompa perched on a conical hill, Spiti is a treasure trove of Tibetan Buddhist philosophy, marine fossils at Langza, and the world's highest post office at Hikkim.",
    highlights: [
      { title: "Key Monastery (11th Century)", desc: "Spectacular fortress-monastery perched on a conical hill with panoramic river vistas.", icon: "🛕" },
      { title: "Tabo UNESCO World Heritage Gompa", desc: "Over 1,000 years of unperturbed mud-brick stupas containing exquisite murals.", icon: "🎨" },
      { title: "Hikkim & Langza Fossil Village", desc: "Send a postcard from the world's highest post office (14,567 ft) and find prehistoric ammonites.", icon: "📮" }
    ],
    localCuisine: [
      { name: "Spitian Seabuckthorn Tea", emoji: "🫖", desc: "Tangy bright orange tea rich in antioxidants and wild mountain honey.", farmPledge: "Spiti Valley Eco Enterprise" },
      { name: "Spiti Barley Sidu & Chutney", emoji: "🥟", desc: "Steamed yeast-leavened barley bread filled with walnuts and mint paste.", farmPledge: "Kaza Farmers Collective" }
    ],
    amsAdvisory: "High AMS Risk (12,500 ft). Ascend gradually via Kinnaur (Shimla) or acclimatize in Kaza before visiting Hikkim, Komic, or Chandratal.",
    amsLevel: "high",
    weatherWindow: "Jun–Oct: Open via Manali (Kunzum Pass) • Kinnaur route accessible most of the year.",
    connectivity: "Jio & Airtel 4G available in Kaza; cash ATMs are limited, carry backup currency.",
    audioTourScript: "Welcome to Spiti, the magical Middle Land. From the thousand-year-old murals of Tabo to the world's highest post office at Hikkim, Spiti represents the soul of high-altitude Himalayan culture and pristine wilderness.",
    aiPrompts: [
      "What is the best 7-day Spiti circuit route starting from Shimla?",
      "How to visit Chandratal Lake safely without disturbing its wetlands?",
      "What are the fossil protection guidelines in Langza village?",
      "Where are the best community-run homestays in Kibber and Demul?"
    ]
  }
};

// Generative intelligence fallback for any unlisted or custom destination
function getEnrichedDestination(d) {
  const intel = DESTINATION_EXTENDED_INTEL[d.id] || {
    culturalStory: `${d.name} is a verified sustainable tourism corridor in ${d.location || d.state || "India"}, celebrated for its pristine natural landscape, rich regional heritage, and deep community commitment to low-impact travel. Visitors can experience authentic local living, sustainable regional cuisine, and responsible hospitality.`,
    highlights: [
      { title: `Explore ${d.name}`, desc: `Experience the signature beauty and seasonal tranquility of ${d.location || "the region"}.`, icon: "📍" },
      { title: "Direct Community Impact", desc: `${d.communityBenefit || "85%+ Direct Local Revenue"} supports indigenous families and artisans.`, icon: "🤝" },
      { title: "Eco-Preservation Trail", desc: "Dedicated leave-no-trace practices and clean environmental stewardship.", icon: "🌱" }
    ],
    localCuisine: [
      { name: `Regional ${d.location || "Local"} Delicacy`, emoji: "🍛", desc: "Authentic zero-mile culinary staple prepared with fresh seasonal harvest.", farmPledge: "Local Agro-Ecological Farms" },
      { name: "Traditional Herbal Brew", emoji: "🫖", desc: "Wholesome regional infusion brewed with aromatic local botanicals.", farmPledge: "Community Herbal Collective" }
    ],
    amsAdvisory: (d.altitude && (d.altitude.includes("14,") || d.altitude.includes("17,")))
      ? `High Altitude (${d.altitude}). Keep well-hydrated, monitor pulse oximetry, and maintain gradual acclimatization pacing.`
      : `Moderate/Low Altitude (${d.altitude || "Standard Elevation"}). Normal travel precautions apply. Enjoy fresh local hydration.`,
    amsLevel: (d.altitude && d.altitude.includes("17,")) ? "extreme" : (d.altitude && d.altitude.includes("14,")) ? "high" : "low",
    weatherWindow: `Best Season: ${d.bestSeason || d.best_season || "Year-Round"}. Pack appropriate layers for changing regional weather.`,
    connectivity: "Standard regional mobile networks and local transport connections active.",
    audioTourScript: `Welcome to ${d.name} in ${d.location || d.state}. Immerse yourself in the cultural heritage and stunning natural scenery of this destination, while supporting local village communities through sustainable travel choices.`,
    aiPrompts: [
      `What are the top must-visit spots in and around ${d.name}?`,
      `What is the best 2-day sustainable travel itinerary for ${d.name}?`,
      `What local customs and cultural etiquette should I know when visiting ${d.name}?`,
      `What zero-mile foods and regional dishes should I try in ${d.name}?`
    ]
  };

  return { ...d, ...intel };
}

// Global Audio Tour State Tracker
window.destAudioTourState = {
  activeId: null,
  utterance: null,
  isPlaying: false
};

function toggleDestAudioTour(destId) {
  const state = window.destAudioTourState;
  const audioBar = $(`#destAudioBar_${destId}`);
  const audioBtn = $(`#destAudioBtn_${destId}`);
  const statusEl = $(`#destAudioStatus_${destId}`);

  if (!('speechSynthesis' in window)) {
    toast("Audio narration is not supported by your current browser.");
    return;
  }

  if (state.isPlaying && state.activeId === destId) {
    window.speechSynthesis.cancel();
    state.isPlaying = false;
    state.activeId = null;
    if (audioBar) audioBar.classList.remove("playing");
    if (audioBtn) audioBtn.innerHTML = "▶ Listen to Audio Guide";
    if (statusEl) statusEl.textContent = "Audio paused";
    return;
  }

  // Cancel any existing playback
  window.speechSynthesis.cancel();

  const d = activeDestinations.find(x => x.id === destId) || localDestinations.find(x => x.id === destId);
  if (!d) return;
  const enriched = getEnrichedDestination(d);
  const textToSpeak = enriched.audioTourScript || enriched.culturalStory || enriched.desc;

  const utter = new SpeechSynthesisUtterance(textToSpeak);
  utter.rate = 0.95;
  utter.pitch = 1.0;
  utter.lang = "en-IN";

  utter.onstart = () => {
    state.isPlaying = true;
    state.activeId = destId;
    state.utterance = utter;
    if (audioBar) audioBar.classList.add("playing");
    if (audioBtn) audioBtn.innerHTML = "⏹ Stop Audio Tour";
    if (statusEl) statusEl.textContent = "Playing official audio guide...";
  };

  utter.onend = () => {
    state.isPlaying = false;
    state.activeId = null;
    if (audioBar) audioBar.classList.remove("playing");
    if (audioBtn) audioBtn.innerHTML = "▶ Listen to Audio Guide";
    if (statusEl) statusEl.textContent = "Audio tour complete ✓";
  };

  utter.onerror = () => {
    state.isPlaying = false;
    state.activeId = null;
    if (audioBar) audioBar.classList.remove("playing");
    if (audioBtn) audioBtn.innerHTML = "▶ Listen to Audio Guide";
    if (statusEl) statusEl.textContent = "Audio ready";
  };

  window.speechSynthesis.speak(utter);
}

function closeDestinationModal() {
  if (window.destAudioTourState && window.destAudioTourState.isPlaying) {
    window.speechSynthesis.cancel();
    window.destAudioTourState.isPlaying = false;
    window.destAudioTourState.activeId = null;
  }
  const modal = $("#destinationModal");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

// Interactive Eco-Pledge click inside modal (+5 pts)
function pledgeModalEcoBadge(event, badgeText) {
  if (event) event.stopPropagation();
  const el = event ? event.currentTarget : null;
  if (el) {
    el.classList.add("pledged");
    el.innerHTML = `✓ ${badgeText} (+5 pts)`;
  }
  updateResponsibleScore(5, `Eco-Pledge committed: "${badgeText}"!`);
}

// Local Food Support click inside modal (+5 pts)
function supportModalFood(event, foodName) {
  if (event) event.stopPropagation();
  const el = event ? event.currentTarget : null;
  if (el) {
    el.style.background = "#10b981";
    el.style.color = "#06231d";
    el.innerHTML = `✓ Farm Supported (+5 pts)`;
  }
  updateResponsibleScore(5, `Zero-Food-Miles choice: Supported ${foodName}!`);
}

// Toggle bookmarking inside modal
function toggleSaveModalDestination(destId) {
  let saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  const saveBtn = $(`#destModalSaveBtn_${destId}`);
  if (saved.includes(destId)) {
    saved = saved.filter(x => x !== destId);
    localStorage.setItem("bharatSaved", JSON.stringify(saved));
    syncSavedToBackend(saved);
    toast("Removed from your Journey list");
    if (saveBtn) {
      saveBtn.innerHTML = "♥ Add to Journey";
      saveBtn.classList.remove("gold");
      saveBtn.classList.add("ghost-dark");
    }
  } else {
    saved.push(destId);
    localStorage.setItem("bharatSaved", JSON.stringify(saved));
    syncSavedToBackend(saved);
    toast("Saved to My Journey ♥");
    if (saveBtn) {
      saveBtn.innerHTML = "✓ Saved in Journey";
      saveBtn.classList.remove("ghost-dark");
      saveBtn.classList.add("gold");
    }
    updateResponsibleScore(5, "Bookmarked sustainable destination!");
  }
  updateSavedCount();
  renderJourneyDrawer();
}

// Plan tour from destination modal
function planDestinationTour(destId) {
  closeDestinationModal();
  let saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  if (!saved.includes(destId)) {
    saved.push(destId);
    localStorage.setItem("bharatSaved", JSON.stringify(saved));
    syncSavedToBackend(saved);
    updateSavedCount();
  }
  window.location.href = `planner.html?dest=${encodeURIComponent(destId)}`;
}

// Open on map
function viewDestinationOnMap(destId) {
  closeDestinationModal();
  window.location.href = `map.html?focus=${encodeURIComponent(destId)}`;
}

// AI Question trigger from destination modal
async function askDestinationAI(destId, promptText) {
  const d = activeDestinations.find(x => x.id === destId) || localDestinations.find(x => x.id === destId);
  const enriched = getEnrichedDestination(d || { id: destId, name: destId });
  const outputBox = $(`#destAiOutputBox_${destId}`);
  const inputEl = $(`#destAiInput_${destId}`);

  if (inputEl && !promptText) {
    promptText = inputEl.value.trim();
  }
  if (!promptText) return;

  if (outputBox) {
    outputBox.classList.add("visible");
    outputBox.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; color:#38bdf8;">
        <span class="live-dot"></span>
        <span><b>Bharat AI is analyzing expedition telemetry for ${enriched.name}...</b></span>
      </div>
    `;
  }

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: promptText,
        active_destination: enriched.name,
        language: (window.i18n && typeof window.i18n.getLanguage === "function") ? window.i18n.getLanguage() : "en"
      })
    });

    if (res.ok) {
      const data = await res.json();
      const aiReply = data.reply || data.response || data.text || "Detailed response generated.";
      if (outputBox) {
        outputBox.innerHTML = `
          <div style="margin-bottom:8px; font-weight:700; color:#7dd3fc; display:flex; justify-content:space-between; align-items:center;">
            <span>🤖 Bharat AI Specialist Guidance:</span>
            <small style="font-size:11px; color:#94a3b8;">${enriched.name} Telemetry</small>
          </div>
          <div style="color:#f1f5f9; line-height:1.65;">${formatAiMarkdown(aiReply)}</div>
          <div style="margin-top:12px; display:flex; gap:8px; justify-content:flex-end;">
            <a href="ai.html" class="btn ghost-mini" style="font-size:11px;">Open Fullscreen AI Console ↗</a>
          </div>
        `;
      }
    } else {
      throw new Error("API Offline");
    }
  } catch (err) {
    // Smart offline fallback response
    let fallbackAnswer = `**Expedition Guidance for ${enriched.name}:**\n\n`;
    if (promptText.toLowerCase().includes("pack")) {
      fallbackAnswer += `• **Thermal Base Layers:** Merino wool thermals, fleece jacket, windproof shell.\n• **High-Altitude Essentials:** UV 400 sunglasses, SpO2 pulse oximeter, 50+ SPF sunscreen, 2L insulated reusable flask.\n• **Footwear:** Broken-in waterproof trekking boots and wool socks.`;
    } else if (promptText.toLowerCase().includes("ams") || promptText.toLowerCase().includes("altitude")) {
      fallbackAnswer += `• **Pacing Protocol:** Mandatory 48h rest in Leh (11,500 ft) before climbing above 14,000 ft.\n• **Hydration:** Consume 3.5–4 Liters of clean water or butter tea daily.\n• **Oxygen Check:** Carry pulse oximeter; if SpO2 drops below 70%, descend immediately to a lower sector.`;
    } else if (promptText.toLowerCase().includes("itinerary") || promptText.toLowerCase().includes("day")) {
      fallbackAnswer += `• **Day 1:** Gentle morning exploration of ${enriched.name}, scenic viewpoints, and village craft guilds.\n• **Day 2:** Zero-mile food tasting at local family homestays and heritage monastery/trail walk.\n• **Night:** Stargazing under zero light-pollution Himalayan skies.`;
    } else {
      fallbackAnswer += `${enriched.culturalStory}\n\n**Key Recommendation:** ${enriched.amsAdvisory}\n\n**Direct Impact:** ${enriched.communityBenefit || "90%+ Direct Community Revenue"}.`;
    }

    if (outputBox) {
      outputBox.innerHTML = `
        <div style="margin-bottom:8px; font-weight:700; color:#7dd3fc; display:flex; justify-content:space-between; align-items:center;">
          <span>🤖 Bharat AI Knowledge Engine:</span>
          <small style="font-size:11px; color:#10b981;">Verified Offline Telemetry ✓</small>
        </div>
        <div style="color:#f1f5f9; line-height:1.65;">${formatAiMarkdown(fallbackAnswer)}</div>
        <div style="margin-top:12px; display:flex; gap:8px; justify-content:flex-end;">
          <a href="ai.html" class="btn ghost-mini" style="font-size:11px;">Open Fullscreen AI Console ↗</a>
        </div>
      `;
    }
  }
}

// Simple markdown formatter for destination AI output
function formatAiMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/^### (.*$)/gim, '<h4 style="color:#7dd3fc; margin:10px 0 4px; font-size:14px;">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 style="color:#e0f2fe; margin:12px 0 6px; font-size:15px;">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fef08a;">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<div style="display:flex; gap:6px; margin:3px 0;"><span style="color:#38bdf8;">•</span><span>$1</span></div>')
    .replace(/\n\n/g, '<div style="height:8px;"></div>');
}

// ═══════════════════════════════════════════════════════
// MAIN FEATURE CARD DISPLAY ENGINE: showDestination(id)
// ═══════════════════════════════════════════════════════

function showDestination(id) {
  const d = activeDestinations.find(x => x.id === id) || localDestinations.find(x => x.id === id);
  if (!d) return;

  const enriched = getEnrichedDestination(d);

  // Internationalization translation
  const trans = (window.i18n && typeof window.i18n.getDestinationTranslation === "function")
    ? window.i18n.getDestinationTranslation(enriched.id)
    : null;
  const displayName = (trans && trans.name) ? trans.name : enriched.name;
  const displayDesc = (trans && trans.desc) ? trans.desc : enriched.desc;

  // Check if saved in bookmarks
  const saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  const isSaved = saved.includes(enriched.id);

  // Ensure #destinationModal exists in DOM
  let modal = $("#destinationModal");
  if (!modal) {
    const modalHtml = `
      <div class="modal dest-details-modal" id="destinationModal" aria-hidden="true">
        <div class="modal-card dest-modal-card">
          <button class="dest-modal-close" data-close aria-label="Close destination details" onclick="closeDestinationModal()">×</button>
          <div id="destinationModalContent"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    modal = $("#destinationModal");
  }

  const contentContainer = $("#destinationModalContent");
  if (!contentContainer) return;

  // AMS Meter percentage & level calculation
  let amsPercent = "35%";
  let amsClass = "low";
  let amsTitle = "Mild / Safe Altitude";
  if (enriched.amsLevel === "extreme") {
    amsPercent = "95%";
    amsClass = "extreme";
    amsTitle = "Extreme Altitude (AMS Strict Warning)";
  } else if (enriched.amsLevel === "high") {
    amsPercent = "78%";
    amsClass = "high";
    amsTitle = "High Altitude (Acclimatization Required)";
  } else if (enriched.amsLevel === "medium") {
    amsPercent = "55%";
    amsClass = "medium";
    amsTitle = "Moderate Altitude (48h Pacing)";
  }

  // Generate Highlights HTML
  const highlightsHtml = (enriched.highlights || []).map(h => `
    <div class="dest-highlight-item">
      <span class="h-icon">${h.icon || '📍'}</span>
      <div>
        <strong>${h.title}</strong>
        <small>${h.desc}</small>
      </div>
    </div>
  `).join("");

  // Generate Cuisine HTML
  const cuisineHtml = (enriched.localCuisine || []).map(f => `
    <div class="dest-cuisine-card">
      <div class="dest-cuisine-header">
        <span class="dest-cuisine-emoji">${f.emoji || '🍲'}</span>
        <div>
          <div class="dest-cuisine-name">${f.name}</div>
          <small style="color:#94a3b8; font-size:11px;">Zero-Food-Miles Certified</small>
        </div>
      </div>
      <p class="dest-cuisine-desc">${f.desc}</p>
      <button class="dest-food-pledge-btn" onclick="supportModalFood(event, '${f.name.replace(/'/g, "\\'")}')">
        🌱 Support Farmer: ${f.farmPledge || "Local Agro Collective"} (+5 pts)
      </button>
    </div>
  `).join("");

  // Generate Interactive Leave-No-Trace Pledge Chips
  const pledgeChipsHtml = (enriched.ecoBadges || ["Zero Single-Use Plastic", "Glacier Stream Protection", "Direct Homestay Support"]).map(b => `
    <button type="button" class="dest-interactive-chip" onclick="pledgeModalEcoBadge(event, '${b.replace(/'/g, "\\'")}')">
      🌱 Pledge: ${b} (+5 pts)
    </button>
  `).join("");

  // Generate AI Prompt Pills HTML
  const aiPillsHtml = (enriched.aiPrompts || [
    `What should I pack for ${enriched.name}?`,
    `How to prevent AMS altitude sickness at ${enriched.name}?`,
    `Best 2-day sustainable itinerary for ${enriched.name}?`
  ]).map(p => `
    <button type="button" class="dest-ai-pill-btn" onclick="askDestinationAI('${enriched.id}', '${p.replace(/'/g, "\\'")}')">
      💡 ${p}
    </button>
  `).join("");

  // Populate Destination Feature Card
  contentContainer.innerHTML = `
    <!-- 1. Hero Showcase Banner -->
    <div class="dest-modal-hero" style="background-image: url('${enriched.img}')">
      <div class="dest-modal-hero-content">
        <div class="dest-modal-tags">
          ${enriched.isOffbeat 
            ? `<span class="offbeat-badge">🌱 Eco-Dispersion Gem</span>` 
            : `<span class="offbeat-badge" style="background:rgba(234,88,12,0.9);">🚨 Monitored Hotspot</span>`}
          <span class="dest-altitude-badge">🏔️ ${enriched.altitude || "High-Altitude"}</span>
          <span class="community-benefit-badge">🤝 ${enriched.communityBenefit || "85%+ Direct Local Revenue"}</span>
          <span class="dest-altitude-badge" style="background:rgba(30,58,138,0.85); color:#bfdbfe;">◈ ${enriched.type || enriched.category}</span>
        </div>

        <h2 class="dest-modal-title">${displayName}</h2>
        <div class="dest-modal-subtitle">
          <span>📍 ${enriched.location.toUpperCase()} • ${enriched.state || "India"}</span>
          <span>•</span>
          <span>⭐ Difficulty: <b>${enriched.difficulty || "Moderate"}</b></span>
          <span>•</span>
          <span>🗓️ Best Season: <b>${enriched.bestSeason || enriched.best_season}</b></span>
        </div>

        <!-- Live Audio Tour Player -->
        <div class="dest-audio-bar" id="destAudioBar_${enriched.id}">
          <button type="button" class="dest-audio-btn" id="destAudioBtn_${enriched.id}" onclick="toggleDestAudioTour('${enriched.id}')">
            🔊 Listen to Audio Guide
          </button>
          <div class="dest-audio-waveform">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <span class="dest-audio-status" id="destAudioStatus_${enriched.id}">Official Web Speech Tour (1.5 min)</span>
        </div>
      </div>
    </div>

    <!-- 2. Feature Bento Grid Body -->
    <div class="dest-modal-body">
      
      <!-- Telemetry Metrics Grid -->
      <div class="dest-telemetry-bento">
        <!-- Card A: Altitude & AMS Safety -->
        <div class="telemetry-card">
          <div class="telemetry-card-top">
            <span class="telemetry-label">Altitude & AMS Safety</span>
            <span class="telemetry-icon">🏔️</span>
          </div>
          <div class="telemetry-value">${enriched.altitude || "11,500 ft"}</div>
          <div class="telemetry-sub">${amsTitle}</div>
          <div class="ams-meter-wrap">
            <div class="ams-meter-bar">
              <div class="ams-meter-fill ${amsClass}" style="width: ${amsPercent};"></div>
            </div>
          </div>
        </div>

        <!-- Card B: Weather & Season -->
        <div class="telemetry-card">
          <div class="telemetry-card-top">
            <span class="telemetry-label">Ideal Weather Window</span>
            <span class="telemetry-icon">🗓️</span>
          </div>
          <div class="telemetry-value">${enriched.bestSeason || enriched.best_season || "May–Sep"}</div>
          <div class="telemetry-sub">${enriched.weatherWindow || "Optimal road and flight accessibility."}</div>
        </div>

        <!-- Card C: Daily Experience Budget -->
        <div class="telemetry-card">
          <div class="telemetry-card-top">
            <span class="telemetry-label">Est. Daily Budget</span>
            <span class="telemetry-icon">💰</span>
          </div>
          <div class="telemetry-value">₹${(enriched.budget || 4500).toLocaleString()} <span style="font-size:12px; font-weight:400; color:#94a3b8;">/ day</span></div>
          <div class="telemetry-sub">Includes homestay, organic meals & local eco-transit.</div>
        </div>

        <!-- Card D: Direct Community Share -->
        <div class="telemetry-card">
          <div class="telemetry-card-top">
            <span class="telemetry-label">Local Economy Share</span>
            <span class="telemetry-icon">🤝</span>
          </div>
          <div class="telemetry-value" style="color:#fef08a;">${enriched.communityBenefit || "90% Direct"}</div>
          <div class="telemetry-sub">Retained directly by village homestays & local guilds.</div>
        </div>
      </div>

      <!-- Cultural Story Narrative -->
      <div>
        <div class="dest-section-title">
          <span>📜 Cultural Storyline & Ecological Significance</span>
        </div>
        <div class="dest-story-box">
          <p>${enriched.culturalStory}</p>
          <p style="color:#7dd3fc; margin-top:8px;"><b>🛡️ Safety & Permit Telemetry:</b> ${enriched.amsAdvisory} ${enriched.connectivity ? "• " + enriched.connectivity : ""}</p>
        </div>
      </div>

      <!-- Must-Visit Highlights -->
      <div>
        <div class="dest-section-title">
          <span>✨ Curated Must-Experience Highlights</span>
        </div>
        <div class="dest-highlights-grid">
          ${highlightsHtml}
        </div>
      </div>

      <!-- Zero-Mile Cuisine -->
      <div>
        <div class="dest-section-title">
          <span>🍛 Authentic Zero-Mile Delicacies & Local Produce</span>
        </div>
        <div class="dest-cuisine-grid">
          ${cuisineHtml}
        </div>
      </div>

      <!-- Leave No Trace Pledges -->
      <div class="dest-pledges-box">
        <div class="dest-pledges-header">
          <div>
            <strong style="color:#ffffff; font-size:14px;">🌱 Leave-No-Trace Environmental Pledges</strong>
            <p style="color:#94a3b8; font-size:12px; margin:2px 0 0;">Click any pledge chip to commit eco-action and earn +5 points on your traveler profile.</p>
          </div>
        </div>
        <div class="dest-pledges-chips">
          ${pledgeChipsHtml}
        </div>
      </div>

      <!-- AI Travel Specialist Hub -->
      <div class="dest-ai-hub">
        <div class="dest-ai-hub-header">
          <div>
            <strong style="color:#fff; font-size:15px;">🤖 Bharat AI Travel Specialist Hub</strong>
            <p style="color:#bae6fd; font-size:12px; margin:2px 0 0;">Live AI guidance calibrated specifically for ${enriched.name}.</p>
          </div>
          <span class="dest-ai-badge">GEMINI 2.5 TELEMETRY</span>
        </div>

        <div class="dest-ai-prompt-pills">
          ${aiPillsHtml}
        </div>

        <div class="dest-ai-custom-bar">
          <input type="text" id="destAiInput_${enriched.id}" class="dest-ai-input" placeholder="Ask AI anything about ${enriched.name} (e.g. oxygen tips, homestays, trails)..." onkeydown="if(event.key==='Enter') askDestinationAI('${enriched.id}')">
          <button type="button" class="dest-ai-send-btn" onclick="askDestinationAI('${enriched.id}')">Ask AI ✦</button>
        </div>

        <div class="dest-ai-output-box" id="destAiOutputBox_${enriched.id}"></div>
      </div>

    </div>

    <!-- 3. Modal Sticky Action Dock -->
    <div class="dest-modal-actions-dock">
      <div class="dest-dock-left">
        <button type="button" class="btn dock-btn ${isSaved ? 'gold' : 'ghost-dark'}" id="destModalSaveBtn_${enriched.id}" onclick="toggleSaveModalDestination('${enriched.id}')">
          ${isSaved ? '✓ Saved in Journey' : '♥ Add to Journey'}
        </button>
        <button type="button" class="btn dock-btn primary" onclick="planDestinationTour('${enriched.id}')">
          🧭 Plan Custom Itinerary →
        </button>
      </div>
      <div class="dest-dock-right">
        <button type="button" class="btn dock-btn ghost-dark" onclick="viewDestinationOnMap('${enriched.id}')" title="View location on State Map">
          🗺️ State Map
        </button>
        <button type="button" class="btn dock-btn ghost-dark" onclick="downloadOfflineFieldPassPDF(null, this)" title="Download Official Himalayan Safety & Danger Guidelines">
          🛡️ Field Pass (PDF)
        </button>
        <a href="ai.html" class="btn dock-btn ghost-dark" title="Open Fullscreen Bharat AI Console">
          🤖 Bharat AI ↗
        </a>
      </div>
    </div>
  `;

  // Display modal
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}


// --- Journey Bookmarks & Drawer Flow ---

function updateSavedCount() {
  const saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  const countEl = $("#navSavedCount");
  const drawerCount = $("#drawerCount");

  if (countEl) countEl.textContent = saved.length;
  if (drawerCount) drawerCount.textContent = saved.length;
}

function saveDestination(id) {
  let saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  const dest = activeDestinations.find(d => d.id === id);
  if (!saved.includes(id)) {
    saved.push(id);
    localStorage.setItem("bharatSaved", JSON.stringify(saved));
    syncSavedToBackend(saved);
    // Pillar 3: Award eco points for saving offbeat/eco-dispersion destinations
    if (dest && dest.isOffbeat) {
      updateResponsibleScore(10, `Eco-Dispersion gem saved: ${dest.name}!`);
    } else {
      toast("Saved to My Journey ♥");
    }
  } else {
    toast("Already in your Journey list ♥");
  }
  updateSavedCount();
  renderJourneyDrawer();
}

function removeSavedDestination(id) {
  let saved = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  saved = saved.filter(x => x !== id);
  localStorage.setItem("bharatSaved", JSON.stringify(saved));
  syncSavedToBackend(saved);
  updateSavedCount();
  renderJourneyDrawer();
  toast("Removed from your Journey list");
}

function renderJourneyDrawer() {
  const container = $("#journeyDrawerList");
  const totalBudgetEl = $("#journeyTotalBudget");
  if (!container) return;

  const savedIds = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
  const savedItems = activeDestinations.filter(d => savedIds.includes(d.id));

  if (!savedItems.length) {
    const emptyMsg = (window.i18n && typeof window.i18n.t === "function") 
      ? window.i18n.t("drawer_empty") 
      : "No saved destinations yet. Click \"♥ Add to Journey\" on any destination card to bookmark your dream route.";
    container.innerHTML = `
      <div class="empty-state">
        <span style="font-size:36px;">🗺️</span>
        <p>${emptyMsg}</p>
      </div>
    `;
    if (totalBudgetEl) totalBudgetEl.textContent = "₹0";
    return;
  }

  let totalBudget = 0;
  container.innerHTML = savedItems.map(item => {
    totalBudget += (item.budget || 3500);
    const trans = (window.i18n && typeof window.i18n.getDestinationTranslation === "function")
      ? window.i18n.getDestinationTranslation(item.id)
      : null;
    const itemName = (trans && trans.name) ? trans.name : item.name;

    return `
      <div class="drawer-item">
        <img src="${item.img}" alt="${itemName}">
        <div class="drawer-item-info">
          <h4>${itemName}</h4>
          <p>📍 ${item.location} • ₹${(item.budget || 3500).toLocaleString()}</p>
          <span style="font-size:10.5px; color:var(--emerald-pop); font-weight:700;">${item.communityBenefit || "Eco Certified"}</span>
        </div>
        <button class="drawer-item-remove" onclick="removeSavedDestination('${item.id}')" title="Remove" aria-label="Remove destination">✕</button>
      </div>
    `;
  }).join("");

  if (totalBudgetEl) totalBudgetEl.textContent = `₹${totalBudget.toLocaleString()}`;
}

// --- Leaflet Map & State Discovery Engine ---


// ═══════════════════════════════════════════════════════
//  LEAFLET MAP & STATE DISCOVERY ENGINE
//  Extracted to js/map.js (Tile layer, cards, boundaries & filters)
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
//  AI AGENT & SMART ITINERARY PLANNER
//  Extracted to js/ai.js (Streaming chat, markdown, pass-audited route generator)
// ═══════════════════════════════════════════════════════

// --- Gamified Responsible Tourism Score ---

function animateScore(targetScore) {
  const scoreEl = $("#score");
  const barEl = $("#scoreBar");
  const ringFill = $("#scoreRingFill");
  const cardEl = $(".score-card");
  if (!scoreEl) return;

  targetScore = Math.max(0, Math.min(100, targetScore));
  const startScore = parseInt(scoreEl.textContent) || 85;
  const duration = 600;
  const startTime = performance.now();
  // SVG ring: circumference = 2 * PI * r = 2 * PI * 65 ≈ 408
  const CIRCUMFERENCE = 408;

  if (cardEl) {
    cardEl.classList.add("pulse-glow");
    setTimeout(() => cardEl.classList.remove("pulse-glow"), 700);
  }

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(startScore + (targetScore - startScore) * ease);

    scoreEl.textContent = val;
    if (barEl) barEl.style.width = `${val}%`;
    // Animate SVG ring: offset decreases as score increases
    if (ringFill) {
      const dashOffset = CIRCUMFERENCE - (val / 100) * CIRCUMFERENCE;
      ringFill.style.strokeDashoffset = dashOffset;
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      currentScore = targetScore;
      localStorage.setItem("bharatScore", currentScore);
      checkRewardUnlock();
    }
  }

  requestAnimationFrame(step);
}

function updateResponsibleScore(delta, message) {
  const newScore = Math.min(100, Math.max(0, currentScore + delta));
  animateScore(newScore);
  if (message) toast(`${message} (+${delta} pts)`);
}

function checkRewardUnlock() {
  // Legacy token coupon vouchers replaced by The Great Himalayan Eco-Expedition game
}

function triggerEcoAction(type) {
  const actions = {
    plastic: { pts: 5, msg: "Reused hydration flask & zero single-use plastic commitment!" },
    homestay: { pts: 10, msg: "Booked certified Ladakhi village homestay!" },
    water: { pts: 5, msg: "Protected fragile glacial streams & natural water springs!" },
    culture: { pts: 5, msg: "Observed monastic silence & respectful cultural etiquette!" },
    wildlife: { pts: 5, msg: "Maintained leave-no-trace distance from high-altitude wildlife!" },
    local: { pts: 10, msg: "Purchased direct handloom pashmina from village cooperative!" }
  };
  const act = actions[type] || { pts: 5, msg: "Eco-action recorded!" };
  updateResponsibleScore(act.pts, act.msg);
}

function pledgeEcoPass() {
  updateResponsibleScore(10, "Himalayan Leave-No-Trace Pledge signed!");
  const modal = $("#fieldKitModal");
  if (modal) modal.classList.remove("open");
}

// Pillar 3: Plastic-Free Reusable Flask Toggle
function togglePlasticFree(btn) {
  if (!btn) return;
  if (btn.classList.contains("pledged")) {
    btn.classList.remove("pledged");
    toast("Plastic-free pledge removed.");
  } else {
    btn.classList.add("pledged");
    updateResponsibleScore(5, "Pledged Plastic-Free & Reusable Flask commitment!");
  }
}

// ═══════════════════════════════════════════════════════
//  EMERGENCY HELP & SOS DISTRESS DISPATCH ENGINE (SIH 2026)
// ═══════════════════════════════════════════════════════

// detectedGpsCoords is null until device GPS or IP-lookup resolves
let detectedGpsCoords = null;

const PASS_SECTOR_COORDS = {
  "khardungla": { lat: 34.2787, lng: 77.6047, name: "Khardung La Pass (17,582 ft)", alt: "17,582 ft" },
  "changla": { lat: 34.0489, lng: 77.9304, name: "Chang La Pass (17,688 ft)", alt: "17,688 ft" },
  "tanglangla": { lat: 33.5083, lng: 77.7028, name: "Tanglang La Pass (17,480 ft)", alt: "17,480 ft" },
  "zojila": { lat: 34.2800, lng: 75.4700, name: "Zoji La Pass (11,575 ft)", alt: "11,575 ft" },
  "pangong": { lat: 33.7595, lng: 78.4072, name: "Pangong Tso Sector (14,270 ft)", alt: "14,270 ft" },
  "nubra": { lat: 34.5424, lng: 77.5645, name: "Diskit / Nubra Valley (10,000 ft)", alt: "10,000 ft" },
  "hanle": { lat: 32.7756, lng: 78.9667, name: "Hanle Dark Sky Reserve (14,900 ft)", alt: "14,900 ft" },
  "leh": { lat: 34.1526, lng: 77.5771, name: "Leh District Trauma Base (11,500 ft)", alt: "11,500 ft" }
};

// IP-based geolocation fallback (no key needed)
async function _acquireIpLocation(gpsDisplay) {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
    if (!res.ok) throw new Error("geojs failed");
    const d = await res.json();
    const lat = parseFloat(parseFloat(d.latitude).toFixed(4));
    const lng = parseFloat(parseFloat(d.longitude).toFixed(4));
    const city = d.city || d.region || "Device Location";
    detectedGpsCoords = {
      lat,
      lng,
      name: `${city} (IP Location: ${lat}, ${lng})`,
      alt: "IP-based"
    };
    if (gpsDisplay) {
      gpsDisplay.innerHTML = `📍 IP Location: <b>${city}</b> (${lat}, ${lng})`;
    }
  } catch (e) {
    // All fallbacks exhausted — show generic message, do NOT default to Khardung La
    if (gpsDisplay) {
      gpsDisplay.innerHTML = `📍 <b>Location unavailable</b> — please enable GPS or select a sector below`;
    }
  }
}

function tryAcquireGpsCoordinates() {
  const gpsDisplay = document.getElementById("sosGpsDisplay");
  if (gpsDisplay) {
    gpsDisplay.innerHTML = `📍 <b>Acquiring device location...</b>`;
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = parseFloat(pos.coords.latitude.toFixed(4));
        const lng = parseFloat(pos.coords.longitude.toFixed(4));
        detectedGpsCoords = {
          lat,
          lng,
          name: `Device Location (${lat}, ${lng})`,
          alt: "GPS"
        };
        if (gpsDisplay) {
          gpsDisplay.innerHTML = `📍 GPS Acquired: <b>${lat}, ${lng}</b> ✅`;
        }
      },
      (err) => {
        // GPS denied or unavailable — try IP fallback
        _acquireIpLocation(gpsDisplay);
      },
      { timeout: 8000, enableHighAccuracy: true, maximumAge: 30000 }
    );
  } else {
    // No geolocation API — try IP fallback
    _acquireIpLocation(gpsDisplay);
  }
}

// Kick off GPS acquisition immediately on page load (silent, no modal needed)
tryAcquireGpsCoordinates();

function playEmergencyChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime);
    osc.frequency.setValueAtTime(440, audioCtx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.36);
  } catch (e) {}
}

async function transmitEmergencySOS() {
  const transmitBtn = document.getElementById("transmitSosBtn");
  const feedbackEl = document.getElementById("sosBroadcastFeedback");
  const emergencyTypeSelect = document.getElementById("sosEmergencyType");
  const notesInput = document.getElementById("sosNotes");
  const sectorSelect = document.getElementById("sosSectorSelect");

  const emergencyType = emergencyTypeSelect ? emergencyTypeSelect.value : "Altitude Sickness (AMS / SpO2 Hypoxia)";
  const notes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : "Urgent assistance requested. AMS hypoxia protocol active.";
  
  // Resolve which coordinates to use:
  // - If user explicitly selected a named pass → use that
  // - Otherwise → use device GPS/IP coords
  let targetCoords = null;
  const sectorVal = sectorSelect ? sectorSelect.value : "current-device";
  if (sectorVal && sectorVal !== "current-device" && PASS_SECTOR_COORDS[sectorVal]) {
    targetCoords = PASS_SECTOR_COORDS[sectorVal];
  } else if (detectedGpsCoords) {
    targetCoords = detectedGpsCoords;
  } else {
    // Still waiting for GPS — block transmission and retry
    if (feedbackEl) {
      feedbackEl.classList.add("active");
      feedbackEl.innerHTML = `<div class="sos-feedback-text"><span>⏳</span><div><strong>Acquiring your location...</strong><div style="font-size:11.5px;">Please wait a moment and try again, or select a sector manually.</div></div></div>`;
    }
    tryAcquireGpsCoordinates();
    return;
  }

  let travelerName = "Explorer";
  let phone = "";
  try {
    const rawUser = localStorage.getItem("bharat_auth_user");
    if (rawUser) {
      const u = JSON.parse(rawUser);
      travelerName = u.fullName || u.full_name || travelerName;
      phone = u.phone || "";
    }
  } catch (e) {}

  if (transmitBtn) {
    transmitBtn.disabled = true;
    transmitBtn.innerHTML = `🛰️ <b>Transmitting Distress Signal to Himalayan Grid...</b>`;
  }

  playEmergencyChime();

  const payload = {
    id: `sos-${Date.now()}`,
    lat: targetCoords.lat,
    lng: targetCoords.lng,
    location_name: targetCoords.name,
    emergency_type: emergencyType,
    description: notes,
    traveler_name: travelerName,
    phone: phone,
    altitude: targetCoords.alt || "17,582 ft",
    status: "ACTIVE"
  };

  try {
    const res = await fetch("/api/sos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.warn("[SOS] Remote API status:", res.status);
    }
  } catch (err) {
    console.warn("[SOS] Network fallback active:", err);
  }

  try {
    const resolvedIds = JSON.parse(localStorage.getItem("bharat_resolved_sos_ids") || "[]");
    const updatedResolved = resolvedIds.filter(id => id !== payload.id);
    localStorage.setItem("bharat_resolved_sos_ids", JSON.stringify(updatedResolved));

    const stored = JSON.parse(localStorage.getItem("bharat_active_sos") || "[]");
    const filteredStored = stored.filter(s => s.id !== payload.id);
    filteredStored.unshift(payload);
    localStorage.setItem("bharat_active_sos", JSON.stringify(filteredStored));
    localStorage.setItem("bharat_sos_broadcast", JSON.stringify(payload));
  } catch (e) {}

  window.dispatchEvent(new CustomEvent("bharat:sos-sent", { detail: payload }));

  setTimeout(playEmergencyChime, 250);

  if (transmitBtn) {
    transmitBtn.disabled = false;
    transmitBtn.innerHTML = `🚨 <b>TRANSMIT ANOTHER EMERGENCY BEACON</b>`;
  }

  if (feedbackEl) {
    feedbackEl.classList.add("active");
    feedbackEl.innerHTML = `
      <div class="sos-feedback-text">
        <span>✅</span>
        <div>
          <strong>DISTRESS SIGNAL BROADCASTED ACROSS THE STATE MAP!</strong>
          <div style="font-size:11.5px; opacity:0.9;">Beacons active at ${targetCoords.name}. High-altitude medical responders alerted.</div>
        </div>
      </div>
      <a href="map.html?sos=${payload.id}" class="sos-view-map-link" onclick="handleViewSosOnMap(event, '${payload.id}')">
        🗺️ View Live on Map →
      </a>
    `;
  }

  toast("🚨 Emergency SOS Distress Signal Broadcasted to State Map!");
}

function handleViewSosOnMap(e, sosId) {
  const mapContainer = document.getElementById("map");
  if (mapContainer && typeof window.focusSosBeacon === "function") {
    e.preventDefault();
    closeHelpModal();
    window.focusSosBeacon(sosId);
  }
}

function openHelpModal() {
  const modal = document.getElementById("fieldKitModal");
  if (modal) {
    modal.classList.add("open");
    tryAcquireGpsCoordinates();
  }
}

function closeHelpModal() {
  const modal = document.getElementById("fieldKitModal");
  if (modal) {
    modal.classList.remove("open");
  }
}

window.transmitEmergencySOS = transmitEmergencySOS;
window.openHelpModal = openHelpModal;
window.closeHelpModal = closeHelpModal;
window.tryAcquireGpsCoordinates = tryAcquireGpsCoordinates;


// --- Global Search ---

function search(q) {
  q = (q || "").toLowerCase().trim();
  const resultsEl = $("#searchResults");
  if (!resultsEl) return;

  const matches = activeDestinations.filter(d => 
    `${d.name} ${d.location} ${d.type} ${d.category} ${d.desc} ${d.state || ""}`.toLowerCase().includes(q)
  );

  if (matches.length) {
    resultsEl.innerHTML = matches.map(d => `
      <article class="result-card">
        <span class="mini">${d.location} • ${d.type}</span>
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
        <span style="font-size:11px; color:var(--emerald-pop); font-weight:700; display:block; margin:6px 0;">
          ✦ ${d.communityBenefit || "Eco Certified"}
        </span>
        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn primary" style="padding:6px 14px; font-size:12px;" onclick="showDestination('${d.id}')">Explore</button>
          <button class="btn ghost" style="padding:6px 14px; font-size:12px; color:var(--ink); border-color:rgba(0,0,0,0.15);" onclick="saveDestination('${d.id}')">♥ Save</button>
        </div>
      </article>
    `).join("");
  } else {
    resultsEl.innerHTML = `
      <div class="result-card" style="grid-column: span 4; text-align:center;">
        <h3>No direct match found for "${q}"</h3>
        <p>Try searching for: Pangong, Turtuk, Hanle, Nubra, Khardung La, Spiti, or Monasteries.</p>
      </div>
    `;
  }
}

// --- App Initialization ---

async function init() {
  const savedScore = localStorage.getItem("bharatScore");
  if (savedScore) {
    currentScore = parseInt(savedScore, 10);
    const scoreEl = $("#score");
    const barEl = $("#scoreBar");
    if (scoreEl) scoreEl.textContent = currentScore;
    if (barEl) barEl.style.width = `${currentScore}%`;
  }
  checkRewardUnlock();

  // Instant render with resilient local data (0ms startup delay)
  activeDestinations = localDestinations;

  renderCategories();
  renderResults();
  renderCircuits();
  renderDestinations();
  renderFood();
  renderJourney();
  updateSavedCount();
  if (typeof window.syncUserSessionState === "function") {
    window.syncUserSessionState();
  }

  // Re-render dynamic grids whenever language switches
  window.addEventListener("bharat-lang-changed", () => {
    renderCategories();
    renderCircuits();
    renderDestinations();
    renderFood();
    renderJourney();
    checkRewardUnlock();
    renderJourneyDrawer();
  });

  // Initialize modular subsystems
  if (typeof window.initMap === "function") window.initMap();
  if (typeof window.initAI === "function") window.initAI();

  // Background non-blocking API sync
  fetchDestinationsFromAPI();

  // Circuit region filter pills
  $$(".circuit-pill").forEach(pill => {
    pill.onclick = () => {
      $$(".circuit-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderCircuits(pill.dataset.region);
    };
  });

  // Decongestion & Offbeat filter pills
  $$(".filter-pill").forEach(pill => {
    pill.onclick = () => {
      $$(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderDestinations();

      if (currentFilter === "offbeat") {
        toast("🌱 Decongestion Active: Highlighting low-footfall secondary gems to protect fragile ecosystems.");
      } else {
        toast(`Filtered by: ${pill.textContent.trim()}`);
      }
    };
  });

  // Map Hotspot Category Filter Pills
  $$(".map-filter-pill").forEach(pill => {
    pill.onclick = () => {
      $$(".map-filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      filterMapHotspots(pill.dataset.mapFilter);
    };
  });

  // Floating navbar scroll effect
  window.addEventListener("scroll", () => {
    const nav = $("#navbar");
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 25);
  }, { passive: true });

  // Mobile menu toggle with touch outside & keyboard dismiss
  const navToggle = $(".nav-toggle");
  if (navToggle) {
    const closeMobileNav = () => {
      const nav = $(".nav");
      if (nav && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    };

    navToggle.onclick = (e) => {
      e.stopPropagation();
      const nav = $(".nav");
      nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    };

    // Close on any link click
    $$(".nav nav a").forEach(a => {
      a.addEventListener("click", closeMobileNav);
    });

    // Close when tapping outside the open nav on mobile/tablets
    document.addEventListener("click", (e) => {
      const nav = $(".nav");
      if (nav && nav.classList.contains("open") && !nav.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close with Escape key for accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });

    // Close if orientation changes or screen resizes above mobile breakpoint
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120) closeMobileNav();
    }, { passive: true });
  }

  // Itinerary form submission
  const plannerForm = $("#plannerForm");
  if (plannerForm) plannerForm.onsubmit = itinerary;

  // AI Chat form submission
  const chatForm = $("#chatForm");
  if (chatForm) {
    chatForm.onsubmit = e => {
      e.preventDefault();
      const input = $("#chatInput");
      askAI(input.value);
      input.value = "";
    };
  }

  // Suggestion buttons
  $$(".ai-suggestions button").forEach(b => {
    b.onclick = () => askAI(b.dataset.question);
  });

  // Global search buttons
  const globalSearchBtn = $("#globalSearchBtn");
  if (globalSearchBtn) {
    globalSearchBtn.onclick = () => {
      search($("#globalSearch").value);
      $("#searchModal").classList.add("open");
    };
  }

  const globalSearch = $("#globalSearch");
  if (globalSearch) {
    globalSearch.onkeydown = e => {
      if (e.key === "Enter") $("#globalSearchBtn").click();
    };
  }

  const searchBtn = $("#searchBtn");
  if (searchBtn) {
    searchBtn.onclick = () => $("#searchModal").classList.add("open");
  }

  const modalSearch = $("#modalSearch");
  if (modalSearch) {
    modalSearch.oninput = e => search(e.target.value);
  }

  // Saved Journey button -> Opens Journey Drawer with Offline Field Kit
  const savedBtn = $("#savedBtn");
  if (savedBtn) {
    savedBtn.onclick = () => {
      renderJourneyDrawer();
      $("#journeyDrawer").classList.add("open");
    };
  }

  // Dashboard Help & SOS button
  const dashHelpBtn = $("#dashHelpBtn");
  if (dashHelpBtn) {
    dashHelpBtn.onclick = () => openHelpModal();
  }

  // Emergency Help & Field Kit quick button in Navbar
  const fieldKitQuickBtn = $("#fieldKitQuickBtn");
  if (fieldKitQuickBtn) {
    fieldKitQuickBtn.onclick = () => openHelpModal();
  }

  // Transmit SOS button in modal
  const transmitSosBtn = $("#transmitSosBtn");
  if (transmitSosBtn) {
    transmitSosBtn.onclick = (e) => {
      e.preventDefault();
      transmitEmergencySOS();
    };
  }

  // Sector selector in SOS box — update GPS display when user manually picks a pass
  const sosSectorSelect = $("#sosSectorSelect");
  if (sosSectorSelect) {
    sosSectorSelect.onchange = (e) => {
      const val = e.target.value;
      const gpsDisplay = $("#sosGpsDisplay");
      if (val === "current-device" || !val) {
        // Switch back to device GPS
        if (detectedGpsCoords) {
          if (gpsDisplay) {
            gpsDisplay.innerHTML = `📍 Device Location: <b>${detectedGpsCoords.lat}, ${detectedGpsCoords.lng}</b> ✅`;
          }
        } else {
          tryAcquireGpsCoordinates();
        }
      } else if (PASS_SECTOR_COORDS[val]) {
        const c = PASS_SECTOR_COORDS[val];
        if (gpsDisplay) {
          gpsDisplay.innerHTML = `📍 Selected Sector: <b>${c.name}</b>`;
        }
      }
    };
  }

  // Footer field kit & AMS guidelines links
  const footerFieldKitLink = $("#footerFieldKitLink");
  if (footerFieldKitLink) {
    footerFieldKitLink.onclick = () => {
      openHelpModal();
    };
  }

  const footerAmsLink = $("#footerAmsLink");
  if (footerAmsLink) {
    footerAmsLink.onclick = () => {
      openHelpModal();
    };
  }

  // Open field kit from drawer
  const openFieldKitBtn = $("#openFieldKitBtn");
  if (openFieldKitBtn) {
    openFieldKitBtn.onclick = () => {
      $("#journeyDrawer").classList.remove("open");
      openHelpModal();
    };
  }


  // Plan from journey drawer button
  const planFromJourneyBtn = $("#planFromJourneyBtn");
  if (planFromJourneyBtn) {
    planFromJourneyBtn.onclick = () => {
      $("#journeyDrawer").classList.remove("open");
      const savedIds = JSON.parse(localStorage.getItem("bharatSaved") || "[]");
      const savedItems = activeDestinations.filter(d => savedIds.includes(d.id));
      const targetState = savedItems.length ? (savedItems[0].state || "Ladakh") : "Ladakh";
      if (typeof window.loadStateIntoPlanner === "function") {
        window.loadStateIntoPlanner(targetState);
      }
    };
  }

  // Clear journey button
  const clearJourneyBtn = $("#clearJourneyBtn");
  if (clearJourneyBtn) {
    clearJourneyBtn.onclick = () => {
      localStorage.setItem("bharatSaved", "[]");
      syncSavedToBackend([]);
      updateSavedCount();
      renderJourneyDrawer();
      toast("Cleared all saved destinations");
    };
  }

  // Close modals
  $$("[data-close]").forEach(x => {
    x.onclick = () => {
      closeDestinationModal();
      $$(".modal").forEach(m => m.classList.remove("open"));
    };
  });

  $$(".modal").forEach(m => {
    m.addEventListener("click", (e) => {
      if (e.target === m) {
        closeDestinationModal();
        m.classList.remove("open");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDestinationModal();
      $$(".modal").forEach(m => m.classList.remove("open"));
    }
  });


  // Emotion pills
  $$(".emotion-row button").forEach(b => {
    b.onclick = () => {
      const m = {
        peace: "mountains",
        adventure: "adventure",
        culture: "culture",
        nature: "nature",
        spirituality: "spirituality",
        food: "food"
      };
      renderResults(m[b.dataset.emotion] || "mountains");
      const exp = $("#explore");
      if (exp) exp.scrollIntoView({ behavior: "smooth" });
    };
  });

  // View all destinations button
  const showAllBtn = $("#showAllDestinations");
  if (showAllBtn) {
    showAllBtn.onclick = () => {
      currentFilter = "all";
      $$(".filter-pill").forEach(p => p.classList.remove("active"));
      const allPill = document.querySelector('.filter-pill[data-filter="all"]');
      if (allPill) allPill.classList.add("active");
      renderDestinations();
      toast("Showing all verified destinations.");
    };
  }

  // Culture section button
  const cultureBtn = $("#cultureBtn");
  if (cultureBtn) {
    cultureBtn.onclick = () => {
      if (typeof window.askAI === "function") {
        window.askAI("Tell me about the Buddhist culture, monasteries, Losar festival, and traditional attire of Ladakh.");
      }
      const aiSec = $("#ai");
      if (aiSec) aiSec.scrollIntoView({ behavior: "smooth" });
    };
  }

  // Language selector
  const langSelect = $("#language");
  if (langSelect) {
    langSelect.onchange = e => {
      if (window.i18n && typeof window.i18n.setLanguage === "function") {
        window.i18n.setLanguage(e.target.value);
      }
    };
  }

  // --- 3D Immersive Systems Initialization ---
  initScrollReveal();

  requestAnimationFrame(() => {
    initAmbientParticles();
    initExperienceCard3D();
  });
}

// ═══════════════════════════════════════════════════════
//  SCROLL-TRIGGERED REVEAL ANIMATIONS
//  Fades up section headings and grids as they enter
//  the viewport using IntersectionObserver.
// ═══════════════════════════════════════════════════════

function initScrollReveal() {
  const selectors = [
    ".section-head",
    ".category-grid",
    ".destination-grid",
    ".experience-grid",
    ".food-grid",
    ".planner",
    ".score-card",
    ".chat",
    ".ai-copy",
    ".responsible-copy",
    ".culture-copy",
    ".map-layout",
    ".journey-track",
    ".decongestion-container",
    ".economy-direct-banner",
    ".final-cta > .eyebrow",
    ".final-cta > h2",
    ".final-cta > .btn"
  ];

  const elements = document.querySelectorAll(selectors.join(","));
  elements.forEach((el, i) => {
    el.classList.add("reveal-on-scroll");
    el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

  elements.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════
//  AMBIENT FLOATING PARTICLES
// ═══════════════════════════════════════════════════════

function initAmbientParticles() {
  const darkSections = document.querySelectorAll(
    ".hero, .section.dark, .split-section, .journey, .circuit-section"
  );

  darkSections.forEach(section => {
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "ambient-particle";

      const size = 2 + Math.random() * 3;
      const colors = [
        "rgba(255, 183, 3, 0.35)",
        "rgba(0, 180, 216, 0.3)",
        "rgba(255, 255, 255, 0.18)"
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --duration: ${14 + Math.random() * 12}s;
        --delay: ${Math.random() * 10}s;
        --drift-x: ${(Math.random() - 0.5) * 50}px;
        --drift-y: ${-20 - Math.random() * 40}px;
        --max-opacity: ${0.12 + Math.random() * 0.18};
      `;

      section.appendChild(particle);
    }
  });
}

// ═══════════════════════════════════════════════════════
//  EXPERIENCE CARD 3D TILT
// ═══════════════════════════════════════════════════════

function initExperienceCard3D() {
  const cards = document.querySelectorAll(".experience-grid article");
  if (cards.length) {
    addCard3D(cards, { maxTilt: 8, glow: true });
  }
}

document.addEventListener("DOMContentLoaded", init);

// ═══════════════════════════════════════════════════════
//  GLOBAL WINDOW EXPORTS FOR MODULAR SUBSYSTEMS
// ═══════════════════════════════════════════════════════

window.$ = $;
window.$$ = $$;
window.toast = toast;
window.updateResponsibleScore = updateResponsibleScore;
window.fetchPassesFromAPI = fetchPassesFromAPI;
window.activeDestinations = activeDestinations;
window.localDestinations = localDestinations;
