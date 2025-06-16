import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { FadeInSection } from '../components/FadeInSection';

import Food from '../components/food';
import Drink from '../components/drink';
import Footer from '../components/footer';
import Header from '../components/header';


export default function Home() {

  return (
    <>
    <main>
      <div className={styles.background}/>
      <Header></Header>
      <div id='main' className={styles.mainvisual_wrap}>
        <Image src='/img/logo-wis-photoroom.png' className={styles.mainvisual_title} width={1408} height={768} alt='logo'></Image>
      </div>
      <div className={styles.main}>
        <div id="news">
          <FadeInSection direction="fade" delay={0} className={styles.infomation} options={{ threshold: 0.0 }} >
            <div className={styles.infomation_wrap}>
              <div className={styles.infomation_top_text_left}></div>
              <div className={styles.infomation_top_text_right}></div>
              <div className={styles.infomation_top_title}>お知らせ</div>
              <ul className={styles.infomation_top_list}>
                <li className={styles.infomation_top_list_text}>111</li>
                <li className={styles.infomation_top_list_text}>222222222222</li>
                <li className={styles.infomation_top_list_text}>333333</li>
                <li className={styles.infomation_top_list_text}>4444444444444444444</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
        <div id="about">
          <FadeInSection direction="up" delay={0} className={styles.storys_wrap} options={{ threshold: 0.0 }} >
            <div className={styles.storys_container}></div>
            <div className={styles.storys_text_wrap}>
              <p className={styles.storys_title}>BlendWorks Storys</p>
              <p className={styles.storys_text}>
                山あいに、地図にない道を辿っていくと、ふと現れる木造の小さな建物。そこが、森山権三郎が創立したカフェ「BlendWorks」だ。看板にはひっそりと、手彫りの文字でこう書かれている。
                <span className={styles.storys_donguri}><br/>「どんぐりを辿っても着きません」</span>
                <br/>この一風変わった言葉には、森山の人生そのものが込められている。
                <br/><br/>権三郎は、若いころ山林保護の研究者として世界を渡り歩いていた。木を伐る者を咎めるのではなく、木を知り、対話し、再び森を呼吸させる方法を模索していた。
                だがある時、妻・澄江を病で亡くす。世界の騒がしさが一気に崩れ、静寂だけが彼に残された。
                研究者を辞し、二人子供たちとともに妻が愛した山のふもとへ移り住む。そこに小さな焙煎所を作り、静かに珈琲を挽き始めたのが、BlendWorksの始まりだった。
              </p>
            </div>
            <Image src='/img/coffe.png' className={styles.storys_image} width={1408} height={768} alt='cafe_img'></Image>
          </FadeInSection>
        </div>
        <FadeInSection direction="up" delay={0} className={styles.about_wrap} options={{ threshold: 0.0 }} >
          <div className={styles.about_container}></div>
          <Image src='/img/coffe.png' className={styles.about_image} width={1408} height={768} alt='cafe_img'></Image>
          <div className={styles.about_text_wrap}>
            <p className={styles.about_title}>title</p>
            <p className={styles.about_text}>text</p>
          </div>
        </FadeInSection>
        <FadeInSection direction="fade" delay={0.1} className={styles.drink_container} options={{ threshold: 0.0 }} >
          <div id="menu" className={styles.catch_drink_title}>DRINK MENU</div>
          <div className={styles.catch_drink_wrap}>
            <div className={styles.catch_drink_item}>
              <Image src='/img/drink/Gilded Whispers Latte.png' className={styles.catch_drink_image} width={365} height={199} alt='Gilded Whispers Latte'></Image>
              <p className={styles.catch_drink_name}>aaaaaa</p>
              <p className={styles.catch_drink_text}>eeeeeeee</p>
            </div>
            <div className={styles.catch_drink_item}>
              <Image src='/img/drink/Opera Rouge Fizz.png' className={styles.catch_drink_image} width={365} height={199} alt='Opera Rouge Fizz'></Image>
              <p className={styles.catch_drink_name}>aaaaaa</p>
              <p className={styles.catch_drink_text}>eeeeeeee</p>
            </div>
            <div className={styles.catch_drink_item}>
              <Image src='/img/drink/Velour Matcha Allure.png' className={styles.catch_drink_image} width={365} height={199} alt='Velour Matcha Allure'></Image>
              <p className={styles.catch_drink_name}>aaaaaa</p>
              <p className={styles.catch_drink_text}>eeeeeeee</p>
            </div>
          </div>
          <Drink></Drink>
        </FadeInSection>
        <FadeInSection direction="fade" delay={0.1} className={styles.food_container} options={{ threshold: 0.0 }} >
          <p className={styles.catch_food_title}>FOOD MENU</p>
          <div className={styles.catch_food_wrap}>
            <div className={styles.catch_food_item}>
              <Image src='/img/food/Brioche Versailles.png' className={styles.catch_drink_image} width={365} height={199} alt='Brioche Versailles'></Image>
              <p className={styles.catch_food_name}>aaaaaa</p>
              <p className={styles.catch_food_text}>eeeeeeee</p>
            </div>
            <div className={styles.catch_food_item}>
              <Image src='/img/food/Fleur de Sel & Caramel.png' className={styles.catch_drink_image} width={365} height={199} alt='Fleur de Sel & Caramel'></Image>
              <p className={styles.catch_food_name}>aaaaaa</p>
              <p className={styles.catch_food_text}>eeeeeeee</p>
            </div>
            <div className={styles.catch_food_item}>
              <Image src='/img/food/Soleil Noir Quiche.png' className={styles.catch_drink_image} width={365} height={199} alt='Soleil Noir Quiche'></Image>
              <p className={styles.catch_food_name}>aaaaaa</p>
              <p className={styles.catch_food_text}>eeeeeeee</p>
            </div>
          </div>
          <Food></Food>
        </FadeInSection>
        <FadeInSection direction="fade" delay={0.1} className={styles.contact_container} options={{ threshold: 0.0 }} >
          <div  id="contact" className={styles.contact_wrap}>
            <div className={styles.contact_left_wrap}>
              <p className={styles.contact_left_title}>お問い合わせ</p>
              <p className={styles.contact_left_text}>ドングリを辿ってもたどり着けなかった貴方へ</p>
              <Link className={styles.contact_left_button} href="/contact">お問い合わせフォームへ</Link>
            </div>
            <div className={styles.contact_right_wrap}>
              <div className={styles.contact_right_mail}>
                <p>メール</p>
                <p className={styles.contact_text_border}>dammy@gmial.cam</p>
              </div>
              <div className={styles.contact_right_tell}>
                <p>電話</p>
                <p className={styles.contact_text_border}>000-0000-0000</p>
              </div>
              <div className={styles.contact_right_address}>
                <p>住所</p>
                <p className={styles.contact_text_border}>岩索県蛇美市似世藻野区3-3-3</p>
              </div>
            </div>
          </div>
          <div className={styles.iframe_style}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6733.774549994488!2d139.80282561042605!3d35.70902076912543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z44K544Kr44Kk44OE44Oq44O8!5e0!3m2!1sja!2sjp!4v1748518394631!5m2!1sja!2sjp?wmode=transparent" width="1200" height="600" loading="lazy"></iframe>
          </div>
        </FadeInSection>
      </div>
      <Footer></Footer>
    </main>
    </>
  );
}
