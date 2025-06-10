import styles from './footer.module.css'
import Image from 'next/image';

export default function Footer() {
	return(
		<>
			<div className={styles.footermain}>
				<Image src='/img/footer.png' className={styles.footer_image} width={100} height={150} alt='footer'></Image>
				<p className={styles.footer_copyright}>©2025 for Dolphindesign</p>
			</div>
		</>
	);
}