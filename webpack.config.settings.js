/*  ========================================================================
    # Webpack Configuration - Settings
    ========================================================================  */

/**
 * Settings for Webpack.
 *
 * Table of Contents:
 * 1. URLs
 * 2. Paths
 * 3. Entries
 * 4. Copy
 * 5. Development Server
 */

module.exports = {
  /*  1. URLs
      ======================================================================  */

  urls: {
    live: 'https://projects.timschneider.xyz/quiz/'
  },

  /*  2. Paths
      ======================================================================  */

  paths: {
    src: {
      base: './src/',
      assets: './src/assets/',
      css: './src/assets/css/',
      js: './src/assets/js/',
      images: './src/assets/images/',
      fonts: './src/assets/fonts/'
    },
    dist: {
      base: './dist/',
      assets: 'assets/',
      css: 'assets/css/',
      js: 'assets/js/',
      images: 'assets/images/',
      fonts: 'assets/fonts/'
    }
  },

  /*  3. Entries
      ======================================================================  */

  entries: {
    app: ['./src/assets/js/main.ts', './src/assets/css/main.scss'],
    quiz: './src/quiz/quiz.tsx'
  },

  /*  4. Copy
      ======================================================================  */

  copy: [
    // System
    {
      from: './src/system',
      to: './'
    },
    // Favicons
    {
      from: './src/assets/images/favicons',
      to: './assets/images/favicons',
      ignore: ['*.psd']
    }
  ],

  /*  5. Development Server
      ======================================================================  */

  developmentServer: {
    public: () => {
      return process.env.DEVSERVER_PUBLIC || 'http://localhost:8080';
    },
    host: () => {
      return process.env.DEVSERVER_HOST || 'localhost';
    },
    port: () => {
      process.env.DEVSERVER_PORT || 8080;
    },
    https: () => {
      process.env.DEVSERVER_HTTPS || false;
    },
    poll: () => {
      return process.env.DEVSERVER_POLL || false;
    }
  }
};
