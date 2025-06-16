import styles from './drink.module.css'

export default function Drink() {
  return(
    <main className={styles.main}>
      <div className={styles.drinkmenu_wrap}>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>111111111111111</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥100(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>222222222222222</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥200(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>333333333333333</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥3,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>444444444444444</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥4,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>555555555555555</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥5,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>666666666666666</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥6,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>77777777777777</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥7,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>888888888</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥8,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>9999</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥9,999,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>1010101010101010101010</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥10,000(税込)</span>
        </div>
      </div>
    </main>
  );
}