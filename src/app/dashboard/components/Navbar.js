"use client";

export default function Navbar() {
  return (
    <div className="h-16 bg-white flex justify-between items-center px-6"> {/* Navbar blanche */}
      <div className="flex items-center">
        {/* Logo ou d'autres éléments */}
        <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_640.png" alt="Admin Logo" className="h-10 w-10" />
      </div>
 
      <div className="user-info flex items-center text-black"> {/* Changer text-white en text-black pour le texte */}
        <div className="notification-icon text-black">🔔</div> {/* Icône de notification */}
        <span className="ml-2">Berrada Mohamed</span> {/* Ajoute ml-2 pour espacement */}
        <img src="https://cdn.pixabay.com/photo/2024/08/14/18/20/ai-generated-8969365_1280.jpg" alt="Profile" className="profile-pic ml-2 rounded-full w-8 h-8" /> {/* Photo de profil */}
      </div>
    </div>
  );
}
