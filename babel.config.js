module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
          jsxRuntime: "automatic", // Assure la compatibilité avec Expo Router
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin", // Conserve uniquement les plugins nécessaires
      [
        "module-resolver",
        {
          alias: {
            "@": "./",
          },
        },
      ],
    ],
  };
};
