**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;AnyProp&quot;](../modules/_anyprop_.md) › [AnyProp](_anyprop_.anyprop.md)

# Class: AnyProp

An Any property - a type of no fixed hairstyle. This will validate the value it is connected with and render it down

## Hierarchy

* [BaseProp](_baseprop_.baseprop.md)

  * **AnyProp**

## Indexable

* \[ **key**: *string*\]: any

An Any property - a type of no fixed hairstyle. This will validate the value it is connected with and render it down

## Index

### Constructors

* [constructor](_anyprop_.anyprop.md#constructor)

### Properties

* [classSourcePath](_anyprop_.anyprop.md#classsourcepath)
* [defaultValue](_anyprop_.anyprop.md#optional-defaultvalue)
* [description](_anyprop_.anyprop.md#optional-description)
* [empty](_anyprop_.anyprop.md#optional-empty)
* [equals](_anyprop_.anyprop.md#optional-equals)
* [isDefined](_anyprop_.anyprop.md#optional-isdefined)
* [isIn](_anyprop_.anyprop.md#optional-isin)
* [isNotIn](_anyprop_.anyprop.md#optional-isnotin)
* [isOptional](_anyprop_.anyprop.md#optional-isoptional)
* [name](_anyprop_.anyprop.md#name)
* [notEmpty](_anyprop_.anyprop.md#optional-notempty)
* [notEquals](_anyprop_.anyprop.md#optional-notequals)
* [ownDecorator](_anyprop_.anyprop.md#protected-owndecorator)
* [reportedType](_anyprop_.anyprop.md#reportedtype)
* [sys](_anyprop_.anyprop.md#protected-sys)
* [title](_anyprop_.anyprop.md#optional-title)
* [typeName](_anyprop_.anyprop.md#typename)

### Accessors

* [prop](_anyprop_.anyprop.md#prop)

### Methods

* [decs](_anyprop_.anyprop.md#decs)
* [headers](_anyprop_.anyprop.md#headers)
* [imports](_anyprop_.anyprop.md#imports)
* [renderDeclarations](_anyprop_.anyprop.md#renderdeclarations)
* [renderProp](_anyprop_.anyprop.md#renderprop)
* [validationImports](_anyprop_.anyprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_anyprop_.anyprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_anyprop_.anyprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new AnyProp**(`node`: any, `name`: string): *[AnyProp](_anyprop_.anyprop.md)*

*Overrides [BaseProp](_baseprop_.baseprop.md).[constructor](_baseprop_.baseprop.md#constructor)*

*Defined in [AnyProp.ts:16](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L16)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node  |

**Returns:** *[AnyProp](_anyprop_.anyprop.md)*

## Properties

###  classSourcePath

• **classSourcePath**: *string | null*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[classSourcePath](_baseprop_.baseprop.md#classsourcepath)*

*Defined in [BaseProp.ts:67](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L67)*

The path to the the prooperty from the base property

___

### `Optional` defaultValue

• **defaultValue**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultValue](_baseprop_.baseprop.md#optional-defaultvalue)*

*Defined in [BaseProp.ts:119](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L119)*

A default value for the property

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[description](_baseprop_.baseprop.md#optional-description)*

*Defined in [BaseProp.ts:83](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L83)*

Detailed documentation

___

### `Optional` empty

• **empty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[empty](_baseprop_.baseprop.md#optional-empty)*

*Defined in [BaseProp.ts:103](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L103)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` equals

• **equals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[equals](_baseprop_.baseprop.md#optional-equals)*

*Defined in [BaseProp.ts:95](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L95)*

Checks if value equals ("===") comparison

___

### `Optional` isDefined

• **isDefined**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isDefined](_baseprop_.baseprop.md#optional-isdefined)*

*Defined in [BaseProp.ts:87](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L87)*

Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.

___

### `Optional` isIn

• **isIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isIn](_baseprop_.baseprop.md#optional-isin)*

*Defined in [BaseProp.ts:111](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L111)*

Checks if value is in a array of allowed values.

___

### `Optional` isNotIn

• **isNotIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isNotIn](_baseprop_.baseprop.md#optional-isnotin)*

*Defined in [BaseProp.ts:115](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L115)*

Checks if value is not in a array of disallowed values.

___

### `Optional` isOptional

• **isOptional**? : *undefined | false | true*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isOptional](_baseprop_.baseprop.md#optional-isoptional)*

*Defined in [BaseProp.ts:91](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L91)*

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

___

###  name

• **name**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[name](_baseprop_.baseprop.md#name)*

*Defined in [BaseProp.ts:71](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L71)*

The name of the symbol

___

### `Optional` notEmpty

• **notEmpty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEmpty](_baseprop_.baseprop.md#optional-notempty)*

*Defined in [BaseProp.ts:107](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L107)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` notEquals

• **notEquals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEquals](_baseprop_.baseprop.md#optional-notequals)*

*Defined in [BaseProp.ts:99](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L99)*

Checks if value equals ("===") comparison.

___

### `Protected` ownDecorator

• **ownDecorator**: *string* = "IsString"

*Inherited from [BaseProp](_baseprop_.baseprop.md).[ownDecorator](_baseprop_.baseprop.md#protected-owndecorator)*

*Defined in [BaseProp.ts:124](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L124)*

The prop instance's own type decorator

___

###  reportedType

• **reportedType**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[reportedType](_baseprop_.baseprop.md#reportedtype)*

*Defined in [BaseProp.ts:63](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L63)*

The type that was defined in the json/yaml

___

### `Protected` sys

• **sys**: *LoDashStatic* =  sys

*Inherited from [BaseProp](_baseprop_.baseprop.md).[sys](_baseprop_.baseprop.md#protected-sys)*

*Defined in [BaseProp.ts:129](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L129)*

A local for templates to access lodash

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[title](_baseprop_.baseprop.md#optional-title)*

*Defined in [BaseProp.ts:79](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L79)*

Short documentation

___

###  typeName

• **typeName**: *string* = ""

*Inherited from [BaseProp](_baseprop_.baseprop.md).[typeName](_baseprop_.baseprop.md#typename)*

*Defined in [BaseProp.ts:75](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L75)*

The name typescript expects for the type

## Accessors

###  prop

• **get prop**(): *string*

*Overrides [BaseProp](_baseprop_.baseprop.md).[prop](_baseprop_.baseprop.md#prop)*

*Defined in [AnyProp.ts:38](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L38)*

The template to render this type

**Returns:** *string*

## Methods

###  decs

▸ **decs**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[decs](_baseprop_.baseprop.md#protected-decs)*

*Defined in [AnyProp.ts:31](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L31)*

The list of decorators templates supported by this type

**Returns:** *string[]*

___

###  headers

▸ **headers**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[headers](_baseprop_.baseprop.md#headers)*

*Defined in [AnyProp.ts:57](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L57)*

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[imports](_baseprop_.baseprop.md#imports)*

*Defined in [AnyProp.ts:45](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L45)*

Returns a string array of needed imports

**Returns:** *string[]*

___

###  renderDeclarations

▸ **renderDeclarations**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderDeclarations](_baseprop_.baseprop.md#renderdeclarations)*

*Defined in [BaseProp.ts:190](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L190)*

Render the decorators and characteristics

**Returns:** *string[]*

___

###  renderProp

▸ **renderProp**(): *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderProp](_baseprop_.baseprop.md#renderprop)*

*Defined in [BaseProp.ts:211](https://github.com/terryweiss/jsm/blob/479dc25/src/BaseProp.ts#L211)*

Render the property, decorators and types and formats the output

**Returns:** *string*

___

###  validationImports

▸ **validationImports**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[validationImports](_baseprop_.baseprop.md#validationimports)*

*Defined in [AnyProp.ts:50](https://github.com/terryweiss/jsm/blob/479dc25/src/AnyProp.ts#L50)*

Gets the validators that are actually in use so that a single import can be created

**Returns:** *string[]*

## Object literals

### `Protected` defaultTemplateOptions

### ▪ **defaultTemplateOptions**: *object*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultTemplateOptions](_baseprop_.baseprop.md#protected-defaulttemplateoptions)*

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

*Inherited from [BaseProp](_baseprop_.baseprop.md).[propToTemplate](_baseprop_.baseprop.md#proptotemplate)*

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