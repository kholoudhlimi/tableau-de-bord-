"use client";
import { FaHome, FaCalendarAlt, FaChartBar, FaFutbol, FaUsers, FaMoneyBill, FaHistory, FaBullhorn, FaHeadset, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import des icônes

export default function Sidebar() {
  return (
    <div className="w-43 h-screen bg-orange-500 text-white ">
      <div className="p-6">
        <ul>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaHome className="mr-2" /> Accueil
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaCalendarAlt className="mr-2" /> Réservations
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaChartBar className="mr-2" /> Tableau de bord
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaFutbol className="mr-2" /> Terrains
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaUsers className="mr-2" /> Clients
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaMoneyBill className="mr-2" /> Chiffre d'affaire
          </li>
          <li className="py-2 px-4 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaHistory className="mr-2" /> Historique
          </li>
        </ul>
      </div>
      <div className="p-7">
        <ul>
          <li className="py-3 mt-20 hover:bg-orange-700 cursor-pointer flex items-center"> {/* Augmenter la marge supérieure */}
            <FaBullhorn className="mr-2" /> Marketing
          </li>
          <li className="py-1 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaHeadset className="mr-2" /> Support
          </li>
          <li className="py-1 hover:bg-orange-700 cursor-pointer flex items-center">
            <FaCog className="mr-2" /> Paramètres
          </li>
          <li className="py-1 mt-5 w-full border-t-2 border-white hover:bg-orange-700 cursor-pointer flex items-center px-0"> {/* Ajouté w-full et px-0 */}
  <FaSignOutAlt className="mr-2" /> Déconnexion
</li>
        </ul>
      </div>
    </div>
  );
}
