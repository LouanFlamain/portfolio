import { title } from "process";
import { HoverEffect } from "../../ui/card-hover-effect";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Paint",
      description:
        "Création d'une web app paint en NextJS avec l'api canvas et une base de donnée pour la sauvegarde des Datas",
    },
    {
      title: "Gestionnaire de Restaurants",
      description:
        "Création d'une application de centralisation de restaurant permettant de consulter les menu et de commander, incluant aussi un panel admin permettant de gérer son restaurant et d'accepter les commandes et de les mettres à jour.",
    },
    {
      title: "Analyseur de Réseau",
      description:
        "Application en symfony avec twig de surveillance de mon réseau wifi et système d'historique afin de savoir qui s'y est connecté et à qu'elle heure, hébergement local sur serveur linux et script bash pour scanner le réseau avec le protocole ARP",
    },
    {
      title: "Script d'automatisation du web",
      description:
        "Script NodeJS permettant d'automatiser des tâches/navigation en suivant une liste d'action à effectuer indiqué dans un fichier json. Utilisation de l'api Selenium",
    },
    {
      title: "Système de messagerie instantané",
      description:
        "Création d'un système de messagerie instantané avec symfony et React, incluant un hub mercure afin d'assurer la réception des messages en temps réel, système de cryptage asynchrone des datas",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-between gap-12 mb-28 py-12 w-full min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-center">Projets</h1>
        <h2 className="text-center">Scolaires et personnels</h2>
      </div>
      <div className="flex flex-col items-center">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};
