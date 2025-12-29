import React from "react";
import { type SectionProps, type SectionInnerProps, type SectionColumnProps } from "./types";
declare const SectionInner: React.FC<SectionInnerProps>;
declare const SectionColumn: React.FC<SectionColumnProps>;
declare const Section: React.FC<SectionProps> & {
    Inner: typeof SectionInner;
    Column: typeof SectionColumn;
};
export default Section;
