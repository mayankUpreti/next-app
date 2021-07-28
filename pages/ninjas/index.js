
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

//this fn runs at build time
export const getStaticProps=async ()=>{
const response=await fetch('https://jsonplaceholder.typicode.com/users')
const data=await response.json();
return {
    props:{ninjas:data}
}
}


const Ninjas = ({ninjas}) => {
    return ( 
        <>
        <Head>
        <title>Ninja List | Ninjas</title>
        <meta name='keywords' content='ninja'/>
      </Head>
        <div>
            <h1>All Ninjas</h1>
            {
                ninjas.map((el)=>(
                    <Link href={`/ninjas/${el.id}`} key={el.id}>
                        <a className={styles.single}>
                            <h3>{el.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
        </>
     ); 
}
 
export default Ninjas;