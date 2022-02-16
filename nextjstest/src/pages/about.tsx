import { useEffect } from "react"

const About = (props) =>{
  useEffect(()=>{
    (async()=>{
      const re = await fetch('/api/hello').then((res)=>{
        console.log("res",res)
        console.log(res.json())
      })
      
    })()
  },[])
    return(
        <div>
            !!
        </div>
    )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  // const res = await fetch('/api/hello')
  // console.log( res )
  // const posts = await res.json()
  // console.log("posts",posts)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      "!":22
    },
  }
}

export default About