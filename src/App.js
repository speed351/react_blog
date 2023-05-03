import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,title_edit] = useState(['남자 코트 추천','강남 우동 맛집','취업 특강']);
  let [like, like_edit] = useState([0,0,0]);
  let posts ='강남 고기 맛집';
  let [modal,setModal] = useState(false);//modal 창이 닫힌상태 false, 열린상태 true
  let [title_modal, setTitleModal] = useState(0);


  function title_change(){
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    title_edit(newArray);
  }
  function like_up(n){
    var newArray = [...like];
    newArray[n]++;
    like_edit(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={title_change}>버튼</button>
      {/* <div className="list">
        <h3>{title[0]} <span onClick={ ()=>{ like_edit(like+1) }}>👍</span> {like} </h3>
        <p>5월 3일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>5월 4일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={()=>{ setModal(!modal)}}>{title[2]}</h3>
        <p>5월 5일 발행</p>
        <hr />
      </div> */}
      {
        title.map(function(a,i){
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{ 
                  setModal(!modal);
                  setTitleModal(i);
                }}> 
                {title[i]} 
                <span onClick={ ()=>{ like_up(i) }}>👍</span> {like[i]}
              </h3>
              <p>5월 4일 발행</p>
              <hr />
            </div>
          )


        })
      }
      {modal == true ? <Modal modal_title={title} func={title_change} title_modal={title_modal}/> : null}
      
      
    </div>
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h2>{props.modal_title[props.title_modal]}</h2>
        <p>date</p>
        <p>detail</p>
        <button onClick={()=>{props.func()}}>edit</button>
    </div>
  )
}

export default App;
