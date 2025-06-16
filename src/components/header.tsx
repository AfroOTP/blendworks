import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
	return(
		<header className={styles.header}>
			<div className={styles.header_flex}>
				<div className={styles.header_logo}>
					<Link href='/#main'>
						<Image src='/img/logo-wis-photoroom_header.png' className={styles.header_logo_image } alt='logo' width={128} height={72} ></Image>
					</Link>
				</div>
				<div className={styles.header_flexend}>
					<div className={styles.header_item}>
						<Link href='/#news' className={styles.header_item_text}>news</Link>
					</div>
					<div className={styles.header_item}>
						<Link href='/#about' className={styles.header_item_text}>about</Link>
					</div>
					<div className={styles.header_item}>
						<Link href='/#menu' className={styles.header_item_text}>menu</Link>
					</div>
					<div className={styles.header_item}>
						<Link href='/#contact' className={styles.header_item_text}>contact</Link>
					</div>
				</div>
			</div>
		</header>
	);
}