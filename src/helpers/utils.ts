export function extractTextClasses(classNames?: string) {
  //extract text-* and font-* classes
  const classRegex = /\b(text-[^\s]+|font-[^\s]+)\b/g;
  const matches = classNames?.match(classRegex);
  return matches ? matches.join(" ") : "";
}
