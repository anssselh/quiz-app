import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import du hook useRouter
import Image from "next/image";
import feather from "../../public/images/feather-icon.png";

const RegistrationForm = () => {
  const router = useRouter(); // Initialisation du router
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    age: "",
    pays: "",
    niveau: "",
    categories: ""
  });

  const [error, setError] = useState("");

  // Gestion des changements de champ
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      categories: value
    }));
  };

  // Validation et soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nom, prenom, email, age, pays, niveau, categories } = formData;

    // Vérifier si tous les champs sont remplis
    if (!nom || !prenom || !email || !age || !pays || !niveau || !categories) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    // Si tout est correct, rediriger vers la page /dashboard
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1100px" }}>
        <div className="md:flex w-full">
          {/* Left side (SVG or Image, if you want to keep it) */}
          <div className="relative  text-center md:w-1/2 bg-orange-500 py-10 px-10 flex flex-col justify-center items-center">
            <Image src={feather} width={240} height={120} alt="feather" />
            <h2 className="font-extrabold text-3xl uppercase text-black mt-[20px]">le cafe du file</h2>
            <p className="text-gray-900 roboto mt-2 capitalize font-normal">testes de positionnement et actualite fle</p>
          </div>

          {/* Right side (Registration Form) */}
          <form className="w-full max-w-3xl p-8" onSubmit={handleSubmit}>
            <h1 className="text-4xl uppercase font-extrabold roboto text-gray-800 mb-6 text-center">
              Formulaire D&apos;inscription
            </h1>

            {/* Message d&apos;erreur */}
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Champ Nom */}
            <div className="mb-4 roboto">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom">
                Nom
              </label>
              <input
                id="nom"
                type="text"
                value={formData.nom}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre nom"
                required
              />
            </div>

            {/* Champ Prénom */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
                Prénom
              </label>
              <input
                id="prenom"
                type="text"
                value={formData.prenom}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre prénom"
                required
              />
            </div>

            {/* Champ Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre email"
                required
              />
            </div>

            {/* Champ Âge */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Âge
              </label>
              <input
                id="age"
                type="number"
                value={formData.age}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre âge"
                required
              />
            </div>

            {/* Champ Pays */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pays">
                Pays
              </label>
              <input
                id="pays"
                type="text"
                value={formData.pays}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Entrez votre pays"
                required
              />
            </div>

            {/* Champ Niveau */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="niveau">
                Niveau
              </label>
              <select
                id="niveau"
                value={formData.niveau}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Choisissez un niveau</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Avancé">Avancé</option>
              </select>
            </div>

            {/* Sélection de Catégories */}
            <div className="mb-6 roboto">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Catégories
              </label>
              <div className="flex justify-around">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="categories"
                    value="Enfant"
                    checked={formData.categories === "Enfant"}
                    onChange={handleRadioChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Enfant</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="categories"
                    value="Adulte"
                    checked={formData.categories === "Adulte"}
                    onChange={handleRadioChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Adulte</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="categories"
                    value="Professionnel"
                    checked={formData.categories === "Professionnel"}
                    onChange={handleRadioChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2">Professionnel</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                S&apos;inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
