import { activities, type Activity } from "./activities";

const translations: Record<string, { title: string; description: string }> = {
  "chester-beatty-library": {
    title: "Chester Beatty Library",
    description: "Entdecken Sie seltene Manuskripte, Drucke und Artefakte aus aller Welt.",
  },
  "phoenix-park": {
    title: "Phoenix Park",
    description: "Einer der größten Stadtparks Europas mit malerischen Ausblicken und Rotwild-Beobachtung.",
  },
  "national-museum-of-ireland-decorative-arts": {
    title: "Irisches Nationalmuseum – Kunstgewerbe",
    description: "Beherbergt Irlands größte Sammlung zur Militärgeschichte und wechselnde Ausstellungen.",
  },
  "national-museum-of-ireland-archeology": {
    title: "Irisches Nationalmuseum – Archäologie",
    description: "Zeigt antike Artefakte, darunter Schätze aus der irischen Geschichte.",
  },
  "national-museum-of-ireland-natural-history": {
    title: "Irisches Nationalmuseum – Naturkunde",
    description: "Bekannt als das „Tote Museum\", zeigt konservierte Tierpräparate.",
  },
  "national-botanic-gardens": {
    title: "Nationaler Botanischer Garten",
    description: "Entdecken Sie beeindruckende Pflanzensammlungen in ruhiger Umgebung.",
  },
  "irish-national-war-memorial-gardens": {
    title: "Irischer Nationaler Kriegsgedenkgarten",
    description: "Ein friedlicher Garten zu Ehren irischer Soldaten des Ersten Weltkriegs.",
  },
  "national-gallery-of-ireland": {
    title: "Irische Nationalgalerie",
    description: "Eine beeindruckende Sammlung europäischer und irischer Kunst.",
  },
  "howth-cliff-walk": {
    title: "Howth Klippenwanderung",
    description: "Ein malerischer Wanderweg mit atemberaubendem Blick auf die Bucht von Dublin.",
  },
  "hugh-lane-gallery": {
    title: "Hugh Lane Galerie",
    description: "Eine der aufregendsten Sammlungen irischer und internationaler Kunst in Irland.",
  },
  "bray-seafront": {
    title: "Bray Strandpromenade",
    description:
      "Historische viktorianische Promenade mit einem eine Meile langen Küstenweg und herrlichem Blick auf Bray Head und die Irische See.",
  },
  "ulster-museum": {
    title: "Ulster Museum",
    description: "Das Ulster Museum wurde 1821 als Belfast Natural History Society gegründet.",
  },
  "galway-city-museum": {
    title: "Galway Stadtmuseum",
    description: "Ein Ort für kulturelle Erbstücke zur Geschichte und zum Erbe von Galway.",
  },
  "galway-cathedral": {
    title: "Kathedrale von Galway",
    description: "Ein Beispiel für Renaissance-Revival-Architektur mit romanischen und gotischen Einflüssen.",
  },
  "irish-museum-of-modern-art": {
    title: "Irisches Museum für Moderne Kunst",
    description:
      "Ein dynamisches Museum für moderne Kunst auf einem 19 Hektar großen Gelände im Herzen von Dublin 8.",
  },
  "dublin-castle": {
    title: "Dublin Castle",
    description: "Eine historische Stätte mit Führungen durch die Staatsgemächer und mittelalterliche Gewölbe.",
  },
  "viking-splash-tour": {
    title: "Viking Splash Tour",
    description: "Eine unterhaltsame, interaktive Amphibienfahrzeug-Tour durch die Wahrzeichen Dublins.",
  },
  "national-wax-museum-plus": {
    title: "National Wax Museum Plus",
    description: "Zeigt Wachsfiguren berühmter irischer und internationaler Persönlichkeiten.",
  },
  "epic-the-irish-emigration-museum": {
    title: "EPIC – Das irische Auswanderungsmuseum",
    description: "Ein vollständig interaktives Museum, das der irischen Diaspora und Auswanderungsgeschichte gewidmet ist.",
  },
  "dublin-zoo": {
    title: "Dublin Zoo",
    description: "Beheimatet eine große Vielfalt an Tieren in wunderschön gestalteten Lebensräumen.",
  },
  dublinia: {
    title: "Dublinia",
    description: "Ein interaktives Museum, das die Wikinger- und mittelalterliche Geschichte Dublins zeigt.",
  },
  "kilmainham-gaol-museum": {
    title: "Kilmainham Gaol Museum",
    description: "Ein ehemaliges Gefängnis mit großer Bedeutung für die irische Geschichte, heute ein Museum.",
  },
  "butlers-chocolate-experience": {
    title: "Butlers Chocolate Experience",
    description: "Ein süßer Blick hinter die Kulissen der Schokoladenherstellung inklusive Verkostung.",
  },
  "malahide-castle-gardens": {
    title: "Malahide Castle & Gardens",
    description: "Besuchen Sie eine mittelalterliche Burg mit Führungen und weitläufigen Gärten.",
  },
  "airfield-estate": {
    title: "Airfield Estate",
    description: "Erleben Sie „Vom Hof auf den Tisch\" und entdecken Sie Gärten, Tiere und mehr.",
  },
  "croke-park-stadium-tour-gaa-museum": {
    title: "Croke Park Stadiontour & GAA-Museum",
    description: "Entdecken Sie Irlands Nationalstadion und das GAA-Museum.",
  },
  "glasnevin-cemetery-museum": {
    title: "Glasnevin Friedhofsmuseum",
    description: "Erfahren Sie mehr über die irische Geschichte anhand der Geschichten hier begrabener bekannter Persönlichkeiten.",
  },
  "national-leprechaun-museum": {
    title: "National Leprechaun Museum",
    description: "Eine unterhaltsame, interaktive Reise in die irische Mythologie und Folklore.",
  },
  "imaginosity-dublin-children-s-museum": {
    title: "Imaginosity – Dublins Kindermuseum",
    description: "Ein kreatives und lehrreiches Erlebnis für junge Besucherinnen und Besucher.",
  },
  "jeanie-johnston-tall-ship-famine-museum": {
    title: "Jeanie Johnston Großsegler & Hungersnot-Museum",
    description:
      "Betreten Sie die Nachbildung dieses Hungersnot-Schiffs und erfahren Sie mehr über die irische Auswanderungsgeschichte.",
  },
  "the-irish-rock-n-roll-museum-experience": {
    title: "The Irish Rock 'n Roll Museum Experience",
    description: "Entdecken Sie Dublins lebendige Musikgeschichte anhand von Erinnerungsstücken und Führungen.",
  },
  "marinelife-aquarium-bray": {
    title: "Marinelife Aquarium Bray",
    description: "Entdecken Sie in diesem familienfreundlichen Aquarium in der Nähe von Dublin faszinierende Meereslebewesen.",
  },
  "zipit-forest-adventures": {
    title: "Zipit Forest Adventures",
    description: "Ein Outdoor-Abenteuerpark mit Seilrutschen und Kletterparcours.",
  },
  "hop-on-hop-off-bus-tour-big-bus": {
    title: "Hop-On-Hop-Off-Bustour „Big Bus\"",
    description: "24-Stunden-Ticket für eine Hop-On-Hop-Off-Bustour. Fahrgäste können an jeder Haltestelle ein- und aussteigen.",
  },
  "st-patrick-s-cathedral-self-guided-visit": {
    title: "St. Patrick's Cathedral – Individueller Besuch",
    description: "Individueller Besuch von Irlands größter Kathedrale. Der Audioguide ist im Ticket enthalten.",
  },
  "gpo-museum-self-guided-visit": {
    title: "GPO Museum – Individueller Besuch",
    description: "Historisch bekannt als Hauptquartier des Osteraufstands von 1916.",
  },
  "glendalough-monastic-site-and-visitor-centre": {
    title: "Klosteranlage Glendalough & Besucherzentrum",
    description: "Eines der berühmtesten religiösen Zentren Europas.",
  },
  "titanic-museum": {
    title: "Titanic Museum",
    description: "Erleben Sie die wahre Legende der RMS Titanic in der Stadt, in der alles begann.",
  },
  "game-of-thrones-studio": {
    title: "Game of Thrones Studio",
    description: "Befindet sich in den ursprünglichen Filmstudios in Banbridge, Nordirland.",
  },
  "james-joyce-centre": {
    title: "James Joyce Centre",
    description: "Behandelt das Leben und Werk von James Joyce.",
  },
  "st-canice-s-cathedral": {
    title: "St Canice's Cathedral",
    description: "St Canice ist die Mutterkirche eines Bistums, das sechs Diözesen und acht Grafschaften umfasst.",
  },
  "blarney-castle-and-gardens": {
    title: "Blarney Castle and Gardens",
    description:
      "In den letzten Jahrhunderten strömten Millionen Menschen nach Blarney – heute eines der größten Wahrzeichen Irlands.",
  },
  "beyond-the-trees-avondale-experience": {
    title: "Beyond the Trees Avondale Experience",
    description:
      "Entdecken Sie die Geschichte von Avondale House, wo die irische Forstwirtschaft begann und einer der bedeutendsten irischen Staatsmänner, Charles Stewart Parnell, geboren wurde.",
  },
  "trinity-college-library-book-of-kells": {
    title: "Trinity College Bibliothek & Book of Kells",
    description: "Besuchen Sie die legendäre Long Room Library und sehen Sie das beleuchtete Book of Kells.",
  },
  "bunratty-castle-and-folk-walk": {
    title: "Bunratty Castle & Folk Park",
    description:
      "Schlendern Sie durch die Große Halle, bestaunen Sie die außergewöhnliche Sammlung historischer Möbel und Artefakte und genießen Sie den atemberaubenden Blick von den Zinnen.",
  },
  "guinness-storehouse": {
    title: "Guinness Storehouse",
    description:
      "Machen Sie eine individuelle Tour durch sieben eindrucksvolle Stockwerke und lassen Sie den Besuch mit einem Guinness oder alkoholfreien Guinness 0.0 in der Gravity Bar ausklingen.",
  },
  "jameson-distillery-bow-st": {
    title: "Jameson Distillery Bow St.",
    description:
      "Diese preisgekrönte Führung lässt unsere Geschichte von den Anfängen im 18. Jahrhundert bis heute lebendig werden und endet mit einer Verkostung von drei Jameson-Whiskeys.",
  },
  "cobh-heritage-centre-self-guided": {
    title: "Cobh Heritage Centre (individueller Besuch)",
    description:
      "Entdecken Sie die bewegenden Geschichten, die Irlands maritimes Erbe geprägt haben – von Auswanderungsschicksalen bis zu den legendären Fahrten der Titanic und der Lusitania.",
  },
  "crumlin-road-gaol-self-guided": {
    title: "Crumlin Road Gaol (individueller Besuch)",
    description:
      "Dieses ikonische Gebäude ist Nordirlands einziges erhaltenes viktorianisches Gefängnis und eine der beliebtesten Attraktionen in Belfast.",
  },
  "celtic-nights": {
    title: "Celtic Nights",
    description:
      "Erleben Sie preisgekrönten irischen Tanz und beste traditionelle Livemusik in der 30. Saison, begleitet von einem hervorragenden 3-Gänge-à-la-carte-Menü.",
  },
  "w5-belfast": {
    title: "W5 Belfast",
    description:
      "Ein interaktives Wissenschafts- und Entdeckungszentrum mit über 250 erstklassigen Exponaten, 8 interaktiven Bereichen und täglichen Wissenschaftsshows.",
  },
  "mind-of-a-serial-killer-the-experience": {
    title: "Mind of a Serial Killer: The Experience",
    description:
      "Erfahren Sie die erschreckenden Wahrheiten über die berüchtigtsten Serienmörder der Welt und die Ermittlungen, die sie zur Rechenschaft zogen.",
  },
  "world-of-illusion": {
    title: "World of Illusion",
    description:
      "Entdecken Sie mehr als 70 Illusionen und interaktive Exponate, die Ihre Wahrnehmung herausfordern – darunter ein schwerelos wirkender Raum, Unendlichkeitsspiegel und ein Strudeltunnel.",
  },
  "sandbox-vr": {
    title: "Sandbox VR",
    description:
      "Ein futuristisches VR-Erlebnis für Gruppen von bis zu 6 Personen, bei dem Sie alle anderen im Raum sehen und wie in der echten Welt physisch mit ihnen interagieren können.",
  },
  explorium: {
    title: "Explorium",
    description:
      "Irlands Nationales Wissenschafts- und Sportzentrum in Sandyford, Dublin, bietet auf rund 10.000 Quadratmetern ein interaktives Erlebnis zum Anfassen mit über 250 Exponaten.",
  },
  "city-kayaking": {
    title: "City Kayaking",
    description:
      "Die einzige Möglichkeit, tatsächlich unter der berühmten O'Connell- und Ha'penny-Brücke hindurchzupaddeln! Eine großartige Art, Dublins bekannteste Wahrzeichen aus einer einzigartigen Perspektive zu sehen.",
  },
  "bray-bowl": {
    title: "Bray Bowl",
    description:
      "Eine große Auswahl an Aktivitäten für jedes Alter, darunter Videospielhallen, Bowling, Laser Tag, Poolbillard, Snooker und amerikanisches Billard.",
  },
  "cliffs-of-moher-tour-from-dublin": {
    title: "Cliffs of Moher Tour ab Dublin",
    description:
      "Diese Tour zu den Cliffs of Moher führt Sie von den Ufern des Dubliner Flusses Liffey bis zu Irlands Wild Atlantic Way.",
  },
  "giant-s-causeway-tour-from-dublin": {
    title: "Giant's Causeway Tour ab Dublin",
    description:
      "UNESCO-Weltkulturerbe mit über 40.000 ineinandergreifenden Basaltsäulen, die vor 60 Millionen Jahren durch vulkanische Aktivität entstanden.",
  },
  "dingle-tour-from-cork": {
    title: "Dingle Tour ab Cork",
    description:
      "Die Halbinsel Dingle besticht durch atemberaubende Berglandschaften und ungewöhnliche antike Stätten, die Sie bei der Erkundung dieser spektakulären Halbinsel entdecken können.",
  },
  "kerry-tour-from-dublin": {
    title: "Kerry Tour ab Dublin",
    description:
      "Die Kerry-Tagestour ab Dublin führt durch die mystische, unberührte Region Irlands, die seit Jahrhunderten Besucher anzieht.",
  },
  "full-day-tour-to-glendalough-wicklow": {
    title: "Ganztagestour nach Glendalough & Wicklow",
    description: "Ein landschaftlich reizvoller Tagesausflug durch die irische Landschaft und zu Klosterruinen.",
  },
  "connemara-and-galway-tour-from-dublin": {
    title: "Connemara- und Galway-Tour ab Dublin",
    description:
      "Mit seinen herrlichen Seen, romantischen Burgen, Steinmauern und einsamen Tälern ist Connemara Schauplatz vieler Blockbuster-Filme, etwa „The Quiet Man\" mit John Wayne und Maureen O'Hara sowie „The Guard\" mit Brendan Gleeson.",
  },
};

export const activitiesDe: Activity[] = activities.map((a) => {
  const t = translations[a.slug];
  return t ? { ...a, title: t.title, description: t.description } : a;
});
