var app = {

  // propriétés de la grille
  nbOfRows : 4,
  nbOfColumns : 6,

  // la propriété position correspond au numéro de cellule dans la ligne
  position : 0,
  nbOfMoves : 0,

  init: function() {
    console.log('init');

    // TODO
    app.drawBoard();
    app.moveForward();
    app.moveForward();
    app.moveForward();

    app.turnRight();
    app.turnRight();
    app.moveForward();
    app.moveForward();
   //app.moveForward();
    




    //app.turnRight();
    //app.moveForward();

    // Event listeners - TODO
  },

  drawBoard: function(){
    // on cible l'élément qui va contenir la board
    let board = document.getElementById('board');
    //console.log(board);

    // on créé notre board
    // on créé les 4 lignes
    for(let i=0 ; i<app.nbOfRows ; i++){
      let cellRow = document.createElement('div');
      cellRow.classList.add('cellRow');
      cellRow.setAttribute('id', 'row' + i);
      
      // dans chaque ligne, on créé un 6 cellules
      for(let i=0 ; i<app.nbOfColumns ; i++){
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
    cellStart.classList.add('cellCurrent', 'cellCurrent-right');

  },
  
  moveForward: function(){
    let currentCell = document.querySelector('.cellCurrent');
    let currentCellClassesList = currentCell.classList;
    
    // si le curseur pointe vers la droite
    if (currentCell.classList.contains('cellCurrent-right')){
      if (app.position != (app.nbOfColumns - 1)){
        let nextCell = currentCell.nextElementSibling;
        //console.log(nextCell);
        currentCell.classList.remove('cellCurrent');
        currentCell.classList.remove('cellCurrent-right')
        nextCell.classList.add('cellCurrent');
        nextCell.classList.add('cellCurrent-right');
        app.position = app.position + 1 ;
        console.log('position : ' + app.position);
    } else {
      console.log('erreur ! Vous ne pouvez pas aller dans cette direction');
    } 
  // si le curseur pointe vers la gauche
  } else if (currentCell.classList.contains('cellCurrent-left')){
    if (app.position != 0){
      let previousCell = currentCell.previousElementSibling;
      //console.log(previousCell);
      currentCell.classList.remove('cellCurrent');
      currentCell.classList.remove('cellCurrent-left');
      previousCell.classList.add('cellCurrent');
      previousCell.classList.add('cellCurrent-left');
      app.position = app.position -1 ;
      console.log('position : ' + app.position);
    } else {
      console.log('erreur ! Vous ne pouvez pas aller dans cette direction');
    } 
  }
    
    

  },

  turnRight: function(){
    let currentCell = document.querySelector('.cellCurrent');
    console.log(currentCell);

    // si le curseur pointe vers la droite
    if (currentCell.classList.contains('cellCurrent-right')){
      currentCell.classList.remove('cellCurrent-right');
      currentCell.classList.add('cellCurrent-bottom');

    // si le curseur pointe vers le bas  
    } else if (currentCell.classList.contains('cellCurrent-bottom')){
      currentCell.classList.remove('cellCurrent-bottom');
      currentCell.classList.add('cellCurrent-left');

    // si le curseur pointe vers la gauche
    } else if (currentCell.classList.contains('cellCurrent-left')){
      currentCell.classList.remove('cellCurrent-left');
      currentCell.classList.add('cellCurrent-top');

    // si le curseur pointe vers le haut
    } else if (currentCell.classList.contains('cellCurrent-top')){
      currentCell.classList.remove('cellCurrent-top');
      currentCell.classList.add('cellCurrent-right');
    }
  },

  turnLeft: function(){
    let currentCell = document.querySelector('.cellCurrent');
    //console.log(currentCell);

    // si le curseur pointe vers la droite
    if (currentCell.classList.contains('cellCurrent-right')){
      currentCell.classList.remove('cellCurrent-right');
      currentCell.classList.add('cellCurrent-top');

    // si le curseur pointe vers le bas  
    } else if (currentCell.classList.contains('cellCurrent-bottom')){
      currentCell.classList.remove('cellCurrent-bottom');
      currentCell.classList.add('cellCurrent-right');

    // si le curseur pointe vers la gauche
    } else if (currentCell.classList.contains('cellCurrent-left')){
      currentCell.classList.remove('cellCurrent-left');
      currentCell.classList.add('cellCurrent-bottom');

    // si le curseur pointe vers le haut
    } else if (currentCell.classList.contains('cellCurrent-top')){
      currentCell.classList.remove('cellCurrent-top');
      currentCell.classList.add('cellCurrent-left');
    }
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
