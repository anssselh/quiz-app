'use client';

import { useEffect, useState } from "react";
import SubjectCard from '../../../components/SubjectCard';

export default function Dashboard() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await fetch('/data/questions.json');
      if (response.ok) {
        const data = await response.json();
        setSubjects(data.subjects);
        console.log(data);
      } else {
        console.error("Échec lors de la récupération des sujets.");
      }
    };
    fetchSubjects();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center justify-start py-12 px-4">
      {/* En-tête */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center uppercase tracking-wide">
        Test de Français pour Adultes
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center">
        Choisissez un sujet et commencez à évaluer vos compétences !
      </p>

      {/* Contenu */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
        {subjects.length > 0 ? (
          subjects.map((subject) => (
            <SubjectCard key={subject.name} subject={subject} />
          ))
        ) : (
          <p className="text-lg text-center text-gray-500 animate-pulse col-span-full">
            Chargement des sujets...
          </p>
        )}
      </div>
    </div>
  );
}
