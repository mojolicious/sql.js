import assert from 'node:assert/strict';
import {sql, type Statement} from '@mojojs/sql';

const statement: Statement = sql`SELECT * FROM users WHERE name = ${'TypeScript'}`;
assert.equal(statement.toQuery().text, 'SELECT * FROM users WHERE name = $1');

console.log('TypeScript consumer works');
