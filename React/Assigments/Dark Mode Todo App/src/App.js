import { useState } from 'react';




function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [btntext, setBtnText] = useState("Enable Dark Mode")

  let toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    } else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Enable Light Mode");
    }
  }

  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  function addItem() {
    if (!inputValue) {
      alert("Enter a value")
    }
    const copyList = [...list];
    copyList.push(inputValue);
    setList(copyList);
    setInputValue('');
  }
  console.log(list);
  function deleteItem(index) {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  function editItem(index) {
    setInputValue(list[index]);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function updateItem() {
    const copyList = [...list];
    copyList[currentIndex] = inputValue;
    setList(copyList);
    setEditMode(false);
    setInputValue('');
  }

  function updateText(e) {
    const value = e.target.value;
    setInputValue(value);

    if (e.key === 'Enter') {
      addItem();
    }
  }


  return (
    <div className='main' >
      <div className='todo' style={myStyle}>
        <div className='div-1'>
          <div className='in'>
            <h4>Helloo Buddy!</h4>
            <h1>Today's Tasks</h1>
            <p>09.5.2024</p>
          </div>
        </div>
        <div className='div-2'>
          <div className='task'>
            <div className='left'>
              <p>{list.length
              } of  {list.length
                } Completed</p>
            </div>
            <div className='right' style={myStyle}>
              <button style={myStyle} onClick={toggleStyle}>{btntext}</button>
            </div>
          </div>
          <div className='inp' style={myStyle}>
            <div className='list'>
              <input style={myStyle}
                onChange={updateText}
                onKeyPress={updateText}
                placeholder="Enter Any Text"
                value={inputValue}
                type="text"
              />
              {editMode ?
                <button className="btn" style={myStyle} onClick={updateItem}>Update</button>
                :
                <button className="btn" style={myStyle} onClick={addItem}> Add </button>}

              <ul>
                {list.map(function (item, index) {
                  return (
                    <li key={index} style={myStyle} className="update">
                      {item}
                      <button style={myStyle} className="btn" onClick={() => deleteItem(index)}>Delete</button>
                      <button style={myStyle} className="btn" onClick={() => editItem(index)}>Edit</button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;