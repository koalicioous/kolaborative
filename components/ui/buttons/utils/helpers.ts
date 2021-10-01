import { ButtonSizes } from './types';

export default function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'sm': {
      return 'px-3 py-2 text-xs rounded-md';
    }
    case 'md': {
      return 'px-4 py-2 text-sm rounded-lg';
    }
    case 'lg': {
      return 'px-4 py-3 text-base rounded-lg';
    }
    default: {
      return 'px-4 py-2 text-sm';
    }
  }
}
