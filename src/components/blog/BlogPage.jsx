import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './BlogHeader'
import VideoCard from './VideoCard'
const BlogPage = () => {
const [Blogs,setBlog]=useState([])
const [showBlog,setShowBlog]=useState(true);



  useEffect(()=>{
    FetchHandle();
  },[])
  const [youtubeLinks, setYoutubeLinks] = useState([
    "https://www.youtube.com/embed/TpjxugYxQU0?si=EmqH839Prx91wtky", 
    "https://www.youtube.com/embed/FSdcibDbijE?si=F482cKrfKNrdkyIH", 
    "https://www.youtube.com/embed/TpjxugYxQU0?si=EmqH839Prx91wtky", 
    "https://www.youtube.com/embed/FSdcibDbijE?si=F482cKrfKNrdkyIH", 
    "https://www.youtube.com/embed/TpjxugYxQU0?si=EmqH839Prx91wtky", 
    "https://www.youtube.com/embed/FSdcibDbijE?si=F482cKrfKNrdkyIH", 
  ]);
  const [datafetched, setDataFetched] = useState(false);
const FetchHandle=async()=>{
  const response=await fetch(`${process.env.REACT_APP_BACKEND_URL}/blog`);
  const data=await response.json();
  console.log("data obtainder",data);
  setBlog(data);
}
const blogHandle=()=>{
  setShowBlog(true);
}
const videoHandle=()=>{
  setShowBlog(false);
}


  const animationattribute=[
    {m1:"fade-up-right"},
  ]
  return (
    <div className='BlogPage'>
      <div className='blogvideodecider'>
        <button onClick={blogHandle}>Blog</button>
        <button onClick={videoHandle}>Video</button>
      </div>
<div className='content'>
{ !showBlog &&
      <div className='videosection'>
        {/* <div className='videoheading'>Video: </div> */}
      <div className='videos-container'>
            {
              youtubeLinks.map((data)=>{
                return <VideoCard  data={data} />;
              })
            }
            
        </div>
      </div>}



{ showBlog && 
     <div className='textsection'>
      { 
        Blogs.map((data,index)=>{
          return <Card data={data} count={index} key={index} index={index}></Card>
        })
      }
=
      </div>}
</div>




    </div>
  )
}

export default BlogPage;