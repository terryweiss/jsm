> # External module: "define.modules"

Creates a top level class from each file's root element and defines the initial structure of the symbol tree.

**`module`** defineModules

## Index

### Functions

* [default](_define_modules_.md#default)

## Functions

###  default

▸ **default**(`files`: `FilePayload`[], `callback`: `Function`): *void*

Defined in define.modules.ts:12

Creates a top level class from each file's root element and defines the initial structure of the symbol tree.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`files` | `FilePayload`[] | The files to look at |
`callback` | `Function` | The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `symbols` of the entire symbol tree  |

**Returns:** *void*