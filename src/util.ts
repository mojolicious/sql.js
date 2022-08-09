/**
 * Escape identifier (only the PostgreSQL format is currently supported).
 */
export function escapeIdentifier(identifier: string): string {
  return '"' + identifier.replaceAll('"', '""') + '"';
}

/**
 * Escape literal (only the PostgreSQL format is currently supported).
 */
export function escapeLiteral(literal: string): string {
  let result = '';
  let escapeString = false;

  for (let i = 0; i < literal.length; i++) {
    const char = literal[i];
    if (char === "'") {
      result += "''";
    } else if (char === '\\') {
      result += '\\\\';
      escapeString = true;
    } else {
      result += char;
    }
  }

  return escapeString === true ? ` E'${result}'` : `'${result}'`;
}
