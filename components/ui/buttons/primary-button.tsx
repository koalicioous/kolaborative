/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export default function PrimaryButton({
  type,
  className,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type ?? 'button'}
      className={clsx(
        className,
        'px-4 py-3 bg-indigo-700 text-white text-sm rounded-lg',
      )}
    >
      {children}
    </button>
  );
}
