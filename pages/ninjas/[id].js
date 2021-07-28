export const getStaticPaths=async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();

    const paths=data.map(el=>{
        return {
            params:{id:el.id.toString()}
        }
    })
    return {
        paths:paths,
        fallback:false
    }

}
//it will run each time for paths array
export const getStaticProps=async(context)=>{
const id=context.params.id;
const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id);
const data=await res.json();

return{
    props:{ninja:data}
}
}


const DetailsPage = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default DetailsPage;