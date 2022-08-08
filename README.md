<p align="center">
  <a href="https://mojojs.org">
    <img src="https://github.com/mojolicious/mojo.js/blob/main/docs/images/logo.png?raw=true" style="margin: 0 auto;">
  </a>
</p>

[![](https://github.com/mojolicious/sql.js/workflows/test/badge.svg)](https://github.com/mojolicious/sql.js/actions)
[![Coverage Status](https://coveralls.io/repos/github/mojolicious/sql.js/badge.svg?branch=main)](https://coveralls.io/github/mojolicious/sql.js?branch=main)
[![npm](https://img.shields.io/npm/v/@mojojs/sql.svg)](https://www.npmjs.com/package/@mojojs/sql)

Safely generate SQL statements with tagged template literals. Written in TypeScript.

```js
import {sql} from '@mojojs/sql';

// {text: 'SELECT * FROM users WHERE name = $1', values: ['sebastian']}
const {text, values} = sql`SELECT * FROM users WHERE name = ${'sebastian'}`.toQuery();
```

To prevent SQL injection attacks, all interpolated values become placeholders in the generated query by default.
Partial statements can even be used recursively to build more complex queries.

```js
// Use a partial SQL query
const role = 'admin';
const partialQuery = sql`AND role = ${role}`;
const name = 'root';
const {text, values} = sql`SELECT * FROM users WHERE name = ${name} ${partialQuery}`.toQuery();
```

Make partial statements optional to dynamically generate `WHERE` clauses.

```js
const partialQuery = foo === true ? sql`AND foo IS NOT NULL` : sql``;
const {text, values} = sql`SELECT * FROM users WHERE name = ${'sebastian'} ${partialQuery}`.toQuery();
```

And if you need a little more control over the generated SQL query, you can of course also bypass safety features with
the tagged template literal `sqlUnsafe`. But make sure to use whatever escaping functions your database driver supports
to escape unsafe values yourself.

```js
import {sql, sqlUnsafe} from '@mojojs/sql';

const role = 'role = ' + escapeLiteral('power user');
const partialQuery = sqlUnsafe`AND ${role}`;
const name = 'root';
const {text, values} = sql`SELECT * FROM users WHERE name = ${name} ${partialQuery}`.toQuery();
```

### Editor Support

* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=kraih.javascript-tmpl-support)

## Installation

All you need is Node.js 16.0.0 (or newer).

```
$ npm install @mojojs/sql
```
