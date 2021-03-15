var app = {

  // propriétés de la grille
  nbOfRows : 4,
  nbOfColumns : 6,

  // la propriété position correspond au numéro de cellule dans la ligne
  position : 1,
  nbOfMoves : 0,

  init: function() {
    
    app.drawBoard();
    
    // ajout d'un event listener sur le bouton 
    let launchButton = document.getElementById('launchScript');
    launchButton.addEventListener('click', app.handleLaunchScriptButton);
  },

  drawBoard: function(){
    // on cible l'élément qui va contenir la board
    let board = document.getElementById('board');
    //console.log(board);

    // on créé notre board
    // on créé les 4 lignes
    for(let i=1 ; i<(app.nbOfRows+1) ; i++){
      let cellRow = document.createElement('div');
      cellRow.classList.add('cellRow');
      cellRow.setAttribute('id', 'row' + i);
      
      // dans chaque ligne, on créé 6 cellules
      for(let i=1 ; i<(app.nbOfColumns+1) ; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cellRow.appendChild(cell);
      }

      board.appendChild(cellRow);
      
    }

    // on définit les cases de départ et d'arrivée au hasard
    // on choisit 2 nombres random au hasard entre 1 et 24
    //app.randomStartAndEndCellsNumbers(app.numberOfRows*app.nbOfColumns);
    let startCellNumber = app.generateRandomNumber(app.nbOfRows*app.nbOfColumns);
    let endCellNumber= app.generateRandomNumber(app.nbOfRows*app.nbOfColumns)
    //tant que endCellNumber est égal à startCellNumber, on regenere un autre nombre
    while (startCellNumber == endCellNumber){
      endCellNumber= app.generateRandomNumber(app.nbOfRows*app.nbOfColumns);
    }
    app.displayStartAndEndCells(startCellNumber, endCellNumber);

    // let firstRow = board.firstElementChild ;
    // let cellStart = firstRow.firstElementChild;
    // cellStart.classList.add('cellStart');

    // let lastRow = board.lastElementChild ;
    // let cellEnd = lastRow.lastElementChild;
    // cellEnd.classList.add('cellEnd');

    // on définit la position du curseur comme celle de la case de départ
    let cellStart = document.querySelector('.cellStart');
    cellStart.classList.add('cellCurrent', 'cellCurrent-right');

  },
  
  moveForward: function(){
    let currentCell = document.querySelector('.cellCurrent');
    //let currentCellClassesList = currentCell.classList;
    
    // si le curseur pointe vers la droite
    if (currentCell.classList.contains('cellCurrent-right')){
      // si la position n'est pas 6 (c'est à dire qu'on peut encore aller vers la droite)
      if (app.position != (app.nbOfColumns)){
        let nextCell = currentCell.nextElementSibling;
        //console.log(nextCell);
        currentCell.classList.remove('cellCurrent');
        currentCell.classList.remove('cellCurrent-right')
        nextCell.classList.add('cellCurrent');
        nextCell.classList.add('cellCurrent-right');
        app.position = app.position + 1 ;
        console.log('position : ' + app.position);
      } else {
      alert('erreur ! Vous ne pouvez pas aller dans cette direction');
      } 

    // si le curseur pointe vers la gauche
    } else if (currentCell.classList.contains('cellCurrent-left')){
      // si la position n'est pas 1 (c'est à dire qu'on peut encore aller vers la gauche)
      if (app.position != 1){
        let previousCell = currentCell.previousElementSibling;
        //console.log(previousCell);
        currentCell.classList.remove('cellCurrent');
        currentCell.classList.remove('cellCurrent-left');
        previousCell.classList.add('cellCurrent');
        previousCell.classList.add('cellCurrent-left');
        app.position = app.position -1 ;
        console.log('position : ' + app.position);
      } else {
        alert('erreur ! Vous ne pouvez pas aller dans cette direction');
      } 

    // si le curseur pointe vers le haut
    } else if (currentCell.classList.contains('cellCurrent-top')){
      //console.log(currentCell);
      let currentRow = currentCell.closest('.cellRow') ;
      //console.log(currentRow);
      // s'il ne s'agit pas du premier rang
      if (currentRow.id != row1){
        //console.log('hello');
        let previousRow = currentRow.previousElementSibling ;
        // la position actuelle dans le rang est représentée par la propriété position 
        // attention la position commence à 1 alors que children commence à 0
        let newCell = previousRow.children[app.position-1];
        //console.log(newCell);
        currentCell.classList.remove('cellCurrent');
        currentCell.classList.remove('cellCurrent-top');
        newCell.classList.add('cellCurrent');
        newCell.classList.add('cellCurrent-top');
      } else {
        alert('Erreur ! Vous ne pouvez pas aller dans cette direction');
      }
    
    // si le curseur pointe vers le bas
    } else if (currentCell.classList.contains('cellCurrent-bottom')){
      //console.log(currentCell);
      let currentRow = currentCell.closest('.cellRow') ;
      //console.log(currentRow);
      // s'il ne s'agit pas du dernier rang
      if (currentRow.id != ('row' + app.nbOfRows)){
        //console.log('hello');
        let nextRow = currentRow.nextElementSibling ;
        // la position actuelle dans le rang est représentée par la propriété position 
        // attention la position commence à 1 alors que children commence à 0
        let newCell = nextRow.children[app.position-1];
        console.log(newCell);
        currentCell.classList.remove('cellCurrent');
        currentCell.classList.remove('cellCurrent-bottom');
        newCell.classList.add('cellCurrent');
        newCell.classList.add('cellCurrent-bottom');
      } else {
        alert('Erreur ! Vous ne pouvez pas aller dans cette direction');
      }
    }   

  },

  turnRight: function(){
    let currentCell = document.querySelector('.cellCurrent');
    //console.log(currentCell);

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

  handleLaunchScriptButton: function(event) {
    // on cible l'input et on récupère son contenu
    let textarea = document.getElementById('userCode');
    let text = textarea.value;
    console.log(text);
    codeLines = text.split('\n');

    window.setTimeout(function() {
      app.codeLineLoop(codeLines, 0);
    }, 2000);
  },

  codeLineLoop: function(codeLines, index) {
    // Getting currentLine
    var currentLine = codeLines[index];
    console.log(currentLine);
    if (currentLine == 'move forward'){
      app.moveForward();
    } else if (currentLine == 'turn right'){
      app.turnRight();
    } else if (currentLine == 'turn left'){
      app.turnLeft();
    } else {
      console.log('cette commande n\'existe pas!');
      return;
    }

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
    let currentCell = document.querySelector('.cellCurrent');
    if (currentCell.classList.contains('cellEnd')){
      alert('vous avez gagné !');
    } else {
      alert('perdu !');
    }
  },

  generateRandomNumber: function(max){
    let number = Math.floor(Math.random()*Math.floor(max))+1;
    console.log(number);
    return number;
  },

  displayStartAndEndCells: function(startCellNumber, endCellNumber){
    
    let startCellCoordinates = app.defineCellFromNumber(startCellNumber);
    console.log(startCellCoordinates);
    let startRow = document.getElementById('row' + startCellCoordinates[0]);
    let startCell = startRow.children[startCellCoordinates[1]-1];
    startCell.classList.add('cellStart');

    let endCellCoordinates = app.defineCellFromNumber(endCellNumber);
    console.log(endCellCoordinates);
    let endRow = document.getElementById('row' + endCellCoordinates[0]);
    let endCell = endRow.children[endCellCoordinates[1]-1];
    endCell.classList.add('cellEnd');

  },

   defineCellFromNumber: function(randomNumber){
    let rowNumber = Math.ceil(randomNumber/app.nbOfColumns);
    let columnNumber = randomNumber%app.nbOfColumns;
    if (columnNumber == 0){
      columnNumber = 6;
    }
    let cellCoordinates = [rowNumber, columnNumber];
    return cellCoordinates;
    
  }

};

document.addEventListener('DOMContentLoaded', app.init);
