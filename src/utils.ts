import { MouseButton, PlayerKeyboard } from './types';

export const BUTTON: MouseButton = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2,
  FOURTH: 3,
  FIFTH: 4,
};

export const PLAYER: PlayerKeyboard = {
  UP: ['ArrowUp', 'KeyW'],
  DOWN: ['ArrowDown', 'KeyS'],
  LEFT: ['ArrowLeft', 'KeyA'],
  RIGHT: ['ArrowRight', 'KeyD'],
  INVENTORY: ['KeyI'],
  BAR: ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9'],
};
