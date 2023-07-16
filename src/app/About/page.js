import Link from "next/link";

export const metadata = {
 title:'Понял',
};

async function getData() {
   const response =  await fetch('https://jsonplaceholder.typicode.com/posts') 
   .then(res => res.json())
   
       


    return response;
}

const  About = async () => {
const posts = await getData();
const viewPosts = posts.map(el => (
    <li>
        <Link href={`/About/${el.title}/`}>{el.title}</Link>
    </li>
))

    return (
        <>
        <h1>Запросики на сервер</h1>
            <ul>
               {viewPosts}
            </ul>
        </>
    )
}

export default About;