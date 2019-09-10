**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;obj.to.root&quot;](_obj_to_root_.md)

# External module: "obj.to.root"

A function to find all nested objects (not `$ref` references) and move them to the root of the symbol tree and replace with with
local `#/` `$refs`.

**`module`** objToRoot

## Index

### Functions

* [default](_obj_to_root_.md#default)

## Functions

###  default

▸ **default**(`payload`: FilePayload[], `callback`: Function): *void*

*Defined in [obj.to.root.ts:15](https://github.com/terryweiss/jsm/blob/072a529/src/obj.to.root.ts#L15)*

A function to find all nested objects (not `$ref` references) and move them to the root of the symbol tree and replace with with
local `#/` `$refs`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | FilePayload[] | The files to look at |
`callback` | Function | The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `payload` of the entire symbol tree  |

**Returns:** *void*