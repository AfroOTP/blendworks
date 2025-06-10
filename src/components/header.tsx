import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
	return(
		<header className={styles.header}>
			<div className={styles.header_flex}>
				<div className={styles.header_logo}>
					<a href='/#main'>
						<Image src='/img/logo-wis-photoroom.png' className={styles.header_logo_image } alt='logo' width={192} height={108} ></Image>
					</a>
				</div>
				<div className={styles.header_flexend}>
					<div className={styles.header_item}>
						<a href='/#news'>news</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#about'>about</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#menu'>menu</a>
					</div>
					<div className={styles.header_item}>
						<a href='/#contact'>contact</a>
					</div>
				</div>
			</div>
		</header>
	);
}