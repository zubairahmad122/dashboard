/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,js,jsx,jsx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "50px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      
      "lg": [
        "26px",
        {
          lineHeight: "32px",
          fontWeight: "600",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "27px",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "500",
        },
      ],
      "sm": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "400",
        },
      ],
      "sm-normal": [
        "14px",
        {
          lineHeight: "21px",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        "white-1": "#F8F8F8",
        "grey6": "#5D6679",
        "grey4": "#858D9D",
        "grey8": "#383E49", 
        "tgrey-5": "#667085",  
        "sucess": "#27AE61", 
        "sucess-1": "#12B76A",
      },

      fontFamily: {
          Inter: ["Inter", 'sans-serif'],
        },
        screens: {
          'xsm': '462px',
          'mdd': '862px',
          'xll': '1362px',
          'xlg': '1162px',
          'xlb': '1280px',
          'ssm': '310px',
        },
    },
  },
  plugins: [],
}

