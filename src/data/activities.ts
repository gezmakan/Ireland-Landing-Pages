export type ActivityCategory = "free" | "student" | "daytrip";

export interface Activity {
  slug: string;
  title: string;
  description: string;
  price?: string;
  category: ActivityCategory;
  image: string;
  video?: string;
}

const IMG = "https://us-wbe-img2.gr-cdn.com/user/50d29838-0dc2-403e-9a9b-f8e57d8787c6";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const raw: Omit<Activity, "slug">[] = [
  // Free to visit
  {
    title: "Chester Beatty Library",
    description: "Explore rare manuscripts, prints and artifacts from around the world.",
    category: "free",
    image: `${IMG}/c0609b8e-6d98-4975-b8fc-f88dd42cc824-webp.webp`,
    video: "https://www.youtube.com/watch?v=9LdVFCzOdoc",
  },
  {
    title: "Phoenix Park",
    description: "One of the largest urban parks in Europe with scenic views and deer spotting.",
    category: "free",
    image: `${IMG}/225b30aa-32a2-4b6d-af79-de4dd2cd84dc-webp.webp`,
    video: "https://www.youtube.com/watch?v=qYxrhKwtIEA",
  },
  {
    title: "National Museum of Ireland - Decorative Arts",
    description: "Ireland's largest military history collection and exhibitions.",
    category: "free",
    image: `${IMG}/33c5dd8f-81c9-4639-8e9c-b03a40c4f0bd-webp.webp`,
    video: "https://www.youtube.com/watch?v=VPLrRPXXCbk&t=91s",
  },
  {
    title: "National Museum of Ireland - Archeology",
    description: "Displays ancient artifacts, including treasures from Ireland's history.",
    category: "free",
    image: `${IMG}/78bd8f4a-e6c0-4a7e-8a73-85c26c945971-webp.webp`,
    video: "https://www.youtube.com/watch?v=69inZwjASYU&t=16s",
  },
  {
    title: "National Museum of Ireland - Natural History",
    description: "Known as the 'Dead Zoo', showcasing preserved animal specimens.",
    category: "free",
    image: `${IMG}/ac629ceb-d0fa-4040-a160-dd993f9dbbe9-webp.webp`,
    video: "https://www.youtube.com/watch?v=msOf3lszxuA",
  },
  {
    title: "National Botanic Gardens",
    description: "Explore stunning plant collections in a serene setting.",
    category: "free",
    image: `${IMG}/1a4a04b1-8cb2-4ce1-aa21-db4affdf7fe7-webp.webp`,
    video: "https://www.youtube.com/shorts/0FTBuUh12Xo",
  },
  {
    title: "Irish National War Memorial Gardens",
    description: "A peaceful garden dedicated to Irish soldiers of WWI.",
    category: "free",
    image: `${IMG}/d84b2d48-2e24-4c11-9935-a6bf6a5223d9-webp.webp`,
    video: "https://www.youtube.com/watch?v=VEFkgd-Tii8",
  },
  {
    title: "National Gallery of Ireland",
    description: "Impressive collection of European and Irish art.",
    category: "free",
    image: `${IMG}/4db91268-465c-4dea-950f-22aabac1cd98-webp.webp`,
    video: "https://www.youtube.com/shorts/0FTBuUh12Xo",
  },
  {
    title: "Howth Cliff Walk",
    description: "A scenic walking trail offering stunning views of Dublin Bay.",
    category: "free",
    image: `${IMG}/f3280d22-b28a-47ff-bc54-29bc119f93f2-webp.webp`,
    video: "https://www.youtube.com/watch?v=-92xpkvJOFY",
  },
  {
    title: "Hugh Lane Gallery",
    description: "One of Ireland's most exciting collections of Irish and international art.",
    category: "free",
    image: `${IMG}/c5976105-e5ae-4641-abd4-61d8ed95bdee-webp.webp`,
    video: "https://www.youtube.com/watch?v=a6Rpk4jhvQk",
  },
  {
    title: "Bray Seafront",
    description:
      "Historic Victorian promenade offering a mile-long coastal walk with stunning views of Bray Head and the Irish Sea.",
    category: "free",
    image: `${IMG}/7623f493-2bc6-4705-bcfd-6cead0e5fc09-webp.webp`,
    video: "https://www.youtube.com/watch?v=JBwn_s0dkAg",
  },
  {
    title: "Ulster Museum",
    description: "The Ulster Museum was founded as the Belfast Natural History Society in 1821.",
    category: "free",
    image: `${IMG}/09ddf67c-ec8a-4dbf-9b4d-aa5a22d965fe-webp.webp`,
    video: "https://www.youtube.com/watch?v=y6Ep_fcYw-c",
  },
  {
    title: "Galway City Museum",
    description: "A repository for cultural heritage objects related to the history and heritage of Galway.",
    category: "free",
    image: `${IMG}/2c4980ef-b23e-47c3-8446-d16c2da1734c-webp.webp`,
    video: "https://www.tiktok.com/@visitgalway/video/7547032591736573206",
  },
  {
    title: "Galway Cathedral",
    description: "An example of Renaissance Revival Architecture with Romanesque and Gothic influences.",
    category: "free",
    image: `${IMG}/cf541983-4fc8-4a77-9cd3-f6f24811ea3c-webp.webp`,
    video: "https://www.youtube.com/watch?v=G5z_4iIhiy4",
  },
  {
    title: "Irish Museum of Modern Art",
    description: "Dynamic modern art museum nestled on 48 acres of land in the heart of Dublin 8.",
    category: "free",
    image: "https://us-ms.gr-cdn.com/getresponse-woBhR/photos/dba685a9-60ff-4c34-a9b4-f76b702ab3d7.jpg",
    video: "https://www.youtube.com/watch?v=yjX9lunJEgY&t=65s",
  },

  // Student prices
  {
    title: "Dublin Castle",
    description: "A historic site offering guided tours of state apartments and medieval undercrofts.",
    price: "€6",
    category: "student",
    image: `${IMG}/84fbce60-35fd-457e-9fb2-04da79373100-webp.webp`,
    video: "https://www.youtube.com/shorts/8tSGigy4wYE",
  },
  {
    title: "Viking Splash Tour",
    description: "A fun and interactive amphibious tour of Dublin landmarks.",
    price: "€32",
    category: "student",
    image: `${IMG}/bf364954-79f4-4738-a0a6-107bf0889479-webp.webp`,
    video: "https://www.youtube.com/watch?v=C60pz2IDn_s&t=50s",
  },
  {
    title: "National Wax Museum Plus",
    description: "Features wax figures of famous Irish and global personalities.",
    price: "€17",
    category: "student",
    image: `${IMG}/299348f1-6903-4f41-a901-1aedc3f6252e-webp.webp`,
    video: "https://www.youtube.com/watch?v=162y-1V7iXw",
  },
  {
    title: "EPIC The Irish Emigration Museum",
    description: "A fully interactive museum dedicated to Ireland's diaspora and emigration history.",
    price: "€19",
    category: "student",
    image: `${IMG}/bfee57ff-ad08-436c-965b-6d2e20f3e8c9-webp.webp`,
    video: "https://www.youtube.com/watch?v=xYEfXT62CDs",
  },
  {
    title: "Dublin Zoo",
    description: "Home to a wide variety of animals in beautifully landscaped habitats.",
    price: "€17.50",
    category: "student",
    image: `${IMG}/033efbe9-7082-4957-9e1f-bf163c37dd4c-webp.webp`,
    video: "https://www.youtube.com/watch?v=XHHSiM1BuHY&t=5s",
  },
  {
    title: "Dublinia",
    description: "An interactive museum showcasing Viking and medieval Dublin history.",
    price: "€14.50",
    category: "student",
    image: `${IMG}/fd0f0a43-2f13-4641-8d0a-95790c8ec53b-webp.webp`,
    video: "https://www.youtube.com/watch?v=x3b_snc6Hng",
  },
  {
    title: "Kilmainham Gaol Museum",
    description: "A former prison turned museum with rich Irish historical significance.",
    price: "€4",
    category: "student",
    image: `${IMG}/12b1c2aa-c481-4777-a5f4-59ad172dfee4-webp.webp`,
    video: "https://www.youtube.com/watch?v=LgdzXpbQNDc&t=1s",
  },
  {
    title: "Butlers Chocolate Experience",
    description: "A sweet behind-the-scenes look at chocolate making with tastings.",
    price: "€18",
    category: "student",
    image: `${IMG}/bb84006f-b1cd-4751-9dc1-d965f4dc9f75-webp.webp`,
    video:
      "https://www.facebook.com/liliforberg/videos/a-very-chocolatey-day-out-factory-tour-at-butlerschocolate-santa-decorating-and-/1562061074816720/",
  },
  {
    title: "Malahide Castle & Gardens",
    description: "Visit a medieval castle with guided tours and expansive gardens.",
    price: "€12.50",
    category: "student",
    image: `${IMG}/9b0b035f-e8a7-43b9-b158-3e974d699dfa-webp.webp`,
    video: "https://www.youtube.com/watch?v=j0RctU6nGB8",
  },
  {
    title: "Airfield Estate",
    description: "Enjoy a farm-to-fork experience and explore gardens, animals, and more.",
    price: "€10",
    category: "student",
    image: `${IMG}/025e0f6f-00a2-4382-9291-584e6f40d9ad-webp.webp`,
    video: "https://www.youtube.com/watch?v=JmPuChkx078",
  },
  {
    title: "Croke Park Stadium Tour & GAA Museum",
    description: "Explore Ireland's national sports stadium and GAA museum.",
    price: "€14.50",
    category: "student",
    image: `${IMG}/fd48c243-1383-489c-98fd-ce3d7c983930-webp.webp`,
    video: "https://www.youtube.com/watch?v=8x7pQF_vUHs&t=9s",
  },
  {
    title: "Glasnevin Cemetery Museum",
    description: "Learn about Irish history through stories of famous individuals buried here.",
    price: "€17",
    category: "student",
    image: `${IMG}/4a41b343-889b-4895-b597-e8c59666a1b1-webp.webp`,
    video: "https://www.youtube.com/watch?v=avQEX-UeYZM&t=23s",
  },
  {
    title: "National Leprechaun Museum",
    description: "A fun and interactive journey into Irish mythology and folklore.",
    price: "€16",
    category: "student",
    image: `${IMG}/aefd9ee9-1efc-4a46-8251-2a563665aef5-webp.webp`,
    video: "https://www.youtube.com/shorts/41rx7bPQbkk",
  },
  {
    title: "Imaginosity - Dublin Children's Museum",
    description: "A creative and educational experience designed for younger visitors.",
    price: "€8",
    category: "student",
    image: `${IMG}/504d8e74-4440-4b09-85c6-f4487ce80c28-webp.webp`,
    video: "https://www.youtube.com/watch?v=KvRHESWk3RY",
  },
  {
    title: "Jeanie Johnston Tall Ship & Famine Museum",
    description: "Step aboard this replica famine ship and learn about Irish emigration history.",
    price: "€13",
    category: "student",
    image: `${IMG}/4ca77d14-8c6d-4934-bfe2-a5d69618e3c0-webp.webp`,
    video: "https://www.youtube.com/watch?v=XdaZ5gyKe0Y",
  },
  {
    title: "The Irish Rock 'n Roll Museum Experience",
    description: "Discover Dublin's vibrant music history through memorabilia and guided tours.",
    price: "€19",
    category: "student",
    image: `${IMG}/08b77902-910a-4f6f-a658-a5691db39933-webp.webp`,
    video: "https://www.youtube.com/watch?v=McyIee5bqb0",
  },
  {
    title: "Marinelife Aquarium Bray",
    description: "Explore fascinating marine life at this family-friendly aquarium near Dublin.",
    price: "€14",
    category: "student",
    image: `${IMG}/3d6dd569-9740-4e2b-93c5-4a87abd0371c-webp.webp`,
    video: "https://www.youtube.com/watch?v=E0p8X8qxz94&t=11s",
  },
  {
    title: "Zipit Forest Adventures",
    description: "An outdoor adventure park with zip lines and climbing challenges.",
    price: "€25",
    category: "student",
    image: `${IMG}/c106ef13-af7e-4688-be24-4ba1898c2120-webp.webp`,
    video: "https://www.youtube.com/watch?v=8tnTjb5kbdw",
  },
  {
    title: 'Hop-On, Hop-Off Bus Tour "Big Bus"',
    description: "24-hour ticket for a hop-on, hop-off bus tour. Passengers can hop on and off at any stop.",
    price: "€35",
    category: "student",
    image: `${IMG}/11f55393-ffd0-4006-8eba-e3067d1c13ca-webp.webp`,
  },
  {
    title: "St. Patrick's Cathedral Self-Guided Visit",
    description: "Self-guided visit of Ireland's largest Cathedral. Tickets include an audio guide.",
    price: "€10",
    category: "student",
    image: `${IMG}/30b13142-1e63-4864-9f90-92077f18d672-webp.webp`,
    video: "https://www.youtube.com/watch?v=noeiVmBExZk",
  },
  {
    title: "GPO Museum Self-Guided Visit",
    description: "Known historically for being the headquarters of the 1916 Easter Rising.",
    price: "€13",
    category: "student",
    image: `${IMG}/be6e428e-4529-4d09-a609-5303cd8f6f9e-webp.webp`,
    video: "https://www.youtube.com/watch?v=yYJkDt9FNBY",
  },
  {
    title: "Glendalough Monastic Site and Visitor Centre",
    description: "One of the most famous religious centres in Europe.",
    price: "€3",
    category: "student",
    image: `${IMG}/5fadedbc-176a-4034-8088-ad15aaef7cd9-webp.webp`,
    video: "https://www.youtube.com/watch?v=lM7BjbG6Hpc",
  },
  {
    title: "Titanic Museum",
    description: "Experience the true legend of RMS Titanic, in the city where it all began.",
    price: "From £19.95",
    category: "student",
    image: `${IMG}/9a191e1e-46a3-431d-af55-c19ad0633618-webp.webp`,
    video: "https://www.youtube.com/watch?v=NGBVdrHV7S0&t=6s",
  },
  {
    title: "Game of Thrones Studio",
    description: "Based at the original filming studios in Banbridge, Northern Ireland.",
    price: "From £16",
    category: "student",
    image: `${IMG}/cb41eb2d-2acf-4ade-8435-dbb5be4d8440-webp.webp`,
    video: "https://www.youtube.com/shorts/meT_q_CoBOY",
  },
  {
    title: "James Joyce Centre",
    description: "It covers the life and work of James Joyce.",
    price: "€5",
    category: "student",
    image: `${IMG}/a6f6fbf4-5549-400a-9d20-1a4333c8fc7c-webp.webp`,
  },
  {
    title: "St Canice's Cathedral",
    description: "St Canice's is the mother church of a bishopric which includes six dioceses and eight counties.",
    price: "€6.50",
    category: "student",
    image: `${IMG}/921a1bd0-f333-4af1-bef5-8da1d093935c-webp.webp`,
    video: "https://www.youtube.com/watch?v=jPI4xVxugx0",
  },
  {
    title: "Blarney Castle and Gardens",
    description:
      "Over the last few hundred years, millions have flocked to Blarney making it a world landmark and one of Ireland's greatest treasures.",
    price: "€19",
    category: "student",
    image: `${IMG}/8b56a914-a9a1-41ae-b683-c647da2a813a-webp.webp`,
    video: "https://www.youtube.com/watch?v=zBkgghXGyLY",
  },
  {
    title: "Beyond the Trees Avondale Experience",
    description:
      "Uncover the story of Avondale House, where Irish forestry began and where one of Ireland's greatest statesmen, Charles Stewart Parnell, was born.",
    price: "€16",
    category: "student",
    image: `${IMG}/a7f9d29c-d22e-4462-83c4-09b779d37765-webp.webp`,
    video: "https://www.youtube.com/watch?v=_2gy4CSHo7o",
  },
  {
    title: "Trinity College Library & Book of Kells",
    description: "Visit the iconic Long Room Library and see the illuminated Book of Kells.",
    price: "€21",
    category: "student",
    image: `${IMG}/4cb2d81e-7168-409a-a312-f0fd20a51afa-webp.webp`,
    video: "https://www.youtube.com/watch?v=sspJeCNXfyA&t=3s",
  },
  {
    title: "Bunratty Castle and Folk Walk",
    description:
      "Wander through the Great Hall, admire the extraordinary collection of period furniture and artefacts, and enjoy breathtaking views from the battlements.",
    price: "€13",
    category: "student",
    image: `${IMG}/828c558f-ca76-4278-b898-4d24a60448cd-webp.webp`,
    video: "https://www.youtube.com/watch?v=Wkkx60TyCM0&t=130s",
  },
  {
    title: "Guinness Storehouse",
    description:
      "Enjoy a self-guided tour through seven immersive floors and finish with a Guinness or Guinness 0.0 at the Gravity bar.",
    price: "€16.50",
    category: "student",
    image: `${IMG}/d49bb5e8-f9b8-4ef6-83b4-9f90e1414d67-webp.webp`,
    video: "https://www.youtube.com/watch?v=8-g2e4tqy9g",
  },
  {
    title: "Jameson Distillery Bow St.",
    description:
      "This award-winning guided tour will bring to life our story from our 18th-century beginnings through to present day, finishing with a whiskey tasting of three Jameson Whiskeys.",
    price: "€23",
    category: "student",
    image: `${IMG}/828c558f-ca76-4278-b898-4d24a60448cd-webp.webp`,
    video: "https://www.youtube.com/watch?v=80halGlsho4",
  },
  {
    title: "Cobh Heritage Centre (Self-Guided)",
    description:
      "Discover the powerful stories that shaped Ireland's maritime legacy, from inspiring tales of emigration to the iconic journeys of the Titanic and Lusitania.",
    price: "€13",
    category: "student",
    image: `${IMG}/06ae2aa1-9816-4131-a116-e77d66a3b45e-webp.webp`,
    video:
      "https://www.facebook.com/cobhheritagecentre/videos/cobh-cobh-the-queenstown-story-at-cobh-heritage-centre-walk-in-the-footsteps-of-/313492481571545/",
  },
  {
    title: "Crumlin Road Gaol (Self-Guided)",
    description:
      "This iconic landmark is Northern Ireland's only surviving Victorian-era prison and one of the most popular things to do in Belfast.",
    price: "From £15.50",
    category: "student",
    image: `${IMG}/80795981-ee2f-41ed-9620-3f9efcaec116-webp.webp`,
    video:
      "https://www.facebook.com/CrumlinRoadGaol/videos/must-do-in-belfast-this-autumn-add-crumlin-road-gaol-to-your-autumn-bucket-list/1517557266366557/",
  },
  {
    title: "Celtic Nights",
    description:
      "Experience award-winning Irish dancing and the best of traditional live music, now in its 30th season, with a superb 3-course à la carte meal.",
    price: "€65",
    category: "student",
    image: `${IMG}/a61490c2-a098-4596-a2cd-4ccf928cab85-webp.webp`,
    video:
      "https://www.facebook.com/CelticNightsDublinIE/videos/celtic-nights-is-a-must-do-when-visting-dublin-enjoy-a-delicious-three-course-di/1172290387211665/",
  },
  {
    title: "W5 Belfast",
    description:
      "An interactive science and discovery centre with over 250 world-class exhibits, 8 interactive zones, and daily science shows.",
    price: "From £14",
    category: "student",
    image: `${IMG}/4eaadde2-5b55-47c4-8218-945ba2a13efa-webp.webp`,
    video: "https://www.youtube.com/watch?v=7JD_Sd4xN4U&t=33s",
  },
  {
    title: "Mind of a Serial Killer: The Experience",
    description:
      "Uncover the chilling truths behind the world's most infamous serial killers and the investigations that brought them to justice.",
    price: "From €14.95",
    category: "student",
    image: `${IMG}/93ed8094-87ad-4a91-9289-c5ecf337d696-webp.webp`,
  },
  {
    title: "World of Illusion",
    description:
      "Discover more than 70 illusions and interactive exhibits that will challenge your perception, featuring a gravity-defying room, infinity mirrors, and a vortex tunnel.",
    price: "From €18.70",
    category: "student",
    image: `${IMG}/6386635b-7e9b-4b50-b003-a10608bf8be1-webp.webp`,
    video: "https://www.youtube.com/watch?v=1FXyGnKUVo8&t=1s",
  },
  {
    title: "Sandbox VR",
    description:
      "A futuristic VR experience for groups of up to 6, where you can see and physically interact with everyone inside, just like the real world.",
    price: "From €30",
    category: "student",
    image: `${IMG}/920a8c3e-cb9f-460e-8e97-2e3156da7128-webp.webp`,
    video:
      "https://www.facebook.com/sandboxvrukireland/videos/-dublin-are-you-ready-the-wait-is-over-sandbox-vr-dublin-is-now-open-step-into-t/1311217716842195/",
  },
  {
    title: "Explorium",
    description:
      "Ireland's National Science and Sports Centre in Sandyford, Dublin, offering a massive 110,000 sq ft hands-on experience with over 250+ exhibits.",
    price: "From €15",
    category: "student",
    image: `${IMG}/70adb0d1-72c8-4ada-a173-1c303f77fb7a-webp.webp`,
    video: "https://www.youtube.com/shorts/yqdCUIGZ_Ms",
  },
  {
    title: "City Kayaking",
    description:
      "Paddle under the famous O'Connell and Ha'penny bridges! A fantastic way to see Dublin's most famous landmark sites from a unique angle.",
    price: "€49",
    category: "student",
    image: `${IMG}/447795b3-6652-4ae0-822f-91258ca422e1-webp.webp`,
    video: "https://www.tiktok.com/@dublintown_/video/7530987783742164246",
  },
  {
    title: "Bray Bowl",
    description:
      "A wide choice of activities to suit all ages, including video arcades, tenpin bowling, laser tag, pool, snooker and American pool.",
    price: "From €10",
    category: "student",
    image: `${IMG}/e6a5412c-708a-43bf-b059-c1c527078756-webp.webp`,
    video:
      "https://www.facebook.com/braybowlentertainment/videos/have-you-ever-tried-this-one-bowling-braybowl-wicklow/1446277350321069/",
  },

  // Day trips
  {
    title: "Cliffs of Moher Tour from Dublin",
    description:
      "Your journey on this Cliffs of Moher tour will take you from the banks of Dublin's river Liffey to Ireland's Wild Atlantic Way.",
    price: "€69",
    category: "daytrip",
    image: `${IMG}/0e4bae18-5c6d-4558-997b-630a1da17940-webp.webp`,
    video: "https://www.youtube.com/watch?v=X3qStI_zpTg",
  },
  {
    title: "Giant's Causeway Tour from Dublin",
    description:
      "UNESCO World Heritage Site featuring over 40,000 interlocking basalt columns formed by volcanic activity 60 million years ago.",
    price: "€74",
    category: "daytrip",
    image: `${IMG}/d0f05981-6240-43b2-a711-ebd717c053ee-webp.webp`,
    video: "https://www.youtube.com/watch?v=qw6mJ9RUI6k",
  },
  {
    title: "Dingle Tour from Cork",
    description:
      "The Dingle Peninsula has amazing mountain scenery and unusual antiquities to see as you travel around this spectacular peninsula.",
    price: "€55",
    category: "daytrip",
    image: `${IMG}/f41574b8-8df3-4e72-8695-2447743e4484-webp.webp`,
    video: "https://www.youtube.com/watch?v=_1uCIuWyaho&t=64s",
  },
  {
    title: "Kerry Tour from Dublin",
    description:
      "The Kerry Day Tour from Dublin explores the mystical and unspoiled region of Ireland that has attracted visitors for hundreds of years.",
    price: "€79",
    category: "daytrip",
    image: `${IMG}/2c99d794-155c-4821-81a4-29e21127ad2b-webp.webp`,
    video: "https://www.youtube.com/shorts/LQc-KIPLjcE",
  },
  {
    title: "Full-Day Tour to Glendalough & Wicklow",
    description: "A scenic day trip exploring the Irish countryside and monastic ruins.",
    price: "€40",
    category: "daytrip",
    image: `${IMG}/1f10b263-75ea-40cd-be0f-117c0f531f8b-webp.webp`,
    video: "https://www.youtube.com/shorts/KTFPALEkbP4",
  },
  {
    title: "Connemara and Galway Tour from Dublin",
    description:
      "With fabulous lakes, romantic castles, stone walls, and deserted valleys, Connemara features in blockbuster movies like The Quiet Man and The Guard.",
    price: "€69",
    category: "daytrip",
    image: `${IMG}/c6b032d0-6256-42a2-9594-f9d21c6d78ef-webp.webp`,
    video: "https://www.youtube.com/watch?v=gGJ9VXrIztw&t=9s",
  },
  {
    title: "Belfast and Titanic Tour from Dublin",
    description:
      "A full-day trip to Belfast with skip-the-line entry to the Titanic Belfast exhibition, plus a stop at the ancient Celtic crosses of Monasterboice.",
    price: "€69",
    category: "daytrip",
    image:
      "https://s3-eu-west-1.amazonaws.com/paddywagontours.images/belfast-including-titanic-experience-tour-from-dublin-copyright-paddywagon-tours_16042025095616_xl.jpg",
    video: "https://www.youtube.com/watch?v=eL7LUhKs6ys",
  },
];

export const activities: Activity[] = raw.map((a) => ({ ...a, slug: slugify(a.title) }));

export const CATEGORY_LABELS: Record<ActivityCategory, string> = {
  free: "Free to Visit",
  student: "Paid Attractions",
  daytrip: "Day Trips",
};
