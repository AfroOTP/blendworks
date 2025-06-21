import styles from './drink.module.css'
import MenuList from './MenuList'

const drinkItems = [
  { text: 'あなた、のブレンド', price: '￥100(税込)' },
  { text: '朝靄ブレンド', price: '￥200(税込)' },
  { text: '深山ブレンド', price: '￥3,000(税込)' },
  { text: '風露のハーブティー', price: '￥5,000(税込)' },
  { text: '露草のブルーティー', price: '￥6,000(税込)' },
  { text: '朧ミルク', price: '￥7,000(税込)' },
  { text: '翡翠ライムソーダ', price: '￥8,000(税込)' },
  { text: '林檎と樹皮のホットスパイス', price: '￥4,000(税込)' },
  { text: '陽果サンセットミックス', price: '￥9,999,000(税込)' },
  { text: '柑と雪スムージー', price: '￥10,000(税込)' }
];

export default function Drink() {
  return <MenuList items={drinkItems} styles={styles} />;
}