// app/types/chatkit.d.ts
import type React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "openai-chatkit": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        workflow?: string;
        "data-color-scheme"?: "light" | "dark";
      };
    }
  }
}

export {};
