import React from 'react'
import { useSelector } from 'react-redux'

export default function LikeComp() {

    const memoLike = useSelector((state)=>state.memoLike);

  return (
    <div className='likelist'>
        <h1>즐겨찾기</h1>
        <ul>
            {
                (memoLike.length<1) ?
                <h3>
                    메모를 북마크 해보세요!
                </h3>
                :
                memoLike.map((like)=><li key={like.likeId}>
                    <h4>
                        {like.likeId} {like.text}
                        <span style={{fontSize:"0.8rem", color:"grey"}}>{like.date}</span>
                    </h4>
                </li>)
            }
        </ul>
    </div>
  )
}
