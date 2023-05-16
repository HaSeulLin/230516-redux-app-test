// 1. 메모 추가
// 2. 메모 삭제
// state : [] / text, date
// action : "ADD_MEMO", "DELETE_MEMO"

const initialState = [
    {
        id : 1,
        text : "메모입니다",
        date : "20-05-15"
    },
    {
        id : 2,
        text : "간단한 기록을 남길 수 있는 메모입니다",
        date : "2023-05-15"
    },
    {
        id : 3,
        text : "하트를 누르면 즐겨찾기로 따로 값이 저장됩니다",
        date : "2023-05-15"
    }
];

let id = 4;

export const addMemo = (memo) => (
    {
        type : "ADD_MEMO",
        payload : memo
    }
);
export const deleteMemo = (id) => (
    {
        // 메모의 id 값을 가져옴
        type : "DELETE_MEMO",
        payload : id
    }
)

function memo (state=initialState, action) {
    switch (action.type) {
        case "ADD_MEMO" :
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++
            const newMemoList = state.concat(newMemo)
            return newMemoList;
        case "DELETE_MEMO" :
            const deleteMemoList = state.filter((m)=>(m.id !== action.payload));
            return deleteMemoList;
        default :
            return state;
    }
}

export default memo;