import { shape, string, oneOfType } from 'prop-types';

const Code = oneOfType([
  shape({
    src: string,
    example: string,
  }),
  shape({
    html: string,
    css: string,
    js: string,
    scopedCSS: string,
  }),
]);

Code.toString = () => `
type CodeData @infer {
  src: String
  example: String
  html: String
  css: String
  js: String
  scopedCss: String
}
`;

Code.typeName = `CodeData`;

export default Code;
