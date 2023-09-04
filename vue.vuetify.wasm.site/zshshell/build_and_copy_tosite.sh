#
clear
reset
# 
cnpm run build
cp -rf ./dist/* /Users/kevin.jiang/Dev/src/website/web/
cp -rf ./static/*  /Users/kevin.jiang/Dev/src/website/web/static/