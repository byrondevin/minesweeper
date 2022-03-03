import React from 'react'
import './Rules.css'

export default function  Rules(){


    return(
        <div className="row rounded shadow m-5 py-4" id="ruleContainer">
        <div className="col">
          <h2 className="">Rules (How to Play)</h2>
          <p>
          <br/>
            The board (9x9 grid) is divided into cells, with 10 mines randomly distributed.    
          <br/><br/>
            To win, you need to open all the cells except the mines.
          <br/>
            If you click on a cell that contains a mine '*', you lose.
          <br/><br/>
          The number on a cell shows the number of mines adjacent to it. <br/>
          Using these numbers, you can determine which cells that are safe, and which cells contain mines.
          <br/><br/>
            Good luck!
          </p>
        </div>
      </div>
        
    );
}