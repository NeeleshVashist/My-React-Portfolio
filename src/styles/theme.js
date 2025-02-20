export const lightTheme = {
  body: "#ffffff",
  text: "#1c1c1c",
  accent: "#ff7e5f", // Primary accent color
  input_bg: "rgba(0, 0, 0, 0.04);",
  line_color:
    "linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.05))",
  box_shadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
  hover_boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.15)",

  divider: "rgba(0, 0, 0, 0.15)", // Subtle dark divider

  // Button styles
  button_bg: "#ff7e5f", // Primary button background color (light theme)
  button_text: "#ffffff", // Button text color
  button_border: "1px solid #ff7e5f", // Button border color
  button_hover_bg: "#ff5c4f", // Button background color on hover
  button_hover_text: "#ffffff", // Button text color on hover
  button_hover_border: "1px solid #ff5c4f", // Button border color on hover

  // Glassmorphism styles
  glassBg: "rgba(255, 255, 255, 0.9)", // Light mode glass effect background
  glassBorder: "rgba(255, 255, 255, 0.2)", // Light mode glass effect border
};

export const darkTheme = {
  body: "#121212", // Dark background for dark mode
  text: "#e1e1e1", // Softer white for better contrast
  accent: "#ff7043", // Brighter and richer coral accent (more vibrant)
  input_bg: "rgba(255, 255, 255, 0.1);", // Slightly opaque background for inputs
  line_color:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))", // Subtle light gradients for dividers
  box_shadow: "0px 10px 30px rgba(255, 255, 255, 0.1)", // Soft shadows for elements
  hover_boxShadow: "0px 15px 40px rgba(255, 255, 255, 0.15)", // Lighter hover shadows for depth

  divider: "rgba(255, 255, 255, 0.2)", // Subtle light divider

  // Button styles
  button_bg: "#ff7043", // Bright coral accent for buttons
  button_text: "#121212", // Dark text for contrast on buttons
  button_border: "1px solid #ff7043", // Button border color matches accent
  button_hover_bg: "#ff5f36", // Darker shade for hover state
  button_hover_text: "#121212", // Dark button text color on hover
  button_hover_border: "1px solid #ff5f36", // Button border color on hover

  // Glassmorphism styles for modal and elements
  glassBg: "rgba(0, 0, 0, 0.7)", // Darker transparent glass background
  glassBorder: "rgba(255, 255, 255, 0.2)", // Subtle white border for glass effect

  // Accent colors for hover effects
  hoverAccent: "#ff5f36", // Slightly darker shade for hover effects
  primaryText: "#e1e1e1", // Light gray for general text
  secondaryText: "#b0b0b0", // Soft gray for secondary text (details)
};
