> # External module: "get.files"

Reads a list of filenames and creates and array of [[FilePayload]]s

**`module`** getFiles

## Index

### Functions

* [default](_get_files_.md#default)

## Functions

###  default

▸ **default**(`fileNames`: string[], `callback`: `Function`): *void*

Defined in get.files.ts:13

Reads a list of filenames and creates and array of [[FilePayload]]s

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fileNames` | string[] | The list of files to create payloads from |
`callback` | `Function` | The callback to raise when it is done. It will get 2 parameters, a standard `err` parameter and `payloads` of the entire symbol tree  |

**Returns:** *void*