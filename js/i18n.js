// =============================================
// DÉJÀ VU SWITZERLAND — Système multilingue
// Langues : Français (fr) | English (en) | Deutsch (de)
// =============================================

const DejuVuI18n = (function () {

  const translations = {

    // ==================== FRANÇAIS ====================
    fr: {
      // Navigation
      "nav.accueil":      "Accueil",
      "nav.equipe":       "Équipe",
      "nav.services":     "Services",
      "nav.tete":         "Tête-à-tête",
      "nav.association":  "Association",
      "nav.contact":      "Contact",

      // Footer
      "footer.tagline":             "Votre partenaire d'excellence",
      "footer.description":         "Leader suisse en immobilier de prestige, conciergerie privée et collection d'art depuis 2010",
      "footer.about":               "À PROPOS",
      "footer.affiliates":          "NOS FILIALES",
      "footer.services_col":        "SERVICES",
      "footer.contact_col":         "CONTACT",
      "footer.newsletter_col":      "NEWSLETTER",
      "footer.excellence":          "Excellence",
      "footer.trust":               "Confiance",
      "footer.about_us":            "Qui sommes-nous?",
      "footer.our_team":            "Notre équipe",
      "footer.our_vision":          "Notre vision",
      "footer.news":                "News et Blog",
      "footer.careers":             "Carrières",
      "footer.immo":                "Immobilier de prestige",
      "footer.concierge":           "Conciergerie privée",
      "footer.art":                 "Art & Montres",
      "footer.newsletter_desc":     "Restez informé de nos actualités et offres exclusives",
      "footer.newsletter_placeholder": "Votre email",
      "footer.hours":               "HORAIRES",
      "footer.day_weekdays":        "Lun - Ven",
      "footer.day_sat":             "Sam",
      "footer.day_sun":             "Dim",
      "footer.time_sat":            "Sur rendez-vous",
      "footer.time_sun":            "Fermé",
      "footer.rights":              "Tous droits réservés.",
      "footer.legal":               "Mentions Légales",
      "footer.privacy":             "Confidentialité",
      "footer.cgu":                 "CGU",

      // === PAGE INDEX ===
      "index.hero1": "<strong>Votre groupe d'experts</strong> et de <strong>partenaires actifs</strong> dans l'immobilier,",
      "index.hero2": "la vente d'objets rares, et dans le service de conciergerie sur mesure.",
      "index.hero3": "Notre approche visionnaire, engagée et responsable est garante de votre succès!",

      "index.card_home_title":      "Découvrez notre<br>performance dans<br>l'immobilier",
      "index.card_home_desc":       "Nous vous offrons nos services d'experts dans l'immobilier de prestige, la recherche de biens exclusifs et l'assistance pour tous vos besoins immobiliers.",
      "index.card_home_btn":        "HOME",
      "index.card_services_title":  "Faites appel à des services de<br>conciergerie sur mesure",
      "index.card_services_desc":   "Services de conciergerie privée d'exception pour tous vos besoins : voyages, événements, gastronomie, famille et bien plus.",
      "index.card_services_btn":    "SERVICES",
      "index.card_collection_title":"Découvrez nos<br>magnifiques<br>objets d'art",
      "index.card_collection_desc": "Découvrez notre sélection d'objets rares, de montres de prestige et d'œuvres d'art soigneusement sélectionnées pour les collectionneurs avertis.",
      "index.card_collection_btn":  "COLLECTION",

      "index.about_enterprise": "ENTREPRISE",
      "index.about_p1": "Déjà Vu Switzerland est un groupe d'experts actifs dans l'immobilier, le service de conciergerie et la recherche d'objets rares. Nous prenons en charge toutes vos demandes, de la recherche d'une école pour vos enfants à l'organisation de votre voyage d'affaires en jet privé.",
      "index.about_p2": "Malika C. David et son équipe s'adaptent à tous les univers et cultures, vous faisant bénéficier d'ouvertures extraordinaires. Confidentialité, excellence et sensibilité sont nos valeurs cardinales.",
      "index.env_title": "L'ENVIRONNEMENT À COEUR",
      "index.env_p":    "Déjà Vu Switzerland s'engage à préserver la planète selon la norme ISO 14 001. Nos actions :",
      "index.env_li1":  "Utilisation rationnelle des ressources et préservation de la nature",
      "index.env_li2":  "Réduction de l'empreinte carbone et gestion responsable des déchets",
      "index.env_li3":  "Transparence et amélioration continue de notre performance environnementale",

      "index.tete_title":   "TÊTE-À-TÊTE",
      "index.tete_desc":    "Découvrez sur cette page tous nos tête-à-tête. Nous interviewons pour vous, des personnalités publiques de la Suisse. Retrouvez les extraits de l'interview de Petar Mitrovic sur notre",
      "index.tete_ig_link": "compte Instagram",

      "index.jerome_role": "Sommelier et Maître d'Hôtel",
      "index.jerome_p1":   "Sommelier et Maître d'Hôtel chez l'Auberge de l'Onde, Jérôme est aussi un poète du chasselas distingué.",
      "index.jerome_p2":   "Depuis son arrivée, il a eu la révélation du vin suisse auquel il a consacré trois livres.",
      "index.jerome_p3":   "Il a été élu Sommelier suisse de l'année par le Gault & Millau en 2015, Commandeur de l'Ordre des Vins vaudois en 2018.",
      "index.jerome_link": "Découvrir l'interview",
      "index.petar_role":  "Photographe Engagé et Humaniste",
      "index.petar_p1":    "Découvrez l'histoire émouvante de Petar Mitrovic, un photographe engagé et humaniste (membre de l'USPP – Union Suisse des Photographes Professionnels).",
      "index.petar_p2":    "La photographie est un outil puissant que Petar utilise pour passer des messages. Ses travaux lui ont valu la distinction en tant que \"Personnalité Suisse-Romande\" en 2020.",
      "index.petar_link":  "Découvrir l'interview",

      "index.cta_title": "Prêt à franchir le pas ?",
      "index.cta_desc":  "Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets",
      "index.cta_btn":   "Nous Contacter",

      // === PAGE ÉQUIPE ===
      "equipe.hero_title":      "Portrait",
      "equipe.hero_lead":       "Malika C. David et son équipe accompagnent une clientèle exigeante en alliant discrétion, réseau international et savoir-faire opérationnel.",
      "equipe.section_title":   "Une équipe d'experts et de passionnés",
      "equipe.p1":  "Au fil des années, Malika C. David s'est entourée d'une équipe d'experts passionnés, actifs dans l'immobilier, le service de conciergerie et la recherche d'objets rares. Notre approche repose sur l'écoute, la réactivité et l'excellence du service.",
      "equipe.p2":  "Nous organisons voyages privés, recherchons biens rares, coordonnons acquisitions artistiques et gérons des prestations sur-mesure pour une clientèle internationale.",
      "equipe.contact_btn":     "Nous contacter",
      "equipe.expertise_title": "Nos domaines d'expertise",
      "equipe.exp1": "Immobilier de prestige",
      "equipe.exp2": "Conciergerie privée & lifestyle",
      "equipe.exp3": "Acquisition et conseil en objets de collection",
      "equipe.exp4": "Organisation événementielle et voyages d'affaires",

      // === PAGE CONTACT ===
      "contact.title":               "Envoyez-nous un message",
      "contact.placeholder_name":    "Nom",
      "contact.placeholder_email":   "Email",
      "contact.placeholder_message": "Message",
      "contact.send":                "Envoyer",
      "contact.address":             "Adresse",
      "contact.phone":               "Téléphone",
      "contact.email":               "Email",

      // === PAGE SERVICES ===
      "services.title": "Nos Services",
      "svc.nav.loisirs":         "Loisirs",
      "svc.nav.evenementiel":    "Événementiel",
      "svc.nav.gastronomie":     "Gastronomie",
      "svc.nav.voyages":         "Voyages",
      "svc.nav.famille":         "Famille",
      "svc.nav.professionnel":   "Professionnel",
      "svc.hero.title":          "Votre <span class=\"hero-highlight\">conciergerie</span> d'exception",
      "svc.hero.subtitle":       "Des services sur mesure pour <span class=\"hero-accent\">sublimer</span> votre quotidien",
      "svc.philosophy.title":    "PHILOSOPHIE",
      "svc.philosophy.intro":    "Nous sommes à votre service pour vous aider dans tous les aspects de votre vie quotidienne. Notre solution de multimédias pour aborder tous vos sujets.",
      "svc.philosophy.block1":   "<strong><a href='../home/home.html'>Déjà Vu Home</a> est à votre service</strong> pour toutes les opérations, tous à l'immobilier, que ce soit <em>acheter</em> ou la <em>vente</em> de bien de prestige, <em>la location</em> d'appartements et de <em>du soutien</em>, maximum et confortables.",
      "svc.philosophy.block2":   "Nous vous offrons également un soutien professionnel pour vos tâches administratives. Toutes ces prestations sont renouvelées avec efficacité et discernement.",
      "svc.love.desc":           "Notre approche personnalisée et notre engagement envers l'excellence font de nous votre partenaire idéal pour tous vos besoins en conciergerie.",
      "svc.services.title":      "NOS SERVICES",
      "svc.discover":            "Découvrir",
      "svc.card.loisirs.title":  "Loisirs",
      "svc.card.loisirs.front":  "Billets, événements, activités privées et expériences sur mesure",
      "svc.card.loisirs.back":   "Nous vous assistons avec plaisir pour des événements de votre vie privée. Notre équipe s'engage à vous proposer des idées d'activités passionnantes et inédites : organisation d'anniversaires, de soirées à thème, de mariages ou de goûters d'enfants. Nous sommes présents si vous souhaitez assister à un événement sportif, artistique, culturel ou de bien-être avec la réservation de vos billets de concerts, festival, formule 1, théâtre ou exposition. Nos carnets d'adresses très bien fournis peuvent satisfaire toutes vos envies.",
      "svc.card.events.title":   "Événementiel",
      "svc.card.events.front":   "Organisation d'événements privés et professionnels sur mesure",
      "svc.card.events.back":    "Déjà Vu Services propose son assistance à toute personnalité publique désireuse d'organiser un événement (festif, conférence, réunion de travail,…). Nous proposons aux artistes des lieux d'exposition, avec système d'accrochage de tableaux professionnels et organisation de vernissages (avec promotion, présentation, catering). Pour que chacun de vos événements soient un succès, nous nous chargeons de vous accompagner dans chaque étape. Privés ou publics, l'événementiel n'a pas de secret pour nous.",
      "svc.card.gastro.title":   "Gastronomie",
      "svc.card.gastro.front":   "Réservations dans les meilleurs restaurants et services de chef à domicile",
      "svc.card.gastro.back":    "Déjà Vu Services vous propose une offre qui vous ressemble et qui vous correspond. Nous mettons sur pied des événements culinaires accompagnés de vins et de thés pour connaisseurs. Nos chefs étoilés élaborent des mets à base de produits frais et de qualité. Ils mettent en avant les produits, les labels, les vins et les producteurs du terroir. Quelles que soient vos envies ou vos inspirations, nous vous faisons la promesse d'une expérience culinaire inoubliable.",
      "svc.card.voyages.title":  "Voyages",
      "svc.card.voyages.front":  "Planification et organisation complète de voyages d'exception",
      "svc.card.voyages.back":   "Envie d'évasion, de dépaysement, de ressourcement en famille ou en solo ? Nous sommes à même de vous proposer les meilleures destinations et hôtels, que ce soit sur les pistes enneigées des Alpes ou sur une plage de bord de mer dans un pays lointain et exotique. Organisation de voyages sur mesure en Suisse ou à l'étranger. Si vous le souhaitez, vous pouvez bénéficier des services d'un guide qui rendra votre voyage exceptionnel.",
      "svc.card.famille.title":  "Famille",
      "svc.card.famille.front":  "Services dédiés aux familles : garde d'enfants, courses, assistance",
      "svc.card.famille.back":   "Notre équipe multiculturelle place la famille au cœur de ses réflexions en lui offrant un service all-in-one 360 degrés. Les parents, les enfants, les grands-parents et tous les proches sont considérés dans notre approche qualitative dont la spécificité est le sur mesure. Nous vous proposons toute une gamme de services : relocation, recherche d'école, déménagement, services domestiques, gestion de patrimoine et bien plus encore.",
      "svc.card.pro.title":      "Professionnel",
      "svc.card.pro.front":      "Support administratif et gestion pour professionnels",
      "svc.card.pro.back":       "Déjà Vu Services est à votre disposition pour tous les événements de votre vie professionnelle. Nous excellons en une multitude de prestations, allant de l'organisation de banquets à celle de voyages d'affaires à l'étranger, en passant par la mise à disposition d'un jet privé. Nous connaissons des lieux grandioses convenant parfaitement à des banquets ou soirées d'entreprise, mariant le prestige et le bon goût. Notre équipe est toujours à l'affût de nouveautés et sera ravie de répondre à toutes vos demandes.",
      "svc.cta.title":           "Prêt à franchir le pas ?<br><em>Votre moment est venu.</em>",
      "svc.cta.text":            "Notre équipe d'experts est à votre disposition pour vous accompagner dans tous vos projets",
      "svc.cta.btn":             "Nous contacter",

      // === PAGE COLLECTION ===
      "collection.philosophy":    "PHILOSOPHIE",
      "collection.our_collection":"NOTRE COLLECTION",
      "collection.our_services":  "NOS SERVICES",

      // === PAGE COLLECTION (détaillé) ===
      "col.nav.mini":           "Mini véhicules",
      "col.nav.voitures":       "Voitures",
      "col.nav.montres":        "Montres",
      "col.nav.art":            "Art ▾",
      "col.nav.association":    "Association",
      "col.hero.title":         "L\u2019excellence de la <span class=\"hero-highlight\">collection</span>",
      "col.hero.subtitle":      "Automobile \u00b7 Horlogerie \u00b7 <span class=\"hero-accent\">Art</span>",
      "col.philosophy.title":   "PHILOSOPHIE",
      "col.philosophy.text":    "Notre d\u00e9marche repose sur la recherche de l\u2019excellence et du raffinement dans l\u2019univers du luxe \u00e9galement (automobile, horlogerie, art).",
      "col.heritage.caption":   "Un horloger chez Patek Philippe, vers 1950. Mus\u00e9e national suisse",
      "col.heritage.desc":      "L\u2019horlogerie suisse repr\u00e9sente l\u2019excellence et la pr\u00e9cision depuis des si\u00e8cles. Chaque pi\u00e8ce de notre collection incarne cet h\u00e9ritage d\u2019exception.",
      "col.collections.title":  "NOS COLLECTIONS",
      "col.card.mini.desc":     "Mod\u00e8les r\u00e9duits et miniatures de collection",
      "col.card.voitures.desc": "Automobiles de prestige et v\u00e9hicules d\u2019exception",
      "col.card.montres.desc":  "Horlogerie de prestige et pi\u00e8ces d\u2019exception",
      "col.card.art.desc":      "\u0152uvres d\u2019art contemporain et pi\u00e8ces de galerie",
      "col.card.assoc.desc":    "Engagement solidaire et partenariats caritatifs",
      "col.discover":           "D\u00e9couvrir",
      "col.footer.tagline":     "Votre partenaire d\u2019excellence",
      "col.footer.description": "Leader suisse en collection d\u2019art et horlogerie depuis 2010",
      "col.footer.collections": "COLLECTIONS",
      "col.footer.automobiles": "Automobiles",
      "col.footer.horlogerie":  "Horlogerie",

      // === PAGE HOME (immobilier) ===
      "home.page_title": "Déjà Vu Home",

      // === PAGE ASSOCIATION ===
      "assoc.title": "Innocence en Danger",
    },

    // ==================== ENGLISH ====================
    en: {
      "nav.accueil":     "Home",
      "nav.equipe":      "Team",
      "nav.services":    "Services",
      "nav.tete":        "Tête-à-tête",
      "nav.association": "Association",
      "nav.contact":     "Contact",

      "footer.tagline":             "Your partner of excellence",
      "footer.description":         "Swiss leader in prestige real estate, private concierge and art collection since 2010",
      "footer.about":               "ABOUT",
      "footer.affiliates":          "OUR AFFILIATES",
      "footer.services_col":        "SERVICES",
      "footer.contact_col":         "CONTACT",
      "footer.newsletter_col":      "NEWSLETTER",
      "footer.excellence":          "Excellence",
      "footer.trust":               "Trust",
      "footer.about_us":            "Who are we?",
      "footer.our_team":            "Our team",
      "footer.our_vision":          "Our vision",
      "footer.news":                "News & Blog",
      "footer.careers":             "Careers",
      "footer.immo":                "Prestige real estate",
      "footer.concierge":           "Private concierge",
      "footer.art":                 "Art & Watches",
      "footer.newsletter_desc":     "Stay informed of our news and exclusive offers",
      "footer.newsletter_placeholder": "Your email",
      "footer.hours":               "HOURS",
      "footer.day_weekdays":        "Mon - Fri",
      "footer.day_sat":             "Sat",
      "footer.day_sun":             "Sun",
      "footer.time_sat":            "By appointment",
      "footer.time_sun":            "Closed",
      "footer.rights":              "All rights reserved.",
      "footer.legal":               "Legal Notice",
      "footer.privacy":             "Privacy",
      "footer.cgu":                 "Terms",

      "index.hero1": "<strong>A group of experts</strong> and <strong>active partners</strong> in real estate,",
      "index.hero2": "the sale of rare objects, and in tailor-made concierge services",
      "index.hero3": "Our visionary, committed and responsible approach is a guarantee of your success!",

      "index.card_home_title":      "Discover our<br>performance in<br>real estate",
      "index.card_home_desc":       "We offer you our expert services in prestige real estate, the search for exclusive properties and assistance for all your real estate needs.",
      "index.card_home_btn":        "HOME",
      "index.card_services_title":  "Call on tailor-made<br>concierge services",
      "index.card_services_desc":   "Exceptional private concierge services for all your needs: travel, events, gastronomy, family and much more.",
      "index.card_services_btn":    "SERVICES",
      "index.card_collection_title":"Discover our<br>magnificent<br>art objects",
      "index.card_collection_desc": "Discover our selection of rare objects, prestige watches and works of art carefully selected for discerning collectors.",
      "index.card_collection_btn":  "COLLECTION",

      "index.about_enterprise": "ENTERPRISE",
      "index.about_p1": "Déjà Vu Switzerland is a group of experts active in real estate, concierge services and the search for rare objects. We handle all your requests, from finding a school for your children to organising your business trip by private jet.",
      "index.about_p2": "Malika C. David and her team adapt to all environments and cultures, providing you with extraordinary opportunities. Confidentiality, excellence and sensitivity are our cardinal values.",
      "index.env_title": "ENVIRONMENT AT HEART",
      "index.env_p":    "Déjà Vu Switzerland is committed to preserving the planet according to ISO 14 001 standard. Our actions:",
      "index.env_li1":  "Rational use of resources and preservation of nature",
      "index.env_li2":  "Reduction of carbon footprint and responsible waste management",
      "index.env_li3":  "Transparency and continuous improvement of our environmental performance",

      "index.tete_title":   "TÊTE-À-TÊTE",
      "index.tete_desc":    "Discover on this page all our tête-à-têtes. We interview public figures from Switzerland for you. Find excerpts from Petar Mitrovic's interview on our",
      "index.tete_ig_link": "Instagram account",

      "index.jerome_role": "Sommelier and Head Waiter",
      "index.jerome_p1":   "Sommelier and Head Waiter at l'Auberge de l'Onde, Jérôme is also a distinguished chasselas poet.",
      "index.jerome_p2":   "Since his arrival, he had the revelation of Swiss wine to which he dedicated three books.",
      "index.jerome_p3":   "He was elected Swiss Sommelier of the Year by Gault & Millau in 2015, Commander of the Order of Wines of Vaud in 2018.",
      "index.jerome_link": "Discover the interview",
      "index.petar_role":  "Committed Photographer and Humanist",
      "index.petar_p1":    "Discover the moving story of Petar Mitrovic, a committed photographer and humanist (member of USPP – Swiss Union of Professional Photographers).",
      "index.petar_p2":    "Photography is a powerful tool that Petar uses to convey messages. His work earned him the distinction of \"French-speaking Swiss Personality\" in 2020.",
      "index.petar_link":  "Discover the interview",

      "index.cta_title": "Ready to take the step?",
      "index.cta_desc":  "Our team of experts is at your disposal to accompany you in all your projects",
      "index.cta_btn":   "Contact Us",

      "equipe.hero_title":      "Portrait",
      "equipe.hero_lead":       "Malika C. David and her team support a demanding clientele by combining discretion, international network and operational expertise.",
      "equipe.section_title":   "A team of experts and enthusiasts",
      "equipe.p1":  "Over the years, Malika C. David has surrounded herself with a team of passionate experts, active in real estate, concierge services and the search for rare objects. Our approach is based on listening, responsiveness and excellence of service.",
      "equipe.p2":  "We organise private travel, search for rare properties, coordinate art acquisitions and manage tailor-made services for an international clientele.",
      "equipe.contact_btn":     "Contact us",
      "equipe.expertise_title": "Our areas of expertise",
      "equipe.exp1": "Prestige real estate",
      "equipe.exp2": "Private concierge & lifestyle",
      "equipe.exp3": "Acquisition and advisory for collectibles",
      "equipe.exp4": "Event organisation and business travel",

      "contact.title":               "Send us a message",
      "contact.placeholder_name":    "Name",
      "contact.placeholder_email":   "Email",
      "contact.placeholder_message": "Message",
      "contact.send":                "Send",
      "contact.address":             "Address",
      "contact.phone":               "Phone",
      "contact.email":               "Email",

      // === PAGE SERVICES ===
      "services.title": "Our Services",
      "svc.nav.loisirs":         "Leisure",
      "svc.nav.evenementiel":    "Events",
      "svc.nav.gastronomie":     "Gastronomy",
      "svc.nav.voyages":         "Travel",
      "svc.nav.famille":         "Family",
      "svc.nav.professionnel":   "Professional",
      "svc.hero.title":          "Your exceptional <span class=\"hero-highlight\">concierge</span>",
      "svc.hero.subtitle":       "Tailor-made services to <span class=\"hero-accent\">enhance</span> your daily life",
      "svc.philosophy.title":    "PHILOSOPHY",
      "svc.philosophy.intro":    "We are at your service to help you in all aspects of your daily life. Our multimedia solution to address all your topics.",
      "svc.philosophy.block1":   "<strong><a href='../home/home.html'>Déjà Vu Home</a> is at your service</strong> for all real estate operations, whether <em>buying</em> or <em>selling</em> prestigious properties, <em>renting</em> apartments, and providing <em>maximum</em> and comfortable <em>support</em>.",
      "svc.philosophy.block2":   "We also offer professional support for your administrative tasks. All these services are delivered with efficiency and discernment.",
      "svc.love.desc":           "Our personalised approach and commitment to excellence make us your ideal partner for all your concierge needs.",
      "svc.services.title":      "OUR SERVICES",
      "svc.discover":            "Discover",
      "svc.card.loisirs.title":  "Leisure",
      "svc.card.loisirs.front":  "Tickets, events, private activities and tailor-made experiences",
      "svc.card.loisirs.back":   "We gladly assist you with events in your private life. Our team is committed to offering you exciting and unique activity ideas: organisation of birthdays, themed evenings, weddings or children's parties. We are here if you wish to attend a sporting, artistic, cultural or wellness event with ticket reservations for concerts, festivals, Formula 1, theatre or exhibitions. Our well-stocked address books can satisfy all your desires.",
      "svc.card.events.title":   "Events",
      "svc.card.events.front":   "Organisation of tailor-made private and professional events",
      "svc.card.events.back":    "Déjà Vu Services offers its assistance to any public figure wishing to organise an event (festive, conference, working meeting, etc.). We offer artists exhibition venues, with professional picture hanging systems and vernissage organisation (with promotion, presentation, catering). To make each of your events a success, we accompany you at every stage. Private or public, events hold no secrets for us.",
      "svc.card.gastro.title":   "Gastronomy",
      "svc.card.gastro.front":   "Reservations at the finest restaurants and private chef services",
      "svc.card.gastro.back":    "Déjà Vu Services offers you a selection that reflects and matches your personality. We set up culinary events accompanied by wines and teas for connoisseurs. Our award-winning chefs create dishes from fresh, quality products. They highlight products, labels, wines and producers from the region. Whatever your desires or inspirations, we promise you an unforgettable culinary experience.",
      "svc.card.voyages.title":  "Travel",
      "svc.card.voyages.front":  "Complete planning and organisation of exceptional journeys",
      "svc.card.voyages.back":   "Looking for escape, a change of scenery, rejuvenation with family or solo? We can offer you the best destinations and hotels, whether on the snow-covered slopes of the Alps or on a seaside beach in a distant and exotic country. Tailor-made travel organisation in Switzerland or abroad. If you wish, you can benefit from the services of a guide who will make your trip exceptional.",
      "svc.card.famille.title":  "Family",
      "svc.card.famille.front":  "Services dedicated to families: childcare, shopping, assistance",
      "svc.card.famille.back":   "Our multicultural team places the family at the heart of its thinking by offering an all-in-one 360-degree service. Parents, children, grandparents and all loved ones are considered in our qualitative approach whose specificity is tailor-made. We offer you a whole range of services: relocation, school search, moving, domestic services, asset management and much more.",
      "svc.card.pro.title":      "Professional",
      "svc.card.pro.front":      "Administrative support and management for professionals",
      "svc.card.pro.back":       "Déjà Vu Services is at your disposal for all events in your professional life. We excel in a multitude of services, from organising banquets to business trips abroad, including providing a private jet. We know grandiose venues perfectly suited for corporate banquets or evenings, combining prestige and good taste. Our team is always on the lookout for new ideas and will be delighted to respond to all your requests.",
      "svc.cta.title":           "Ready to take the step?<br><em>Your moment has come.</em>",
      "svc.cta.text":            "Our team of experts is at your disposal to accompany you in all your projects",
      "svc.cta.btn":             "Contact us",

      "collection.philosophy":    "PHILOSOPHY",
      "collection.our_collection":"OUR COLLECTION",
      "collection.our_services":  "OUR SERVICES",

      // === PAGE COLLECTION (detailed) ===
      "col.nav.mini":           "Mini vehicles",
      "col.nav.voitures":       "Cars",
      "col.nav.montres":        "Watches",
      "col.nav.art":            "Art ▾",
      "col.nav.association":    "Association",
      "col.hero.title":         "The excellence of the <span class=\"hero-highlight\">collection</span>",
      "col.hero.subtitle":      "Automotive \u00b7 Watchmaking \u00b7 <span class=\"hero-accent\">Art</span>",
      "col.philosophy.title":   "PHILOSOPHY",
      "col.philosophy.text":    "Our approach is based on the search for excellence and refinement, in particular in the upmarket world (automotive, watchmaking, art).",
      "col.heritage.caption":   "A watchmaker at Patek Philippe, circa 1950. Swiss National Museum",
      "col.heritage.desc":      "Swiss watchmaking represents excellence and precision for centuries. Each piece of our collection embodies this heritage of exception.",
      "col.collections.title":  "OUR COLLECTIONS",
      "col.card.mini.desc":     "Scale models and collectible miniatures",
      "col.card.voitures.desc": "Prestige automobiles and exceptional vehicles",
      "col.card.montres.desc":  "Prestige watchmaking and exceptional timepieces",
      "col.card.art.desc":      "Contemporary art and gallery pieces",
      "col.card.assoc.desc":    "Solidarity engagement and charitable partnerships",
      "col.discover":           "Discover",
      "col.footer.tagline":     "Your partner of excellence",
      "col.footer.description": "Swiss leader in art collection and watchmaking since 2010",
      "col.footer.collections": "COLLECTIONS",
      "col.footer.automobiles": "Automobiles",
      "col.footer.horlogerie":  "Watchmaking",

      "home.page_title": "Déjà Vu Home",
      "assoc.title": "Innocence in Danger",
    },

    // ==================== DEUTSCH ====================
    de: {
      "nav.accueil":     "Startseite",
      "nav.equipe":      "Team",
      "nav.services":    "Dienstleistungen",
      "nav.tete":        "Tête-à-tête",
      "nav.association": "Verband",
      "nav.contact":     "Kontakt",

      "footer.tagline":             "Ihr Partner der Exzellenz",
      "footer.description":         "Schweizer Marktführer in Prestige-Immobilien, privatem Concierge und Kunstsammlung seit 2010",
      "footer.about":               "ÜBER UNS",
      "footer.affiliates":          "UNSERE FILIALEN",
      "footer.services_col":        "DIENSTLEISTUNGEN",
      "footer.contact_col":         "KONTAKT",
      "footer.newsletter_col":      "NEWSLETTER",
      "footer.excellence":          "Exzellenz",
      "footer.trust":               "Vertrauen",
      "footer.about_us":            "Wer sind wir?",
      "footer.our_team":            "Unser Team",
      "footer.our_vision":          "Unsere Vision",
      "footer.news":                "News & Blog",
      "footer.careers":             "Karriere",
      "footer.immo":                "Prestige-Immobilien",
      "footer.concierge":           "Privater Concierge",
      "footer.art":                 "Kunst & Uhren",
      "footer.newsletter_desc":     "Bleiben Sie über unsere Neuigkeiten und exklusiven Angebote informiert",
      "footer.newsletter_placeholder": "Ihre E-Mail",
      "footer.hours":               "ÖFFNUNGSZEITEN",
      "footer.day_weekdays":        "Mo - Fr",
      "footer.day_sat":             "Sa",
      "footer.day_sun":             "So",
      "footer.time_sat":            "Nach Vereinbarung",
      "footer.time_sun":            "Geschlossen",
      "footer.rights":              "Alle Rechte vorbehalten.",
      "footer.legal":               "Impressum",
      "footer.privacy":             "Datenschutz",
      "footer.cgu":                 "AGB",

      "index.hero1": "<strong>Ihre Gruppe von Experten</strong> und <strong>aktiven Leistungsträgern</strong> in der Immobilienbranche,",
      "index.hero2": "dem Verkauf seltener Objekte, Spenden & Concierge-Services, die neu definieren",
      "index.hero3": "den Ansatz, die Aufwertung, schützt und stärkt die Verkaufsergebnisse erfolgreich",

      "index.card_home_title":      "Entdecken Sie unsere<br>Leistung in der<br>Immobilienbranche",
      "index.card_home_desc":       "Wir bieten Ihnen unsere Expertendienstleistungen in Prestige-Immobilien, die Suche nach exklusiven Objekten und Unterstützung für alle Ihre Immobilienbedürfnisse.",
      "index.card_home_btn":        "HOME",
      "index.card_services_title":  "Nutzen Sie maßgeschneiderte<br>Concierge-Dienste",
      "index.card_services_desc":   "Außergewöhnliche private Concierge-Dienste für alle Ihre Bedürfnisse: Reisen, Veranstaltungen, Gastronomie, Familie und vieles mehr.",
      "index.card_services_btn":    "DIENSTE",
      "index.card_collection_title":"Entdecken Sie unsere<br>prächtigen<br>Kunstobjekte",
      "index.card_collection_desc": "Entdecken Sie unsere Auswahl seltener Objekte, Prestige-Uhren und Kunstwerke, die sorgfältig für anspruchsvolle Sammler ausgewählt wurden.",
      "index.card_collection_btn":  "KOLLEKTION",

      "index.about_enterprise": "UNTERNEHMEN",
      "index.about_p1": "Déjà Vu Switzerland ist eine Gruppe von Experten im Bereich Immobilien, Concierge-Services und der Suche nach seltenen Objekten. Wir kümmern uns um alle Ihre Anfragen, von der Schulsuche für Ihre Kinder bis zur Organisation Ihrer Geschäftsreise im Privatjet.",
      "index.about_p2": "Malika C. David und ihr Team passen sich allen Umgebungen und Kulturen an und verschaffen Ihnen außergewöhnliche Möglichkeiten. Vertraulichkeit, Exzellenz und Sensibilität sind unsere Grundwerte.",
      "index.env_title": "UMWELT AM HERZEN",
      "index.env_p":    "Déjà Vu Switzerland verpflichtet sich, den Planeten gemäß ISO 14 001 zu schützen. Unsere Maßnahmen:",
      "index.env_li1":  "Rationelle Nutzung von Ressourcen und Erhaltung der Natur",
      "index.env_li2":  "Reduzierung des CO₂-Fußabdrucks und verantwortungsvolles Abfallmanagement",
      "index.env_li3":  "Transparenz und kontinuierliche Verbesserung unserer Umweltleistung",

      "index.tete_title":   "TÊTE-À-TÊTE",
      "index.tete_desc":    "Entdecken Sie auf dieser Seite all unsere Tête-à-têtes. Wir interviewen für Sie öffentliche Persönlichkeiten aus der Schweiz. Finden Sie Auszüge aus Petar Mitrovics Interview auf unserem",
      "index.tete_ig_link": "Instagram-Konto",

      "index.jerome_role": "Sommelier und Maître d'Hôtel",
      "index.jerome_p1":   "Sommelier und Maître d'Hôtel im Auberge de l'Onde, Jérôme ist auch ein angesehener Chasselas-Poet.",
      "index.jerome_p2":   "Seit seiner Ankunft hat er die Offenbarung des Schweizer Weins erlebt, dem er drei Bücher gewidmet hat.",
      "index.jerome_p3":   "Er wurde 2015 vom Gault & Millau zum Schweizer Sommelier des Jahres und 2018 zum Kommandeur des Ordens der Waadtländer Weine gewählt.",
      "index.jerome_link": "Interview entdecken",
      "index.petar_role":  "Engagierter Fotograf und Humanist",
      "index.petar_p1":    "Entdecken Sie die bewegende Geschichte von Petar Mitrovic, einem engagierten Fotografen und Humanisten (Mitglied der USPP – Schweizer Union professioneller Fotografen).",
      "index.petar_p2":    "Fotografie ist ein mächtiges Werkzeug, das Petar nutzt, um Botschaften zu vermitteln. Seine Arbeiten brachten ihm 2020 die Auszeichnung als \"Westschweizer Persönlichkeit\" ein.",
      "index.petar_link":  "Interview entdecken",

      "index.cta_title": "Bereit, den Schritt zu wagen?",
      "index.cta_desc":  "Unser Expertenteam steht Ihnen zur Verfügung, um Sie bei allen Ihren Projekten zu begleiten",
      "index.cta_btn":   "Kontaktieren Sie uns",

      "equipe.hero_title":      "Porträt",
      "equipe.hero_lead":       "Malika C. David und ihr Team betreuen eine anspruchsvolle Kundschaft und verbinden Diskretion, internationales Netzwerk und operatives Know-how.",
      "equipe.section_title":   "Ein Team von Experten und Enthusiasten",
      "equipe.p1":  "Im Laufe der Jahre hat sich Malika C. David mit einem Team leidenschaftlicher Experten umgeben, die in Immobilien, Concierge-Services und der Suche nach seltenen Objekten tätig sind. Unser Ansatz basiert auf Zuhören, Reaktionsfähigkeit und Exzellenz im Service.",
      "equipe.p2":  "Wir organisieren Privatreisen, suchen seltene Güter, koordinieren Kunstkäufe und verwalten maßgeschneiderte Dienstleistungen für eine internationale Kundschaft.",
      "equipe.contact_btn":     "Kontaktieren Sie uns",
      "equipe.expertise_title": "Unsere Fachgebiete",
      "equipe.exp1": "Prestige-Immobilien",
      "equipe.exp2": "Privater Concierge & Lifestyle",
      "equipe.exp3": "Erwerb und Beratung für Sammlerstücke",
      "equipe.exp4": "Eventorganisation und Geschäftsreisen",

      "contact.title":               "Senden Sie uns eine Nachricht",
      "contact.placeholder_name":    "Name",
      "contact.placeholder_email":   "E-Mail",
      "contact.placeholder_message": "Nachricht",
      "contact.send":                "Senden",
      "contact.address":             "Adresse",
      "contact.phone":               "Telefon",
      "contact.email":               "E-Mail",

      // === PAGE SERVICES ===
      "services.title": "Unsere Dienstleistungen",
      "svc.nav.loisirs":         "Freizeit",
      "svc.nav.evenementiel":    "Veranstaltungen",
      "svc.nav.gastronomie":     "Gastronomie",
      "svc.nav.voyages":         "Reisen",
      "svc.nav.famille":         "Familie",
      "svc.nav.professionnel":   "Professionell",
      "svc.hero.title":          "Ihr aussergewöhnlicher <span class=\"hero-highlight\">Concierge-Service</span>",
      "svc.hero.subtitle":       "Massgeschneiderte Dienstleistungen, um Ihren Alltag zu <span class=\"hero-accent\">bereichern</span>",
      "svc.philosophy.title":    "PHILOSOPHIE",
      "svc.philosophy.intro":    "Wir stehen Ihnen zur Verfügung, um Ihnen in allen Bereichen Ihres Alltags zu helfen. Unsere Multimedia-Lösung für alle Ihre Anliegen.",
      "svc.philosophy.block1":   "<strong><a href='../home/home.html'>Déjà Vu Home</a> steht Ihnen zur Verfügung</strong> für alle Immobiliengeschäfte, sei es <em>Kauf</em> oder <em>Verkauf</em> von Prestigeimmobilien, <em>Vermietung</em> von Wohnungen und <em>maximale</em> und komfortable <em>Unterstützung</em>.",
      "svc.philosophy.block2":   "Wir bieten Ihnen auch professionelle Unterstützung bei Ihren Verwaltungsaufgaben. Alle diese Leistungen werden mit Effizienz und Umsicht erbracht.",
      "svc.love.desc":           "Unser persönlicher Ansatz und unser Engagement für Exzellenz machen uns zum idealen Partner für alle Ihre Concierge-Bedürfnisse.",
      "svc.services.title":      "UNSERE DIENSTLEISTUNGEN",
      "svc.discover":            "Entdecken",
      "svc.card.loisirs.title":  "Freizeit",
      "svc.card.loisirs.front":  "Tickets, Veranstaltungen, private Aktivitäten und massgeschneiderte Erlebnisse",
      "svc.card.loisirs.back":   "Wir unterstützen Sie gerne bei Veranstaltungen in Ihrem Privatleben. Unser Team bietet Ihnen spannende und einzigartige Aktivitätsideen: Organisation von Geburtstagen, Themenabenden, Hochzeiten oder Kindergeburtstagen. Wir sind für Sie da, wenn Sie an Sport-, Kunst-, Kultur- oder Wellnessveranstaltungen teilnehmen möchten, mit Ticketreservierungen für Konzerte, Festivals, Formel 1, Theater oder Ausstellungen. Unsere gut gefüllten Adressbücher können alle Ihre Wünsche erfüllen.",
      "svc.card.events.title":   "Veranstaltungen",
      "svc.card.events.front":   "Organisation massgeschneiderter privater und professioneller Veranstaltungen",
      "svc.card.events.back":    "Déjà Vu Services bietet seine Unterstützung jeder Persönlichkeit des öffentlichen Lebens an, die eine Veranstaltung organisieren möchte (Fest, Konferenz, Arbeitssitzung usw.). Wir bieten Künstlern Ausstellungsräume mit professionellen Bildaufhängesystemen und Organisation von Vernissagen (mit Werbung, Präsentation, Catering). Damit jede Ihrer Veranstaltungen ein Erfolg wird, begleiten wir Sie bei jedem Schritt. Privat oder öffentlich, Veranstaltungen haben keine Geheimnisse für uns.",
      "svc.card.gastro.title":   "Gastronomie",
      "svc.card.gastro.front":   "Reservierungen in den besten Restaurants und Privatkoch-Service",
      "svc.card.gastro.back":    "Déjà Vu Services bietet Ihnen ein Angebot, das Sie widerspiegelt und zu Ihnen passt. Wir organisieren kulinarische Veranstaltungen mit Weinen und Tees für Kenner. Unsere Sterneköche kreieren Gerichte aus frischen, hochwertigen Produkten. Sie heben Produkte, Labels, Weine und Erzeuger der Region hervor. Was auch immer Ihre Wünsche oder Inspirationen sind, wir versprechen Ihnen ein unvergessliches kulinarisches Erlebnis.",
      "svc.card.voyages.title":  "Reisen",
      "svc.card.voyages.front":  "Vollständige Planung und Organisation aussergewöhnlicher Reisen",
      "svc.card.voyages.back":   "Lust auf Flucht, Tapetenwechsel, Erholung mit der Familie oder allein? Wir können Ihnen die besten Reiseziele und Hotels anbieten, ob auf den schneebedeckten Hängen der Alpen oder an einem Strand in einem fernen und exotischen Land. Massgeschneiderte Reiseorganisation in der Schweiz oder im Ausland. Wenn Sie möchten, können Sie die Dienste eines Reiseführers in Anspruch nehmen, der Ihre Reise aussergewöhnlich macht.",
      "svc.card.famille.title":  "Familie",
      "svc.card.famille.front":  "Familienservices: Kinderbetreuung, Einkäufe, Unterstützung",
      "svc.card.famille.back":   "Unser multikulturelles Team stellt die Familie in den Mittelpunkt seiner Überlegungen und bietet einen All-in-One-360-Grad-Service. Eltern, Kinder, Grosseltern und alle Angehörigen werden in unserem qualitativen Ansatz berücksichtigt, dessen Besonderheit das Massgeschneiderte ist. Wir bieten Ihnen eine ganze Palette von Dienstleistungen: Umzug, Schulsuche, Umzüge, Haushaltsdienstleistungen, Vermögensverwaltung und vieles mehr.",
      "svc.card.pro.title":      "Professionell",
      "svc.card.pro.front":      "Administrative Unterstützung und Management für Fachleute",
      "svc.card.pro.back":       "Déjà Vu Services steht Ihnen für alle Ereignisse Ihres Berufslebens zur Verfügung. Wir zeichnen uns durch eine Vielzahl von Dienstleistungen aus, von der Organisation von Banketten über Geschäftsreisen ins Ausland bis hin zur Bereitstellung eines Privatjets. Wir kennen grossartige Veranstaltungsorte, die perfekt für Firmenbankette oder -abende geeignet sind und Prestige mit gutem Geschmack verbinden. Unser Team ist immer auf der Suche nach neuen Ideen und beantwortet gerne alle Ihre Anfragen.",
      "svc.cta.title":           "Bereit den Schritt zu wagen?<br><em>Ihr Moment ist gekommen.</em>",
      "svc.cta.text":            "Unser Expertenteam steht Ihnen zur Verfügung, um Sie bei all Ihren Projekten zu begleiten",
      "svc.cta.btn":             "Kontaktieren Sie uns",

      "collection.philosophy":    "PHILOSOPHIE",
      "collection.our_collection":"UNSERE KOLLEKTION",
      "collection.our_services":  "UNSERE DIENSTLEISTUNGEN",

      // === PAGE COLLECTION (detailliert) ===
      "col.nav.mini":           "Minifahrzeuge",
      "col.nav.voitures":       "Autos",
      "col.nav.montres":        "Uhren",
      "col.nav.art":            "Kunst ▾",
      "col.nav.association":    "Verband",
      "col.hero.title":         "Die Exzellenz der <span class=\"hero-highlight\">Kollektion</span>",
      "col.hero.subtitle":      "Automobil \u00b7 Uhrmacherei \u00b7 <span class=\"hero-accent\">Kunst</span>",
      "col.philosophy.title":   "PHILOSOPHIE",
      "col.philosophy.text":    "Unser Ansatz basiert auf dem Streben nach Exzellenz und Raffinesse in der Welt des Luxus (Automobil, Uhrmacherei, Kunst).",
      "col.heritage.caption":   "Ein Uhrmacher bei Patek Philippe, um 1950. Schweizerisches Nationalmuseum",
      "col.heritage.desc":      "Die Schweizer Uhrmacherei steht seit Jahrhunderten f\u00fcr Exzellenz und Pr\u00e4zision. Jedes St\u00fcck unserer Kollektion verk\u00f6rpert dieses au\u00dfergew\u00f6hnliche Erbe.",
      "col.collections.title":  "UNSERE KOLLEKTIONEN",
      "col.card.mini.desc":     "Modelle und Sammlerminiaturen",
      "col.card.voitures.desc": "Prestige-Automobile und au\u00dfergew\u00f6hnliche Fahrzeuge",
      "col.card.montres.desc":  "Prestige-Uhrmacherei und au\u00dfergew\u00f6hnliche Zeitmesser",
      "col.card.art.desc":      "Zeitgen\u00f6ssische Kunst und Galeriest\u00fccke",
      "col.card.assoc.desc":    "Solidarisches Engagement und karitative Partnerschaften",
      "col.discover":           "Entdecken",
      "col.footer.tagline":     "Ihr Partner der Exzellenz",
      "col.footer.description": "Schweizer Marktf\u00fchrer in Kunstsammlung und Uhrmacherei seit 2010",
      "col.footer.collections": "KOLLEKTIONEN",
      "col.footer.automobiles": "Automobile",
      "col.footer.horlogerie":  "Uhrmacherei",

      "home.page_title": "Déjà Vu Home",
      "assoc.title": "Unschuld in Gefahr",
    }
  };

  const LANG_KEY = 'dvs_lang';

  function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || 'fr';
  }

  function tr(key, lang) {
    const l = lang || getCurrentLang();
    return (translations[l] && translations[l][key] !== undefined)
      ? translations[l][key]
      : (translations.fr[key] || key);
  }

  function applyTranslations(lang) {
    // Texte simple
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = tr(el.getAttribute('data-i18n'), lang);
      if (val !== undefined) el.textContent = val;
    });
    // Contenu HTML (balises <br>, <strong>…)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = tr(el.getAttribute('data-i18n-html'), lang);
      if (val !== undefined) el.innerHTML = val;
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = tr(el.getAttribute('data-i18n-placeholder'), lang);
      if (val !== undefined) el.placeholder = val;
    });
    // Mettre à jour lang de la page
    document.documentElement.lang = lang;
  }

  function updateSwitcherUI(lang) {
    var labels = { fr: 'FR', en: 'EN', de: 'DE' };
    var el = document.getElementById('langCurrent');
    if (el) el.textContent = labels[lang] || 'FR';
    document.querySelectorAll('.lang-option').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
    updateSwitcherUI(lang);
  }

  function init() {
    var lang = getCurrentLang();
    applyTranslations(lang);
    updateSwitcherUI(lang);

    // Bouton switcher
    var btn      = document.getElementById('langSwitcherBtn');
    var dropdown = document.getElementById('langDropdown');

    if (btn && dropdown) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isOpen = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
      });

      document.querySelectorAll('.lang-option').forEach(function (opt) {
        opt.addEventListener('click', function () {
          setLang(this.getAttribute('data-lang'));
          dropdown.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', function () {
        dropdown.classList.remove('open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  }

  return { init: init, setLang: setLang, tr: tr, getCurrentLang: getCurrentLang };

})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', DejuVuI18n.init);
} else {
  DejuVuI18n.init();
}
