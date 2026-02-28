/* Regex explanation:
 
 * \s       → matches any whitespace character (space, tab, etc.)
 * (?=[A-Z])→ positive lookahead: match the space only if it's followed by an uppercase letter
 * g        → global flag: replace all occurrences
 * ". "     → replacement: a period followed by a space
 
 */

function addPunctuation(sentences) {
  return sentences.replace(/\s(?=[A-Z])/g, ". ") + ".";
}
