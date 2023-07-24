import Image from 'next/image';
import styles from './page.module.css';
import Hero from 'public/hero.png';
import Button from './components/Button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
    <h1 className={styles.title}>
      Better musics for your energy
    </h1>
    <p className={styles.desc}>You are in the right place for music that will enhance your energetic moments! Here, you can enjoy music suitable for 
      every mood and activity. Whether you are exercising and need motivating upbeat songs, focusing on work and require melodies
       to help you concentrate, or experiencing stressful moments and seeking relaxation through instrumental tracks... 
    </p>
    <Button url="/explore" text="See our musics" />
      </div>
    <div className={styles.item}>
      <Image src={Hero} className={styles.img}/>
    </div>
    </div>
  )
}

