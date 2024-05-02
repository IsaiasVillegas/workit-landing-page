/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#24053E",
        "davy-grey": "#584D62",
        eucaplyptus: "#44FFA1",
        "ghost-white": "#FCF8FF",
        white: "#ffffff",
      },
      fontFamily: {
        fraunces: ["Fraunces", ...fontFamily.serif],
        manrope: "Manrope",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({
        "@font-face": {
          fontFamily: "Fraunces",
          fontWeight: "600",
          src: "url(/src/assets/fonts/fraunces/static/Fraunces_144pt-SemiBold.ttf)",
        },
      });
      addBase({
        "@font-face": {
          fontFamily: "Manrope",
          fontWeight: ["400", "700"],
          src: "url(/src/assets/fonts/manrope/Manrope-VariableFont_wght.ttf)",
        },
      });
      addComponents({
        ".container": {
          "@apply max-w-[1110px] mx-auto px-4 md:px-10 lg:px-0": {},
        },
        ".h1": {
          "@apply font-fraunces font-semibold text-[3.125rem] leading-[3.125rem] md:text-[3.75rem] md:leading-[3.75rem] lg:text-[5rem] lg:leading-[5rem]":
            {},
        },
        ".h2": {
          "@apply font-fraunces font-semibold text-[2rem] leading-[3rem] md:text-[3rem] md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem]":
            {},
        },
        ".h3": {
          "@apply font-fraunces font-semibold text-[1.75rem] leading-[2.25rem] lg:text-[2rem] lg:leading-[2.5rem]":
            {},
        },
        ".body": {
          "@apply font-manrope text-[15px] leading-7 lg:text-lg lg:leading-8":
            {},
        },

        ".btn-line": {
          "@apply font-manrope text-base lg:text-lg font-bold text-white leading-8 tracking-[-0.16px] border-b-[3px] border-eucaplyptus transition-colors duration-300 hover:text-eucaplyptus":
            {},
        },
        ".btn-solid": {
          "@apply font-manrope font-bold text-base lg:text-lg bg-eucaplyptus px-[20px] lg:px-[27px] py-[13px] border-2 border-transparent transition-colors duration-300 hover:text-eucaplyptus hover:bg-dark-purple hover:border-eucaplyptus":
            {},
        },
      });
    }),
  ],
};
