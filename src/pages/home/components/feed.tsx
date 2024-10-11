import { useEffect, useState } from "react"
import { PostAttributes } from '../../../types/index'
import { grabAllPostsToTheMainPageFeed } from '../services/requestHandler'
import PostFeed from './postFeed'

import { imgAvatarDefault, postImage } from '../../../data'

export default function Feed() {
  const [feedPostsData, setFeedPostData] = useState<PostAttributes[]>([])
  
  useEffect(() => {
    grabAllPostsToTheMainPageFeed()
      .then((data) => setFeedPostData(data))
  }, [])

  return (
    <>
      <main className="w-[35%] h-screen mx-auto flex flex-col items-center">
        <section className="w-[100%] flex flex-row justify-between p-[10px]">
          <div className="flex flex-row justify-between gap-2">
            <img className='w-[30px] h-[30px] rounded-[10px]' src={imgAvatarDefault} alt="" />
            <p className="justify-center justify-items-center">Bom dia! Usuario, clieque aqui para fazer um post!</p>
          </div>
          <button className="border border-gray-800 rounded-[10px] px-[10px] py-[-10px] hover:bg-gray-900 hover:text-white">Publicar</button>
        </section>
        {
          feedPostsData.map((post) => (
            <PostFeed key={post.id} id={post.id} content={post.content} imgUser={imgAvatarDefault} postImage={postImage}/>
          ))
        }
      </main>
    </>
  )
}