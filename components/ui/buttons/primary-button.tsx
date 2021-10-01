/* eslint-disable react/button-has-type */
import clsx from 'clsx';
import buttonSizes from './utils/helpers';
import { ButtonProps } from './utils/types';

export default function PrimaryButton({
  type,
  className,
  children,
  size = 'md',
}: ButtonProps) {
  return (
    <button
      type={type ?? 'button'}
      className={clsx(
        'bg-indigo-700 text-white',
        className,
        buttonSizes(size),
      )}
    >
      {children}
    </button>
  );
}
