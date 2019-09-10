**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;ArrayProp&quot;](../modules/_arrayprop_.md) › [ArrayProp](_arrayprop_.arrayprop.md)

# Class: ArrayProp

A String property. This will validate and render the value

## Hierarchy

* [BaseProp](_baseprop_.baseprop.md)

  * **ArrayProp**

## Indexable

* \[ **key**: *string*\]: any

A String property. This will validate and render the value

## Index

### Constructors

* [constructor](_arrayprop_.arrayprop.md#constructor)

### Properties

* [arrayUnique](_arrayprop_.arrayprop.md#optional-arrayunique)
* [class](_arrayprop_.arrayprop.md#optional-class)
* [classSourcePath](_arrayprop_.arrayprop.md#classsourcepath)
* [contains](_arrayprop_.arrayprop.md#optional-contains)
* [defaultValue](_arrayprop_.arrayprop.md#optional-defaultvalue)
* [description](_arrayprop_.arrayprop.md#optional-description)
* [empty](_arrayprop_.arrayprop.md#optional-empty)
* [equals](_arrayprop_.arrayprop.md#optional-equals)
* [isDefined](_arrayprop_.arrayprop.md#optional-isdefined)
* [isIn](_arrayprop_.arrayprop.md#optional-isin)
* [isNotIn](_arrayprop_.arrayprop.md#optional-isnotin)
* [isOptional](_arrayprop_.arrayprop.md#optional-isoptional)
* [items](_arrayprop_.arrayprop.md#optional-items)
* [maxLength](_arrayprop_.arrayprop.md#optional-maxlength)
* [minLength](_arrayprop_.arrayprop.md#optional-minlength)
* [name](_arrayprop_.arrayprop.md#name)
* [notContains](_arrayprop_.arrayprop.md#optional-notcontains)
* [notEmpty](_arrayprop_.arrayprop.md#optional-notempty)
* [notEquals](_arrayprop_.arrayprop.md#optional-notequals)
* [ownDecorator](_arrayprop_.arrayprop.md#protected-owndecorator)
* [parentObj](_arrayprop_.arrayprop.md#protected-parentobj)
* [reportedType](_arrayprop_.arrayprop.md#reportedtype)
* [symbols](_arrayprop_.arrayprop.md#protected-symbols)
* [sys](_arrayprop_.arrayprop.md#protected-sys)
* [title](_arrayprop_.arrayprop.md#optional-title)
* [typeName](_arrayprop_.arrayprop.md#typename)

### Accessors

* [prop](_arrayprop_.arrayprop.md#prop)

### Methods

* [decs](_arrayprop_.arrayprop.md#protected-decs)
* [headers](_arrayprop_.arrayprop.md#headers)
* [imports](_arrayprop_.arrayprop.md#imports)
* [renderDeclarations](_arrayprop_.arrayprop.md#renderdeclarations)
* [renderProp](_arrayprop_.arrayprop.md#renderprop)
* [validationImports](_arrayprop_.arrayprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_arrayprop_.arrayprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_arrayprop_.arrayprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new ArrayProp**(`node`: any, `name`: string, `symbols`: any, `parentObj`: any): *[ArrayProp](_arrayprop_.arrayprop.md)*

*Overrides [BaseProp](_baseprop_.baseprop.md).[constructor](_baseprop_.baseprop.md#constructor)*

*Defined in [ArrayProp.ts:24](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L24)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node |
`symbols` | any | The entire symbol tree so that references can be identified |
`parentObj` | any | The immediate parent in the symbol tree  |

**Returns:** *[ArrayProp](_arrayprop_.arrayprop.md)*

## Properties

### `Optional` arrayUnique

• **arrayUnique**? : *undefined | false | true*

*Defined in [ArrayProp.ts:104](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L104)*

Checks if all array's values are unique. Comparison for objects is reference-based.

___

### `Optional` class

• **class**? : *any*

*Defined in [ArrayProp.ts:77](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L77)*

The class name for the items in the array, if any

___

###  classSourcePath

• **classSourcePath**: *string | null*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[classSourcePath](_baseprop_.baseprop.md#classsourcepath)*

*Defined in [BaseProp.ts:67](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L67)*

The path to the the prooperty from the base property

___

### `Optional` contains

• **contains**? : *any[]*

*Defined in [ArrayProp.ts:85](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L85)*

Checks if array contains all values from the given array of values.

___

### `Optional` defaultValue

• **defaultValue**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultValue](_baseprop_.baseprop.md#optional-defaultvalue)*

*Defined in [BaseProp.ts:119](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L119)*

A default value for the property

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[description](_baseprop_.baseprop.md#optional-description)*

*Defined in [BaseProp.ts:83](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L83)*

Detailed documentation

___

### `Optional` empty

• **empty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[empty](_baseprop_.baseprop.md#optional-empty)*

*Defined in [BaseProp.ts:103](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L103)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` equals

• **equals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[equals](_baseprop_.baseprop.md#optional-equals)*

*Defined in [BaseProp.ts:95](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L95)*

Checks if value equals ("===") comparison

___

### `Optional` isDefined

• **isDefined**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isDefined](_baseprop_.baseprop.md#optional-isdefined)*

*Defined in [BaseProp.ts:87](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L87)*

Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.

___

### `Optional` isIn

• **isIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isIn](_baseprop_.baseprop.md#optional-isin)*

*Defined in [BaseProp.ts:111](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L111)*

Checks if value is in a array of allowed values.

___

### `Optional` isNotIn

• **isNotIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isNotIn](_baseprop_.baseprop.md#optional-isnotin)*

*Defined in [BaseProp.ts:115](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L115)*

Checks if value is not in a array of disallowed values.

___

### `Optional` isOptional

• **isOptional**? : *undefined | false | true*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isOptional](_baseprop_.baseprop.md#optional-isoptional)*

*Defined in [BaseProp.ts:91](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L91)*

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

___

### `Optional` items

• **items**? : *any*

*Defined in [ArrayProp.ts:81](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L81)*

What the types of the array are allowed to be

___

### `Optional` maxLength

• **maxLength**? : *undefined | number*

*Defined in [ArrayProp.ts:100](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L100)*

Checks if array's length is as maximal this number.

___

### `Optional` minLength

• **minLength**? : *undefined | number*

*Defined in [ArrayProp.ts:95](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L95)*

Checks if array's length is as minimal this number.

___

###  name

• **name**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[name](_baseprop_.baseprop.md#name)*

*Defined in [BaseProp.ts:71](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L71)*

The name of the symbol

___

### `Optional` notContains

• **notContains**? : *any[]*

*Defined in [ArrayProp.ts:90](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L90)*

Checks if array does not contain any of the given values.

___

### `Optional` notEmpty

• **notEmpty**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEmpty](_baseprop_.baseprop.md#optional-notempty)*

*Defined in [BaseProp.ts:107](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L107)*

Checks if given value is empty (=== '', === null, === undefined).

___

### `Optional` notEquals

• **notEquals**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[notEquals](_baseprop_.baseprop.md#optional-notequals)*

*Defined in [BaseProp.ts:99](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L99)*

Checks if value equals ("===") comparison.

___

### `Protected` ownDecorator

• **ownDecorator**: *string* = "IsString"

*Inherited from [BaseProp](_baseprop_.baseprop.md).[ownDecorator](_baseprop_.baseprop.md#protected-owndecorator)*

*Defined in [BaseProp.ts:124](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L124)*

The prop instance's own type decorator

___

### `Protected` parentObj

• **parentObj**: *any*

*Defined in [ArrayProp.ts:33](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L33)*

The immediate parent in the symbol tree

___

###  reportedType

• **reportedType**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[reportedType](_baseprop_.baseprop.md#reportedtype)*

*Defined in [BaseProp.ts:63](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L63)*

The type that was defined in the json/yaml

___

### `Protected` symbols

• **symbols**: *any*

*Defined in [ArrayProp.ts:33](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L33)*

The entire symbol tree so that references can be identified

___

### `Protected` sys

• **sys**: *LoDashStatic* =  sys

*Inherited from [BaseProp](_baseprop_.baseprop.md).[sys](_baseprop_.baseprop.md#protected-sys)*

*Defined in [BaseProp.ts:129](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L129)*

A local for templates to access lodash

___

### `Optional` title

• **title**? : *undefined | string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[title](_baseprop_.baseprop.md#optional-title)*

*Defined in [BaseProp.ts:79](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L79)*

Short documentation

___

###  typeName

• **typeName**: *string* = ""

*Inherited from [BaseProp](_baseprop_.baseprop.md).[typeName](_baseprop_.baseprop.md#typename)*

*Defined in [BaseProp.ts:75](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L75)*

The name typescript expects for the type

## Accessors

###  prop

• **get prop**(): *string*

*Overrides [BaseProp](_baseprop_.baseprop.md).[prop](_baseprop_.baseprop.md#prop)*

*Defined in [ArrayProp.ts:109](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L109)*

The template to render this type

**Returns:** *string*

## Methods

### `Protected` decs

▸ **decs**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[decs](_baseprop_.baseprop.md#protected-decs)*

*Defined in [BaseProp.ts:144](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L144)*

The list of decorators templates supported by this type

**Returns:** *string[]*

___

###  headers

▸ **headers**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[headers](_baseprop_.baseprop.md#headers)*

*Defined in [ArrayProp.ts:138](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L138)*

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[imports](_baseprop_.baseprop.md#imports)*

*Defined in [ArrayProp.ts:116](https://github.com/terryweiss/jsm/blob/072a529/src/ArrayProp.ts#L116)*

Returns a string array of needed imports

**Returns:** *string[]*

___

###  renderDeclarations

▸ **renderDeclarations**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderDeclarations](_baseprop_.baseprop.md#renderdeclarations)*

*Defined in [BaseProp.ts:190](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L190)*

Render the decorators and characteristics

**Returns:** *string[]*

___

###  renderProp

▸ **renderProp**(): *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[renderProp](_baseprop_.baseprop.md#renderprop)*

*Defined in [BaseProp.ts:211](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L211)*

Render the property, decorators and types and formats the output

**Returns:** *string*

___

###  validationImports

▸ **validationImports**(): *string[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[validationImports](_baseprop_.baseprop.md#validationimports)*

*Defined in [BaseProp.ts:169](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L169)*

Gets the validators that are actually in use so that a single import can be created

**Returns:** *string[]*

## Object literals

### `Protected` defaultTemplateOptions

### ▪ **defaultTemplateOptions**: *object*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[defaultTemplateOptions](_baseprop_.baseprop.md#protected-defaulttemplateoptions)*

*Defined in [BaseProp.ts:134](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L134)*

The default options for the template render

###  compileDebug

• **compileDebug**: *boolean* = false

*Defined in [BaseProp.ts:137](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L137)*

###  debug

• **debug**: *boolean* = false

*Defined in [BaseProp.ts:136](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L136)*

###  rmWhitespace

• **rmWhitespace**: *boolean* = false

*Defined in [BaseProp.ts:135](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L135)*

###  escape

▸ **escape**(`s`: any): *any*

*Defined in [BaseProp.ts:138](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L138)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | any |

**Returns:** *any*

___

###  propToTemplate

### ▪ **propToTemplate**: *object*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[propToTemplate](_baseprop_.baseprop.md#proptotemplate)*

*Defined in [BaseProp.ts:51](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L51)*

The map from property to template decorators of the class validator class

###  empty

• **empty**: *string* = "IsEmpty"

*Defined in [BaseProp.ts:55](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L55)*

###  equals

• **equals**: *string* = "Equals"

*Defined in [BaseProp.ts:53](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L53)*

###  isDefined

• **isDefined**: *string* = "IsDefined"

*Defined in [BaseProp.ts:52](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L52)*

###  isIn

• **isIn**: *string* = "IsIn"

*Defined in [BaseProp.ts:57](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L57)*

###  isNotIn

• **isNotIn**: *string* = "IsNotIn"

*Defined in [BaseProp.ts:58](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L58)*

###  notEmpty

• **notEmpty**: *string* = "NotEmpty"

*Defined in [BaseProp.ts:56](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L56)*

###  notEquals

• **notEquals**: *string* = "NotEquals"

*Defined in [BaseProp.ts:54](https://github.com/terryweiss/jsm/blob/072a529/src/BaseProp.ts#L54)*