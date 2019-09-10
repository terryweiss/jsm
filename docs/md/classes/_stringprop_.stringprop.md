> # Class: StringProp

A String property. This will validate the value it is connected with and render it down

## Hierarchy

* [BaseProp](_baseprop_.baseprop.md)

  * **StringProp**

## Indexable

* \[ **key**: *string*\]: any

A String property. This will validate the value it is connected with and render it down

## Index

### Constructors

* [constructor](_stringprop_.stringprop.md#constructor)

### Properties

* [IsAlphanumeric](_stringprop_.stringprop.md#optional-isalphanumeric)
* [classSourcePath](_stringprop_.stringprop.md#classsourcepath)
* [contains](_stringprop_.stringprop.md#optional-contains)
* [defaultValue](_stringprop_.stringprop.md#optional-defaultvalue)
* [description](_stringprop_.stringprop.md#optional-description)
* [empty](_stringprop_.stringprop.md#optional-empty)
* [equals](_stringprop_.stringprop.md#optional-equals)
* [isAlpha](_stringprop_.stringprop.md#optional-isalpha)
* [isAscii](_stringprop_.stringprop.md#optional-isascii)
* [isBase64](_stringprop_.stringprop.md#optional-isbase64)
* [isBooleanString](_stringprop_.stringprop.md#optional-isbooleanstring)
* [isDateString](_stringprop_.stringprop.md#optional-isdatestring)
* [isDefined](_stringprop_.stringprop.md#optional-isdefined)
* [isEmail](_stringprop_.stringprop.md#optional-isemail)
* [isFQDN](_stringprop_.stringprop.md#optional-isfqdn)
* [isIn](_stringprop_.stringprop.md#optional-isin)
* [isIp](_stringprop_.stringprop.md#optional-isip)
* [isIso8601](_stringprop_.stringprop.md#optional-isiso8601)
* [isJson](_stringprop_.stringprop.md#optional-isjson)
* [isLowercase](_stringprop_.stringprop.md#optional-islowercase)
* [isMilitaryTime](_stringprop_.stringprop.md#optional-ismilitarytime)
* [isMongoId](_stringprop_.stringprop.md#optional-ismongoid)
* [isNotIn](_stringprop_.stringprop.md#optional-isnotin)
* [isNumberString](_stringprop_.stringprop.md#optional-isnumberstring)
* [isOptional](_stringprop_.stringprop.md#optional-isoptional)
* [isUppercase](_stringprop_.stringprop.md#optional-isuppercase)
* [isUrl](_stringprop_.stringprop.md#optional-isurl)
* [isUuid](_stringprop_.stringprop.md#optional-isuuid)
* [matches](_stringprop_.stringprop.md#optional-matches)
* [maxLength](_stringprop_.stringprop.md#optional-maxlength)
* [minLength](_stringprop_.stringprop.md#optional-minlength)
* [name](_stringprop_.stringprop.md#name)
* [notContains](_stringprop_.stringprop.md#optional-notcontains)
* [notEmpty](_stringprop_.stringprop.md#optional-notempty)
* [notEquals](_stringprop_.stringprop.md#optional-notequals)
* [ownDecorator](_stringprop_.stringprop.md#protected-owndecorator)
* [reportedType](_stringprop_.stringprop.md#reportedtype)
* [sys](_stringprop_.stringprop.md#protected-sys)
* [title](_stringprop_.stringprop.md#optional-title)
* [typeName](_stringprop_.stringprop.md#typename)

### Accessors

* [prop](_stringprop_.stringprop.md#prop)

### Methods

* [decs](_stringprop_.stringprop.md#protected-decs)
* [headers](_stringprop_.stringprop.md#headers)
* [imports](_stringprop_.stringprop.md#imports)
* [renderDeclarations](_stringprop_.stringprop.md#renderdeclarations)
* [renderProp](_stringprop_.stringprop.md#renderprop)
* [validationImports](_stringprop_.stringprop.md#validationimports)

### Object literals

* [defaultTemplateOptions](_stringprop_.stringprop.md#protected-defaulttemplateoptions)
* [propToTemplate](_stringprop_.stringprop.md#proptotemplate)

## Constructors

###  constructor

\+ **new StringProp**(`node`: any, `name`: string): *[StringProp](_stringprop_.stringprop.md)*

*Overrides [BaseProp](_baseprop_.baseprop.md).[constructor](_baseprop_.baseprop.md#constructor)*

Defined in StringProp.ts:13

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`node` | any | The node being managed |
`name` | string | The name of the node  |

**Returns:** *[StringProp](_stringprop_.stringprop.md)*

## Properties

### `Optional` IsAlphanumeric

• **IsAlphanumeric**? : *undefined | false | true*

Defined in StringProp.ts:166

Checks if the string contains only letters and numbers

___

###  classSourcePath

• **classSourcePath**: *string | null*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[classSourcePath](_baseprop_.baseprop.md#classsourcepath)*

Defined in BaseProp.ts:67

The path to the the prooperty from the base property

___

### `Optional` contains

• **contains**? : *undefined | string*

Defined in StringProp.ts:151

Checks if the string contains the seed.

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

### `Optional` isAlpha

• **isAlpha**? : *undefined | false | true*

Defined in StringProp.ts:161

Checks if the string contains only letters (a-zA-Z).

___

### `Optional` isAscii

• **isAscii**? : *undefined | false | true*

Defined in StringProp.ts:171

Checks if the string contains ASCII chars only.

___

### `Optional` isBase64

• **isBase64**? : *undefined | false | true*

Defined in StringProp.ts:176

Checks if a string is base64 encoded.

___

### `Optional` isBooleanString

• **isBooleanString**? : *undefined | false | true*

Defined in StringProp.ts:136

Checks if a string is a boolean (e.g. is "true" or "false").

___

### `Optional` isDateString

• **isDateString**? : *undefined | false | true*

Defined in StringProp.ts:141

Checks if a string is a complete representation of a date (e.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00").

___

### `Optional` isDefined

• **isDefined**? : *any*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isDefined](_baseprop_.baseprop.md#optional-isdefined)*

Defined in BaseProp.ts:87

Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.

___

### `Optional` isEmail

• **isEmail**? : *undefined | false | true*

Defined in StringProp.ts:181

Checks if the string is an email.

___

### `Optional` isFQDN

• **isFQDN**? : *undefined | false | true*

Defined in StringProp.ts:186

Checks if the string is a fully qualified domain name (e.g. domain.com).

___

### `Optional` isIn

• **isIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isIn](_baseprop_.baseprop.md#optional-isin)*

Defined in BaseProp.ts:111

Checks if value is in a array of allowed values.

___

### `Optional` isIp

• **isIp**? : *undefined | string*

Defined in StringProp.ts:191

Checks if the string is an IP address

___

### `Optional` isIso8601

• **isIso8601**? : *undefined | false | true*

Defined in StringProp.ts:196

Checks if the string is a valid ISO 8601 date.

___

### `Optional` isJson

• **isJson**? : *undefined | false | true*

Defined in StringProp.ts:201

Checks if the string is valid JSON.

___

### `Optional` isLowercase

• **isLowercase**? : *undefined | false | true*

Defined in StringProp.ts:206

Checks if the string is lowercase.

___

### `Optional` isMilitaryTime

• **isMilitaryTime**? : *undefined | false | true*

Defined in StringProp.ts:231

Checks if the string is a valid representation of military time in the format HH:MM.

___

### `Optional` isMongoId

• **isMongoId**? : *undefined | false | true*

Defined in StringProp.ts:216

Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.

___

### `Optional` isNotIn

• **isNotIn**? : *any[]*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isNotIn](_baseprop_.baseprop.md#optional-isnotin)*

Defined in BaseProp.ts:115

Checks if value is not in a array of disallowed values.

___

### `Optional` isNumberString

• **isNumberString**? : *undefined | false | true*

Defined in StringProp.ts:146

Checks if a string is a number.

___

### `Optional` isOptional

• **isOptional**? : *undefined | false | true*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[isOptional](_baseprop_.baseprop.md#optional-isoptional)*

Defined in BaseProp.ts:91

Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.

___

### `Optional` isUppercase

• **isUppercase**? : *undefined | false | true*

Defined in StringProp.ts:211

Checks if the string is uppercase.

___

### `Optional` isUrl

• **isUrl**? : *undefined | false | true*

Defined in StringProp.ts:221

Checks if the string is an url.

___

### `Optional` isUuid

• **isUuid**? : *undefined | false | true*

Defined in StringProp.ts:226

Checks if the string is a UUID (version 3, 4 or 5).

___

### `Optional` matches

• **matches**? : *`RegExp`*

Defined in StringProp.ts:131

Regular Expression to validate against

___

### `Optional` maxLength

• **maxLength**? : *undefined | number*

Defined in StringProp.ts:126

Maximum string length

___

### `Optional` minLength

• **minLength**? : *undefined | number*

Defined in StringProp.ts:121

Minimum string length

___

###  name

• **name**: *string*

*Inherited from [BaseProp](_baseprop_.baseprop.md).[name](_baseprop_.baseprop.md#name)*

Defined in BaseProp.ts:71

The name of the symbol

___

### `Optional` notContains

• **notContains**? : *undefined | string*

Defined in StringProp.ts:156

Checks if the string not contains the seed.

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

Defined in StringProp.ts:236

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

Defined in StringProp.ts:250

Things like extra classes and enums that need to be at the top level of the module

**Returns:** *string[]*

___

###  imports

▸ **imports**(): *string[]*

*Overrides [BaseProp](_baseprop_.baseprop.md).[imports](_baseprop_.baseprop.md#imports)*

Defined in StringProp.ts:243

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