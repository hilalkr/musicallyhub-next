"use client"
import styles from './navbar.module.css'
import React from 'react'
import Link from 'next/link'
import artistImg from 'public/artist.png';
import Image from 'next/image';
const links = [
    {
        id: 1,
        title: 'Home',
        url: "/"
    },
    {
        id: 2,
        title: 'Explore',
        url: "/explore"
    },
    {
        id: 3,
        title: 'About',
        url: "/about"
    },
    {
        id: 4,
        title: 'Contact',
        url: "/contact"
    },
];

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>{props.title}</Link>
      
            
      <div className={styles.links}>
        {links.map((link)=>(
            <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
            </Link>
        ))}
       
        <button className={styles.login} onClick={()=>{console.log("logged out")}}>Login</button>
        <button className={styles.signup} onClick={()=>{console.log("logged out")}}>Sign up</button>
       
</div>
</div>
  );
};
export default Navbar;

