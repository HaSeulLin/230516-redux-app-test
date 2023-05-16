// 좋아요 리스트
// 좋아요 추가
// 좋아요 삭제

const initialState = [];

let likeId = 1;

export const likeClick = (memo) => (
    {
        type : "LIKE_CLICK",
        payload : memo
    }
);


function memoLike (state=initialState, action) {
    switch (action.type) {
        case "LIKE_CLICK" :
            // find로 action 일어난 id와 state의 id가 같은 값이 존재함을 찾아내면 true
            if (state.find((like)=>(like.id === action.payload.id))) {
                const newLikeList = state.filter((m)=>(m.id !== action.payload.id));
                return newLikeList;
            }
            else {
                const newLike = {
                    ...action.payload,
                    likeId : likeId,
                }
                likeId++
                const newLikeList = state.concat(newLike)
                console.log(newLikeList)
                return newLikeList;
            }
        default :
            return state;
    }
}

export default memoLike;