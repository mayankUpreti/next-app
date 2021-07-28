import { useRouter } from "next/dist/client/router";
import Link from "next/link"
import { useEffect } from "react";

const NotFound = () => {
    const router=useRouter()
useEffect(()=>{
setTimeout(()=>{
    // router.go(-1)
    //1 forward
    //-1 backward

    router.push('/')
},3000)
},[])

    return ( 
        <div className='not-found'>
         <h1>Oooops.....</h1>
         <h2>The Page cannot be found</h2>
         <p>Go back to the  <Link href='/'>
         <a>Home</a>
         </Link>
         </p>
        </div>
     );
}
 
export default NotFound;