make[3]: Entering directory '/mnt/e/workspace/core.jsm'
# Building
This project is built using [GNU make](https://www.gnu.org/software/make/manual/html_node/index.html). Get it from the usual channels. The `makefile` included here provides the following verbs:
## File: apps-mk:

| Var/Verb | Description  |
|---|---|
| Description | These are the global commands the make system understands. These are all overrideable, so if for instance you want to use `yarn` instead of `npm`, you can overide `NPM=yarm` and et viola.
| FIND | Be careful with this one if you are in windows. It expects linux `find` not CMD `find` and you may need to update the path to your local cygwin instance
| NPM | NPM executable
| NPM-PUBLIC | Alwaays returns pure npm for publishing to the npm registry
| RM | The delete command
| MKDIR | The command to make directories
| MKDIRP | The beloved `mkdir -p`
| COPY | Copy command
| TOUCH | Touch command
| TSC | The TypeScript compiler specifying the module system and the source library
| DOCKER | The docker CLI executable
| PERL | PERL is used to generate these docs
| JSM | The Javascript Module Schema package
| GIT | GIT cli
| RMDIR | rimraf, delete an entire directory
| SCP | Secure Copy over ssh
| SSH | ssh. 'nuff said
| SED | sed - mostly used when applying the current version to the docker-compose remotely
| BABEL | Bable for compiling ES(X) code to JS
| TSDOCS | The path to the typedoc executable
| JSM | The json schema model generator
| REPORT-TIME | When running some compilations, the system will call the `time` program when running to see what is going on. This must be `true` for that to happen
| TIME | Long running tasks will be `time`d to track performance if REPORT-TIME is true

## File: clean-mk:

| Var/Verb | Description  |
|---|---|
| Description | Recipes for cleaning up after yourself
| clean | Clean up the out dir by deleting everything in it
| clean-all | Alias for dist-clean
| dist-clean | Clean up the out dir *and* the node_modules directory by deleting everything in it

## File: ejsfile-mk:

| Var/Verb | Description  |
|---|---|
| Description | Got some ejs or other template files you want to accompany your code? This is the right place.
| EJS-TEMPLATES-DIR | The directory under the src directory where we will find the templates
| EJS-EXTENSION | So maybe you want to use another templting system? Set the extension here.
| EJS-FILES-OUT | This is the full output, use this variable in your build dependencies

## File: info-mk:

| Var/Verb | Description  |
|---|---|
| print-var- | This is a debugging tool. It allows you to see the value of any variable in the makefile by appending it to this like so: make print-var-HSCONFIG

## File: make-docs-mk:

| Var/Verb | Description  |
|---|---|
| help | Show this help.
| help-to-md | Create a markdown file of the makefile help

## File: npm-mk:

| Var/Verb | Description  |
|---|---|
| Description | Tools for working with the npm repository
| publish-npm | This will call npm publish

## File: options:

| Var/Verb | Description  |
|---|---|
| build | Compile typescript to javascript
| publish | Publish the project to docker repository
| release | Release a version of the system to NPM. This will version up the patch number and go from there
| release-prod | Release a production version of the system to NPM. This will version up the minor numberm build and then publish
| tsdocs | Generate technical docs

## File: project-mk:

| Var/Verb | Description  |
|---|---|
| Description | Tools for working with package.json and other meta information around the project directory
| OUT-DIR | The output directory for the build
| SRC-DIR | Where to find source files
| BUILD_TYPE | Can be one of dev, prod, or stage. It is used to deploy artifacts (the ones that use it are locally documented) and to name a version number
| VERSION-TYPE | The version type speficies what portion of the build number will be incremented. Standard choices are `preminor` for prod (0.X.0), `prepatch` for staging (0.0.X) and `prelease` for dev (0.0.0-dev.X)
| VERSION-SUFFIX | The string that gets appended to the version (0.0.0-XXXX.0)
| PACKAGEJSON-FILE | The name and location of the package.json file.
| LIB | The location of the node_modules directory. Use this var to specify your build depdency
| PACKAGEJSON-OUT | The build target for package.json. Use this var to specify your build depdency
| README-FILE | The name of your readme file
| README-FILE-OUT | The build target for the readme file. Use this var to specify your build depdency
| install-dev-env | Installs the development environment for you

## File: semver-mk:

| Var/Verb | Description  |
|---|---|
| Description | This file contains some helpers for defining the semantic version of your project. Since we include the build type in the version, this also defines the BUILD-TYPE variable
| PUSH-ON-VERSION | When true, the repo will be automatically pushed on version increment
| define | Call this function to create the CURRENT-VERSION variable which will contain the current instance version from package.json
| version-up | This is the recipe to up the version number. Set the variables as necessary and run this.

## File: ts-mk:

| Var/Verb | Description  |
|---|---|
| Description | Recipes for compiling typescript
| COMPILE-TS | Use this to define a build dependency using make's file algorithms
| TS-DECLARE | When true, a declaration file will be generated for each module
| BUILD-TS | Use this to use the tsconfig files to build the directory
| watch | Wtahc the directory defined in the tsconfig.json file

## File: tsdocs-mk:

| Var/Verb | Description  |
|---|---|
| Description | Recipes for creating ts technical docs
| TYPEDOC-CONFIG-FILE | The typedocs config file
| DOCS-OUT | The directory where the docs will be generated. This is the build dependency
| HTML-DOCS-DIR | The directory where to place HTML documentation. If blank, it will not be generated
| MD-DOCS-DIR | The directory where to place markdown documentation. If blank, it will not be generated

make[3]: Leaving directory '/mnt/e/workspace/core.jsm'
