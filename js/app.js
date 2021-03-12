var app = {
  init: function() {
    console.log('init');

    // TODO
    app.drawBoard();
    app.moveForward();
    app.turnRight();
    app.moveForward();

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
    cellStart.classList.add('cellCurrent', 'cellCurrent-right');

  },
  
  moveForward: function(){

    let currentCell = document.querySelector('.cellCurrent');
    let currentCellPosition = currentCellClassesList[3];

    //modifier moveForward en fonction de la position du curseur !!

    let nextCell = currentCell.nextElementSibling;
    // est ce que l'élément suivant existe ?
    if (nextCell!=''){
      //on récupère toutes les classes 
      let currentCellClassesList = currentCell.classList;
      // la position de la classe est toujours en 4ème position dans la liste
      let currentCellPosition = currentCellClassesList[3];
      //console.log(currentCellClassesList[3]);
      currentCell.classList.remove("cellCurrent");
      nextCell.classList.add('cellCurrent');
      nextCell.classList.add(currentCellPosition);
    } else {
      // on remonte au parent de la currentCell (= la ligne)
      //let currentRow = currentCell.closest('.cellRow');
      // on prend l'élément suivant ()= la ligne suivante)
      //let 
    }
    //console.log(nextCell);
    

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
