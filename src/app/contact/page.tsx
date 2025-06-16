'use client';
import styles from "./page.module.css"
import Link from 'next/link'
import Header from '../../components/header'
import { FadeInSection } from '../../components/FadeInSection';

import { useRouter } from 'next/navigation';
import { useForm  } from 'react-hook-form'

type FormValues = {
  radio:    string;
  name:     string;
  furigana: string;
  company:  string;
  mail:     string;
  contact:  string;
  check:    boolean;
}

export default function Contact() {
  const { register,
          handleSubmit,
          formState: {
            errors,
          }} = useForm<FormValues>();
  const router = useRouter();


  const onSubmit = (data:FormValues) => {
    console.log(data);
    router.push('/contactty');
  }




  return (
    <>
      <Header></Header>
      <div className={styles.background}/>
      <FadeInSection>
      <main className={styles.main}>
        <h1 className={styles.title}>CONTACT</h1>
        <p className={styles.title_ruby}>お問い合わせ</p>
        <div className={styles.contacttextbox}>
          <p className={styles.contacttext}>下記フォームに必要事項を入力して送信してください。</p>
          <p>通常、3営業日以内にご連絡させていただきます。</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={errors.name ? styles.form_wrap_error : styles.form_wrap}>
            <label className={styles.formtitle} htmlFor="name">お名前（必須）</label>
            <input className={styles.formbox}
              id="name"
              {...register('name',
              {required: '必須',
              maxLength: {value: 50,message: '最大50文字です'}})}
            />
          </div>
          <div className={styles.error_container}>
            {errors.name &&
              <span className={styles.error_text}>※入力必須です</span>
            }
          </div>
          <div className={errors.furigana ? styles.form_wrap_error : styles.form_wrap}>
            <label className={styles.formtitle} htmlFor="furigana">フリガナ（必須）</label>
            <input className={styles.formbox}
              id="furigana"
              {...register('furigana',
              {required: '必須',
              maxLength: {value: 50,message: '最大50文字です'}})}
            />
          </div>
          <div className={styles.error_container}>
            {errors.furigana &&
              <span className={styles.error_text}>※入力必須です</span>
            }
          </div>
          <div className={errors.mail ? styles.form_wrap_error : styles.form_wrap}>
            <label className={styles.formtitle} htmlFor="mail">メールアドレス（必須）</label>
            <input className={styles.formbox}
              id="mail"
              {...register('mail',
              {required: '必須',
              maxLength: {value: 200,message: '最大200文字です'},
              pattern:
                /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/})}
            />
          </div>
          <div className={styles.error_container}>
            {errors.mail &&
              <span className={styles.error_text}>※〇〇＠××.△△の形式では無いか、無記入です</span>
            }
          </div>
          <div className={errors.contact ? styles.form_wrap_error : styles.form_wrap}>
            <label className={styles.formtexttitle} htmlFor="contact">お問い合わせ内容（必須）</label>
            <textarea className={styles.formtextbox}
              id="contact"
              {...register('contact',
              {required: '必須',
              maxLength: {value: 1000,message: '最大1000文字です'}})}
            />
          </div>
          <div className={styles.error_container}>
            {errors.contact &&
              <span className={styles.error_text}>※入力必須です</span>
            }
          </div>
          <div className={styles.consensus_container}>
            <div className={styles.checkbox}>
              <input  type="checkbox"
                      id="check"
                      value="個人情報保護方針に同意する"
                      {...register('check',
                      {required: '必須'})}
              />
            </div>
            <label className={styles.consensus} htmlFor="check">個人情報保護方針に同意する</label>
          </div>
          <div className={styles.check_error_container}>
            {errors.check &&
              <span className={styles.check_error_text}>※必須です</span>
            }
          </div>
          <div className={styles.link_wrap}>
            <Link className={styles.pravacy_link} href="../privacypolicy">個人情報保護方針はこちら</Link>
          </div>
          <div className={styles.confirmation_container}>
            <button type="submit" className={styles.confirmation} >送信</button>
          </div>
        </form>
      </main>
      </FadeInSection>
    </>
  )
}