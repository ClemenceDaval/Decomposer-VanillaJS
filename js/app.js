var app = {
  init: function() {
    console.log('init');

    // TODO
    app.drawBoard();

    // Event listeners - TODO
  },

  drawBoard: function(){
    // on cible l'élément qui va contenir la board
    let board = document.getElementById('board');
    //console.log(board);

    // on créé notre board
    // on créé les 4 lignes
    for(let i=1 ; i<5 ; i++){
      let cellRow = document.createElement('div');
      cellRow.classList.add('cellRow');
      cellRow.setAttribute('id', 'row' + i);
      
      // dans chaque ligne, on créé un 6 cellules
      for(let i=1 ; i<7 ; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cellRow.appendChild(cell);
      }

      board.appendChild(cellRow);
      
    }

    // on définit les cases de départ et d'arrivée
    let firstRow = board.firstElementChild ;
    //console.log(firstRow);
    let cellStart = firstRow.firstElementChild;
    cellStart.classList.add('cellStart');

    let lastRow = board.lastElementChild ;
    let cellEnd = lastRow.lastElementChild;
    cellEnd.classList.add('cellEnd');

    // on définit la position du curseur comme celle de la case de départ
    cellStart.classList.add('cellCurrent');

  },

  handleLaunchScriptButton: function() {
    // TODO
    
    // TODO : get all lines as an array

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },

  codeLineLoop: function(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);


    // Increment
    index++;

    // if still a line to interpret
    if (index < codeLines.length) {
      // Recall same method (=> make a loop)
      window.setTimeout(function() {
        app.codeLineLoop(codeLines, index);
      }, 1000);
    } else {
      window.setTimeout(function() {
        app.checkSuccess();
      }, 1000);
    }
  },

  checkSuccess: function() {
    // TODO display if the game is won or not
  },


};

document.addEventListener('DOMContentLoaded', app.init);
