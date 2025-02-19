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

const firstBox = style({
  height: '197px',
  borderRadius: '24px',
  backgroundColor: '#D8DAE4',
  display: 'flex',
  alignItems: 'flex-end',
  textAlign: 'center',
  position: 'relative',
  paddingBottom: '12px',
  justifyContent: 'center',
});

const secondBox = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: '#FFFFFF',
  padding: '1rem 1rem 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '.5rem',
  borderRadius: '24px',
  width: '100%',
});

const img = style({
  position: 'relative',
  left: '50%',
  transform: 'translate(-50%, 0)',
  marginBottom: '-3rem',
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
  backgroundColor: '#FFFFFF',
  position: 'relative',
});
const boxGrey2 = style({
  padding: '12px 16px',
  borderRadius: '16px',
  backgroundColor: '#FFFFFF',
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
  firstBox,
  secondBox,
  img,
  row,
  boxGrey,
  boxGreyBg,
  btnSwitch,
  rowGrey,
  rowSmall,
  boxGrey2,
};
