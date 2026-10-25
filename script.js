// Language Translations Dictionary
        let currentLang = 'fr';

        const i18n = {
            fr: {
                nav_home: "Accueil",
                nav_services: "Services",
                nav_projects: "Projets",
                nav_about: "À Propos",
                nav_estimator: "Estimateur",
                nav_contact: "Contact",
                nav_book: "Prendre RDV",
                hero_badge: "Data Engineering pour les PME du Canton du Jura",
                hero_title: 'Transformez vos données en décisions grâce à une infrastructure <span class="text-gradient">fiable</span>.',
                hero_desc: "Nous aidons les PME à connecter leurs données, automatiser leurs flux et construire des plateformes analytiques adaptées à leurs besoins.",
                hero_btn_audit: "Parlons de vos données",
                hero_btn_services: "Découvrir nos services",
                stat_lpd: "Données mieux intégrées",
                stat_response: "Flux automatisés",
                stat_support: "Décisions éclairées",
                shield_cyber: "Intégration des données",
                shield_cyber_sub: "Sources réunies au même endroit",
                status_active: "Connecté",
                shield_cloud: "Pipelines automatisés",
                shield_cloud_sub: "Des flux réguliers et fiables",
                status_optimized: "Automatisé",
                shield_si: "Plateforme analytique",
                shield_si_sub: "Entrepôt de données ou lakehouse",
                status_operational: "Prêt à analyser",
                location_tag: "Basé dans le Canton du Jura (Delémont - Porrentruy - Saignelégier)",
                services_subtitle: "Data Engineering pour les PME",
                services_title: "Des données mieux intégrées, des décisions plus éclairées",
                services_desc: "De la connexion de vos outils à la création d'une plateforme analytique fiable, nous construisons une base de données utile à votre activité.",
                btn_learn_more: "En savoir plus",
                s1_title: "Intégration des sources de données",
                s1_desc: "Reliez vos outils de gestion, fichiers et bases de données pour obtenir une vue cohérente de votre activité.",
                s2_title: "Pipelines de données & reporting",
                s2_desc: "Automatisez la collecte, la transformation et la livraison des données vers des rapports régulièrement actualisés.",
                s3_title: "Entrepôt de données & lakehouse",
                s3_desc: "Concevez un socle analytique cloud adapté à votre volume, à vos outils et à vos objectifs métier.",
                s4_title: "Qualité des données & processus",
                s4_desc: "Détectez les incohérences, fiabilisez vos indicateurs et simplifiez les tâches manuelles autour de vos données.",
                projects_subtitle: "Projets sélectionnés",
                projects_title: "Des réalisations concrètes en data engineering",
                projects_desc: "Quelques exemples de pipelines cloud et d'analyses de données appliqués à des cas réels.",
                project1_status: "AWS Data Lakehouse",
                project1_title: "SBB Lakehouse — Data Engineering cloud sur AWS",
                project1_desc: "Pipeline construit à partir de données publiques suisses de transport : ingestion quotidienne de 450 à 500 Mo de fichiers CSV depuis Open Transport Data Switzerland vers une couche bronze Amazon S3, avec AWS Lambda et transfert multipart en streaming.",
                project1_detail1: "Infrastructure cloud déployée avec Terraform et Infrastructure as Code.",
                project1_detail2: "CI/CD GitHub Actions avec OIDC : plan Terraform sur les pull requests, apply après merge.",
                project1_detail3: "Sécurité : rôles IAM au moindre privilège, hooks pre-commit, TFLint et scan Trivy.",
                project1_next_label: "Architecture réalisée :",
                project1_next: "Couches Bronze, Silver et Gold, complétées par une page interactive pour interroger les données.",
                project2_status: "Analyse de données",
                project2_title: "Analyse du marché de l'emploi suisse",
                project2_desc: "Projet data engineering de bout en bout sur 1 895 offres d'emploi suisses, avec des pipelines SQL construits dans DuckDB.",
                project2_detail1: "Préparation et analyse d'un jeu de données d'offres d'emploi.",
                project2_detail2: "Validation statistique des résultats avec des intervalles de confiance.",
                project2_detail3: "Visualisation de la répartition des offres par canton en Suisse.",
                project2_tag_stats: "Validation statistique",
                project3_status: "Traitement 100 % local · hors ligne",
                project3_title: "PTT Poststellenchroniken — Pipeline d'archivage hors ligne",
                project3_desc: "Pipeline OCR et LLM entièrement local qui transforme des dossiers numérisés d'histoire postale suisse (fonds Post-199) en projets de métadonnées structurés pour le catalogage archivistique.",
                project3_pipeline_title: "Flux de traitement",
                project3_detail1: "Convertit les PDF en images, classe les pages et applique l'OCR imprimé en allemand.",
                project3_detail2: "Utilise un modèle vision-langage local pour décrire les pages contenant des images.",
                project3_detail3: "Génère des brouillons JSON pour sept champs de métadonnées, avec une interface de révision et recherche plein texte.",
                project3_detail4: "Applique les consignes archivistiques : pas de noms personnels dans « Form und Inhalt ».",
                project3_privacy_title: "Confidentialité & contrôle",
                project3_privacy_desc: "Fonctionne hors ligne sur Apple Silicon, sans API cloud ni LLM hébergé. Les données personnelles restent sur la machine locale, conformément à l'accord BGA. Les brouillons sont conçus pour être révisés avant le catalogage.",
                project3_quality_desc: "Le flux OCR utilise Tesseract comme solution de repli lorsque l'intégration Surya ne fonctionne pas avec l'API épinglée. La reconnaissance manuscrite est intégrée mais désactivée par défaut.",
                project3_htr_tag: "Kraken / TrOCR · optionnel",
                project4_status: "Projet en cours · BFH / Inalp AG",
                project4_title: "Modern Energy Communities 2.0 (MEG2.0): Analysis & Billing",
                project4_desc: "Projet universitaire mené à la Haute école spécialisée bernoise (BFH), avec Inalp AG et sa plateforme InfraHub. Le projet étudie l'ingestion de télémétrie énergétique en temps réel et ses applications pour l'analyse et la facturation des communautés énergétiques suisses (ZEV, vZEV, LEG).",
                project4_arch_title: "Architecture étudiée",
                project4_detail1: "Ingestion de mesures de compteurs et de télémétrie via MQTT/REST dans InfraHub.",
                project4_detail2: "Traitement des séries temporelles et règles d'analyse pour estimer l'autoconsommation et répartir les coûts.",
                project4_detail3: "Étude du déplacement flexible de charges, par exemple le chauffage d'un boiler pendant les pics de production solaire.",
                project4_scope_title: "Objectif du projet",
                project4_scope_desc: "Évaluer si des données plus fraîches peuvent soutenir des décisions énergétiques plus réactives et contribuer à augmenter le taux d'autoconsommation. L'analyse et la facturation des modèles ZEV/vZEV/LEG font partie du périmètre étudié ; les bénéfices restent à valider dans le cadre du projet.",
                project4_tag_energy: "IoT énergétique",
                project4_tag_billing: "Analyse & facturation",
                est_badge: "Outil Interactif",
                est_title: "Évaluez votre projet data",
                est_desc: "Sélectionnez les besoins de votre PME pour obtenir un premier ordre de grandeur.",
                est_size_label: "1. Taille de votre entreprise",
                est_opt_1: "1 - 10 collaborateurs (TPE)",
                est_opt_2: "11 - 50 collaborateurs (PME)",
                est_opt_3: "51 - 250 collaborateurs (Moyenne entreprise)",
                est_opt_4: "+250 collaborateurs (Grande structure)",
                est_domain_label: "2. Besoins prioritaires",
                est_chk_cyber: "Intégration de sources de données",
                est_chk_cloud: "Pipelines automatisés & reporting",
                est_chk_network: "Entrepôt de données / lakehouse",
                est_chk_quality: "Qualité des données & processus",
                est_urgency_label: "3. Niveau d'urgence",
                est_urg_normal: "Normal (1-2 mois)",
                est_urg_urgent: "Urgent (< 2 semaines)",
                est_card_tag: "Estimation indicative",
                est_per_project: "/ projet approx.",
                est_includes: "Cette estimation est indicative et varie selon vos sources, vos volumes de données et le périmètre du projet.",
                est_feat1: "Périmètre adapté à votre PME",
                est_feat2: "Priorité aux résultats métier mesurables",
                est_feat3: "Proposition détaillée après échange",
                est_btn_quote: "Valider et demander un devis exact",
                about_tag: "Data Engineering pour les PME",
                about_title: "Des fondations data fiables pour votre entreprise",
                about_p1: "JuraIT Consulting aide les PME à transformer des données dispersées en informations cohérentes et utiles aux décisions quotidiennes.",
                about_p2: "Nous partons de vos outils, de vos contraintes et de vos objectifs pour proposer une solution progressive, compréhensible et adaptée à votre budget.",
                about_box1_t: "Une approche pragmatique",
                about_box1_d: "Des étapes claires, un périmètre maîtrisé et des résultats utiles à votre activité.",
                about_box2_t: "Des données exploitables",
                about_box2_d: "Des flux documentés, des indicateurs cohérents et des fondations conçues pour évoluer.",
                method_title: "Notre démarche data en 4 étapes",
                m1_t: "Comprendre vos sources",
                m1_d: "Recenser vos outils, vos données et les décisions que vous souhaitez mieux éclairer.",
                m2_t: "Définir le modèle cible",
                m2_d: "Prioriser les intégrations, les indicateurs et l'architecture adaptés à votre budget.",
                m3_t: "Construire les flux",
                m3_d: "Automatiser l'extraction, la transformation et la mise à disposition des données.",
                m4_t: "Contrôler & améliorer",
                m4_d: "Suivre la qualité des données et faire évoluer la solution avec vos besoins.",
                rdv_tag: "Échange autour de votre projet data",
                rdv_title: "Parlons de vos données et de vos objectifs",
                rdv_desc: "Choisissez un créneau ou envoyez-nous un message pour parler de vos données et de vos objectifs.",
                picker_title: "Sélectionner un créneau (Visio ou Sur Site)",
                picker_hours: "Heures disponibles :",
                slot_selected_label: "Créneau sélectionné :",
                slot_format_info: "Format: Consultation en visioconférence ou à votre bureau.",
                form_title: "Vos coordonnées",
                form_fullname: "Nom & Prénom *",
                form_email: "E-mail professionnel *",
                form_company: "Nom de l'entreprise",
                form_phone: "Téléphone",
                form_message: "Sujet principal / Message",
                form_privacy: "J'accepte que mes données soient traitées conformément à la politique de confidentialité (Conforme nLPD Suisse).",
                form_submit: "Confirmer la demande de rendez-vous",
                form_sending: "Envoi en cours…",
                form_error: "L'envoi a échoué. Réessayez ou écrivez-nous directement par e-mail.",
                form_delivery_notice: "Votre message sera envoyé à mustafa@jurait.ch.",
                success_title: "Demande envoyée avec succès !",
                success_msg: "Merci pour votre message. Nous vous contacterons dans les plus brefs délais.",
                info_address_title: "Adresse Principale",
                info_email_title: "E-mail & Contact",
                info_phone_title: "Téléphone Support",
                footer_desc: "Accompagnement data pour les PME : intégration, pipelines, plateformes analytiques et qualité des données.",
                signature_label: "Votre partenaire data dans le Jura",
                signature_role: "Data Engineering pour les PME",
                signature_cta: "Parlons de votre projet",
                signature_tagline: "Des données fiables. Des décisions plus claires.",
                footer_zone_title: "Zone d'Intervention",
                footer_legal_title: "Informations Légales",
                footer_privacy: "Politique de Confidentialité",
                footer_terms: "Mentions Légales",
                modal_included: "Inclus dans ce service :",
                modal_quote_btn: "Demander un devis pour ce service"
            },
            de: {
                nav_home: "Startseite",
                nav_services: "Dienstleistungen",
                nav_projects: "Projekte",
                nav_about: "Über Uns",
                nav_estimator: "Rechner",
                nav_contact: "Kontakt",
                nav_book: "Termin Buchen",
                hero_badge: "Data Engineering für KMU im Kanton Jura",
                hero_title: 'Machen Sie Ihre Daten zur Grundlage für bessere Entscheidungen – mit einer <span class="text-gradient">zuverlässigen</span> Datenplattform.',
                hero_desc: "Wir unterstützen KMU dabei, Datenquellen zu verbinden, Datenflüsse zu automatisieren und passende Analyseplattformen aufzubauen.",
                hero_btn_audit: "Sprechen wir über Ihre Daten",
                hero_btn_services: "Unsere Dienste Entdecken",
                stat_lpd: "Integrierte Daten",
                stat_response: "Automatisierte Datenflüsse",
                stat_support: "Fundierte Entscheidungen",
                shield_cyber: "Datenintegration",
                shield_cyber_sub: "Quellen zentral zusammenführen",
                status_active: "Verbunden",
                shield_cloud: "Automatisierte Pipelines",
                shield_cloud_sub: "Regelmäßige, zuverlässige Abläufe",
                status_optimized: "Automatisiert",
                shield_si: "Analyseplattform",
                shield_si_sub: "Data Warehouse oder Lakehouse",
                status_operational: "Analysebereit",
                location_tag: "Ansässig im Kanton Jura (Delsberg - Pruntrut - Saignelégier)",
                services_subtitle: "Data Engineering für KMU",
                services_title: "Besser integrierte Daten, fundiertere Entscheidungen",
                services_desc: "Von der Verbindung Ihrer Anwendungen bis zur zuverlässigen Analyseplattform schaffen wir eine Datenbasis, die Ihrem Unternehmen nutzt.",
                btn_learn_more: "Mehr erfahren",
                s1_title: "Datenquellen integrieren",
                s1_desc: "Verbinden Sie Geschäftsanwendungen, Dateien und Datenbanken zu einer konsistenten Sicht auf Ihr Unternehmen.",
                s2_title: "Datenpipelines & Reporting",
                s2_desc: "Automatisieren Sie Erfassung, Transformation und Bereitstellung Ihrer Daten für regelmäßig aktualisierte Berichte.",
                s3_title: "Data Warehouse & Lakehouse",
                s3_desc: "Planen Sie eine Cloud-Analyseplattform passend zu Datenvolumen, Werkzeugen und Geschäftszielen.",
                s4_title: "Datenqualität & Prozesse",
                s4_desc: "Erkennen Sie Unstimmigkeiten, verbessern Sie Kennzahlen und vereinfachen Sie manuelle Datenprozesse.",
                projects_subtitle: "Ausgewählte Projekte",
                projects_title: "Data-Engineering-Projekte aus der Praxis",
                projects_desc: "Ausgewählte Beispiele für Cloud-Datenpipelines und Datenanalysen anhand konkreter Anwendungsfälle.",
                project1_status: "AWS Data Lakehouse",
                project1_title: "SBB Lakehouse — Cloud Data Engineering auf AWS",
                project1_desc: "Datenpipeline auf Basis öffentlicher Schweizer Verkehrsdaten: Tägliche Aufnahme von 450 bis 500 MB CSV-Dateien von Open Transport Data Switzerland in eine Bronze-Ebene auf Amazon S3 mit AWS Lambda und gestreamtem Multipart-Upload.",
                project1_detail1: "Cloud-Infrastruktur mit Terraform als Infrastructure as Code bereitgestellt.",
                project1_detail2: "GitHub-Actions-CI/CD mit OIDC: Terraform-Plan bei Pull Requests, Apply nach dem Merge.",
                project1_detail3: "Sicherheit mit Least-Privilege-IAM-Rollen, Pre-Commit-Hooks, TFLint und Trivy-Scan.",
                project1_next_label: "Umgesetzte Architektur:",
                project1_next: "Bronze-, Silver- und Gold-Ebenen sowie eine interaktive Seite zum Abfragen der Daten.",
                project2_status: "Datenanalyse",
                project2_title: "Analyse des Schweizer Arbeitsmarkts",
                project2_desc: "Data-Engineering-Projekt von Anfang bis Ende mit 1.895 Schweizer Stellenanzeigen und SQL-Pipelines in DuckDB.",
                project2_detail1: "Datensatz mit Stellenanzeigen aufbereitet und analysiert.",
                project2_detail2: "Ergebnisse statistisch mit Konfidenzintervallen überprüft.",
                project2_detail3: "Kantonale Verteilung der Stellenanzeigen in der Schweiz visualisiert.",
                project2_tag_stats: "Statistische Validierung",
                project3_status: "100 % lokal · offline",
                project3_title: "PTT Poststellenchroniken — Offline-Archivierungspipeline",
                project3_desc: "Eine vollständig lokale OCR- und LLM-Pipeline, die digitalisierte Schweizer Postgeschichtsakten in strukturierte Metadatenentwürfe für die Archivkatalogisierung umwandelt.",
                project3_pipeline_title: "Verarbeitungsschritte",
                project3_detail1: "Wandelt PDFs in Bilder um, klassifiziert Seiten und führt deutsche OCR für gedruckten Text aus.",
                project3_detail2: "Nutzt ein lokales Vision-Language-Modell, um bildhaltige Seiten zu beschreiben.",
                project3_detail3: "Erstellt JSON-Entwürfe für sieben Metadatenfelder mit Prüfoberfläche und Volltextsuche.",
                project3_detail4: "Berücksichtigt Archivierungsregeln: keine Personennamen im Feld „Form und Inhalt“.",
                project3_privacy_title: "Datenschutz & Kontrolle",
                project3_privacy_desc: "Läuft offline auf Apple Silicon – ohne Cloud-APIs oder gehostete LLMs. Personenbezogene Daten bleiben gemäß der BGA-Vereinbarung auf dem lokalen Gerät. Die Entwürfe werden vor der Katalogisierung überprüft.",
                project3_quality_desc: "Tesseract dient als OCR-Fallback, wenn die Surya-Integration mit der festgelegten API nicht funktioniert. Handschriftenerkennung ist integriert, aber standardmäßig deaktiviert.",
                project3_htr_tag: "Kraken / TrOCR · optional",
                project4_status: "Laufendes Projekt · BFH / Inalp AG",
                project4_title: "Modern Energy Communities 2.0 (MEG2.0): Analysis & Billing",
                project4_desc: "Ein Hochschulprojekt an der Berner Fachhochschule (BFH) mit Inalp AG und der InfraHub-Plattform. Untersucht werden die Echtzeitaufnahme von Energietelemetrie und deren Einsatz für Analyse und Abrechnung Schweizer Energiegemeinschaften (ZEV, vZEV, LEG).",
                project4_arch_title: "Untersuchte Architektur",
                project4_detail1: "Erfassung von Zählerdaten und Telemetrie über MQTT/REST in InfraHub.",
                project4_detail2: "Verarbeitung von Zeitreihendaten und Analyseregeln zur Schätzung des Eigenverbrauchs und zur Kostenverteilung.",
                project4_detail3: "Untersuchung flexibler Lastverschiebung, beispielsweise der Boileraufheizung während hoher Solarproduktion.",
                project4_scope_title: "Projektziel",
                project4_scope_desc: "Es wird geprüft, ob aktuellere Daten reaktionsfähigere Energieentscheidungen unterstützen und den Eigenverbrauch erhöhen können. Analyse und Abrechnung für ZEV/vZEV/LEG gehören zum Projektumfang; der Nutzen muss im Projekt noch validiert werden.",
                project4_tag_energy: "Energie-IoT",
                project4_tag_billing: "Analyse & Abrechnung",
                est_badge: "Interaktives Tool",
                est_title: "Schätzen Sie Ihr Datenprojekt ein",
                est_desc: "Wählen Sie die Anforderungen Ihres KMU aus und erhalten Sie eine erste Orientierung.",
                est_size_label: "1. Unternehmensgröße",
                est_opt_1: "1 - 10 Mitarbeiter (Kleinbetrieb)",
                est_opt_2: "11 - 50 Mitarbeiter (KMU)",
                est_opt_3: "51 - 250 Mitarbeiter (Mittleres Unternehmen)",
                est_opt_4: "+250 Mitarbeiter (Großunternehmen)",
                est_domain_label: "2. Prioritäre Anforderungen",
                est_chk_cyber: "Datenquellen integrieren",
                est_chk_cloud: "Automatisierte Pipelines & Reporting",
                est_chk_network: "Data Warehouse / Lakehouse",
                est_chk_quality: "Datenqualität & Prozesse",
                est_urgency_label: "3. Dringlichkeitsstufe",
                est_urg_normal: "Normal (1-2 Monate)",
                est_urg_urgent: "Dringend (< 2 Wochen)",
                est_card_tag: "Richtwert-Schätzung",
                est_per_project: "/ Projekt ca.",
                est_includes: "Die unverbindliche Schätzung hängt von Ihren Datenquellen, Datenmengen und dem Projektumfang ab.",
                est_feat1: "Auf Ihr KMU zugeschnittener Umfang",
                est_feat2: "Fokus auf messbaren Geschäftsergebnissen",
                est_feat3: "Detaillierter Vorschlag nach einem Gespräch",
                est_btn_quote: "Bestätigen und exaktes Angebot anfordern",
                about_tag: "Data Engineering für KMU",
                about_title: "Zuverlässige Datengrundlagen für Ihr Unternehmen",
                about_p1: "JuraIT Consulting unterstützt KMU dabei, verstreute Daten in konsistente Informationen für bessere tägliche Entscheidungen zu verwandeln.",
                about_p2: "Wir berücksichtigen Ihre Werkzeuge, Rahmenbedingungen und Ziele, um eine schrittweise, verständliche und budgetgerechte Lösung vorzuschlagen.",
                about_box1_t: "Pragmatischer Ansatz",
                about_box1_d: "Klare Schritte, ein passender Projektumfang und Ergebnisse mit praktischem Nutzen.",
                about_box2_t: "Nutzbare Daten",
                about_box2_d: "Dokumentierte Datenflüsse, konsistente Kennzahlen und eine erweiterbare Grundlage.",
                method_title: "Unser Data-Engineering-Prozess in 4 Schritten",
                m1_t: "Datenquellen verstehen",
                m1_d: "Erfassen Sie Ihre Werkzeuge, Daten und Entscheidungen, die Sie besser treffen möchten.",
                m2_t: "Zielbild definieren",
                m2_d: "Priorisieren Sie Integrationen, Kennzahlen und eine Architektur passend zu Ihrem Budget.",
                m3_t: "Datenflüsse aufbauen",
                m3_d: "Automatisieren Sie Extraktion, Transformation und Bereitstellung Ihrer Daten.",
                m4_t: "Qualität sichern & verbessern",
                m4_d: "Überwachen Sie die Datenqualität und entwickeln Sie die Lösung mit Ihren Anforderungen weiter.",
                rdv_tag: "Gespräch über Ihr Datenprojekt",
                rdv_title: "Sprechen wir über Ihre Daten und Ziele",
                rdv_desc: "Wählen Sie einen Termin oder schreiben Sie uns, um über Ihre Daten und Ziele zu sprechen.",
                picker_title: "Termin auswählen (Online oder vor Ort)",
                picker_hours: "Verfügbare Zeiten:",
                slot_selected_label: "Ausgewählter Termin:",
                slot_format_info: "Format: Video-Meeting oder in Ihrem Büro.",
                form_title: "Ihre Kontaktdaten",
                form_fullname: "Vor- & Nachname *",
                form_email: "Geschäftliche E-Mail *",
                form_company: "Unternehmensname",
                form_phone: "Telefon",
                form_message: "Hauptthema / Nachricht",
                form_privacy: "Ich stimme zu, dass meine Daten gemäß der Datenschutzerklärung (Schweizer nDSG konform) verarbeitet werden.",
                form_submit: "Terminanfrage Bestätigen",
                form_sending: "Wird gesendet…",
                form_error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.",
                form_delivery_notice: "Ihre Nachricht wird an mustafa@jurait.ch gesendet.",
                success_title: "Anfrage erfolgreich gesendet!",
                success_msg: "Vielen Dank für Ihre Nachricht. Wir werden uns so bald wie möglich bei Ihnen melden.",
                info_address_title: "Hauptadresse",
                info_email_title: "E-Mail & Kontakt",
                info_phone_title: "Support Telefon",
                footer_desc: "Data Engineering für KMU: Integration, Pipelines, Analyseplattformen und Datenqualität.",
                signature_label: "Ihr Data-Partner im Jura",
                signature_role: "Data Engineering für KMU",
                signature_cta: "Sprechen wir über Ihr Projekt",
                signature_tagline: "Verlässliche Daten. Klarere Entscheidungen.",
                footer_zone_title: "Einsatzgebiet",
                footer_legal_title: "Rechtliche Informationen",
                footer_privacy: "Datenschutzerklärung",
                footer_terms: "Impressum",
                modal_included: "In diesem Service enthalten:",
                modal_quote_btn: "Angebot für diesen Service anfordern"
            },
            en: {
                nav_home: "Home",
                nav_services: "Services",
                nav_projects: "Projects",
                nav_about: "About Us",
                nav_estimator: "Estimator",
                nav_contact: "Contact",
                nav_book: "Book Appointment",
                hero_badge: "Data Engineering for SMEs in Canton Jura",
                hero_title: 'Turn your data into better decisions with a <span class="text-gradient">reliable</span> data foundation.',
                hero_desc: "We help SMEs connect their data, automate pipelines, and build analytics platforms suited to their needs.",
                hero_btn_audit: "Let's talk about your data",
                hero_btn_services: "Explore Services",
                stat_lpd: "Connected data sources",
                stat_response: "Automated pipelines",
                stat_support: "Clearer decisions",
                shield_cyber: "Data integration",
                shield_cyber_sub: "Bring sources together",
                status_active: "Connected",
                shield_cloud: "Automated pipelines",
                shield_cloud_sub: "Reliable, recurring data flows",
                status_optimized: "Automated",
                shield_si: "Analytics platform",
                shield_si_sub: "Data warehouse or lakehouse",
                status_operational: "Ready to analyze",
                location_tag: "Based in Canton Jura (Delémont - Porrentruy - Saignelégier)",
                services_subtitle: "Data Engineering for SMEs",
                services_title: "Connected data. Better-informed decisions.",
                services_desc: "From connecting your tools to building a reliable analytics platform, we create a data foundation that supports your business.",
                btn_learn_more: "Learn more",
                s1_title: "Data Source Integration",
                s1_desc: "Connect business tools, files, and databases to create a consistent view of your operations.",
                s2_title: "Data Pipelines & Reporting",
                s2_desc: "Automate data collection, transformation, and delivery into regularly refreshed reports.",
                s3_title: "Data Warehouse & Lakehouse",
                s3_desc: "Design a cloud analytics foundation that fits your data volumes, tools, and business goals.",
                s4_title: "Data Quality & Process Improvement",
                s4_desc: "Find inconsistencies, improve trusted metrics, and simplify manual work around your data.",
                projects_subtitle: "Selected projects",
                projects_title: "Data engineering work in practice",
                projects_desc: "Selected examples of cloud data pipelines and analysis applied to real-world use cases.",
                project1_status: "AWS Data Lakehouse",
                project1_title: "SBB Lakehouse — Cloud Data Engineering on AWS",
                project1_desc: "A pipeline built with public Swiss transport data: daily ingestion of around 450–500 MB CSV files from Open Transport Data Switzerland into an Amazon S3 bronze layer using AWS Lambda and multipart streaming upload.",
                project1_detail1: "Cloud infrastructure deployed with Terraform as Infrastructure as Code.",
                project1_detail2: "GitHub Actions CI/CD with OIDC: Terraform plan on pull requests, apply after merge.",
                project1_detail3: "Security practices include least-privilege IAM roles, pre-commit hooks, TFLint, and Trivy scanning.",
                project1_next_label: "Implemented architecture:",
                project1_next: "Bronze, Silver, and Gold layers, plus an interactive page for querying the data.",
                project2_status: "Data analysis",
                project2_title: "Swiss Job Market Analysis",
                project2_desc: "An end-to-end data engineering project analyzing 1,895 Swiss job postings, with SQL pipelines built in DuckDB.",
                project2_detail1: "Prepared and analyzed a dataset of job postings.",
                project2_detail2: "Statistically validated results using confidence intervals.",
                project2_detail3: "Visualized the cantonal distribution of job postings across Switzerland.",
                project2_tag_stats: "Statistical validation",
                project3_status: "100% local · offline",
                project3_title: "PTT Offline Archival Metadata Pipeline",
                project3_desc: "A fully local OCR and LLM pipeline that turns scanned Swiss postal-history dossiers into structured metadata drafts for archival cataloguing.",
                project3_pipeline_title: "Processing pipeline",
                project3_detail1: "Converts PDFs to images, classifies pages, and runs German printed-text OCR.",
                project3_detail2: "Uses a local vision-language model to describe image-containing pages.",
                project3_detail3: "Generates JSON drafts for seven metadata fields, with a review interface and full-text search.",
                project3_detail4: "Applies archival guidance: no personal names in the “Form und Inhalt” field.",
                project3_privacy_title: "Privacy & review",
                project3_privacy_desc: "Runs offline on Apple Silicon with no cloud APIs or hosted LLMs. Personal data stays on the local machine under the BGA agreement. Drafts are intended for review before cataloguing.",
                project3_quality_desc: "Tesseract is used as the OCR fallback when the pinned Surya integration does not work with its API. Handwriting recognition is wired in but disabled by default.",
                project3_htr_tag: "Kraken / TrOCR · optional",
                project4_status: "In progress · BFH / Inalp AG",
                project4_title: "Modern Energy Communities 2.0 (MEG2.0): Analysis & Billing",
                project4_desc: "A university project at Bern University of Applied Sciences (BFH) with Inalp AG and its InfraHub platform. It explores real-time energy telemetry ingestion and its use in analyzing and billing Swiss energy communities (ZEV, vZEV, LEG).",
                project4_arch_title: "Architecture under study",
                project4_detail1: "Ingests meter readings and telemetry into InfraHub via MQTT/REST.",
                project4_detail2: "Processes time-series data and analysis rules to estimate self-consumption and allocate costs.",
                project4_detail3: "Explores flexible load shifting, such as heating a domestic hot-water boiler during peak solar generation.",
                project4_scope_title: "Project objective",
                project4_scope_desc: "Evaluate whether fresher data can support more responsive energy decisions and help increase the self-consumption rate. Analysis and billing for ZEV/vZEV/LEG models are within scope; benefits remain to be validated through the project.",
                project4_tag_energy: "Energy IoT",
                project4_tag_billing: "Analysis & billing",
                est_badge: "Interactive Tool",
                est_title: "Scope your data project",
                est_desc: "Select your SME's needs to get an initial, indicative estimate.",
                est_size_label: "1. Company Size",
                est_opt_1: "1 - 10 employees (Micro-business)",
                est_opt_2: "11 - 50 employees (SME)",
                est_opt_3: "51 - 250 employees (Mid-size business)",
                est_opt_4: "+250 employees (Enterprise)",
                est_domain_label: "2. Priority needs",
                est_chk_cyber: "Data source integration",
                est_chk_cloud: "Automated pipelines & reporting",
                est_chk_network: "Data warehouse / lakehouse",
                est_chk_quality: "Data quality & process improvement",
                est_urgency_label: "3. Urgency Level",
                est_urg_normal: "Normal (1-2 months)",
                est_urg_urgent: "Urgent (< 2 weeks)",
                est_card_tag: "Indicative Estimate",
                est_per_project: "/ approx. project",
                est_includes: "This indicative estimate varies with your data sources, data volumes, and project scope.",
                est_feat1: "Scope tailored to your SME",
                est_feat2: "Focus on measurable business outcomes",
                est_feat3: "Detailed proposal after an initial discussion",
                est_btn_quote: "Confirm and request exact proposal",
                about_tag: "Data Engineering for SMEs",
                about_title: "Reliable data foundations for your business",
                about_p1: "JuraIT Consulting helps SMEs turn scattered data into consistent information that supports better day-to-day decisions.",
                about_p2: "We consider your tools, constraints, and goals to propose a phased, understandable solution that fits your budget.",
                about_box1_t: "A practical approach",
                about_box1_d: "Clear steps, a manageable scope, and outcomes that support your business.",
                about_box2_t: "Data you can use",
                about_box2_d: "Documented pipelines, consistent metrics, and a foundation designed to grow.",
                method_title: "Our 4-step data approach",
                m1_t: "Understand your data sources",
                m1_d: "Map your tools and data, and clarify the decisions you want to improve.",
                m2_t: "Define the target",
                m2_d: "Prioritize integrations, metrics, and an architecture that fits your budget.",
                m3_t: "Build the pipelines",
                m3_d: "Automate data extraction, transformation, and delivery.",
                m4_t: "Validate & improve",
                m4_d: "Monitor data quality and evolve the solution as your needs change.",
                rdv_tag: "Discuss your data project",
                rdv_title: "Let's discuss your data and business goals",
                rdv_desc: "Choose a time or message us to discuss your data and business goals.",
                picker_title: "Select a time slot (Video call or On-site)",
                picker_hours: "Available times:",
                slot_selected_label: "Selected time slot:",
                slot_format_info: "Format: Video meeting or at your office.",
                form_title: "Your Contact Details",
                form_fullname: "Full Name *",
                form_email: "Business Email *",
                form_company: "Company Name",
                form_phone: "Phone Number",
                form_message: "Main Subject / Message",
                form_privacy: "I consent to having my data processed in accordance with privacy laws (Swiss nFADP compliant).",
                form_submit: "Confirm Appointment Request",
                form_sending: "Sending…",
                form_error: "The message could not be sent. Please try again or email us directly.",
                form_delivery_notice: "Your message will be sent to mustafa@jurait.ch.",
                success_title: "Request Sent Successfully!",
                success_msg: "Thank you for your message. We will contact you shortly.",
                info_address_title: "Main Office Address",
                info_email_title: "Email & Contact",
                info_phone_title: "Support Hotline",
                footer_desc: "Data engineering for SMEs: integration, pipelines, analytics platforms, and data quality.",
                signature_label: "Your data partner in Jura",
                signature_role: "Data Engineering for SMEs",
                signature_cta: "Let’s talk about your project",
                signature_tagline: "Reliable data. Clearer decisions.",
                footer_zone_title: "Service Area",
                footer_legal_title: "Legal Information",
                footer_privacy: "Privacy Policy",
                footer_terms: "Terms & Conditions",
                modal_included: "Included in this service:",
                modal_quote_btn: "Request a proposal for this service"
            }
        };

        // Service Details Multi-lingual Data
        const serviceDetailsByLang = {
            fr: {
                service1: {
                    title: "Intégration des sources de données",
                    icon: "fa-diagram-project",
                    color: "text-brand-teal",
                    desc: "Rassemblez les données de vos outils métier dans une vue cohérente, sans ressaisie manuelle.",
                    features: ["Connexion d'ERP, CRM, fichiers et bases de données", "Synchronisation et consolidation des sources", "Modèle de données commun adapté à votre activité", "Documentation des flux et des dépendances"]
                },
                service2: {
                    title: "Pipelines de données & reporting",
                    icon: "fa-arrows-rotate",
                    color: "text-sky-600",
                    desc: "Automatisez le déplacement et la préparation de vos données afin de disposer de rapports actualisés et reproductibles.",
                    features: ["Collecte planifiée depuis vos outils", "Transformation et préparation automatisées", "Alimentation de tableaux de bord", "Suivi des exécutions et signalement des erreurs"]
                },
                service3: {
                    title: "Entrepôt de données & lakehouse",
                    icon: "fa-cloud",
                    color: "text-indigo-600",
                    desc: "Mettez en place une plateforme analytique cloud dimensionnée selon vos besoins, vos outils et votre budget.",
                    features: ["Choix d'une architecture adaptée à vos usages", "Organisation des données pour l'analyse", "Fondations évolutives pour les rapports et analyses", "Accompagnement à la mise en service"]
                },
                service4: {
                    title: "Qualité des données & processus",
                    icon: "fa-circle-check",
                    color: "text-emerald-600",
                    desc: "Améliorez la confiance dans vos indicateurs en repérant les problèmes de qualité et les tâches manuelles répétitives.",
                    features: ["Détection des doublons et valeurs incohérentes", "Règles de validation et contrôles récurrents", "Nettoyage et normalisation des données", "Recommandations pour simplifier les processus"]
                }
            },
            de: {
                service1: {
                    title: "Datenquellen integrieren",
                    icon: "fa-diagram-project",
                    color: "text-brand-teal",
                    desc: "Führen Sie Daten aus Ihren Geschäftsanwendungen in einer konsistenten Sicht zusammen – ohne manuelle Doppelerfassung.",
                    features: ["Anbindung von ERP, CRM, Dateien und Datenbanken", "Synchronisierung und Zusammenführung von Quellen", "Gemeinsames Datenmodell passend zu Ihrem Geschäft", "Dokumentation von Datenflüssen und Abhängigkeiten"]
                },
                service2: {
                    title: "Datenpipelines & Reporting",
                    icon: "fa-arrows-rotate",
                    color: "text-sky-600",
                    desc: "Automatisieren Sie den Transport und die Aufbereitung Ihrer Daten für aktuelle und reproduzierbare Berichte.",
                    features: ["Geplante Datenerfassung aus Ihren Werkzeugen", "Automatisierte Transformation und Aufbereitung", "Aktualisierung Ihrer Dashboards", "Überwachung der Abläufe und Fehlermeldungen"]
                },
                service3: {
                    title: "Data Warehouse & Lakehouse",
                    icon: "fa-cloud",
                    color: "text-indigo-600",
                    desc: "Richten Sie eine Cloud-Analyseplattform ein, die zu Ihren Anforderungen, Werkzeugen und Ihrem Budget passt.",
                    features: ["Architektur passend zu Ihren Anwendungsfällen", "Strukturierung der Daten für Analysen", "Erweiterbare Grundlage für Berichte und Auswertungen", "Begleitung bei der Inbetriebnahme"]
                },
                service4: {
                    title: "Datenqualität & Prozesse",
                    icon: "fa-circle-check",
                    color: "text-emerald-600",
                    desc: "Stärken Sie das Vertrauen in Ihre Kennzahlen, indem Sie Datenprobleme und wiederkehrende manuelle Aufgaben angehen.",
                    features: ["Erkennung von Duplikaten und widersprüchlichen Werten", "Validierungsregeln und wiederkehrende Prüfungen", "Bereinigung und Standardisierung der Daten", "Empfehlungen zur Vereinfachung von Abläufen"]
                }
            },
            en: {
                service1: {
                    title: "Data Source Integration",
                    icon: "fa-diagram-project",
                    color: "text-brand-teal",
                    desc: "Bring data from your business tools into a consistent view without repetitive manual entry.",
                    features: ["Connect ERP, CRM, files, and databases", "Synchronize and consolidate data sources", "Create a shared data model for your business", "Document data flows and dependencies"]
                },
                service2: {
                    title: "Data Pipelines & Reporting",
                    icon: "fa-arrows-rotate",
                    color: "text-sky-600",
                    desc: "Automate the movement and preparation of your data for regularly refreshed, repeatable reporting.",
                    features: ["Schedule collection from your business tools", "Automate data transformation and preparation", "Keep dashboards supplied with current data", "Monitor runs and surface failures"]
                },
                service3: {
                    title: "Data Warehouse & Lakehouse",
                    icon: "fa-cloud",
                    color: "text-indigo-600",
                    desc: "Build a cloud analytics platform sized for your needs, tools, and budget.",
                    features: ["Choose an architecture for your use cases", "Organize data for analytics", "Create a foundation that can grow with reporting needs", "Support the setup and handover"]
                },
                service4: {
                    title: "Data Quality & Process Improvement",
                    icon: "fa-circle-check",
                    color: "text-emerald-600",
                    desc: "Improve trust in your metrics by addressing data quality issues and recurring manual tasks.",
                    features: ["Find duplicates and inconsistent values", "Set up validation rules and recurring checks", "Clean and standardize datasets", "Recommend practical process improvements"]
                }
            }
        };

        // Function to switch website language dynamically
        function changeLanguage(lang) {
            if (!i18n[lang]) return;
            currentLang = lang;
            document.documentElement.lang = lang;

            // Update UI elements with data-i18n attributes
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (i18n[lang][key]) {
                    el.innerHTML = i18n[lang][key];
                }
            });

            // Keep desktop and mobile language controls in sync.
            document.querySelectorAll('[data-language]').forEach(btn => {
                const isActive = btn.dataset.language === lang;
                btn.setAttribute('aria-pressed', String(isActive));

                if (btn.classList.contains('m-lang-btn')) {
                    btn.className = isActive
                        ? 'm-lang-btn px-3 py-1 rounded bg-brand-teal text-white'
                        : 'm-lang-btn px-3 py-1 rounded bg-slate-100 text-slate-600';
                } else {
                    btn.className = isActive
                        ? 'lang-btn px-2 py-1 rounded shadow-xs bg-white text-brand-navy font-bold transition-all'
                        : 'lang-btn px-2 py-1 rounded hover:text-brand-teal opacity-60 transition-all';
                }
            });

            // Re-calculate estimate text and refresh the localized booking dates
            calculateEstimate();
            renderDaySelector();
        }

        // Booking dates are generated from the Europe/Zurich calendar.
        let selectedDate = null;
        let selectedDay = '';
        let selectedTime = '10:30';

        const bookingLocales = { fr: 'fr-CH', de: 'de-CH', en: 'en-GB' };

        function getTodayInZurich() {
            const parts = new Intl.DateTimeFormat('en-CA', {
                timeZone: 'Europe/Zurich',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).formatToParts(new Date());
            const values = {};
            parts.forEach(part => { values[part.type] = part.value; });
            return new Date(Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day)));
        }

        function getUpcomingBusinessDays(count = 4) {
            const date = getTodayInZurich();
            const dates = [];
            date.setUTCDate(date.getUTCDate() + 1);
            while (dates.length < count) {
                const weekday = date.getUTCDay();
                if (weekday !== 0 && weekday !== 6) dates.push(new Date(date.getTime()));
                date.setUTCDate(date.getUTCDate() + 1);
            }
            return dates;
        }

        function dateToKey(date) {
            return date.toISOString().slice(0, 10);
        }

        function dateFromKey(key) {
            const [year, month, day] = key.split('-').map(Number);
            return new Date(Date.UTC(year, month - 1, day));
        }

        function formatBookingDate(date, options) {
            return new Intl.DateTimeFormat(bookingLocales[currentLang] || 'fr-CH', {
                ...options,
                timeZone: 'UTC'
            }).format(date);
        }

        function renderDaySelector() {
            const selector = document.getElementById('day-selector');
            if (!selector) return;

            const dates = getUpcomingBusinessDays();
            const selectedKey = selectedDate ? dateToKey(selectedDate) : '';
            if (!dates.some(date => dateToKey(date) === selectedKey)) selectedDate = dates[0];

            selectedDay = formatBookingDate(selectedDate, {
                weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
            });
            selector.innerHTML = '';

            dates.forEach(date => {
                const key = dateToKey(date);
                const isSelected = key === dateToKey(selectedDate);
                const weekdayLabel = formatBookingDate(date, { weekday: 'short' })
                    .replace(/\\.$/, '')
                    .toLocaleUpperCase(bookingLocales[currentLang] || 'fr-CH');
                const dateLabel = formatBookingDate(date, { day: 'numeric', month: 'short' });
                const fullDateLabel = formatBookingDate(date, {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
                });

                const button = document.createElement('button');
                button.type = 'button';
                button.dataset.day = key;
                button.setAttribute('aria-label', fullDateLabel);
                button.setAttribute('aria-pressed', String(isSelected));
                button.className = isSelected
                    ? 'day-btn py-3 rounded-xl border border-brand-teal bg-brand-teal/20 text-center transition-all'
                    : 'day-btn py-3 rounded-xl border border-slate-700 bg-slate-900 text-center hover:border-brand-teal transition-all';

                const weekdaySpan = document.createElement('span');
                weekdaySpan.className = isSelected
                    ? 'block text-[10px] text-brand-teal font-bold uppercase'
                    : 'block text-[10px] text-slate-400 uppercase';
                weekdaySpan.textContent = weekdayLabel;

                const dateSpan = document.createElement('span');
                dateSpan.className = 'block text-sm font-bold text-white';
                dateSpan.textContent = dateLabel;

                button.appendChild(weekdaySpan);
                button.appendChild(dateSpan);
                selector.appendChild(button);
            });

            updateSlotText();
        }

        // Urgency state for estimator
        let currentUrgency = 'normal';

        // Mobile Menu Toggle logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Open Modal Function
        function openModal(serviceKey) {
            const data = serviceDetailsByLang[currentLang][serviceKey];
            if (!data) return;

            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = `
                <div class="flex items-center space-x-3 mb-4">
                    <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center ${data.color} text-2xl">
                        <i class="fa-solid ${data.icon}"></i>
                    </div>
                    <h3 class="text-xl font-bold text-brand-navy">${data.title}</h3>
                </div>
                <p class="text-slate-600 text-sm mb-6 leading-relaxed">${data.desc}</p>
                <div class="space-y-3 mb-6">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400">${i18n[currentLang].modal_included}</h4>
                    ${data.features.map(f => `
                        <div class="flex items-start text-xs font-medium text-slate-700">
                            <i class="fa-solid fa-circle-check text-brand-teal mt-0.5 mr-2"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
                <button data-action="modal-quote" class="w-full bg-brand-teal text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors">
                    ${i18n[currentLang].modal_quote_btn}
                </button>
            `;

            document.getElementById('service-modal').classList.remove('hidden');
        }

        // Close Modal Function
        function closeModal() {
            document.getElementById('service-modal').classList.add('hidden');
        }

        // Estimator Calculation Logic
        function calculateEstimate() {
            const companySize = parseInt(document.getElementById('est-size').value) || 1;
            const integration = document.getElementById('service-integration').checked;
            const pipelines = document.getElementById('service-pipelines').checked;
            const platform = document.getElementById('service-platform').checked;
            const quality = document.getElementById('service-quality').checked;

            let basePrice = 1000;

            if (companySize === 2) basePrice += 500;
            if (companySize === 3) basePrice += 1200;
            if (companySize === 4) basePrice += 2500;

            let servicesCount = 0;
            if (integration) servicesCount += 600;
            if (pipelines) servicesCount += 700;
            if (platform) servicesCount += 1200;
            if (quality) servicesCount += 400;

            let total = basePrice + servicesCount;
            if (currentUrgency === 'urgent') total *= 1.25;

            // Formatted CHF string
            const langLocales = { fr: 'fr-CH', de: 'de-CH', en: 'en-US' };
            const formatted = Math.round(total).toLocaleString(langLocales[currentLang] || 'fr-CH');
            document.getElementById('est-price').innerText = formatted;
        }

        function setUrgency(type) {
            currentUrgency = type;
            const btnNormal = document.getElementById('urgency-normal');
            const btnUrgent = document.getElementById('urgency-urgent');

            if (type === 'normal') {
                btnNormal.className = "urgency-btn py-2.5 px-4 rounded-xl border border-brand-teal bg-brand-teal text-white font-medium text-sm transition-all";
                btnUrgent.className = "urgency-btn py-2.5 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-sm transition-all";
            } else {
                btnUrgent.className = "urgency-btn py-2.5 px-4 rounded-xl border border-brand-teal bg-brand-teal text-white font-medium text-sm transition-all";
                btnNormal.className = "urgency-btn py-2.5 px-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-sm transition-all";
            }

            calculateEstimate();
        }

        function prefillEstimateDetails() {
            const price = document.getElementById('est-price').innerText;
            const messageInput = document.getElementById('contact-message');
            const selectedNeeds = [...document.querySelectorAll('#estimation input[type="checkbox"]:checked')]
                .map(input => input.nextElementSibling.textContent.trim());
            const estimateMessage = {
                fr: "Demande depuis l'estimateur",
                de: "Anfrage über den Projekt-Rechner",
                en: "Request from project estimator"
            }[currentLang];
            const needsLabel = { fr: "Besoins", de: "Bedarf", en: "Needs" }[currentLang];
            const estimateLabel = { fr: "Estimation indicative", de: "Unverbindliche Schätzung", en: "Indicative estimate" }[currentLang];
            messageInput.value = `[${estimateMessage}] ${needsLabel}: ${selectedNeeds.join(', ')}. ${estimateLabel}: CHF ${price}.`;
        }

        // Calendar Slot Selection Logic
        function selectDay(dateKey) {
            selectedDate = dateFromKey(dateKey);
            renderDaySelector();
        }

        function selectTime(btn, timeText) {
            document.querySelectorAll('.time-btn').forEach(b => {
                b.type = 'button';
                b.setAttribute('aria-pressed', String(b === btn));
                b.className = b === btn
                    ? 'time-btn py-2 rounded-lg border border-brand-teal bg-brand-teal text-xs font-bold text-white'
                    : 'time-btn py-2 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:border-brand-teal';
            });

            selectedTime = timeText;
            updateSlotText();
        }

        function getSelectedAppointment() {
            if (!selectedDay || !selectedTime) return '';
            const connector = { fr: 'à', de: 'um', en: 'at' }[currentLang] || 'à';
            return `${selectedDay} ${connector} ${selectedTime}`;
        }

        function updateSlotText() {
            const selectedSlot = document.getElementById('selected-slot-text');
            if (!selectedSlot) return;
            selectedSlot.textContent = getSelectedAppointment() || '—';
        }

        // Contact Form Submission Handler
        async function handleFormSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('contact-form');
            const successBox = document.getElementById('form-success');
            const errorMessage = document.getElementById('form-error');
            const submitButton = form.querySelector('[type="submit"]');
            const submitLabel = submitButton.querySelector('[data-i18n="form_submit"]');
            const submitText = submitLabel.textContent;
            const formData = new URLSearchParams(new FormData(form));
            formData.set('_replyto', formData.get('email'));
            formData.set('_template', 'table');
            const selectedAppointment = getSelectedAppointment();
            if (selectedAppointment) {
                formData.set('selected_appointment', selectedAppointment);
            } else {
                formData.delete('selected_appointment');
            }

            errorMessage.classList.add('hidden');
            submitButton.disabled = true;
            submitLabel.textContent = i18n[currentLang].form_sending;

            try {
                const response = await fetch('https://formsubmit.co/ajax/mustafa@jurait.ch', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    body: formData.toString()
                });
                const result = await response.json();

                if (!response.ok || result.success !== 'true' && result.success !== true) {
                    throw new Error(result.message || `Form submission failed (${response.status})`);
                }

                form.classList.add('hidden');
                successBox.classList.remove('hidden');
            } catch (error) {
                console.error('Contact form submission failed:', error);
                errorMessage.classList.remove('hidden');
            } finally {
                submitButton.disabled = false;
                submitLabel.textContent = submitText;
            }
        }

        document.addEventListener('click', (event) => {
            const clickedElement = event.target instanceof Element ? event.target : null;
            const target = clickedElement?.closest('[data-language], [data-open-modal], [data-urgency], [data-day], [data-time], [data-action]');
            if (!target) return;

            if (target.dataset.language) {
                changeLanguage(target.dataset.language);
            } else if (target.dataset.openModal) {
                openModal(target.dataset.openModal);
            } else if (target.dataset.urgency) {
                setUrgency(target.dataset.urgency);
            } else if (target.dataset.day) {
                selectDay(target.dataset.day);
            } else if (target.dataset.time) {
                selectTime(target, target.dataset.time);
            } else if (target.dataset.action === 'scroll-top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (target.dataset.action === 'prefill-estimate') {
                prefillEstimateDetails();
            } else if (target.dataset.action === 'close-modal') {
                closeModal();
            } else if (target.dataset.action === 'modal-quote') {
                closeModal();
                location.href = '#rdv-section';
            }
        });

        document.getElementById('estimation')?.addEventListener('change', (event) => {
            if (event.target.matches('select, input[type="checkbox"]')) {
                calculateEstimate();
            }
        });

        document.getElementById('contact-form')?.addEventListener('submit', handleFormSubmit);

        // Initialize once the DOM is available without relying on window.onload.
        let pageInitialized = false;
        function initializePage() {
            if (pageInitialized) return;
            pageInitialized = true;

            renderDaySelector();
            document.querySelectorAll('.time-btn').forEach(btn => {
                btn.type = 'button';
                btn.setAttribute('aria-pressed', String(btn.dataset.time === selectedTime));
            });
            calculateEstimate();
            updateSlotText();
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePage, { once: true });
        } else {
            initializePage();
        }
