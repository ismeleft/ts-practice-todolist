/**
 * Sets an item in localStorage.
 * @param name - The name of the item to set.
 * @param value - The value to set.
 * @param stringify - Whether to JSON.stringify the value. Defaults to true.
 */
export function setLocalStorage(
  name: string,
  value: any,
  stringify = true
): void {
  if (stringify) {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value);
  }
}

/**
 * Gets an item from localStorage.
 * @param name - The name of the item to get.
 * @param parse - Whether to JSON.parse the value. Defaults to true.
 * @returns The retrieved value, or null if not found.
 */
export function getLocalStorage(name: string, parse = true): any {
  const value = localStorage.getItem(name);
  if (value === null) {
    return null;
  }
  if (parse) {
    try {
      return JSON.parse(value);
    } catch (e) {
      // If parsing fails, return the raw value
      return value;
    }
  }
  return value;
}

/**
 * Removes an item from localStorage.
 * @param name - The name of the item to remove.
 */
export function removeLocalStorage(name: string): void {
  localStorage.removeItem(name);
}
