export const site = {
  name: "Elena Bérard",
  title: "Conseillère en gestion de patrimoine",
  phone: "06 64 24 62 69",
  phoneHref: "tel:+33664246269",
  email: "contact@elenaberard.fr",
  emailHref: "mailto:contact@elenaberard.fr",
  address: "165 Rue du Général de Gaulle, 69530 Brignais",
  orias: "23004679",
  siren: "914 621 777",
  linkedin: "https://www.linkedin.com/",
  calendly: "https://calendly.com/elena-berard/rendez-vous-decouverte",
  whatsapp: "https://wa.me/33664246269",
  baseUrl: "https://www.elenaberard.fr"
} as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/services#expertises" },
  { label: "Changer de carrière", href: "/changer-de-carriere" },
  { label: "Contact", href: "/contact" }
] as const;

export const contactMethods = [
  {
    label: "Prendre rendez-vous",
    value: "Calendly",
    href: site.calendly,
    kind: "calendar",
    description: "Planifier un premier échange découverte."
  },
  {
    label: "Téléphone",
    value: site.phone,
    href: site.phoneHref,
    kind: "phone",
    description: "Appeler directement pour une demande rapide."
  },
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    kind: "whatsapp",
    description: "Envoyer un message court et être recontacté."
  },
  {
    label: "Email",
    value: site.email,
    href: site.emailHref,
    kind: "email",
    description: "Décrire votre situation avec quelques éléments de contexte."
  }
] as const;
