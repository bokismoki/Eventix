/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'main-purple': '#a90aff',
        'main-dark': '#161326',
        'main-gray': '#2e2b3c'
      },
      fontSize: {
        'xxs': '0.6rem'
      }
    }
  },
  variants: {
    textColor: ['hover', 'focus', 'group-hover'],
  },
  plugins: []
}
