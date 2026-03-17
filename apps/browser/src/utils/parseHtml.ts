import parser from "html-react-parser";

/*
 * This function is needed, instead of importing the parser directly
 * into those components that need it, so that we only need to turn
 * off the linter one time.
 *
 * Ideally, we wouldn't need to do this.
 */
export function parseHtml(html: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return parser(html);
}
