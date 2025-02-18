import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import sparkles from '../assets/sparkles.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={sparkles} width={80} height={80} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="small" style={{ margin: '24px 0 12px' }} weight="bold">
          Подписка находится в режиме тестирования
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Следите за новостями, чтобы узнать, когда она станет доступной
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile href="alfabank://investments" block view="secondary">
          Буду ждать
        </ButtonMobile>
      </div>
    </>
  );
};
