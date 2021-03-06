**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;BaseProp&quot;](../modules/_baseprop_.md) › [BaseProp](_baseprop_.baseprop.md)

# Class: BaseProp

All properties derive from this class. It provides a standard interface for rendering and interpreting `x-` vendor extension properties

## Hierarchy

* **BaseProp**

  * [AnyProp](_anyprop_.anyprop.md)

  * [ArrayProp](_arrayprop_.arrayprop.md)

  * [BooleanProp](_booleanprop_.booleanprop.md)

  * [DateProp](_dateprop_.dateprop.md)

  * [EnumProp](_enumprop_.enumprop.md)

  * [IntegerProp](_integerprop_.integerprop.md)

  * [IntegerProp](_numberprop_.integerprop.md)

  * [StringProp](_stringprop_.stringprop.md)

  * [ObjectProp](_objectprop_.objectprop.md)

## Indexable

* \[ **key**: *string*\]: any

All properties derive from this class. It provides a standard interface for rendering and interpreting `x-` vendor extension properties

## Index

### Constructors

* [constructor](_baseprop_.baseprop.md#constructor)

### Properties

* [classSourcePath](_baseprop_.baseprop.md#classsourcepath)
* [defaultValue](_baseprop_.baseprop.md#optional-defaultvalue)
* [description](_baseprop_.baseprop.md#optional-description)
* [empty](_baseprop_.baseprop.md#optional-empty)
* [equals](_baseprop_.baseprop.md#optional-equals)
* [isDefined](_baseprop_.baseprop.md#optional-isdefined)
* [isIn](_baseprop_.baseprop.md#optional-isin)
* [isNotIn](_baseprop_.baseprop.md#optional-isnotin)
* [isOptional](_baseprop_.baseprop.md#optional-isoptional)
* [name](_baseprop_.baseprop.md#name)
* [notEmpty](_baseprop_.baseprop.md#optional-notempty)
* [notEquals](_baseprop_.baseprop.md#optional-notequals)
* [ownDecorator](_baseprop_.baseprop.md#protected-owndecorator)
* [reportedType](_baseprop_.baseprop.md#reportedtype)
* [sys](_baseprop_.baseprop.md#protected-sys)
* [title](_baseprop_.baseprop.md#optional-title)
* [typeName](_baseprop_.baseprop.md#typename)

### Accessors

* [prop](_baseprop_.baseprop.md#prop)

### Methods

* [decs](_baseprop_.baseprop.md#protected-decs)
* [headers](_baseprop_.baseprop.md#headers)
* [imports](_baseprop_.baseprop.md#imports)
* [renderDeclarations](_baseprop_.baseprop.md#renderdeclarations)
* [renderProp](_baseprop_.baseprop.md#renderprop)
* [validationImports](_baseprop_.baseprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_baseprop_.baseprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_baseprop_.baseprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new BaseProp**(`node`: any, `name`: string): *[BaseProp](_baseprop_.baseprop.md)*

*Defined in [BaseProp.ts:21](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L21)*

Create new property

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node  |

**Returns:** *[BaseProp](_baseprop_.baseprop.md)*

## Properties

###  classSourcePath

• **classSourcePath**: *string | null*

*Defined in [BaseProp.ts:67](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L67)*

The path to the the prooperty from the base property

___

### `Optional` defaultValue

• **defaultValue**? : *any*

*Defined in [BaseProp.ts:119](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L119)*

A default value for the property

___

### `Optional` description

• **description**? : *undefined | string*

*Defined in [BaseProp.ts:83](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L83)*

Detailed documentation

___

### `Optional` empty

• **empty**? : *any*

*Defined in [BaseProp.ts:103](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L103)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` equals

• **equals**? : *any*

*Defined in [BaseProp.ts:95](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L95)*

Checks if value equals ("===") comparison

___

### `Optional` isDefined

• **isDefined**? : *any*

*Defined in [BaseProp.ts:87](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L87)*

Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.

___

### `Optional` isIn

• **isIn**? : *any[]*

*Defined in [BaseProp.ts:111](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L111)*

Checks if value is in a array of allowed values.

___

### `Optional` isNotIn

• **isNotIn**? : *any[]*

*Defined in [BaseProp.ts:115](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L115)*

Checks if value is not in a array of disallowed values.

___

### `Optional` isOptional

• **isOptional**? : *undefined | false | true*

*Defined in [BaseProp.ts:91](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L91)*

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

___

###  name

• **name**: *string*

*Defined in [BaseProp.ts:71](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L71)*

The name of the symbol

___

### `Optional` notEmpty

• **notEmpty**? : *any*

*Defined in [BaseProp.ts:107](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L107)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` notEquals

• **notEquals**? : *any*

*Defined in [BaseProp.ts:99](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L99)*

Checks if value equals ("===") comparison.

___

### `Protected` ownDecorator

• **ownDecorator**: *string* = "IsString"

*Defined in [BaseProp.ts:124](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L124)*

The prop instance's own type decorator

___

###  reportedType

• **reportedType**: *string*

*Defined in [BaseProp.ts:63](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L63)*

The type that was defined in the json/yaml

___

### `Protected` sys

• **sys**: *LoDashStatic* =  sys

*Defined in [BaseProp.ts:129](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L129)*

A local for templates to access lodash

___

### `Optional` title

• **title**? : *undefined | string*

*Defined in [BaseProp.ts:79](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L79)*

Short documentation

___

###  typeName

• **typeName**: *string* = ""

*Defined in [BaseProp.ts:75](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L75)*

The name typescript expects for the type

## Accessors

###  prop

• **get prop**(): *string*

*Defined in [BaseProp.ts:159](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L159)*

The template to render this type

**Returns:** *string*

## Methods

### `Protected` decs

▸ **decs**(): *string[]*

*Defined in [BaseProp.ts:144](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L144)*

The list of decorators templates supported by this type

**Returns:** *string[]*

___

###  headers

▸ **headers**(): *string[]*

*Defined in [BaseProp.ts:185](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L185)*

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Defined in [BaseProp.ts:164](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L164)*

Returns a string array of needed imports

**Returns:** *string[]*

___

###  renderDeclarations

▸ **renderDeclarations**(): *string[]*

*Defined in [BaseProp.ts:190](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L190)*

Render the decorators and characteristics

**Returns:** *string[]*

___

###  renderProp

▸ **renderProp**(): *string*

*Defined in [BaseProp.ts:211](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L211)*

Render the property, decorators and types and formats the output

**Returns:** *string*

___

###  validationImports

▸ **validationImports**(): *string[]*

*Defined in [BaseProp.ts:169](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L169)*

Gets the validators that are actually in use so that a single import can be created

**Returns:** *string[]*

## Object literals

### `Protected` defaultTemplateOptions

### ▪ **defaultTemplateOptions**: *object*

*Defined in [BaseProp.ts:134](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L134)*

The default options for the template render

###  compileDebug

• **compileDebug**: *boolean* = false

*Defined in [BaseProp.ts:137](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L137)*

###  debug

• **debug**: *boolean* = false

*Defined in [BaseProp.ts:136](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L136)*

###  rmWhitespace

• **rmWhitespace**: *boolean* = false

*Defined in [BaseProp.ts:135](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L135)*

###  escape

▸ **escape**(`s`: any): *any*

*Defined in [BaseProp.ts:138](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *any*

___

###  propToTemplate

### ▪ **propToTemplate**: *object*

*Defined in [BaseProp.ts:51](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L51)*

The map from property to template decorators of the class validator class

###  empty

• **empty**: *string* = "IsEmpty"

*Defined in [BaseProp.ts:55](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L55)*

###  equals

• **equals**: *string* = "Equals"

*Defined in [BaseProp.ts:53](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L53)*

###  isDefined

• **isDefined**: *string* = "IsDefined"

*Defined in [BaseProp.ts:52](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L52)*

###  isIn

• **isIn**: *string* = "IsIn"

*Defined in [BaseProp.ts:57](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L57)*

###  isNotIn

• **isNotIn**: *string* = "IsNotIn"

*Defined in [BaseProp.ts:58](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L58)*

###  notEmpty

• **notEmpty**: *string* = "NotEmpty"

*Defined in [BaseProp.ts:56](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L56)*

###  notEquals

• **notEquals**: *string* = "NotEquals"

*Defined in [BaseProp.ts:54](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L54)*