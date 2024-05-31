import s from './sotr.module.scss';

function Sotr() {
  return (
    <section className={s.sotr} id='sotr'>
      <div className={s.sotr__container}>
        <h2 className={s.sotr__title}>Что предоставляется нашим сотрудникам</h2>
        <p className={s.sotr__info}>99% наших сотрудников довольны работой</p>

        <div className={s.sotr__blockinfo}>
          <div className={s.sotr__block}>
            <div className={s.sotr__item}>Помощь при оформлении документов</div>
            <div className={s.sotr__item}>Медицинская страховка на работе за наш счёт</div>
          </div>
         
          <div className={s.sotr__block}>
            <div className={s.sotr__item}>Комфортный график, который вы подбираете под себя</div>
            <div className={s.sotr__item}>Связь 24/7 по любым вопросам</div>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default Sotr;
