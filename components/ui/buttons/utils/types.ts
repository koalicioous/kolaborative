export type ButtonSizes = 'lg' | 'md' | 'sm' | 'xl' | 'xs';

interface ButtonBaseProps {
  /** The size of the button. Available sizes: `"xs" | "sm" | "md" | "lg" | "xl"` */
  size?: ButtonSizes;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
