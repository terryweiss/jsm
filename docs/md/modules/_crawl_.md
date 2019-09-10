**[core.jsm](../README.md)**

[Globals](../globals.md) › [&quot;crawl&quot;](_crawl_.md)

# External module: "crawl"

This an implementation of the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern)

**`module`** crawl

## Index

### Functions

* [crawl](_crawl_.md#crawl)

## Functions

###  crawl

▸ **crawl**(`tree`: any, `visitor`: Function, `parent?`: undefined | string, `depth`: number, `level`: number): *void*

*Defined in [crawl.ts:23](https://github.com/terryweiss/jsm/blob/072a529/src/crawl.ts#L23)*

This an implementation of the [visitor pattern](https://en.wikipedia.org/wiki/Visitor_pattern). Pass in an object and it will
traverse it using breadth first and call your visitor function once for each node it encounters

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`tree` | any | - | The object to crawl |
`visitor` | Function | - | The function that will be called for each node. It will receive three parameters: object - the node that was found, name - the name of the node, path - a dot delimited string that indicates depth and membership, depth - indicates how many nodes have been visited level - a integer indicating depth in the object tree, |
`parent?` | undefined &#124; string | - | Intended to be used when called recursively. It is a dot delimited string that indicates depth and membership |
`depth` | number | 0 | Intended to be used when called recursively. |
`level` | number | 0 | Intended to be used when called recursively.  |

**Returns:** *void*