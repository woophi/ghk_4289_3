import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  padding: '1rem',
  borderRadius: '1rem',
  background: 'linear-gradient(132.95deg, #FF5494 2.58%, #D46DFA 50%, #3193FC 97.42%)',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 0',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
};
