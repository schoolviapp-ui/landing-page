import type { SVGProps } from "react";

const base = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" };

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zM17 5.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM21.5 8c-.1-1.6-.4-3-1.6-4.2S17.6 2.3 16 2.2C14.4 2.1 9.6 2.1 8 2.2 6.4 2.3 5 2.6 3.9 3.8S2.3 6.4 2.2 8c-.1 1.6-.1 6.4 0 8 .1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.4 0-8zm-2.1 9.9c-.3.9-1 1.5-1.9 1.9-1.3.5-4.4.4-5.5.4s-4.2.1-5.5-.4c-.9-.3-1.5-1-1.9-1.9-.5-1.3-.4-4.4-.4-5.5s-.1-4.2.4-5.5c.3-.9 1-1.5 1.9-1.9 1.3-.5 4.4-.4 5.5-.4s4.2-.1 5.5.4c.9.3 1.5 1 1.9 1.9.5 1.3.4 4.4.4 5.5s.1 4.2-.4 5.5z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M17.8 3h3.1l-6.8 7.8 8 10.6h-6.3l-4.9-6.4L5.2 21.4H2.1l7.3-8.3L1.7 3h6.4l4.4 5.9L17.8 3zm-1.1 16.5h1.7L7.3 4.8H5.4l11.3 14.7z" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9.5h3V19zM6.5 8.2a1.7 1.7 0 1 1 0-3.5 1.7 1.7 0 0 1 0 3.5zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5h2.9v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.6V19z" />
    </svg>
  );
}
