import React from "react";
import Image from "next/image";
import styles from "./explore.module.css";
import exploreImg from "public/explore.jpg";
import catImg from "public/cat.png"

const Explore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
         <div className={styles.mainGrid}>
         <Image
            src={catImg}
            className={styles.catImg}
            alt="explore"
            width={1000}
            height={533}
          />
          <div className={styles.exploreTitle}>
          <h1 className={styles.title}>Catch the vibe on MusicallyHub</h1> 
          </div>
          
         </div>
        </div>
      
        <div className={styles.spotifyContainer}>
          {/* <h1 className={styles.musicsTitle}>Discovery energy boost</h1> */}
         <div className={styles.mainMusic}>
         <h2 className={styles.topTitle}> 𝓢𝓾𝓹𝓮𝓻𝓼𝓽𝓪𝓻𝓼 𝓟𝓵𝓪𝔂𝓵𝓲𝓼𝓽 </h2>
          
          <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMDoHDwVN2tF?utm_source=generator"
           width="70%" 
           height="392" 
           frameBorder="0" 
           allowfullscreen="" 
           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
           loading="lazy">       
           </iframe>          
         </div>
         <h3 className={`${styles.subTitle} ${styles.pulseAnimation}`}>Top 10 Most Streamed Songs Worldwide</h3>
          <div className={styles.spotifyGrid}>
            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/4Ci3ACeFytm7nzQgQkJ3v7?utm_source=generator"
              width="25%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/1wGYqifIYsz8KWFwPrnBAi?utm_source=generator"
              width="25%"
              height="300"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

            <iframe
              src="https://open.spotify.com/embed/track/6DZ0s0rg4EMGxl33gIf8bf?utm_source=generator"
              width="25%"
              height="300"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className={styles.spotifyGrid}>
            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/51RCB5kfhJB03qXeI33XMM?utm_source=generator"
              width="25%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/5XtaPV5LcjSHVPiLBJCYjw?utm_source=generator"
              width="25%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <iframe
              title="Spotify Embed"
              src="https://open.spotify.com/embed/track/3X6Gf9ptBwcSX5jErQyXqK?utm_source=generator"
              width="25%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={styles.infoContainer}>
          {/* <h2 className={styles.exploreTitle}>Explore music according to your mood</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Explore;
