import {Statement} from './statement.ts';

export {Statement};
export * from './util.ts';

export function sql(parts: TemplateStringsArray, ...values: any[]): Statement {
  return Statement.sql(parts, ...values);
}

export function sqlUnsafe(parts: TemplateStringsArray, ...values: any[]): Statement {
  return Statement.sqlUnsafe(parts, ...values);
}
