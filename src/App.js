import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,title_edit] = useState(['남자 코트 추천','강남 우동 맛집','취업 특강']);
  let [like, like_edit] = useState([0,0,0]);
  let posts ='강남 고기 맛집';
  let [modal,setModal] = useState(false);//modal 창이 닫힌상태 false, 열린상태 true
  let [title_modal, setTitleModal] = useState(0);
  let [input, setInput] = useState('');

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
  function delete_item(n){
    var newArray = [...title];
    newArray.splice(n,1);
    title_edit(newArray);
  }
  function insert_item(input){
    var newArray = [...title];
    newArray.unshift(input);
    title_edit(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={title_change}>여자 옷 버튼</button>
      {
        title.map(function(a,i){
          return (
            <div className="list" key={i}>
              <h3 onClick={()=>{ 
                  setModal(!modal);
                  setTitleModal(i);
                }}> 
                {title[i]} 
                <span onClick={ (e)=>{e.stopPropagation(); like_up(i) }}>👍</span> {like[i]}
              </h3>
              <p>5월 4일 발행</p>
              <button onClick={()=>{delete_item(i)}}>삭제</button>
              <hr />
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        setInput(e.target.value); console.log(input)
      }} />
      <button onClick={()=>{insert_item(input)}}>추가</button>


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
