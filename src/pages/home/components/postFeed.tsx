import { imgHeartLike, imgComentIcon } from '../../../data/index'

interface PostProps  { id: number, title?: string, imgUser: string, postImage: string, content: string }

export default function PostFeed({ id, content, imgUser, postImage }: PostProps ) {
  return (
    <article id='artPost' key={id} className="container mx-auto flex justify-items-start justify-between border-t border-b border-gray-800 p-[10px]">
      <div id="img-user">
        <img className='w-[30px] h-[30px] rounded-[10px]' src={imgUser} alt="" />
      </div>
      <section className='w-[90%] gap-5' id="middle">
        <div id="username">
          <p>@user</p>
        </div>
        <div id="content">
          <h2>{content}</h2>
          <img className='w-[350px] h-[350px] rounded-[5px]'src={postImage} alt="" />
        </div>
        <div id="interactions">
          <div id='imgs'className='flex flex-row justify-items-start'>
            <img src={imgHeartLike} alt="" />
            <img src={imgComentIcon} alt="" />
          </div>
          <div id='infos' className='flex flex-row justify-items-start'>
            <p>0 curtidas</p>
            <p>0 comentarios</p>
          </div>
        </div>
      </section>
      <div id="options">
        <p>...</p>
      </div>
    </article>
  )
}