module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', { svgo: false }],
    },
  },
};
