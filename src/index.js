import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const pianoWrap = document.getElementById("piano-wrap")

useEffect(() => {
  // イベントリスナーを登録
  pianoWrap.addEventListener("mousedown", (event) => {

    console.log("hahahahah")

    // if ( event.which !== 1 ){ return }
    // const x = event.pageX 
    // const y = event.pageY 
    // let keyNum
    // switch ( event.type ){
    //     case "mousedown":
    //       console.log("HAHAHAHHAHAHAH")
    //         keyNum = getKeyNum(x, y)
    //         if ( keyNum !== null ){ pressPianoKey(keyNum) }
    //         clickedKeyNum = keyNum
    //         break
        // case "mouseup":
        //     if ( clickedKeyNum !== null ){
        //         keyNum = getKeyNum(x, y)
        //         if ( keyNum !== null ){ releasePianoKey(keyNum) }
        //         clickedKeyNum = null
        //     }
        //     break
        // case "mousemove":
        //     keyNum = getKeyNum(x, y)
        //     if ( keyNum !== null ){
        //         // マウスポインタ位置が直前の鍵盤以外の鍵盤上の場合
        //         if ( keyNum !== clickedKeyNum ){ 
        //             releasePianoKey(clickedKeyNum)
        //             pressPianoKey(keyNum) 
        //             clickedKeyNum = keyNum
        //         }
        //     } else {
        //         // マウスポインタ位置が鍵盤外の場合
        //         releasePianoKey(clickedKeyNum)
        //         clickedKeyNum = null
        //     }
        //     break
//    }
  });
}, []);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
