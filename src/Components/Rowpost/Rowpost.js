import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../../Axios'
import {imageUrl,ApiKey} from '../../constants/Constants'

function Rowpost({title,clas,url}) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get(url).then(response=>{
      console.log(response.data.results)
      setPosts(response.data.results)
    }).catch(error=>{
      console.error('error fetching data',error)
    })
  },[]) 
  return (
    <div className='row'>
       <h2>{title}</h2>
       <div className="posters">
        {
          posts.map((item,index)=>{
            return <img key={index} className={clas} src={imageUrl+item.backdrop_path} alt="" />
          })
        }
       </div>
    </div>
  )
}

export default Rowpost