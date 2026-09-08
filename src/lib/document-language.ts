export function getDocumentLanguage(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt-BR";
}
