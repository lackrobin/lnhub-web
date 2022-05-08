module.exports = {
  daisyui: {
    themes: [
      {
        lnhubtheme: {
          "primary": "#0D9488",
          "secondary": "#0284C7",
          "accent": "#A21CAF",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
