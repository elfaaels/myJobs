module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: ["expo-router/babel"],
    // plugins: [[ "module:react-native-dotenv", { moduleName:"react-native-dotenv", path:".env", }, ]],
"plugins": [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": true,
      "allowUndefined": true
    }]
   ]
  };
};
