"use client";

import { useRouter } from "next/navigation";

const Results = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/dashboard");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center border border-gray-300">
        <h1 className="text-4xl font-bold text-green-600">Félicitations !</h1>
        <p className="mt-4 text-xl text-gray-700">
          Vous avez réussi votre test ! 🎉
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Vous avez montré de solides compétences en français. Continuez à pratiquer et vous ferez encore mieux la prochaine fois !
        </p>
        <p className="mt-6 text-md text-gray-500">
          Merci d'avoir pris ce test avec nous. Nous espérons que vous avez trouvé cela intéressant et enrichissant. À bientôt pour de nouveaux défis !
        </p>
        <div className="mt-8">
          <button
            onClick={handleRedirect}
            className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
