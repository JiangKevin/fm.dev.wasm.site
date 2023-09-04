#
clear
reset
# 
cp -rf ./static/*  /Users/kevin.jiang/Dev/src/website/web/staic
cnpm run build
cp -rf ./dist/* /Users/kevin.jiang/Dev/src/website/web/
cp -rf ./static/*  /Users/kevin.jiang/Dev/src/website/web/