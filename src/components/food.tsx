import styles from './food.module.css'

export default function Food() {
  return(
    <main className={styles.main}>
      <div className={styles.foodmenu_wrap}>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>権三郎の山豆スープ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥100(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>雪下人参とクミンのスープ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥4,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>霧中のたまごサンドイッチ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥200(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>海霧サンドイッチ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥3,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>薪と知恵の記憶のサンドイッチ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥5,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>ほうじ茶と玄米焼きおにぎりスープ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥6,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>灰色のきのこごはん</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥7,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>陽だまりのバジルトースト</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥8,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>雨読の琥珀寄せ</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥9,999,000(税込)</span>
        </div>
        <div className={styles.foodmenu_item}>
          <span className={styles.foodmenu_item_text}>静寂に溶ける、白あんの月</span>
          <span className={styles.foodmenu_item_dot}></span>
          <span className={styles.foodmenu_item_price}>￥10,000(税込)</span>
        </div>
      </div>
    </main>
  );
}