import styles from './drink.module.css'

export default function Drink() {
  return(
    <main className={styles.main}>
      <div className={styles.drinkmenu_wrap}>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>あなた、のブレンド</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥100(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>朝靄ブレンド</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥200(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>深山ブレンド</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥3,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>風露のハーブティー</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥5,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>露草のブルーティー</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥6,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>朧ミルク</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥7,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>翡翠ライムソーダ</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥8,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>林檎と樹皮のホットスパイス</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥4,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>陽果サンセットミックス</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥9,999,000(税込)</span>
        </div>
        <div className={styles.drinkmenu_item}>
          <span className={styles.drinkmenu_item_text}>柑と雪スムージー</span>
          <span className={styles.drinkmenu_item_dot}></span>
          <span className={styles.drinkmenu_item_price}>￥10,000(税込)</span>
        </div>
      </div>
    </main>
  );
}