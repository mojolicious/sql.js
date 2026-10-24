import assert from 'node:assert/strict';
import {sql} from '@mojojs/sql';

assert.deepEqual(sql`SELECT * FROM users WHERE name = ${'JavaScript'}`.toQuery(), {
  text: 'SELECT * FROM users WHERE name = $1',
  values: ['JavaScript']
});

console.log('JavaScript consumer works');
