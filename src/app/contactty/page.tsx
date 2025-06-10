"use client";

import Link from 'next/link'
import styles from "./page.module.css"

import { useEffect } from "react"
import { Head } from "../../components/head"

export default function Thanks() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      <Head
        title="thank you"
        description="このページは検索エンジンにインデックスされません"
        noIndex={true}
      />
      <div className={styles.main_thanks}>
        <h1 className={styles.complate_message}>お問い合わせの送信が完了しました。</h1>
        <h2 className={styles.thanks_message}>このたびは、株式会社○○○○へお問い合わせ頂き誠にありがとうございます。
        <br />お送り頂きました内容を確認の上、○営業日以内に折り返しご連絡させて頂きます。
        </h2>
        <div className={styles.top_link_container}>
          <Link href="./">
            <button type="submit" className={styles.top_link}>TOP</button>
          </Link>
        </div>
      </div>
    </>
  )
}