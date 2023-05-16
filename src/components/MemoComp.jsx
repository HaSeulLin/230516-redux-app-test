import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMemo, deleteMemo } from '../modules/memo';
import { likeClick } from '../modules/memoLike';

export default function MemoComp() {

    const memo = useSelector((state)=>(state.memo));
    const memoLike = useSelector((state)=>(state.memoLike));
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

  return (
    <div className='memo'>
        <h1>메모장</h1>
        <form action=""
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMemo({text:input, date:"2023-05-16"}));
                setInput("");
            }}
        >
            <input type="text"
                value={input}
                onChange={(e)=>(setInput(e.target.value))}
            />
            <button type="submit">추가</button>
        </form>
        <ul>
            {
                memo.map((m)=><li key={m.id}>
                    <h3>{m.text}</h3>
                    <span>{m.date}</span>
                    <button
                        onClick={()=>{dispatch(likeClick(m))}}
                    >{(memoLike.find((like)=>(like.id === m.id))) ? '🖤' :'🤍' }</button>
                    <button
                        onClick={()=>dispatch(deleteMemo(m.id))}
                    >✖</button>
                </li>)
            }
        </ul>
    </div>
  )
}
