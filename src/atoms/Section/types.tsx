export interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  children?: React.ReactNode;
}

export interface SectionInnerProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: React.ReactNode;
  fullWidth?: boolean;
}
