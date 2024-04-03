// Получаем имя папки проекта
import gulp from 'gulp';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //* вместо `./dist` можно вставить rootFolder. Папка с готовым кодом будет называтся по названию папки проекта.
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
      test: `${srcFolder}/js/tests/`,
   },
   src: {
      js: `${srcFolder}/js/script.js`,
      jsdom: `${srcFolder}/js/DOMLoaded.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,// добавить другие форматы в фигурные скобки
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/**/*.scss`,
      style: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      test: `${srcFolder}/js/tests/test.js`
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: `${buildFolder}/**/*.{html,js,css,woff,woff2,jpg,jpeg,png,svg,ico,gif,webp}`,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}