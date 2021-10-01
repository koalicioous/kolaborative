export type ButtonSizes = 'lg' | 'md' | 'sm';

interface ButtonBaseProps {
  size?: ButtonSizes;
}

export type ButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
