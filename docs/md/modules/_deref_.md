**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;deref&quot;](_deref_.md)

# External module: "deref"

A function to look for all remote references in a file and pulling them into the file as a top level symbol and replacing the
external reference with an internal reference

**`module`** deref

## Index

### Functions

* [default](_deref_.md#default)

## Functions

###  default

▸ **default**(`payload`: FilePayload[], `callback`: Function): *void*

*Defined in [deref.ts:11](https://github.com/terryweiss/jsm/blob/479dc25/src/deref.ts#L11)*

A function to look for all remote references in a file and pulling them into the file as a top level symbol and replacing the
external reference with an internal reference

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`payload` | FilePayload[] | The files that will be analyzed |
`callback` | Function | The standard callback returns with a regular `err` parameter and an updated payload object  |

**Returns:** *void*