/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // COLOR 
      colors: {
        'serviceBGcolor': 'rgb(252, 248, 248,0.1)',
        'servicePcolor': '#6C7D93',
        'serviceMcolor': '#EBF7E9',
        'serviceMPcolor': '#202427',
        'serviceScolor': '#D8EAFF',
        'serviceCcolor': '#FBF1EC',
        'serviceRDHcolor': 'rgba(255, 120, 41, 0.5)',
        'workHCcolor': '#FF7628',
        'footerCcolor': '#413F45',
        'workBGHcolor': 'rgba(242, 247, 253, 0.1)',
        'footerBGHcolor': 'rgb(255, 255, 255,0.02)',
        'blogBpCcolor': '#474747',
        'clientHCcolor': '#192239',
        'clentIcolor': '#FF7628',
        'clientIcolor': 'rgba(255, 120, 41, 0.4)',
        'workBgcolor': 'rgba(240, 244, 250, 0.1)',
        
       
      },
      // CONTAINER 
      maxWidth: {
        'serviceContainer': '1170px',
        'whoContainer': '1110px',
        'bannerContainer': '1490px',
      },
      // FONT FAMILY 
      fontFamily: {
        'opensansF': ['Open Sans', 'sans-serif',],
        'paprikaF': ['Paprika', 'sans-serif',],
        'nunitoF': ['Nunito', 'sans-serif',],
        'robotoF': ['Roboto', 'sans-serif',],
        'workF': ['Work', 'sans-serif',],
       
      },

      // SHADOW COLOR 
      boxShadow: {
        'clientShadow': '0px 30px 60px 0px rgba(162, 169, 192, 0.10);',
        'blogShadow': '0px 28px 70px 0px rgba(99, 122, 166, 0.10);',
      },

      // BANNER IMAGE 
      backgroundImage: {
        'bannerImg': "url('src/assets/banner_bg.png')",
      
      },
    },
  },
  plugins: [],
}

