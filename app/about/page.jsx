import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/342520/pexels-photo-342520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className={styles.img}
          alt=''
          width={1200} // Genişlik değeri eklenmiştir
          height={433} // Yükseklik değeri eklenmiştir
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Musics</h1>
          <h1 className={styles.imgDesc}>Tap into the captivating melody, let it flow through your veins!

          </h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>We are a passionate team of music enthusiasts dedicated to creating a vibrant online platform for 
          music lovers. Our mission is to connect artists, fans, and industry professionals in a dynamic and engaging way.Our team is 
          composed of individuals with extensive backgrounds in music production, journalism, technology, and design. We combine our 
          expertise and passion to curate high-quality content, offer valuable resources, and deliver an intuitive user experience. 
          <br></br>
          We are committed to supporting emerging talent and giving a voice to artists who deserve wider recognition. By providing a 
          platform that encourages collaboration and networking, we aim to empower musicians to thrive in their creative endeavors.
          Join us on this musical journey as we celebrate the universal language of music and strive to create an inclusive and vibrant
          community. Together, lets discover, connect, and be inspired by the power of sounds.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
          We offer a vast library of music spanning various genres, allowing you to explore and discover new artists, albums, and 
          tracks. Our carefully curated playlists and recommendations help you find the perfect sound for every mood and occasion.
          We are passionate about supporting emerging talent and giving artists a platform to showcase their work. Through featured
          artist spotlights, exclusive interviews, and promotional opportunities, we strive to amplify the voices of musicians and 
          help them connect with a wider audience.
          <br></br>
          <br></br>
          -Personalized Recommendations
          <br></br>
          -Seamless Listening Experience
          <br></br>
          -Collaborative Playlists
          <br></br>
          -Discover Music Events
          
         
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
