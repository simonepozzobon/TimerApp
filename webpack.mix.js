let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  // .js('app/assets/js/admin-todo.js', 'public/js')
  .js('app/assets/js/app.js', 'public/js')
  .sass('app/assets/sass/app.scss', 'public/css')
  .extract(['jquery', 'tether', 'bootstrap'])
  .autoload({
      jquery: ['$', 'jQuery', 'jquery'],
      tether: ['Tether'],
      'popper.js/dist/umd/popper.js': ['Popper'],
  });
