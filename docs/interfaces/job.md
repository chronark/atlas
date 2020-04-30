[Atlas documentation](../globals.md) › [Job](job.md)

# Interface: Job

A Job listing with all relevant data.

## Hierarchy

* **Job**

## Index

### Properties

* [corp](job.md#corp)
* [date](job.md#date)
* [id](job.md#id)
* [locations](job.md#locations)
* [logo](job.md#logo)
* [score](job.md#score)
* [title](job.md#title)
* [type](job.md#type)
* [url](job.md#url)

## Properties

###  corp

• **corp**: *string*

*Defined in [types/customTypes.ts:55](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L55)*

Name of the corporation offering the job.

___

###  date

• **date**: *string*

*Defined in [types/customTypes.ts:63](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L63)*

The entrydate for the job.

___

###  id

• **id**: *number*

*Defined in [types/customTypes.ts:67](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L67)*

Internal id for each job.

___

###  locations

• **locations**: *[Location](../globals.md#location)[]*

*Defined in [types/customTypes.ts:59](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L59)*

An array of locations where the job is offered.

___

###  logo

• **logo**: *string*

*Defined in [types/customTypes.ts:71](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L71)*

URL to the job's or company's logo.

___

###  score

• **score**: *number*

*Defined in [types/customTypes.ts:76](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L76)*

Calculated matching score for the user and job.
Must be between 0.0 and 1.0 included.

___

###  title

• **title**: *string*

*Defined in [types/customTypes.ts:80](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L80)*

Job title description.

___

###  type

• **type**: *string*

*Defined in [types/customTypes.ts:84](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L84)*

Job classification.

___

###  url

• **url**: *string*

*Defined in [types/customTypes.ts:88](https://github.com/chronark/atlas/blob/e581107/src/types/customTypes.ts#L88)*

URL for more information about this job or company's page.
