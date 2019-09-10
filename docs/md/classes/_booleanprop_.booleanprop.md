> # Class: BooleanProp

A Boolean property. This will render it down and validate the value.

## Hierarchy

* [BaseProp](_baseprop_.baseprop.md)

  * **BooleanProp**

## Indexable

* \[ **key**: *string*\]: any

A Boolean property. This will render it down and validate the value.

## Index

### Constructors

* [constructor](_booleanprop_.booleanprop.md#constructor)

### Properties

* [classSourcePath](_booleanprop_.booleanprop.md#classsourcepath)
* [defaultValue](_booleanprop_.booleanprop.md#optional-defaultvalue)
* [description](_booleanprop_.booleanprop.md#optional-description)
* [empty](_booleanprop_.booleanprop.md#optional-empty)
* [equals](_booleanprop_.booleanprop.md#optional-equals)
* [isDefined](_booleanprop_.booleanprop.md#optional-isdefined)
* [isIn](_booleanprop_.booleanprop.md#optional-isin)
* [isNotIn](_booleanprop_.booleanprop.md#optional-isnotin)
* [isOptional](_booleanprop_.booleanprop.md#optional-isoptional)
* [name](_booleanprop_.booleanprop.md#name)
* [notEmpty](_booleanprop_.booleanprop.md#optional-notempty)
* [notEquals](_booleanprop_.booleanprop.md#optional-notequals)
* [ownDecorator](_booleanprop_.booleanprop.md#protected-owndecorator)
* [reportedType](_booleanprop_.booleanprop.md#reportedtype)
* [sys](_booleanprop_.booleanprop.md#protected-sys)
* [title](_booleanprop_.booleanprop.md#optional-title)
* [typeName](_booleanprop_.booleanprop.md#typename)

### Accessors

* [prop](_booleanprop_.booleanprop.md#prop)

### Methods

* [decs](_booleanprop_.booleanprop.md#decs)
* [headers](_booleanprop_.booleanprop.md#headers)
* [imports](_booleanprop_.booleanprop.md#imports)
* [renderDeclarations](_booleanprop_.booleanprop.md#renderdeclarations)
* [renderProp](_booleanprop_.booleanprop.md#renderprop)
* [validationImports](_booleanprop_.booleanprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_booleanprop_.booleanprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_booleanprop_.booleanprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new BooleanProp**(`node`: any, `name`: string): *[BooleanProp](_booleanprop_.booleanprop.md)*

*Overrides [BaseProp](_baseprop_.baseprop.md).[constructor](_baseprop_.baseprop.md#constructor)*

Defined in BooleanProp.ts:14

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node  |

**Returns:** *[BooleanProp](_booleanprop_.booleanprop.md)*

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

Defined in BooleanProp.ts:36

The template to render this type

**Returns:** *string*

## Methods

###  decs

▸ **decs**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[decs](_baseprop_.baseprop.md#protected-decs)*

Defined in BooleanProp.ts:29

The list of decorators templates supported by this type

**Returns:** *string[]*

___

###  headers

▸ **headers**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[headers](_baseprop_.baseprop.md#headers)*

Defined in BooleanProp.ts:55

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[imports](_baseprop_.baseprop.md#imports)*

Defined in BooleanProp.ts:43

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

*Overrides [BaseProp](_baseprop_.baseprop.md).[validationImports](_baseprop_.baseprop.md#validationimports)*

Defined in BooleanProp.ts:48

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