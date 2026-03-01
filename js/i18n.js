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
      "index.hero1": "<strong>Votre groupe d'experts</strong> et de <strong>performers actifs</strong> dans l'immobilier,",
      "index.hero2": "la vente d'objets rares, les dons & services de conciergerie qui réinvente",
      "index.hero3": "l'approche, la valorisation, préserve et responsabilise ses générés de vente avec succès",

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

      // === PAGE COLLECTION ===
      "collection.philosophy":    "PHILOSOPHIE",
      "collection.our_collection":"NOTRE COLLECTION",
      "collection.our_services":  "NOS SERVICES",

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

      "index.hero1": "<strong>Your group of experts</strong> and <strong>active performers</strong> in real estate,",
      "index.hero2": "the sale of rare objects, donations & concierge services that reinvent",
      "index.hero3": "the approach, the enhancement, preserving and empowering its sales generation with success",

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

      "services.title": "Our Services",

      "collection.philosophy":    "PHILOSOPHY",
      "collection.our_collection":"OUR COLLECTION",
      "collection.our_services":  "OUR SERVICES",

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

      "services.title": "Unsere Dienstleistungen",

      "collection.philosophy":    "PHILOSOPHIE",
      "collection.our_collection":"UNSERE KOLLEKTION",
      "collection.our_services":  "UNSERE DIENSTLEISTUNGEN",

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
