
mkdir -p tutorials/$1
cp -rf templates/tslib-template/* tutorials/$1
rm -rf tutorials/$1/node_modules
