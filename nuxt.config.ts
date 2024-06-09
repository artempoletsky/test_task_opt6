const TailwindTheme = {
  colors: {
    blue: {
      // light: "#85d7ff",
      500: "#0584FE",
      700: "#1253A2",
      // dark: "#009eeb",
    },
    gray: {
      400: "#8F8F8F",
    }
  },
  fontFamily: {
    sans: ["PT Sans", "sans-serif"],
    // serif: ["Merriweather", "serif"],
  },
  spacing: {
    px: "1px",
    0: "0",
    // 0.5: "0.125rem",
    1: "0.25rem",
    // 1.5: "0.375rem",
    2: "0.5rem",
    // 2.5: "0.625rem",
    3: "16px",
    // 3.5: "0.875rem",
    4: "20px",
    5: "30px",
    10: "98px",
  },
  fontSize: {
    "2xl": ["41px", "120%"],
    xl: ["34px", "120%"],
    base: ["18px", "120%"],
    sm: ["15px", "120%"],
    xs: ["12px", "120%"],
  }
};


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [["@nuxtjs/google-fonts", {
    families: {
      "PT Sans": {
        wght: [100, 400],
        ital: [100]
      },
    }
  }], "@nuxtjs/tailwindcss"],
  tailwindcss: {
    // cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    // configPath: "tailwind.config.ts",
    // exposeConfig: {
    //   level: 2
    // },
    config: {
      corePlugins: {
        // preflight: false,
      },
      theme: {
        extend: TailwindTheme,
      },
    },
    // viewer: true,
  }
});