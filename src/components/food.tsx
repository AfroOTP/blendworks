import styles from './food.module.css'
import MenuList from './MenuList'

const foodItems = [
  { text: '権三郎の山豆スープ', price: '￥100(税込)' },
  { text: '雪下人参とクミンのスープ', price: '￥4,000(税込)' },
  { text: '霧中のたまごサンドイッチ', price: '￥200(税込)' },
  { text: '海霧サンドイッチ', price: '￥3,000(税込)' },
  { text: '薪と知恵の記憶のサンドイッチ', price: '￥5,000(税込)' },
  { text: 'ほうじ茶と玄米焼きおにぎりスープ', price: '￥6,000(税込)' },
  { text: '灰色のきのこごはん', price: '￥7,000(税込)' },
  { text: '陽だまりのバジルトースト', price: '￥8,000(税込)' },
  { text: '雨読の琥珀寄せ', price: '￥9,999,000(税込)' },
  { text: '静寂に溶ける、白あんの月', price: '￥10,000(税込)' }
];

export default function Food() {
  return <MenuList items={foodItems} styles={styles} />;
}