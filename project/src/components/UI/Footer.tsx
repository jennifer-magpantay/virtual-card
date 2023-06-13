import { Confetti } from "@phosphor-icons/react";

export const Footer = () => {
  return (
    <footer>
      <small>
        Developed with fun by Jennifer Magpantay{" "}
        <Confetti size={18} color="#fafafa" />
      </small>
      <small>
        Design inspiration from{" "}
        <a
          href="https://dribbble.com/slabpixeldesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          SlabPixel Design
        </a>
      </small>
    </footer>
  );
};
