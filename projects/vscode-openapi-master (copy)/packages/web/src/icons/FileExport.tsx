import { SVGProps } from "react";
const SvgFileExport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="1em" height="1em" {...props}>
    <path d="m568.1 303-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L494.1 296H216c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C450.3 387.7 448 393.8 448 400s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97zM360 384c-13.25 0-24 10.74-24 24v40c0 8.836-7.164 16-16 16H64.02c-8.836 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160V128c0 17.67 14.33 32 32 32h79.1v72c0 13.25 10.74 24 23.1 24s25.8-10.7 25.8-24v-93.4c0-16.98-6.742-33.26-18.75-45.26L290.62 18.7C278.6 6.742 262.3 0 245.4 0H63.1C28.65 0-.002 28.66 0 64l.006 384c.002 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64v-40c0-13.3-10.7-24-24-24z" />
  </svg>
);
export default SvgFileExport;
