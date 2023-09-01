#
clear
reset
# 
cd ..
cnpm run build
cd .zshshell
rm -rf /Users/kevin.jiang/Dev/src/website/web/hmivue/*
cp -rf ./dest/* /Users/kevin.jiang/Dev/src/website/web/hmivue