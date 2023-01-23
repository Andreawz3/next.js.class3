import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import Link from 'next/link'

export default function About() {

    const [ information, setInformation ] = useState([...data]);
    console.log(data);

    return(
        <>
            <Head>
                <script src="https://kit.fontawesome.com/b40a4af3c0.js" crossorigin="anonymous"></script>
                <title>About Page</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        <Link href="../">Home</Link>
                    </p>
                    <div>
                        <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                        </a>
                    </div>
                </div>

                <div className={styles.info}>
                    <h1>Employee Details</h1>
                    <div className={styles.flex}>
                        <div className={styles.display}>
                            {information && information.map((info, index) => {
                                return(
                                    <div className={styles.employeeInfo}>                               
                                        <img className={styles.employeeImg} src={info.img}/>
                                        <h4>{info.name}</h4>
                                        <p>{info.position} - since {info.workSince}</p>       
                                        <p><i class="fa fa-lightbulb-o"></i> fun-fact: {info.funFact}</p>
                                    </div>
                                )                       
                            })}                           
                        </div>
                    </div>                   
                </div>
            </main>
        </>
    )
}