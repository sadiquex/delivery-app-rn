const palette = [
  // orange
  {
    text: "#f97316",
    bgColor: (opacity) => `rgba(251,146,60, ${opacity})`,
  },
  // dark gray
  {
    text: "#334155",
    bgColor: (opacity) => `rgba(107,114,128, ${opacity})`,
  },
  // blue
  {
    text: "#3b82f6",
    bgColor: (opacity) => `rgba(59,130,246, ${opacity})`,
  },
  // green
  {
    text: "#10b981",
    bgColor: (opacity) => `rgba(16,185,129, ${opacity})`,
  },
  // red
  {
    text: "#ef4444",
    bgColor: (opacity) => `rgba(239,68,68, ${opacity})`,
  },
  // yellow
  {
    text: "#facc15",
    bgColor: (opacity) => `rgba(250,204,21, ${opacity})`,
  },
  // purple
  {
    text: "#a855f7",
    bgColor: (opacity) => `rgba(168,85,247, ${opacity})`,
  },
  // teal
  {
    text: "#14b8a6",
    bgColor: (opacity) => `rgba(20,184,166, ${opacity})`,
  },
];

export const themeColors = {
  ...palette[0],
};
