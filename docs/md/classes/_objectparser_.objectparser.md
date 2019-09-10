> # Class: ObjectParser

Anything that has a json schema type of `object` with a `properties`, it will be parsed by this module and the appropriate types will be assigned to each
property that belongs to the object.

## Hierarchy

* **ObjectParser**

## Index

### Constructors

* [constructor](_objectparser_.objectparser.md#constructor)

### Properties

* [description](_objectparser_.objectparser.md#optional-description)
* [instanceName](_objectparser_.objectparser.md#instancename)
* [members](_objectparser_.objectparser.md#members)
* [modelExtends](_objectparser_.objectparser.md#optional-modelextends)
* [modelName](_objectparser_.objectparser.md#modelname)
* [modelNamespace](_objectparser_.objectparser.md#optional-modelnamespace)
* [modelPath](_objectparser_.objectparser.md#modelpath)
* [name](_objectparser_.objectparser.md#name)
* [node](_objectparser_.objectparser.md#node)
* [properties](_objectparser_.objectparser.md#properties)
* [required](_objectparser_.objectparser.md#required)
* [symbols](_objectparser_.objectparser.md#symbols)
* [title](_objectparser_.objectparser.md#optional-title)

### Methods

* [parse](_objectparser_.objectparser.md#parse)
* [render](_objectparser_.objectparser.md#render)

### Object literals

* [defaultTemplateOptions](_objectparser_.objectparser.md#protected-defaulttemplateoptions)

## Constructors

###  constructor

\+ **new ObjectParser**(`node`: any, `symbols`: any): *[ObjectParser](_objectparser_.objectparser.md)*

Defined in ObjectParser.ts:31

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`symbols` | any | The entire symbol tree to allow the parser to look up references  |

**Returns:** *[ObjectParser](_objectparser_.objectparser.md)*

## Properties

### `Optional` description

• **description**? : *undefined | string*

Defined in ObjectParser.ts:96

Documentation

___

###  instanceName

• **instanceName**: *string*

Defined in ObjectParser.ts:75

The instance name when referenced by a parent or outer model

___

###  members

• **members**: *object*

Defined in ObjectParser.ts:63

Decorated properties

#### Type declaration:

* \[ **s**: *string*\]: [BaseProp](_baseprop_.baseprop.md)

___

### `Optional` modelExtends

• **modelExtends**? : *undefined | string*

Defined in ObjectParser.ts:55

If the model extends an object, it goes here

___

###  modelName

• **modelName**: *string*

Defined in ObjectParser.ts:79

The name of the generated model

___

### `Optional` modelNamespace

• **modelNamespace**? : *undefined | string*

Defined in ObjectParser.ts:59

The documentable namespace

___

###  modelPath

• **modelPath**: *string*

Defined in ObjectParser.ts:83

The model path is the disk path for the model

___

###  name

• **name**: *string*

Defined in ObjectParser.ts:88

The name of the symbol

___

###  node

• **node**: *any*

Defined in ObjectParser.ts:37

The node being managed

___

###  properties

• **properties**: *any*

Defined in ObjectParser.ts:71

The raw properties of the schema definition

___

###  required

• **required**: *string[]*

Defined in ObjectParser.ts:67

What fields are required

___

###  symbols

• **symbols**: *any*

Defined in ObjectParser.ts:37

The entire symbol tree to allow the parser to look up references

___

### `Optional` title

• **title**? : *undefined | string*

Defined in ObjectParser.ts:92

Documentation

## Methods

###  parse

▸ **parse**(): *void*

Defined in ObjectParser.ts:142

Parse the properties

**Returns:** *void*

___

###  render

▸ **render**(): *void*

Defined in ObjectParser.ts:110

Renders a model to a string

**Returns:** *void*

## Object literals

### `Protected` defaultTemplateOptions

### ▪ **defaultTemplateOptions**: *object*

Defined in ObjectParser.ts:100

The default options for the template render

###  compileDebug

• **compileDebug**: *boolean* = false

Defined in ObjectParser.ts:103

###  debug

• **debug**: *boolean* = false

Defined in ObjectParser.ts:102

###  rmWhitespace

• **rmWhitespace**: *boolean* = false

Defined in ObjectParser.ts:101

###  escape

▸ **escape**(`s`: any): *any*

Defined in ObjectParser.ts:104

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *any*