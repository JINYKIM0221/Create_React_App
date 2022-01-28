import { useState } from "react/cjs/react.development";

function App(){
  const [toDo,settoDo] = useState("");
  const [toDos,settoDos] = useState([]);
  const onChange = (event) => settoDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo ==="") {
      return;
    }
    settoDos((currentArray) => [toDo, ...currentArray]);
    settoDo("");
    console.log(toDos);
  };
  


  return (
  <div>
    <h1>SUPER {toDos.length}</h1>
    <form onSubmit={onSubmit}>
      <input 
      value = {toDo} 
      type="text" 
      placeholder="Write" 
      onChange={onChange}/>
      <button>ADD TO DO</button>
    </form>
    <hr />
    <ul>
    {toDos.map((item) => (<li>{item}</li>))}
    </ul>
    
  </div>
  );
}



export default App;

//map은 하나의 array에 있는 item을 내가 원하는 무엇이든지 바꿔준다 [].map(() => :)
//map은 함수의 첫번째 argument로 현재의 item을 가져올 수 있다








































//useEffect에 관하여
// import { useState, useEffect } from "react";

// function Hello(){
//   useEffect(() => {
//     console.log("ㅛtni");
//     return () => console.log(">:")//useEffect()에서 실행될 함수가 return하는 함수인데 뜻은 함수가 없어질때 나오게되는 함수
//   },[]);

  // //useEffect(function(){
  //   console.log("hi");
  //   return function () {
  //     console.log("bye");
  //   }
  // });

  //useEffect(() => {
  //   console.log("hi");
  //   return () => console.log("bye");
  // },[]);
//   return <h1>Hello</h1>
// }

// function App() {
//   const [showing,setshowing] = useState(false);
//   const onClick = () => setshowing((prev) => !prev);
//   return(
//     <div>
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "hide" : "show"}</button>
//     </div>
//   );

// }
 
// export default App;

//useEffect("우리가 한번만 실행하고 싶어하는 코드",[]:안에 있는 것이 변화 할때만(조건))
//useEffect(() => {
//   if(keyword !== "" && keyword.length > 5){
//     console.log("serch for", keyword);
//   }
// }, [keyword]);
//useEffect를 써서 keyword가 아무것도 없지 않거나 5글자 초과된 경우 console.log가 발생되는 함수를 발생하고
//[keyword]가 변화 할 때만 작동

//React는 UI가 바뀔 때마다 자동으로 업데이트 해주면서 component를 자동으로 실행시켜준다
//하지만 component안에 딱 한번만 실행하고 싶은 코드가 있을 때 useEffect를 사용한다
//useEffect("딱 한번 실행될 함수",[이것이 변화 할 때(useState안에 있는 배열값)])
//[]안의 변화할 값은 여러개를 넣을 수 있으며 하나라도 변화가 일어나면 코드가 실행
