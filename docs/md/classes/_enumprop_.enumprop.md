> # Class: EnumProp

An Enumeration node. This will validate the value it is connected with and render it down

## Hierarchy

* [BaseProp](_baseprop_.baseprop.md)

  * **EnumProp**

## Indexable

* \[ **key**: *string*\]: any

An Enumeration node. This will validate the value it is connected with and render it down

## Index

### Constructors

* [constructor](_enumprop_.enumprop.md#constructor)

### Properties

* [classSourcePath](_enumprop_.enumprop.md#classsourcepath)
* [defaultValue](_enumprop_.enumprop.md#optional-defaultvalue)
* [description](_enumprop_.enumprop.md#optional-description)
* [empty](_enumprop_.enumprop.md#optional-empty)
* [enumType](_enumprop_.enumprop.md#enumtype)
* [equals](_enumprop_.enumprop.md#optional-equals)
* [isDefined](_enumprop_.enumprop.md#optional-isdefined)
* [isIn](_enumprop_.enumprop.md#optional-isin)
* [isNotIn](_enumprop_.enumprop.md#optional-isnotin)
* [isOptional](_enumprop_.enumprop.md#optional-isoptional)
* [items](_enumprop_.enumprop.md#optional-items)
* [name](_enumprop_.enumprop.md#name)
* [notEmpty](_enumprop_.enumprop.md#optional-notempty)
* [notEquals](_enumprop_.enumprop.md#optional-notequals)
* [ownDecorator](_enumprop_.enumprop.md#protected-owndecorator)
* [reportedType](_enumprop_.enumprop.md#reportedtype)
* [sys](_enumprop_.enumprop.md#protected-sys)
* [title](_enumprop_.enumprop.md#optional-title)
* [typeName](_enumprop_.enumprop.md#typename)

### Accessors

* [prop](_enumprop_.enumprop.md#prop)

### Methods

* [decs](_enumprop_.enumprop.md#protected-decs)
* [headers](_enumprop_.enumprop.md#headers)
* [imports](_enumprop_.enumprop.md#imports)
* [renderDeclarations](_enumprop_.enumprop.md#renderdeclarations)
* [renderProp](_enumprop_.enumprop.md#renderprop)
* [validationImports](_enumprop_.enumprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_enumprop_.enumprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_enumprop_.enumprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new EnumProp**(`node`: any, `name`: string): *[EnumProp](_enumprop_.enumprop.md)*

*Overrides [BaseProp](_baseprop_.baseprop.md).[constructor](_baseprop_.baseprop.md#constructor)*

Defined in EnumProp.ts:20

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node  |

**Returns:** *[EnumProp](_enumprop_.enumprop.md)*

## Properties

###  classSourcePath

• **classSourcePath**: *string | null*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[classSourcePath](_baseprop_.baseprop.md#classsourcepath)*

Defined in BaseProp.ts:67

The path to the the prooperty from the base property

___

### `Optional` defaultValue

• **defaultValue**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultValue](_baseprop_.baseprop.md#optional-defaultvalue)*

Defined in BaseProp.ts:119

A default value for the property

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[description](_baseprop_.baseprop.md#optional-description)*

Defined in BaseProp.ts:83

Detailed documentation

___

### `Optional` empty

• **empty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[empty](_baseprop_.baseprop.md#optional-empty)*

Defined in BaseProp.ts:103

Checks if given value is empty (=== '', === null, === undefined).

___

###  enumType

• **enumType**: *string*

Defined in EnumProp.ts:39

The generated name of the enum

___

### `Optional` equals

• **equals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[equals](_baseprop_.baseprop.md#optional-equals)*

Defined in BaseProp.ts:95

Checks if value equals ("===") comparison

___

### `Optional` isDefined

• **isDefined**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isDefined](_baseprop_.baseprop.md#optional-isdefined)*

Defined in BaseProp.ts:87

Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.

___

### `Optional` isIn

• **isIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isIn](_baseprop_.baseprop.md#optional-isin)*

Defined in BaseProp.ts:111

Checks if value is in a array of allowed values.

___

### `Optional` isNotIn

• **isNotIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isNotIn](_baseprop_.baseprop.md#optional-isnotin)*

Defined in BaseProp.ts:115

Checks if value is not in a array of disallowed values.

___

### `Optional` isOptional

• **isOptional**? : *undefined | false | true*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isOptional](_baseprop_.baseprop.md#optional-isoptional)*

Defined in BaseProp.ts:91

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

___

### `Optional` items

• **items**? : *any[]*

Defined in EnumProp.ts:44

The enum contents

___

###  name

• **name**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[name](_baseprop_.baseprop.md#name)*

Defined in BaseProp.ts:71

The name of the symbol

___

### `Optional` notEmpty

• **notEmpty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEmpty](_baseprop_.baseprop.md#optional-notempty)*

Defined in BaseProp.ts:107

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` notEquals

• **notEquals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEquals](_baseprop_.baseprop.md#optional-notequals)*

Defined in BaseProp.ts:99

Checks if value equals ("===") comparison.

___

### `Protected` ownDecorator

• **ownDecorator**: *string* = "IsString"

*Inherited from [BaseProp](_baseprop_.baseprop.md).[ownDecorator](_baseprop_.baseprop.md#protected-owndecorator)*

Defined in BaseProp.ts:124

The prop instance's own type decorator

___

###  reportedType

• **reportedType**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[reportedType](_baseprop_.baseprop.md#reportedtype)*

Defined in BaseProp.ts:63

The type that was defined in the json/yaml

___

### `Protected` sys

• **sys**: *`LoDashStatic`* =  sys

*Inherited from [BaseProp](_baseprop_.baseprop.md).[sys](_baseprop_.baseprop.md#protected-sys)*

Defined in BaseProp.ts:129

A local for templates to access lodash

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[title](_baseprop_.baseprop.md#optional-title)*

Defined in BaseProp.ts:79

Short documentation

___

###  typeName

• **typeName**: *string* = ""

*Inherited from [BaseProp](_baseprop_.baseprop.md).[typeName](_baseprop_.baseprop.md#typename)*

Defined in BaseProp.ts:75

The name typescript expects for the type

## Accessors

###  prop

• **get prop**(): *string*

*Overrides [BaseProp](_baseprop_.baseprop.md).[prop](_baseprop_.baseprop.md#prop)*

Defined in EnumProp.ts:70

The template to render this type

**Returns:** *string*

## Methods

### `Protected` decs

▸ **decs**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[decs](_baseprop_.baseprop.md#protected-decs)*

Defined in BaseProp.ts:144

The list of decorators templates supported by this type

**Returns:** *string[]*

___

###  headers

▸ **headers**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[headers](_baseprop_.baseprop.md#headers)*

Defined in EnumProp.ts:49

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[imports](_baseprop_.baseprop.md#imports)*

Defined in BaseProp.ts:164

Returns a string array of needed imports

**Returns:** *string[]*

___

###  renderDeclarations

▸ **renderDeclarations**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderDeclarations](_baseprop_.baseprop.md#renderdeclarations)*

Defined in BaseProp.ts:190

Render the decorators and characteristics

**Returns:** *string[]*

___

###  renderProp

▸ **renderProp**(): *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderProp](_baseprop_.baseprop.md#renderprop)*

Defined in BaseProp.ts:211

Render the property, decorators and types and formats the output

**Returns:** *string*

___

###  validationImports

▸ **validationImports**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[validationImports](_baseprop_.baseprop.md#validationimports)*

Defined in BaseProp.ts:169

Gets the validators that are actually in use so that a single import can be created

**Returns:** *string[]*

## Object literals

### `Protected` defaultTemplateOptions

### ▪ **defaultTemplateOptions**: *object*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultTemplateOptions](_baseprop_.baseprop.md#protected-defaulttemplateoptions)*

Defined in BaseProp.ts:134

The default options for the template render

###  compileDebug

• **compileDebug**: *boolean* = false

Defined in BaseProp.ts:137

###  debug

• **debug**: *boolean* = false

Defined in BaseProp.ts:136

###  rmWhitespace

• **rmWhitespace**: *boolean* = false

Defined in BaseProp.ts:135

###  escape

▸ **escape**(`s`: any): *any*

Defined in BaseProp.ts:138

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *any*

___

###  propToTemplate

### ▪ **propToTemplate**: *object*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[propToTemplate](_baseprop_.baseprop.md#proptotemplate)*

Defined in BaseProp.ts:51

The map from property to template decorators of the class validator class

###  empty

• **empty**: *string* = "IsEmpty"

Defined in BaseProp.ts:55

###  equals

• **equals**: *string* = "Equals"

Defined in BaseProp.ts:53

###  isDefined

• **isDefined**: *string* = "IsDefined"

Defined in BaseProp.ts:52

###  isIn

• **isIn**: *string* = "IsIn"

Defined in BaseProp.ts:57

###  isNotIn

• **isNotIn**: *string* = "IsNotIn"

Defined in BaseProp.ts:58

###  notEmpty

• **notEmpty**: *string* = "NotEmpty"

Defined in BaseProp.ts:56

###  notEquals

• **notEquals**: *string* = "NotEquals"

Defined in BaseProp.ts:54