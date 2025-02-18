import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import doc from './assets/doc.png';
import hb from './assets/hb.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import money from './assets/money.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

const data = [
  {
    title: 'Ассистент по анализу рынка',
    subtitle: 'ИИ анализирует рынок и подсказывает, как действовать',
    img: house,
  },
  {
    title: 'Анализ изменения стоимости портфеля',
    subtitle: 'ИИ найдёт причины и объяснит, почему меняется доходность',
    img: money,
  },
  {
    title: 'Балансировка портфеля',
    subtitle: 'ИИ оценивает активы и даёт рекомендации по улучшению',
    img: doc,
  },
  {
    title: 'Прогнозы по активу',
    subtitle: 'ИИ сформирует прогноз на основе мнений инвесторов и аналитиков',
    img: heart,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    window.gtag('event', 'activate_4289_var3');
    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive
          style={{ marginTop: '1rem', textAlign: 'center' }}
          tag="h1"
          view="medium"
          font="system"
          weight="bold"
        >
          AI подписка
        </Typography.TitleResponsive>
        <div>
          <Typography.Text
            tag="p"
            defaultMargins={false}
            style={{ textAlign: 'center' }}
            view="primary-medium"
            color="secondary"
          >
            Первый месяц — бесплатно.
          </Typography.Text>
          <Typography.Text
            tag="p"
            defaultMargins={false}
            style={{ textAlign: 'center' }}
            view="primary-medium"
            color="secondary"
          >
            Далее 349 ₽ в месяц
          </Typography.Text>
        </div>
        <img src={hb} alt="hb" width="100%" height={136} style={{ objectFit: 'cover', objectPosition: 'top' }} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            style={{ maxWidth: '265px' }}
            tag="h2"
            view="xsmall"
            color="primary-inverted"
            font="system"
            weight="semibold"
          >
            Анализируйте тренды и улучшайте портфель с подпиской от Альфа-Инвестиции
          </Typography.TitleResponsive>
        </div>
        <Typography.TitleResponsive tag="h3" view="small" font="system" weight="bold">
          В вашей подписке
        </Typography.TitleResponsive>

        <div>
          {data.map(item => (
            <div className={appSt.row} key={item.title}>
              <img src={item.img} width={48} height={48} />
              <div>
                <Typography.TitleResponsive tag="h3" view="xsmall" font="system" weight="semibold">
                  {item.title}
                </Typography.TitleResponsive>
                <Typography.Text
                  tag="p"
                  defaultMargins={false}
                  view="primary-small"
                  color="secondary"
                  style={{ marginTop: '0.25rem' }}
                >
                  {item.subtitle}
                </Typography.Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Попробовать бесплатно
        </ButtonMobile>
      </div>
    </>
  );
};
