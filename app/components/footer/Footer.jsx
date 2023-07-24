import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@Lamamia, All rights reserved</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={15} height={15}  className={styles.icons} alt="lama dev"/>
        <Image src="/instagram.png" width={15} height={15}  className={styles.icons} alt="lama dev"/>
        <Image src="/twitter.png" width={15} height={15}  className={styles.icons} alt="lama dev"/>
        <Image src="/youtube.png" width={15} height={15}  className={styles.icons} alt="lama dev"/>
      </div>
    </div>
  )
}

export default Footer
