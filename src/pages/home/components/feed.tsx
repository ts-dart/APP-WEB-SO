import { useEffect, useState, useContext } from "react"
import { PostAttributes } from '../../../types/index'
import { grabAllPostsToTheMainPageFeed, makingRequestForCreateNewPost } from '../services'
import PostFeed from './postFeed'

import { imgAvatarDefault, imgHeppyFaceIcon, imgIconPost, postImage } from '../../../data'
import ThemeContext from "../../../services/context"
import SidePopup from "../../../components/sidePopup"

export default function Feed() {
  const {loggedinUser} = useContext(ThemeContext)

  const [textInsidePopup, setTextInsidePopup] = useState('')
  const [popup, setPopup] = useState<boolean | undefined>(false)
  const [newPostText, setNewPostText] = useState('')
  const [postFormStatus, setPostFormStatus] = useState<boolean | undefined>(true)
  const [feedPostsData, setFeedPostData] = useState<PostAttributes[]>([])
  
  const createNewPost = () => {
    makingRequestForCreateNewPost(localStorage.getItem('LoginToken'), newPostText, null)
      .then(async data => {
        if (data.status === 201) {
          setTextInsidePopup(await data.json())
          setPopup(true)
        }
      })
      
      .then(data => console.log(data))
  }

  const checkNewPostData = (text: string) => {
    if ((text.length >= 1 && text.length <= 124) && loggedinUser.expiredLogin === false) {
      setPostFormStatus(false)
    } else {
      setPostFormStatus(true)
    }
  }

  useEffect(() => {
    grabAllPostsToTheMainPageFeed()
      .then((data) => setFeedPostData(data))
  }, [])

  return (
    <>
      <main className="w-[35%] h-screen mx-auto flex flex-col items-center">
        <section className="w-[100%] flex flex-row p-[10px]">
          <div className="mr-2">
            <img className='w-[30px] h-[30px] rounded-[10px]' src={imgAvatarDefault} alt="" />
          </div>
          <div className="flex flex-col w-full">
            <input 
              className={postFormStatus
                ? 'w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#4169e1] rounded-[10px] p-3.5 text-white mb-2 opacity-50 cursor-not-allowed'
                : 'w-full bg-[#1E1E1E] border-2 border-transparent focus:border-[#4169e1] rounded-[10px] p-3.5 text-white mb-2'
              } 
              placeholder={`Olá! ${loggedinUser.fullName}. Em que está pensando hoje?`}
              value={newPostText}
              name={newPostText}
              onChange={(event) => {
                setNewPostText(event.target.value)
                checkNewPostData(event.target.value)
              }}
              disabled={postFormStatus}
            />
            <div className="flex flex-row justify-between items-center content-center">
              <div className="flex flex-row">
                <button>
                  <img src={imgIconPost} alt="" className="w-[21px] h-[21px] cursor-pointer mr-2"/>
                </button>
                <button>
                  <img src={imgHeppyFaceIcon} alt="" className="w-[21px] h-[21px] cursor-pointer mr-2"/>
                </button>
              </div>
              <button 
                className={postFormStatus 
                  ? 'w-[20%] border border-gray-800 rounded-[20px] p-1.5 bg-[#4169e1] text-white opacity-80 cursor-not-allowed' 
                  : 'w-[20%] border border-gray-800 rounded-[20px] p-1.5 bg-[#4169e1] text-white hover:bg-[#2c4cab]'}
                  disabled={postFormStatus}
                  onClick={createNewPost}
              >
                Postar
              </button>
            </div>
          </div>
        </section>
        {
          feedPostsData.map((post) => (
            <PostFeed key={post.id} id={post.id} content={post.content} imgUser={imgAvatarDefault} postImage={postImage}/>
          ))
        }
        {
          popup ? <SidePopup message={textInsidePopup} timeout={5000} popup setPopup={setPopup} /> : ''
        }
      </main>
    </>
  )
}