export function removeCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function addCookie(name: string, value = "") {
  document.cookie = `${name}=${value}; path=/;`;
}