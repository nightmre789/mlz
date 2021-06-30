module.exports = {
   purge: ["./src/**/*.js", "./src/**/*.jsx", "./public/**/*.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            gray: {
               "010": "#fcfcfc",
               "020": "#f9f9f9",
               "030": "#f6f6f6",
               "040": "#f3f3f3",
               "050": "#f0f0f0",
               100: "#e6e6e6",
               200: "#c9c9c9",
               300: "#adadad",
               400: "#919191",
               500: "#757575",
               600: "#5c5c5c",
               700: "#454545",
               800: "#2e2e2e",
               900: "#1b1b1b",
               950: "#0b0b0b"
            },
            "gray-warm": {
               "010": "#fcfcfb",
               "020": "#f9f9f7",
               "030": "#f6f6f2",
               "040": "#f5f5f0",
               "050": "#f0f0ec",
               100: "#e6e6e2",
               200: "#cac9c0",
               300: "#afaea2",
               400: "#929285",
               500: "#76766a",
               600: "#5d5d52",
               700: "#454540",
               800: "#2e2e2a",
               900: "#171716"
            },
            "gray-cool": {
               "010": "#fbfcfd",
               "020": "#f7f9fa",
               "030": "#f5f6f7",
               "040": "#f1f3f6",
               "050": "#edeff0",
               100: "#dcdee0",
               200: "#c6cace",
               300: "#a9aeb1",
               400: "#8d9297",
               500: "#71767a",
               600: "#565c65",
               700: "#3d4551",
               800: "#2d2e2f",
               900: "#1c1d1f"
            }
         },
         zIndex: {
            "-10": "-10"
         },
         fontFamily: {
            roboto: ["Roboto", "sans-serif"]
         }
      }
   },
   variants: {
      extend: {
         translate: ["group-hover"]
      }
   },
   plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/custom-forms")
   ]
};
