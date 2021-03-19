# A25 Wordpress theme  

check this theme at [HERE](http://94.190.26.105:8026 "A25 site")  

Скачать тему можно в разделе [Release](https://github.com/arseniiyamnii/a25-wp-theme/releases/latest "Release")  
## Немного о теме:
  
В тему встроены три gutenberg блока для главной страницы.
Один из блоков, это контактная форма. Она отсылает данные через ajax на почту на которую настроена отправка
Для настройки отправки нужно создать файл `.env` в родительской дирректории темы. В нем нужно прописать:
```
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

