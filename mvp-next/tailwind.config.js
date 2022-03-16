module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.tsx',
    './src/components/**/*.tsx,'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
