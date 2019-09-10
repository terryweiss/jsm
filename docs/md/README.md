# JSON Schema Model (jsm)

Generates TypeScript decorated with [class-validator](https://github.com/typestack/class-validator) decorators based on a json-schema.

## State of Development
Like many other open-source projects that are understaffed, this is somewhere on the continuum
between "good enough to get out the door" and "all of the planned and dreamed for features are there".
In this case that is further exacerbated by the fact that json-schema seems to have devolved into a 
a few different dialects. 

This project was envisioned as a way of gaining access to strongly typed definitions/components from
Swagger, with pure json-schema a nice-to-have. But some differences from Swagger to json-schema were difficult to reconcile.
Finally, class-validator accepts json-schema in its validation tools, but the decorators
are a disjoint language against Swagger and json-schema. 

Which might beg the question: why do this? If you aren't asking that question, you aren't thinking 
carefully about what this project does. Well, one answer is that this project makes sense if
you consider json-schema/Swagger as a means of validating serialized objects in transit or at rest
and that there is a role for the object that contains the hydrated instance to continue the 
original schema's validation as well as the values it mutates along its lifetime. Indeed, this
library does not try to connect the lifetimes of the JSON and the object in any way. If you use
Swagger, the swagger-tools will pull these objects out of `definitions` and `paths` and return you a
plain old JS object. You can pass that into one of these constructors and, since it is validated, serialize
it again knowing it has to be valid. Anyway, that's the idea.

# Installation
```bash
sudo npm install @concorde2k/json.schema.model -g

```
# Technical Docs
A description of the internal API for contributors can be found on [bitbucket](https://bitbucket.org/concorde2000/core.jsm/src/master/docs/md/SUMMARY.md)
or [locally](./docs/html/index.html). 

# CLI

This is a static code generator, there is no API, just a CLI. The options are:
* `--help`          Show help
* `--version`       Show version number
* `--log-level`     Sets the logging level for the process. Choices are
                    "trace", "debug", "warn", "data", "log", "info", "warn", "error"
* `-f, --infiles`   The path to your schema files, can be a glob to yaml or json
                     files or a mix thereof
* `-o, --outpath`   The path to write the files to. Class paths are appended to this
* `-r, --rootName`  When dealing with a schema that does not contains a root element, you can name the resultant object with this. This is only valuable when you generating from a single file.
                    
# Validation keywords
`json.schema.model` supports the common subset of keywords from swagger and jon-schema. Where the interpretations are
in conflict, this tends to prefer swagger.

## Common keywords
* `name` This is specific to `json.schema.model` and is used to name a class from the key of the object definition. it is auto-populated 
and is available in the template that generates the code. 
```json
{
    "MyModel": { // <-- this is the name property of the runtime generator
        "type": "object",
        "properties":{}
    }
}
```
* `title:string` as in json-schema
* `description:string` as in json-schema
* `x-is-defined:boolean` Extension for class-validator, checks if value is defined (!== undefined, !== null)
* `required:array` as in json-schema
* `const:string` as in json-schema. Also as `x-equals`. Checks if value equals ("===") comparison.
* `x-not-equals` as in class-validator. Checks if value not equal ("!==") comparison.
* `x-empty:boolean` as in class-validator. Checks if given value is empty (=== '', === null, === undefined).
* `x-not-empty:boolean` as in class-validator. Checks if given value is not empty (!== '', !== null, !== undefined).
* `x-in:array` as in class-validator. Checks if value is in a array of allowed values.
* `x-not-in:array` as in class-validator. Checks if value is not in a array of disallowed values.
* `x-default` specify a default value for the property
* `string`, `number`, `integer`, `boolean`, `array`, `object` data type keywords as in json-schema

## Object keywords
* `x-model-name:string` specify a name for the generated class
* `x-model-path:string` specify a path (starting from `outFiles` option) that the module should be written
* `x-namespace:string` Used for documentation only when defining the `@module` keyword
* `x-extends:string` If this is a subclass of some other class, put that class path here

## Array keywords
* `minItems`, `maxItems`, `uniqueItems` as in json-schema
* `x-contains:array` as in class-validator. Checks if array contains all values from the given array of values.
* `x-not-contains:array` as in class-validator. Checks if array does not contain any of the given values.
* `items:array` as in swagger which is always an array

## Date keywords
* `x-min-date:Date|string` as in class-validator. Checks if the value is a date that's after the specified date.
* `x-max-date:Date|string` as in class-validator. Checks if the value is a date that's before the specified date.

## Integer/Number keywords
* `minimum`, `maximum`, `multipleOf` as json-schema
* `x-positive-number:boolean` as in class-validator. Checks if the value is a positive number.
* `x-negative-number:boolean` as in class-validator. Checks if the value is a negative number.

## String keywords
* `minLength`, `maxLength`, `pattern` as in json-schema
* `x-contains:string` as in class-validator. Checks if the string contains the seed.
* `x-not-contains` as in class-validator. Checks if the string not contains the seed.

### String formats
This tool tries to supply the union of what json-schema and class-validator defines for strings. Admittedly, not well. But there it is.
__json_schema__

* `hostname` 
* `email` 
* `ipv4`
* `ipv6`
* `uri`
* `date-time`, `date`, `time` These all create a `Date` object

__class-validator__
* `base64`  
* `ascii`     
* `alphanumeric`
* `alpha`       
* `number-string`
* `date-string`
* `boolean-string`       
* `iso8601`
* `militaryTime`        
* `json`       
* `lowerCase`
* `upperCase`
* `mongoId`
* `uuid`

# Using JSM
As stated above, this is a CLI tool. At it's simplest you can create models from a directory like so:
```bash
jsm -f "models/*.yaml" -o ../src/models 
```

From a swagger file:
```bash
jsm -f "api.yaml" -o ../src/models
# or for a json file
jsm -f "api.json" -o ../src/models
```
Using globs you can get a whole directory and its subdirectories:
```bash
jsm -f "models/**/*.yaml" -o ../src/models
```

When you produce your files, you can access them like any other file:
```js
const {Address} = require("./models/Address");
const adr = new Address();
```

Let's say you have an existing object you got from a CSV file. You can pass that object in (once it has been shaped)
and validate it right away:
```js
const {Address} = require("./models/Address");
const val = someJsonFromSomewhere();
const adr = new Address(val);
adr.validate().then((validationErrors)=>{
	if (validationErrors.length === 0){ 
	// do something cool
	}else{
		console.log("Validation failed:\n", validationErrors);
	}
}).catch((e)=>{
	console.error(e);
})
```
To get all this delicious sugar in your bloodstream, you must install jsm as above. But you must also install three other dependencies:
```bash
sudo npm install @scrawl/json.schema.model -g
# then install local runtime dependencies
npm install class-transformer-validator class-transformer class-validator --save
``` 
## Some more notes
If you are not using TypeScript, you will need to take one further step to use the generated files. You must install 
the TypeScript compiler and use it turn the generated files into something usable. It does require a few special 
flags to compile correctly. 
```bash
tsc --target es2015 --lib 'ES2015' --module 'commonjs' --sourceMap --outDir ./myDir myFile # or files
```
Add this command to your package.json, webpack, gulp, or grunt file.

## Some more more notes
The files that are generated are completely generated every time. Any changes you make to a generated file will
by lost the next time you run jsm. But, these are just classes, and simple classes at that. To customize the 
behavior of these classes, just inherit from them and customize your behavior there.

[[include:./BUILD.md]]