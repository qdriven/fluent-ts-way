echo "install js project"
npm i -g create-js-project

create-js-project $1

##  it doesn't work because I only to a plain cli or nodeproject
mkdir -p $1
cd $1
npm init


yarn create @neutrinojs/project $1
npx @neutrinojs/create-project post-actions
#Project	Project Type	Middleware
#React	Application	@neutrinojs/react
#Preact	Application	@neutrinojs/preact
#Vue	Application	@neutrinojs/vue
#Web	Application	@neutrinojs/web
#Node.js	Application	@neutrinojs/node
#Library	Library	@neutrinojs/library
#React Components	Components	@neutrinojs/react-components
