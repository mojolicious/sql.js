/**
 * Escape identifier (only the PostgreSQL format is currently supported).
 */
export function escapeIdentifier(identifier: string): string {
  return '"' + String(identifier).replaceAll('"', '""') + '"';
}

/**
 * Escape literal (only the PostgreSQL format is currently supported).
 */
export function escapeLiteral(literal: string): string {
  const string = String(literal);
  let result = '';
  let escapeString = false;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
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
