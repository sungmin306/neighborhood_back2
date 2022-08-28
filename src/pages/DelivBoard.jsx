import React from 'react';
import BoardInfo from '../components/BoardInfo/BoardInfo';
import BoardList from '../components/BoardList/BoardList';
import BoardNav from '../components/BoardNav/BoardNav';

// 배달 게시글 페이지

const DelivBoard = (props) => {
        return (
                <div>
                        <BoardInfo />
                        <BoardNav />
                        <BoardList />
                </div>
        );
}

export default DelivBoard;