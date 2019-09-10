.PHONY: build publish deploy release

TS-DECLARE:= true
BUILD_TYPE ?= dev


include node_modules/@terryweiss/maker/common.mk
include node_modules/@terryweiss/maker/ts.mk
include node_modules/@terryweiss/maker/tsdocs.mk
include node_modules/@terryweiss/maker/npm.mk
include node_modules/@terryweiss/maker/ejsfiles.mk


build: ${LIB} BUILD-TS ${EJS-FILES-OUT} ${PACKAGEJSON-OUT} ${README-FILE-OUT} makefile ## Compile typescript to javascript

publish: publish-npm## Publish the project to docker repository

release:## Release a version of the system to NPM. This will version up the patch number and go from there
	@${MAKE} -e clean tsdocs version-up build publish
	${call LoadCurrentVersion}
	@-${GIT} add .
	@-${GIT} commit -m "Built ${CURRENT-VERSION}"

release-prod:## Release a production version of the system to NPM. This will version up the minor numberm build and then publish
	@${MAKE} -e BUILD_TYPE=prod -e VERSION-TYPE=patch -e VERSION-SUFFIX= clean tsdocs version-up build publish
	${call LoadCurrentVersion}
	@-${GIT} add .
	@-${GIT} commit -m "Built ${CURRENT-VERSION}"

tsdocs: ${DOCS-OUT}## Generate technical docs
