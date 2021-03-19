# A25 Wordpress theme  
![WP version](./doc/img/wpversion.png)
[![Theme version](./doc/img/themeversion.png)](https://github.com/arseniiyamnii/a25-wp-theme/releases/latest)

check this theme at [HERE](http://94.190.26.105:8026 "A25 site")  

Скачать тему можно в разделе [Release](https://github.com/arseniiyamnii/a25-wp-theme/releases/latest "Release")
## Немного о разработке
На сайте используется только эта тема, и никаких больше плагинов и доработок.  
Это абсолютно чистый сайт.  
Шрифты я подобрал на google Fonts.  
Также есть возможность создавать другие формы. с другой логикой(не почта)  
Больше всего времени ушло на настройку формы(mailer) и на добавление второго gutenberg блока.

## Немного о теме:
  
В тему встроены три gutenberg блока для главной страницы.
Один из блоков, это контактная форма. Она отсылает данные через ajax на почту на которую настроена отправка
Для настройки отправки нужно создать файл `.env` в родительской дирректории темы. В нем нужно прописать:
```
SMTP_URL=""  
SMTP_USER=""  
SMTP_PASS=""  
SMTP_PORT=""  
```
Также в файлк `ajax-forms.php` можно настроить ssl/tls  
Для отправки почты используется плагин PHPmailer.  
  
## Для разработчиков
После клонирования репозитория себе, нужно выполнить:  
`composer install`  
`npm install`  
Для запуска пересборки Gutenberg блоков запустите:  
`gulp js`  
Можно поставить watcher для наблюдения за файлом gutenberg с командой:  
`gulp stream`  
Для сборки темы в zip пакет выболните:  
`./build.sh`  

