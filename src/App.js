import React, {useState} from 'react'
import './App.css';
import Rules from './Rules.js';

export default function App() {

  //Creating 9x9 Grid (2d Array) of minesweeper buttons 
  const [mineGrid , setMineGrid] = useState ([
    //row1
    [
      {key:"r1c1", mine:false, bombNum:0, display:"", row:1, col:1},
      {key:"r1c2", mine:false, bombNum:0, display:"", row:1, col:2},
      {key:"r1c3", mine:false, bombNum:0, display:"", row:1, col:3},
      {key:"r1c4", mine:false, bombNum:0, display:"", row:1, col:4},
      {key:"r1c5", mine:false, bombNum:0, display:"", row:1, col:5},
      {key:"r1c6", mine:false, bombNum:0, display:"", row:1, col:6},
      {key:"r1c7", mine:false, bombNum:0, display:"", row:1, col:7},
      {key:"r1c8", mine:false, bombNum:0, display:"", row:1, col:8},
      {key:"r1c9", mine:false, bombNum:0, display:"", row:1, col:9}
    ],
    //row2
    [
      {key:"r2c1", mine:false, bombNum:0, display:"", row:2, col:1},
      {key:"r2c2", mine:false, bombNum:0, display:"", row:2, col:2},
      {key:"r2c3", mine:false, bombNum:0, display:"", row:2, col:3},
      {key:"r2c4", mine:false, bombNum:0, display:"", row:2, col:4},
      {key:"r2c5", mine:false, bombNum:0, display:"", row:2, col:5},
      {key:"r2c6", mine:false, bombNum:0, display:"", row:2, col:6},
      {key:"r2c7", mine:false, bombNum:0, display:"", row:2, col:7},
      {key:"r2c8", mine:false, bombNum:0, display:"", row:2, col:8},
      {key:"r2c9", mine:false, bombNum:0, display:"", row:2, col:9}
    ],
    //row3
    [
      {key:"r3c1", mine:false, bombNum:0, display:"", row:3, col:1},
      {key:"r3c2", mine:false, bombNum:0, display:"", row:3, col:2},
      {key:"r3c3", mine:false, bombNum:0, display:"", row:3, col:3},
      {key:"r3c4", mine:false, bombNum:0, display:"", row:3, col:4},
      {key:"r3c5", mine:false, bombNum:0, display:"", row:3, col:5},
      {key:"r3c6", mine:false, bombNum:0, display:"", row:3, col:6},
      {key:"r3c7", mine:false, bombNum:0, display:"", row:3, col:7},
      {key:"r3c8", mine:false, bombNum:0, display:"", row:3, col:8},
      {key:"r3c9", mine:false, bombNum:0, display:"", row:3, col:9}
    ],
    //row4
    [
      {key:"r4c1", mine:false, bombNum:0, display:"", row:4, col:1},
      {key:"r4c2", mine:false, bombNum:0, display:"", row:4, col:2},
      {key:"r4c3", mine:false, bombNum:0, display:"", row:4, col:3},
      {key:"r4c4", mine:false, bombNum:0, display:"", row:4, col:4},
      {key:"r4c5", mine:false, bombNum:0, display:"", row:4, col:5},
      {key:"r4c6", mine:false, bombNum:0, display:"", row:4, col:6},
      {key:"r4c7", mine:false, bombNum:0, display:"", row:4, col:7},
      {key:"r4c8", mine:false, bombNum:0, display:"", row:4, col:8},
      {key:"r4c9", mine:false, bombNum:0, display:"", row:4, col:9}
    ],
    //row5
    [
      {key:"r5c1", mine:false, bombNum:0, display:"", row:5, col:1},
      {key:"r5c2", mine:false, bombNum:0, display:"", row:5, col:2},
      {key:"r5c3", mine:false, bombNum:0, display:"", row:5, col:3},
      {key:"r5c4", mine:false, bombNum:0, display:"", row:5, col:4},
      {key:"r5c5", mine:false, bombNum:0, display:"", row:5, col:5},
      {key:"r5c6", mine:false, bombNum:0, display:"", row:5, col:6},
      {key:"r5c7", mine:false, bombNum:0, display:"", row:5, col:7},
      {key:"r5c8", mine:false, bombNum:0, display:"", row:5, col:8},
      {key:"r5c9", mine:false, bombNum:0, display:"", row:5, col:9}
    ],
    //row6
    [
      {key:"r6c1", mine:false, bombNum:0, display:"", row:6, col:1},
      {key:"r6c2", mine:false, bombNum:0, display:"", row:6, col:2},
      {key:"r6c3", mine:false, bombNum:0, display:"", row:6, col:3},
      {key:"r6c4", mine:false, bombNum:0, display:"", row:6, col:4},
      {key:"r6c5", mine:false, bombNum:0, display:"", row:6, col:5},
      {key:"r6c6", mine:false, bombNum:0, display:"", row:6, col:6},
      {key:"r6c7", mine:false, bombNum:0, display:"", row:6, col:7},
      {key:"r6c8", mine:false, bombNum:0, display:"", row:6, col:8},
      {key:"r6c9", mine:false, bombNum:0, display:"", row:6, col:9}
    ],
    //row7
    [
      {key:"r7c1", mine:false, bombNum:0, display:"", row:7, col:1},
      {key:"r7c2", mine:false, bombNum:0, display:"", row:7, col:2},
      {key:"r7c3", mine:false, bombNum:0, display:"", row:7, col:3},
      {key:"r7c4", mine:false, bombNum:0, display:"", row:7, col:4},
      {key:"r7c5", mine:false, bombNum:0, display:"", row:7, col:5},
      {key:"r7c6", mine:false, bombNum:0, display:"", row:7, col:6},
      {key:"r7c7", mine:false, bombNum:0, display:"", row:7, col:7},
      {key:"r7c8", mine:false, bombNum:0, display:"", row:7, col:8},
      {key:"r7c9", mine:false, bombNum:0, display:"", row:7, col:9}
    ],
    //row8
    [
      {key:"r8c1", mine:false, bombNum:0, display:"", row:8, col:1},
      {key:"r8c2", mine:false, bombNum:0, display:"", row:8, col:2},
      {key:"r8c3", mine:false, bombNum:0, display:"", row:8, col:3},
      {key:"r8c4", mine:false, bombNum:0, display:"", row:8, col:4},
      {key:"r8c5", mine:false, bombNum:0, display:"", row:8, col:5},
      {key:"r8c6", mine:false, bombNum:0, display:"", row:8, col:6},
      {key:"r8c7", mine:false, bombNum:0, display:"", row:8, col:7},
      {key:"r8c8", mine:false, bombNum:0, display:"", row:8, col:8},
      {key:"r8c9", mine:false, bombNum:0, display:"", row:8, col:9}
    ],
    //row9
    [
      {key:"r9c1", mine:false, bombNum:0, display:"", row:9, col:1},
      {key:"r9c2", mine:false, bombNum:0, display:"", row:9, col:2},
      {key:"r9c3", mine:false, bombNum:0, display:"", row:9, col:3},
      {key:"r9c4", mine:false, bombNum:0, display:"", row:9, col:4},
      {key:"r9c5", mine:false, bombNum:0, display:"", row:9, col:5},
      {key:"r9c6", mine:false, bombNum:0, display:"", row:9, col:6},
      {key:"r9c7", mine:false, bombNum:0, display:"", row:9, col:7},
      {key:"r9c8", mine:false, bombNum:0, display:"", row:9, col:8},
      {key:"r9c9", mine:false, bombNum:0, display:"", row:9, col:9}
    ],

  ]);

  //Creating state values nd fucntions to change them
  //Boolean state value to indicate if a cell holds a mine. true = mine, false=safe
  const [areMinesPlaced , setAreMinesPlaced] = useState (false)
  //counter to store users turns. If you havent clicked a mine after 71 turns, you win
  const [numTurns , setNumTurns] = useState(0);

  //placing 9 mines randomly within the grid. Function triggered by 'Start Game' Button
  const placeMines = () => {

    //if statement ensures this function can only be run once. Else is an alert informing that the game has already started
    if (areMinesPlaced === false)
    {
      
      //loop runs 10 times for each of the 10 mines
      for (let i =0; i<10; i++){
        //random numbers = grid coordinate for a mine
        let mineRowNum = Math.floor((Math.random() * 9));
        let mineColNum = Math.floor((Math.random() * 9));
        //create copt of mine from state. Will edit copy then update state value at end
        let updateMineGrid= [...mineGrid];
        //Checking if a mine has already been planted at the coordinate generated by the random numbers above. 
        //If yes subtract one from the i value so this round does not count.
        if(updateMineGrid[mineRowNum][mineColNum].mine == true)
        {
          i=i-1;
        }
        //Else, set mine=true & update state grid from copy
        else{
          updateMineGrid[mineRowNum][mineColNum].mine=true;
          setMineGrid(updateMineGrid);
        }
      }
      setAreMinesPlaced(true)
  }
  else{
    alert("The game has already started. Click a tile to start playing")
  }
  //once the bombs are placed, the function that counts how many bombs border each button is called
  countBombs();
  }




  //Counting how many bombs border a tile
  const countBombs = () => {

    //creating copy of grid. Changes made to copy, then updated at the end
    let updateMineGrid= [...mineGrid];

    //looping through entire grid to check if neighbouring tiles are bombs
    for (let i =0; i<9; i++){ 
      for (let j =0; j<9; j++){

          //creating temp bombNum variable to be set at end of check
          let tempBombNum = 0;

          //checking if neighbouring tiles are bombs, adding to bombNum as neccesary
          //additional if statements added for tiles on outside of grid, preventing the loop from navigating outside the array
          //row above tile clicked
          if (i>0){
            if (j>0){
              if (updateMineGrid[i-1][j-1].mine==true)
              {
                tempBombNum++;
              }
            }
            if (updateMineGrid[i-1][j].mine==true)
            {
              tempBombNum++;
            }
            if (j<8){
              if (updateMineGrid[i-1][j+1].mine==true)
              {
                tempBombNum++;
              }
            }
          }

          //same row as tile clicked
          if (j>0){
            if (updateMineGrid[i][j-1].mine==true)
            {
              tempBombNum++;
            }
          }
          if (j<8){
            if (updateMineGrid[i][j+1].mine==true)
            {
              tempBombNum++;
            }
          }

          //row below tile clicked
          if (i<8){
            if(j>=1){
              if (updateMineGrid[i+1][j-1].mine==true)
              {
                tempBombNum++;
              }
            }
            if (updateMineGrid[i+1][j].mine==true)
              {
                tempBombNum++;
            }
            if(j<8){
              if (updateMineGrid[i+1][j+1].mine==true)
              {
                tempBombNum++;
              }
            }
          }

          //if the tile does not contain a bomb "*", update bombNum to bombNum
          if (updateMineGrid[i][j].mine!=true)
          {
            updateMineGrid[i][j].bombNum=tempBombNum;
          }

          //set grid to updated copy
          setMineGrid(updateMineGrid);

          

        
      }
    }
  }


  const tileClick = (e) => {
  //making a temporary copy of the turn ccounter state value
  let numTurnsTemp = numTurns;
  //if statement makes sure user only has max 70 turns. if user's turnCount reaches 70, theyare aleteted that they win. 
  if(numTurns< 70)
  {
      //only runs if user had previously clicked the 'start game' button, which places the mines
      if (areMinesPlaced === true)
      {
          //creates copy of mine frim state. Copy is edited before updating state
          let updateMineGrid= [...mineGrid];
          
          //getting the grid[][] coordinates from the button clicked
          let colClicked= parseInt(e.target.attributes.row.value)-1;
          let rowClicked= parseInt(e.target.attributes.col.value)-1;
          //storing the button clicked in a variable
          let tileClicked =  updateMineGrid[colClicked][rowClicked];
        
        
        //code that runs if the user has clicked on a mine
        if(tileClicked.mine===true)
        {
          //update display to represent a mine
          updateMineGrid[colClicked][rowClicked].display="*";

          //wait half a second after updating display, then alert game over and refresh the page
          setTimeout(() => {
            alert("Game over. You stepped on a mine");
            window.location.reload();
            }, 500);
        }

        //code that runs if the user has clicked on a button that is bordered by 1 or more mines
        else if(tileClicked.bombNum >0)
        {
          //update display to show how many bombs border this cell
          updateMineGrid[colClicked][rowClicked].display=tileClicked.bombNum;
          //add to turn counter
          numTurnsTemp++;
        }

          //if bombNum=0
            //indicate that there are no bombs around this tile
            //'0' , '.' , change button background colour...
            //???flip other connected tiles where bombNum=0???
        else if(tileClicked.bombNum ==0)
        {
          //update display to show how many bombs border this cell
          updateMineGrid[colClicked][rowClicked].display=0;
          //add to turn counter
          numTurnsTemp++;

        }

        //set state va;ues (grid and turn counter) to updated copies
        setMineGrid(updateMineGrid);
        setNumTurns(numTurnsTemp);
      }
      else {
        alert("Click the 'Start game' button before you begin playing");
      }
    }
    else{
      alert("!!!Winner!!!")
    }
    

  }

  


  return (
    <div className="App" >

      {/* Container for heading, buttons, and grid */}
      <div className="container my-5">

        {/* Heading 1 */}
        <h1 className="mb-4">Minesweeper</h1>

        {/* row for buttons */}
        <div className="row ">

          {/* Spacing column */}
          <div className="col"></div>

          {/* Column with button that triggers mine placement */}
          <div className="col text-center">
            <button id="startBtn" type="button" className="btn btn-success mb-4 shadow text-center" onClick={placeMines} >Start game</button>
          </div>

          {/* Column with button that triggers alert with rules */}
          <div className="col">
            <button id="startBtn" type="button" className="btn btn-warning mb-4 shadow text-center" onClick={()=>alert("The board (9x9 grid) is divided into cells, with 10 mines randomly distributed. To win, you need to open all the cells except the mines. If you click on a cell that contains a mine *, you lose. The number on a cell shows the number of mines adjacent to it. Using these numbers, you can determine which cells that are safe, and which cells contain mines. Good luck!")} >Help</button>
          </div>

          {/* Column with button that triggers reload */}
          <div className="col">
            <button id="startBtn" type="button" className="btn btn-danger mb-4 shadow text-center" onClick={()=> window.location.reload()} >Restart</button>
          </div>

          {/* Spacing column */}
          <div className="col"></div>
        </div>

        {/* Nested map to use the 9x9 2d array and display all the grid buttons in a 9x9 grid */}
        {
          mineGrid.map((col)=>
            <div className="row justify-content-center">
              {
                col.map((item)=>
                    
                    <div className="col-1 shadow rounded">
                      <button className='cellBtn rounded' row={item.row} col={item.col} onClick={tileClick}>{item.display}</button>
                    </div>
              
                )    
              }
            </div>
          )
        }
        {/* Dislay Rules Component */}
        <Rules/>
    </div>
 
    </div>
  );
}
