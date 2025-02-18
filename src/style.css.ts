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

const boxGrey = style({
  padding: '12px 16px',
  display: 'flex',
  gap: '12px',
  borderRadius: '16px',
  backgroundColor: '#F2F3F5',
  position: 'relative',
});
const boxGrey2 = style({
  padding: '12px 16px',
  borderRadius: '16px',
  backgroundColor: '#F2F3F5',
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
});

const boxGreyBg = style({
  backgroundColor: '#DCDEE2',
  borderRadius: '16px',
  width: 'calc(100% - 32px)',
  position: 'absolute',
  height: '90px',
  zIndex: -1,
  bottom: '-12px',
});

const btnSwitch = style({
  marginTop: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const rowGrey = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '8px',
});
const rowSmall = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexShrink: 0,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  boxGrey,
  boxGreyBg,
  btnSwitch,
  rowGrey,
  rowSmall,
  boxGrey2,
};
