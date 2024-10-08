"use client"; // Assurez-vous que c'est un composant client
import { useState } from 'react'; // Importation de useState pour gérer l'état
import { Line } from 'react-chartjs-2'; // Importation du graphique linéaire de Chart.js
import { Chart, registerables } from 'chart.js'; // Importation de Chart et des modules nécessaires
import Sidebar from './components/Sidebar'; // Importation de la barre latérale
import Navbar from './components/Navbar'; // Importation de la barre de navigation
import { FaFilter, FaClock } from 'react-icons/fa'; // Importation des icônes pour le filtre et la durée

// Enregistrement de tous les modules nécessaires
Chart.register(...registerables);

// Données du graphique
const data = {
  labels: Array.from({ length: 31 }, (_, i) => {
    const date = new Date();
    date.setDate(1); // Commencer à partir du premier jour du mois
    date.setDate(date.getDate() + i); // Incrémenter chaque jour
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }),
  datasets: [
    {
      label: 'Créneaux réservés',
      data: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 3, 3, 2, 2, 2, 1, 0.5, 0.5, 1, 1.5, 1.5, 2, 2, 2.5, 2.5, 3, 3, 3, 3, 3, 2, 2, 2, 2],
      fill: true,
      borderColor: 'blue', // Couleur de la ligne
      backgroundColor: 'rgba(0, 0, 255, 0.10)', // Couleur pour les légendes et autres éléments
      borderWidth: 1,
    },
    {
      label: 'Créneaux annulés',
      data: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 2, 2, 3, 3, 2, 3, 2.5, 2.5, 3],
      fill: true,
      borderColor: 'rgba(255, 165, 0, 0.8)', // Couleur orange avec opacité
      backgroundColor: 'rgba(255, 165, 0, 0.10)', // Couleur pour les légendes et autres éléments
      borderWidth: 1,
    },
  ],
};

// Options du graphique
const options = {
  maintainAspectRatio: false, // Désactiver le redimensionnement automatique
  scales: {
    y: {
      beginAtZero: false, // Ne pas commencer à 0.5%
      min: 0,
      max: 3.5, // Maximum ajusté pour un axe Y dynamique
      ticks: {
        stepSize: 0.5, // Incrément par 0.5%
        callback: function(value) {
          return value + '%'; // Ajouter un symbole de pourcentage
        },
      },
    },
  },
  plugins: {
    legend: {
      position: 'bottom', // Position fixe pour la légende
      labels: {
        color: '#000', // Couleur du texte de la légende (facultatif)
        usePointStyle: true, // Utiliser le style de point à côté des légendes
        boxWidth: 10, // Taille de la boîte de couleur dans la légende
        padding: 20, // Espacement autour de la légende
      },
    },
  },
};

// Composant principal pour la page de tableau de bord
export default function DashboardPage() {
  const [filter, setFilter] = useState(''); // État pour le filtre sélectionné
  const [duration, setDuration] = useState(''); // État pour la durée sélectionnée
  const [showFilterOptions, setShowFilterOptions] = useState(false); // État pour la visibilité des options de filtre

  // Options pour les filtres
  const filterOptions = ['Default', 'Option 2', 'Option 3'];

  return (
    <div className="flex h-screen">
      {/* Zone principale de contenu */}
      <div className="flex-1 ml-64">
        {/* Barre de navigation */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
          <Navbar />
        </div>

        {/* Barre latérale */}
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-43 shadow-md z-10">
          <Sidebar />
        </div>

        {/* Contenu principal du tableau de bord */}
        <div className="p-6 pt-10  fixed left-10 ml-64">
          <h3 className="text-xl mt-6 p-10 font-bold">Évolution des réservations</h3>

          {/* Boutons pour sélectionner la durée et le filtre */}
          <div className="mt-4 flex justify-between items-center">
            {/* Bouton de filtre à gauche */}
            <div className="flex items-center">
              <button
                className="flex items-center bg-white text-black border border-black rounded-md px-4 py-2 hover:bg-gray-300 transition mr-4"
                onClick={() => setShowFilterOptions(!showFilterOptions)} // Basculer les options de filtre
              >
                <FaFilter className="mr-2" /> {/* Icône de filtre */}
                Filtre
              </button>

              {/* Dropdown pour les options de filtre */}
              {showFilterOptions && (
                <div className="absolute mt-2 w-55 bg-white shadow-md rounded-md z-20">
                  {filterOptions.map((option, index) => (
                    <button
                      key={index}
                      className="block px-4 py-2 text-left hover:bg-gray-200 w-full"
                      onClick={() => {
                        setFilter(option); // Définir le filtre sélectionné
                        setShowFilterOptions(false); // Cacher les options après sélection
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bouton pour les 30 derniers jours à droite */}
            <div>
              <button
                className="flex items-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition"
                onClick={() => console.log('Filtre des 30 derniers jours')}
              >
                <FaClock className="mr-2" /> {/* Icône de durée */}
                30 Derniers Jours
              </button>
            </div>
          </div>

          {/* Graphique centré */}
          <div className="mt-7 flex justify-center mr-1">
            <div className="w-full max-w-7xl bg-white shadow-md rounded-lg" style={{ height: '400px', minWidth: '1010px' }}>
              <Line data={data} options={options} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
