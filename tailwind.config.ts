import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061B49",
        royal: "#153FAE",
        gold: "#D7B77D",
        cream: "#F7EFE5",
        ivory: "#FFFDF9",
        ink: "#172033",
        muted: "#5F6C85"
      },
      boxShadow: {
        soft: "0 28px 70px rgba(6, 27, 73, 0.12)",
        card: "0 18px 46px rgba(6, 27, 73, 0.08)",
        button: "0 16px 30px rgba(21, 63, 174, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
