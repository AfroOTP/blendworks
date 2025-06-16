import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
	return(
		<header className={styles.header}>
			<div className={styles.header_flex}>
				<div className={styles.header_logo}>
					<a href='/#main'>
						<Image src='/img/logo-wis-photoroom_header.png' className={styles.header_logo_image } alt='logo' width={128} height={72} ></Image>
					</a>
				</div>
				<div className={styles.header_flexend}>
					<div className={styles.header_item}>
						<a href='/#news' className={styles.header_item_text}>news</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#about' className={styles.header_item_text}>about</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#menu' className={styles.header_item_text}>menu</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#contact' className={styles.header_item_text}>contact</a>
					</div>
				</div>
			</div>
		</header>
	);
}