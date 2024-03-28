// import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'
import './components/Accordion/Accordion.css'

import Accordion from './components/Accordion/Accordion';
import Htag from './components/Htag/Htag';


// ? My DB
const faqList = [
  {
    q: '1 модуль',
    a: 'Маркетинговые стратегии антикризисного менеджмента',
    b: 'Антикризисное управление предприятиями: реструктуризация, банкротство, слияние и поглощение',
    c: 'Правовые основы антикризисного управления',
    d: 'Проектный менеджмент в антикризисном управлении',
    e: 'Финансово-экономические инструменты антикризисного управления',
  },
  {
    q: '2 модуль',
    a: 'Формирование и развитие компетенций в антикризисном управлении',
    b: 'Анализ и диагностика кризисных угроз в управлении',
    c: 'Инструменты антикризисного менеджмента',
    d: 'Механизмы антикризисного управления бизнесом',
    e: 'Антикризисный консалтинг',
  },
];

export default function Home() {
  return (
    <>
      <div className='container'>
        <Htag tag='h2'>Специализированные дисциплины</Htag>
        <div className='specialized__anticrisis'>
          <Htag tag='h3'>Антикризисное управление</Htag>
          <div className='specialized__inner'>
            <Accordion faqList={faqList} />
          </div>
        </div>
        <div className='specialized__smallbusiness'>
          <Htag tag='h3'>Управление малым бизнесом</Htag>
          <div className='specialized__inner'>
            <Accordion faqList={faqList} />
          </div>
        </div>
        <div className='specialized__finalresults footer'>
          <div className='footer-item footer-practice'>
            <h3 className='footer-title'>Практические модули</h3>
            <p>
              Работа над собственными проектами: <br /> практика групповых
              взаимодействий, <br /> кейс-методы, эссе
            </p>
          </div>
          <div className='footer-item footer-certification'>
            <h4 className='footer-title'>Итоговая аттестация</h4>
            <ul className='footer-certification-list'>
              <li className='footer-certification-item'>
                Бизнес-проектирование (подготовка итоговой аттестационной
                работы, консультирование по бизнес-проектированию)
              </li>
              <li className='footer-certification-item'>
                Защита итоговой аттестационной работы
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}