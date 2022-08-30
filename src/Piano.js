import './Piano.css';

const Piano = props => {
  return(
    <div id="piano-container">
      <div id="piano-wrap">
        <div className="piano-key white-key" data-key-num="0"><span className="key-label" id="">Q<br />&nbsp;&nbsp;</span></div>{/* ラ */}
        <div className="piano-key black-key" data-key-num="1"><span className="key-label">2<br />&nbsp;&nbsp;</span></div>{/* ラ# */}
        <div className="piano-key white-key" data-key-num="2"><span className="key-label">W<br />&nbsp;&nbsp;</span></div>{/* シ */}
        <div className="piano-key white-key" data-key-num="3"><span className="key-label">E<br />&nbsp;&nbsp;</span></div>{/* ド */}
        <div className="piano-key black-key" data-key-num="4"><span className="key-label">4<br />&nbsp;&nbsp;</span></div>{/* ド# */}
        <div className="piano-key white-key" data-key-num="5"><span className="key-label">R<br />&nbsp;&nbsp;</span></div>{/* レ */}
        <div className="piano-key black-key" data-key-num="6"><span className="key-label">5<br />&nbsp;&nbsp;</span></div>{/* レ# */}
        <div className="piano-key white-key" data-key-num="7"><span className="key-label">T<br />&nbsp;&nbsp;</span></div>{/* ミ */}
        <div className="piano-key white-key" data-key-num="8"><span className="key-label">Y<br />&nbsp;&nbsp;</span></div>{/* ファ */}
        <div className="piano-key black-key" data-key-num="9"><span className="key-label">7<br />&nbsp;&nbsp;</span></div>{/* ファ# */}
        <div className="piano-key white-key" data-key-num="10"><span className="key-label">U<br />&nbsp;&nbsp;</span></div>{/* ソ */}
        <div className="piano-key black-key" data-key-num="11"><span className="key-label">8<br />&nbsp;&nbsp;</span></div>{/* ソ# */}
        <div className="piano-key white-key" data-key-num="12"><span className="key-label">I<br />Z</span></div>{/* ラ */}
        <div className="piano-key black-key" data-key-num="13"><span className="key-label">9<br />S</span></div>{/* ラ# */}
        <div className="piano-key white-key" data-key-num="14"><span className="key-label">O<br />X</span></div>{/* シ */}
        <div className="piano-key white-key" data-key-num="15"><span className="key-label">P<br />C</span></div>{/* ド */}
        <div className="piano-key black-key" data-key-num="16"><span className="key-label">-<br />F</span></div>{/* ド# */}
        <div className="piano-key white-key" data-key-num="17"><span className="key-label">@<br />V</span></div>{/* レ */}
        <div className="piano-key black-key" data-key-num="18"><span className="key-label">^<br />G</span></div>{/* レ# */}
        <div className="piano-key white-key" data-key-num="19"><span className="key-label">[<br />B</span></div>{/* ミ */}
        <div className="piano-key white-key" data-key-num="20"><span className="key-label">N</span></div>{/* ファ */}
        <div className="piano-key black-key" data-key-num="21"><span className="key-label">J</span></div>{/* ファ# */}
        <div className="piano-key white-key" data-key-num="22"><span className="key-label">M</span></div>{/* ソ */}
        <div className="piano-key black-key" data-key-num="23"><span className="key-label">K</span></div>{/* ソ# */}
        <div className="piano-key white-key" data-key-num="24"><span className="key-label">,</span></div>{/* ラ */}
        <div className="piano-key black-key" data-key-num="25"><span className="key-label">L</span></div>{/* ラ# */}
        <div className="piano-key white-key" data-key-num="26"><span className="key-label">.</span></div>{/* シ */}
        <div className="piano-key white-key" data-key-num="27"><span className="key-label">/</span></div>{/* ド */}
        <div className="piano-key black-key" data-key-num="28"><span className="key-label">:</span></div>{/* ド# */}
        <div className="piano-key white-key" data-key-num="29"><span className="key-label">\</span></div>{/* レ*/}
      </div>
    </div>
  );
};

export default Piano;