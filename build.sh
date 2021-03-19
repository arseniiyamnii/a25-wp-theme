#!/bin/bash
#mkdir a25theme
rsync -av --exclude={$(pwd)'/a25theme','.env','.envrc','src','build.sh','.gitignore','package.json','phpcs.xml','composer.json','.git','composer.lock','gulpfile.js','package-lock.json','node_modules'} $(pwd) $(pwd)
zip -r release.zip a25theme
rm -rf a25theme

#,'.env','.envrc','src','build.sh','.gitignore','package.json','phpcs.xml','composer.json','.git','composer.lock','gulpfile.js','package-lock.json'} ./ ./a25theme
