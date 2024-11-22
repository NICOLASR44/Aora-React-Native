/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Pour tous les fichiers React dans le dossier "app"
    "./global.css", // Incluez explicitement le fichier CSS global
    "./index.html", // Si vous testez avec un fichier HTML
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
