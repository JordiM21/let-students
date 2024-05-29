import { useRouter } from 'next/router'
import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoCard({ id, url, title, level }) {

  const router = useRouter()
  return (
    <article class="article-wrapper">
      <a href={`/immersiveActivities/${id}`}>
        <div class="rounded-lg container-project">
          <div className='bg-red-200 h-[150px] w-[300px] opacity-0 absolute'></div>
          <ReactPlayer
            width={"100%"}
            height={"150px"}
            className="mx-auto md:my-4 rounded-md"
            url={url}
            controls={true}
            light={true}
          />
        </div>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">{title}</div>
            <div class="project-hover">
              <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </div>
        <div className={`absolute top-0 py-1 pl-2 pr-5 rounded-full font-bold -right-4 ${level == 'Advanced' && 'bg-red-600'} ${level == 'Intermediate' && 'bg-orange-600'} ${level == 'Beginner' && 'bg-blue-600'}`}>
          <p className='text-white text-xs'>{level}</p>
        </div>
      </a>
    </article>
  )
}
