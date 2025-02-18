import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import hb from './assets/hb.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

const firstSection = [
  {
    icon: 'glyph_robot_m',
    title: 'Ассистент по анализу рынка',
    subtitle: 'ИИ анализирует рынок и подсказывает, как действовать',
  },
  {
    icon: 'glyph_bulb_m',
    title: 'Анализ изменения стоимости портфеля',
    subtitle: 'ИИ найдёт причины и объяснит, почему меняется доходность',
  },
  {
    icon: 'glyph_scales_m',
    title: 'Балансировка портфеля',
    subtitle: 'ИИ оценивает активы и даёт рекомендации по улучшению',
  },
  {
    icon: 'glyph_lightning_m',
    title: 'Прогнозы по активу',
    subtitle: 'ИИ сформирует прогноз на основе мнений инвесторов и аналитиков',
  },
];

const optionsGroup1 = [
  {
    title: 'Доход на остаток',
    price: '150 ₽',
    description: '12% на остаток от 100 000 ₽ на брокерском счёте',
  },
  {
    title: 'Торговля без комиссии',
    price: '150 ₽',
    description: '10 сделок с акциями, облигациями и фондами без комиссии',
  },
  {
    title: 'Инвест-инсайты',
    price: '99 ₽',
    description: 'Получайте стратегии и аналитику действий инвесторов',
  },
];

export const App = () => {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [options, setOptions] = useState<string[]>([]);
  const toggleOption1 = (option: string) => {
    const newOptions = options.includes(option) ? options.filter(item => item !== option) : [...options, option];
    setOptions(newOptions);
  };

  const allOptions = options;
  const sum = allOptions.reduce((acc, item) => {
    const group = optionsGroup1.find(({ title }) => title === item);
    const [price] = group?.price.split(' ') ?? ['0'];
    return acc + (group ? parseInt(price) : 0);
  }, 0);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', 'activate_4289_var3');
    setLoading(true);

    sendDataToGA({
      id: LS.getItem(LSKeys.UserId, null) ?? 0,
      add: JSON.stringify(options.map(o => optionsGroup1.indexOf(optionsGroup1.find(({ title }) => title === o)!) + 1)),
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
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
            Стоимость — 349 ₽ в месяц
          </Typography.Text>
        </div>
        <img src={hb} alt="hb" width="100%" height={136} style={{ objectFit: 'cover', objectPosition: 'top' }} />
        <div className={appSt.box}>
          <Typography.TitleResponsive
            style={{ maxWidth: '250px' }}
            tag="h2"
            view="xsmall"
            color="primary-inverted"
            font="system"
            weight="semibold"
          >
            Анализируйте рынок и улучшайте портфель
          </Typography.TitleResponsive>
        </div>
        <Typography.TitleResponsive tag="h3" view="small" font="system" weight="bold">
          В вашей подписке
        </Typography.TitleResponsive>

        {opened ? (
          firstSection.map(item => (
            <div className={appSt.boxGrey} key={item.title}>
              <CDNIcon name={item.icon} />
              <div>
                <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                  {item.title}
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  {item.subtitle}
                </Typography.Text>
              </div>
            </div>
          ))
        ) : (
          <div className={appSt.boxGrey}>
            <CDNIcon name={firstSection[0].icon} />
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {firstSection[0].title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {firstSection[0].subtitle}
              </Typography.Text>
            </div>
            <div className={appSt.boxGreyBg} />
          </div>
        )}
        <div className={appSt.btnSwitch}>
          <ButtonMobile size={32} view="secondary" onClick={() => setOpened(!opened)}>
            {!opened ? 'Смотреть все' : 'Свернуть'}
          </ButtonMobile>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Добавьте к подписке
        </Typography.TitleResponsive>

        {optionsGroup1.map(({ title, description, price }) => (
          <div
            key={title}
            className={appSt.boxGrey2}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              toggleOption1(title);
            }}
          >
            <div className={appSt.rowGrey}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {title}
              </Typography.Text>
              <div className={appSt.rowSmall}>
                <Typography.Text view="component-primary">{price}</Typography.Text>
                <Checkbox size={24} checked={options.includes(title)} />
              </div>
            </div>
            <Typography.Text view="primary-small" color="secondary">
              {description}
            </Typography.Text>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit} hint={`Итого: ${349 + sum} ₽ в месяц`}>
          Подключить
        </ButtonMobile>
      </div>
    </>
  );
};
