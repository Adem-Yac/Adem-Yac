import r3pHome from "@/assets/projects/r3p/r3p-home.png";
import r3pProduct from "@/assets/projects/r3p/r3p-product.png";
import r3pCheckout from "@/assets/projects/r3p/r3p-checkout.png";
import r3pAdmin from "@/assets/projects/r3p/r3p-admin.png";

import bougieHome from "@/assets/projects/bougie/bougie-home.png";
import bougieModal from "@/assets/projects/bougie/bougie-modal.png";
import bougieProduct from "@/assets/projects/bougie/bougie-product.png";
import bougieAdmin from "@/assets/projects/bougie/bougie-admin.png";

import kingDashboard from "@/assets/projects/king-livraison/king-dashboard.png";
import kingLivraisons from "@/assets/projects/king-livraison/king-livraisons.png";
import kingGps from "@/assets/projects/king-livraison/king-gps.png";
import kingFlotte from "@/assets/projects/king-livraison/king-flotte.png";
import kingEmployes from "@/assets/projects/king-livraison/king-employes.png";
import kingMaintenance from "@/assets/projects/king-livraison/king-maintenance.png";
import kingSettings from "@/assets/projects/king-livraison/king-settings.png";

export type ShowcaseProject = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  images: { src: string; alt: string }[];
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: "r3p-store",
    title: "R3P — Boutique E-commerce (Vêtements)",
    subtitle: "Boutique personnalisée avec admin, commandes, promos et statistiques.",
    description:
      "Site e-commerce orienté performance, avec une expérience d’achat fluide (produits, variantes, panier, commande) et un espace d’administration pour gérer le catalogue et suivre l’activité.",
    highlights: [
      "Admin: suivi des commandes, ajout/modification produits",
      "Gestion catégories, genres, codes promo",
      "Statistiques (ventes, commandes, produits)",
      "Responsive (mobile/tablette/desktop)",
    ],
    stack: ["React", "API PHP", "PostgreSQL", "Admin Dashboard"],
    liveUrl: "https://r3p-store.vercel.app",
    images: [
      { src: r3pHome, alt: "R3P Store — page d’accueil" },
      { src: r3pProduct, alt: "R3P Store — page produit" },
      { src: r3pCheckout, alt: "R3P Store — commande / checkout" },
      { src: r3pAdmin, alt: "R3P Admin — gestion produits" },
    ],
  },
  {
    slug: "bougie-beaute",
    title: "L’Atelier Bougie — Boutique E-commerce (Bougies artisanales)",
    subtitle: "Commande en ligne + admin (produits, commandes, vidéos, promos).",
    description:
      "Boutique e-commerce dédiée aux bougies artisanales avec fiches produits riches, modal de commande, et une interface admin pour gérer produits/commandes et contenu (vidéos, promos).",
    highlights: [
      "Admin: ajout produits, suivi commandes",
      "Ajout vidéos / contenu marketing",
      "Codes promo et mise en avant des promos",
      "Responsive (mobile/tablette/desktop)",
    ],
    stack: ["React", "API PHP", "PostgreSQL", "Admin Dashboard"],
    liveUrl: "https://bougie-beaute.vercel.app",
    images: [
      { src: bougieHome, alt: "L’Atelier Bougie — page d’accueil" },
      { src: bougieProduct, alt: "L’Atelier Bougie — fiche produit" },
      { src: bougieModal, alt: "L’Atelier Bougie — modal commande" },
      { src: bougieAdmin, alt: "Admin — gestion produits" },
    ],
  },
  {
    slug: "king-livraison",
    title: "King Livraison — Fleet & Livraisons",
    subtitle: "Dashboard web + app mobile pour gérer flotte, GPS live et livraisons.",
    description:
      "King Livraison est une plateforme logistique complète : un back-office web pour le Super Admin / gestionnaire (flotte, commandes, RH, maintenance, revenus) et une application mobile Flutter pour le suivi terrain (aperçu flotte, livraisons, GPS live). La carte OpenStreetMap affiche les motos en temps réel (actif, en livraison, maintenance, hors service), avec filtres et recherche par matricule.",
    highlights: [
      "Dashboard flotte : KPIs motos actives, en livraison, maintenance, livreurs",
      "GPS Live (OpenStreetMap) : positions, vitesse, alertes excès",
      "Module livraisons : commandes, statuts (attente / en cours / livré), rapports",
      "App mobile Flutter : Accueil, Livraison, GPS, Flotte, Paramètres",
      "RH & maintenance : employés, interventions, pièces, alertes kilométrage",
      "Thème clair/sombre + multi-langue (FR / EN / AR)",
    ],
    stack: [
      "React",
      "Flutter",
      "OpenStreetMap / Leaflet",
      "GPS temps réel",
      "API REST",
      "Dashboard Admin",
    ],
    liveUrl: "",
    images: [
      { src: kingDashboard, alt: "King Livraison — dashboard flotte + app mobile" },
      { src: kingLivraisons, alt: "King Livraison — module livraisons (web + mobile)" },
      { src: kingGps, alt: "King Livraison — GPS Live (carte OSM + mobile)" },
      { src: kingFlotte, alt: "King Livraison — dashboard flotte" },
      { src: kingEmployes, alt: "King Livraison — ajout d’un employé" },
      { src: kingMaintenance, alt: "King Livraison — nouvelle intervention maintenance" },
      { src: kingSettings, alt: "King Livraison — paramètres (langue, thème, session)" },
    ],
  },
];

export function getShowcaseProject(slug: string): ShowcaseProject | undefined {
  return showcaseProjects.find((p) => p.slug === slug);
}
