"use client";

import styles from "./page.module.css"

import { useEffect } from "react"
import Header from "../../components/header"

export default function Thanks() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return(
    <>
      <Header/>
      <div className={styles.main_thanks}>
        <h1 className={styles.complate_message}>お問い合わせの送信が完了しました。</h1>
        <h2 className={styles.thanks_message}>このたびは、BlendWorksへお問い合わせ頂き誠にありがとうございます。
        <br />お送り頂きました内容を確認の上、7営業日以内に折り返しご連絡させて頂きます。
        </h2>
      </div>
    </>
  )
}