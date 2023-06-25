/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import Color from "./colors";
import Size from "./sizes";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: typeof Color;
    sizes: typeof Size;
  }
}
