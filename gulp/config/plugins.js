import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Сообщения
import browsersync from "browser-sync"; // Локальный сервер (автообновление страницы)
import newer from "gulp-newer"; // Проверка обновления изображения

export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer
}