import styles from './footer.module.css'
import Image from 'next/image';

export default function Footer() {
	return(
		<>
			<div className={styles.footermain}>
				<p className={styles.footer_copyright}>©2025 for Dolphindesign</p>
			</div>
		</>
	);
}