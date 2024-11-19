// Necron Dark Theme Example for Mephrit
function activateTheme(themeName) {
  const colors = {
    background: "#000000", // Background color
    foreground: "#ffffff", // Text color
    highlight: "#ff0000", // Highlights
    selection: "#ff0000", // Selected text
  };

  console.log(`Activating theme: ${themeName}`);
  console.log("Theme colors: ", colors);

  return colors;
}

// Call the function with the theme name
const theme = "Necron Dark";
const colors = activateTheme(theme);
