import {Statement} from './statement.js';

export {Statement};
export * from './util.js';

export function sql(parts: TemplateStringsArray, ...values: any[]): Statement {
  return Statement.sql(parts, ...values);
}

export function sqlUnsafe(parts: TemplateStringsArray, ...values: any[]): Statement {
  return Statement.sqlUnsafe(parts, ...values);
}
