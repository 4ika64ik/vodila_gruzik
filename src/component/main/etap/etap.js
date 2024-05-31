import s from './etap.module.scss';

function Etap() {
  return (
    <section className={s.etap} id='etap'>
      <div className={s.etap__container}>
        <h2 className={s.etap__title}>Этапы сотрудничества с нами</h2>
        <div className={s.etap__term}>
          <p className={s.etap__num}><span className={s.etap__number}>01</span> Заявка</p>
          <p className={s.etap__info}>Оставьте заявку на сайте по кнопке</p>
        </div>
        <div className={s.etap__term}>
          <p className={s.etap__num}><span className={s.etap__number}>02</span> Консультация</p>
          <p className={s.etap__info}>С вами связываются наши специалисты и бесплатно проводят консультацию</p>
        </div>
        <div className={s.etap__term}>
          <p className={s.etap__num}><span className={s.etap__number}>03</span> Договорённости</p>
          <p className={s.etap__info}>После консультации вы принимаете решение, а наши сотрудники в короткий срок готовят все необходимые документы</p>
        </div>
        <div className={s.etap__term}>
          <p className={s.etap__num}><span className={s.etap__number}>04</span> Переезд и начало работы</p>
          <p className={s.etap__info}>Наши помощники на связи с вами 24/7. Они заселяют вас и полностью сопровождают, помогая со всеми вопросами при переезде.</p>
        </div>
      </div>
    </section>
  );
}

export default Etap;
