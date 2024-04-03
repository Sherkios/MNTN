import gulp from "gulp";

// импорт путей
import { path } from "./gulp/config/path.js";

// импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";


// Передаем значения в глобальную переменную
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins
}

// импорт задач
import {scss,fullscss} from "./gulp/tasks/scss.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { js, prodjs} from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";

// Наблюдатель за изменениями в файлах
function watcher() {
   // Первое знаечение - путь к файлам за которыми следят, второе - действие, которое выполняетя при изменения папок
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, fullscss);
   gulp.watch(path.watch.js, (js));
   gulp.watch(path.watch.images, images);

}


const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const prodTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, prodjs, images));
const devTasks = gulp.series(fonts, gulp.parallel(copy, html, fullscss, js, images));

// Построение сценариев выполнения задач
const prod = gulp.series(reset, prodTasks);
const main = gulp.series(reset, devTasks, gulp.parallel(watcher, server));

gulp.task("default", main);
gulp.task("prod", prod);
gulp.task("fonts", fonts);