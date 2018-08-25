// This is an array version of the board
var board = {
    "1": {"a": "WRL", "b": "WKL", "c": "WBL", "d": "WQN", "e": "WKG", "f": "WBR", "g": "WKR", "h": "WRR"},
    "2": {"a": "WP1", "b":"WP2", "c":"WP3", "d":"WP4", "e":"WP5", "f":"WP6", "g":"WP7", "h":"WP8"},
    "3": {"a": "BLK", "b":"BLK", "c":"BLK", "d":"BLK", "e":"BLK", "f":"BLK", "g":"BLK", "h":"BLK"},
    "4": {"a": "BLK", "b":"BLK", "c":"BLK", "d":"BLK", "e":"BLK", "f":"BLK", "g":"BLK", "h":"BLK"},
    "5": {"a": "BLK", "b":"BLK", "c":"BLK", "d":"BLK", "e":"BLK", "f":"BLK", "g":"BLK", "h":"BLK"},
    "6": {"a": "BLK", "b":"BLK", "c":"BLK", "d":"BLK", "e":"BLK", "f":"BLK", "g":"BLK", "h":"BLK"},
    "7": {"a": "BP1", "b":"BP2", "c":"BP3", "d":"BP4", "e":"BP5", "f":"BP6", "g":"BP7", "h":"BP8"},
    "8": {"a": "BRL", "b":"BKL", "c":"BBL", "d":"BQN", "e":"BKG", "f":"BBR", "g":"BKR", "h":"BRR"},
}

// Piece has all the codes which will give the color image and type of piece
var Piece = {
    "WP1":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP2":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP3":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP4":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP5":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP6":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP7":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WP8":{'type':'PAWN','color':'white','img':'<img src="img/WP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP1":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP2":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP3":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP4":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP5":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP6":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP7":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BP8":{'type':'PAWN','color':'black','img':'<img src="img/BP.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BRL":{'type':'ROOK','color':'black','img':'<img src="img/BR.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BRR":{'type':'ROOK','color':'black','img':'<img src="img/BR.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BKL":{'type':'KNIGHT','color':'black','img':'<img src="img/BH.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BKR":{'type':'KNIGHT','color':'black','img':'<img src="img/BH.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BBL":{'type':'BISHOP','color':'black','img':'<img src="img/BB.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BBR":{'type':'BISHOP','color':'black','img':'<img src="img/BB.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BKG":{'type':'KING','color':'black','img':'<img src="img/BK.png" alt="" id="piece" class="bKing" onclick="userClick(this)">', 'hasMove':false},
    "BQN":{'type':'QUEEN','color':'black','img':'<img src="img/BQ.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WRL":{'type':'ROOK','color':'white','img':'<img src="img/WR.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WRR":{'type':'ROOK','color':'white','img':'<img src="img/WR.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WKL":{'type':'KNIGHT','color':'white','img':'<img src="img/WH.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WKR":{'type':'KNIGHT','color':'white','img':'<img src="img/WH.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WBL":{'type':'BISHOP','color':'white','img':'<img src="img/WB.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WBR":{'type':'BISHOP','color':'white','img':'<img src="img/WB.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "WKG":{'type':'KING','color':'white','img':'<img src="img/WK.png" alt="" id="piece" class="wKing" onclick="userClick(this)">', 'hasMove':false},
    "WQN":{'type':'QUEEN','color':'white','img':'<img src="img/WQ.png" alt="" id="piece" onclick="userClick(this)">', 'hasMove':false},
    "BLK":{'img':'<img src="img/transparent.png" alt="" id="piece" onclick="userClick(this)">'}
}

// Aarray that defines all the possible moves of all the piece.
var pieceMove = {
    'PAWN': [moveFwd, moveDTL, moveDTR, moveDBL, moveDBR],
    'KING': [moveFwd, moveBkd, moveRgt, moveLft, moveDTL, moveDTR, moveDBL, moveDBR],
    'QUEEN': [moveFwd, moveBkd, moveRgt, moveLft, moveDTL, moveDTR, moveDBL, moveDBR],
    'BISHOP': [moveDTL, moveDTR, moveDBL, moveDBR],
    'KNIGHT': [moveKNT],
    'ROOK': [moveFwd, moveBkd, moveLft, moveRgt]
}

var piecePMove = {
    'WP1': [], 'WP2': [], 'WP3': [], 'WP4': [], 'WP5': [], 'WP6': [], 'WP7': [],
    'WP8': [], 'WKG': [], 'WQN': [], 'WRL': [], 'WRR': [], 'WBL': [], 'WBR': [],
    'WKL': [], 'WKR': [], 'BP1': [], 'BP2': [], 'BP3': [], 'BP4': [], 'BP5': [],
    'BP6': [], 'BP7': [], 'BP8': [], 'BKG': [], 'BQN': [], 'BRL': [], 'BRR': [],
    'BBL': [], 'BBR': [], 'BKL': [], 'BKR': [],
}

// It is class which uses id to determine different set of values
var piecePos = function (id) {
    this.old = id;
    this.rowVal = id[1];
    this.colVal = id[0];
    this.row = rows.indexOf(this.rowVal);
    this.col = cols.indexOf(this.colVal);
    this.id = board[this.rowVal][this.colVal];
    this.color = Piece[this.id]['color'];
    this.oppo = (this.color == 'white' ? 'black' : 'white');
}

// Global Variables
var rows = ["1", "2", "3", "4", "5", "6", "7", "8"];
var cols = ["a", "b", "c", "d", "e", "f", "g", "h"];
var whitePieces = ['WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8', 'WKG', 'WQN', 'WRL', 'WRR', 'WBL', 'WBR', 'WKL', 'WKR'];
var blackPieces = ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8', 'BKG', 'BQN', 'BRL', 'BRR', 'BBL', 'BBR', 'BKL', 'BKR'];
var count = 0;
var pp;
var parr;
var blackCheckPath = [];
var whiteCheckPath = [];
var blackIsChecked = false;
var whiteIsChecked = false;

// Fuctions

// This is an object that stores the position in terms of number and creates the
// Required id of the square
function move (row, col) {
    this.row = row;
    this.col = col;
    this.id = cols[col]+rows[row]
}

//Sets the board with the help of the board  variable
function setBoard() {
    rows.forEach(function(r) {
        cols.forEach(function(c) {
            var id = c + "" + r;
            // console.log(id);
            // console.log(document.getElementById(id));
            // console.log(document.getElementsByClassName('a')['a1']);
            document.getElementById(id).innerHTML = Piece[board[r][c]]['img'];
        });
    });
}

// Returns Any Present Piece in the Possible path of the Chess piece and
// Also tells if it could be consumed or not
function obs(color, row, col) {
    // console.log(board[rows[row]][cols[col]]);
    if (board[rows[row]][cols[col]] == "BLK" ) {
        return [true, true];
    } else if (Piece[board[rows[row]][cols[col]]]['color'] != color ) {
        return [true, false];
    } else {
        return [false, false];
    }
}

// This is the forward movement Function
function moveFwd(piece, row, col) {
    if (Piece[piece].color == 'white') {
        if ( Piece[piece]['type'] == 'PAWN' || Piece[piece]['type'] == 'KING' ) {
            var pmove = [];
            if ( Piece[piece]['type'] == 'PAWN' && Piece[piece]['hasMove'] == false ){
                if ( row != 7 && obs('white', row+1, col)[0] && obs('white', row+2, col)[0] ) {
                     pmove.push(new move(row+2, col));
                 }
            }
             if ( row != 7 && obs('white', row+1, col)[0] ) {
                 pmove.push(new move(row+1, col));
             }
            return pmove;
        } else if ( row != 7) {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs('white', ++row, col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || row == 7 ) { break; }
                row++;
                [obb, nxt] = obs('white', row, col);
            }
            return pmoves;
        } else {
            return [];
        }
    } else {
        if ( Piece[piece]['type'] == 'PAWN' || Piece[piece]['type'] == 'KING' ) {
             var pmove = [];
            if ( Piece[piece]['type'] == 'PAWN' && Piece[piece]['hasMove'] == false ){
                if ( row != 7 && obs('white', row-1, col)[0] && obs('white', row-2, col)[0] ) {
                     pmove.push(new move(row-2, col));
                 }
            }
             if ( row != 7 && obs('white', row-1, col)[0] ) {
                 pmove.push(new move(row-1, col));
             }
            return pmove;
        } else if (row != 1 ) {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs('black', --row, col);
            while ( obb ) {
//                console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || row == 0 ) { break; }
                row--;
                [obb, nxt] = obs('black', row, col);
            }
            return pmoves;
        } else {
            return [];
        }
    }
}

// This Function provide possible moves for the piece to Move Backward
function moveBkd(piece, row, col) {
    if (Piece[piece].color == 'white') {
        if ( Piece[piece]['type'] == 'KING' ) {
             if ( row != 0 && obs('white', row-1, col)[0] ) {
                 var pmove = new move(row-1, col)
                 return [pmove];
             } else {
                 return [];
             }
        } else if ( row != 0){
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs('white', --row, col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || row == 0 ) { break; }
                row--;
                [obb, nxt] = obs('white', row, col);
            }
            return pmoves;
        } else {
            return [];
        }
    } else {
        if ( Piece[piece]['type'] == 'KING' ) {
             if ( row != 7 && obs('black', row+1, col)[0] ) {
                 var pmove = new move(row+1, col)
                 return [pmove];
             } else {
                 return [];
             }
        } else if ( row != 7 ) {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs('black', ++row, col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || row == 7 ) { break; }
                row++;
                [obb, nxt] = obs('black', row, col);
            }
            return pmoves;
        } else {
            return [];
        }
    }
}

// This Function provide possible moves for the piece to Move Right From users
// prespective
function moveRgt( piece, row, col ) {
    if ( Piece[piece]['type'] == 'KING' ) {
         if ( col != 7 && obs(Piece[piece].color, row, col+1)[0] ) {
             var pmove = new move(row, col+1)
             return [pmove];
         } else {
             return [];
         }
    } else if ( col != 7 ){
        var pmoves = [];
        var obb, nxt;
        [obb, nxt] = obs(Piece[piece].color, row, ++col);
        while ( obb ) {
            console.log(board[rows[row]][cols[col]]);
            pmoves.push(new move(row, col));
            if ( !nxt || col == 7 ) { break; }
            col++;
            [obb, nxt] = obs(Piece[piece].color, row, col);
        }
        return pmoves;
    } else {
        return [];
    }
}

// This Function provide possible moves for the piece to Move Right From users
// prespective
function moveLft( piece, row, col ) {
    if ( Piece[piece]['type'] == 'KING' ) {
         if ( col != 0 && obs(Piece[piece].color, row, col-1)[0] ) {
             var pmove = new move(row, col-1)
             return [pmove];
         } else {
             return [];
         }
    } else if ( col != 0 ){
        var pmoves = [];
        var obb, nxt;
        [obb, nxt] = obs(Piece[piece].color, row, --col);
        while ( obb ) {
            // console.log([obb, nxt]);
            pmoves.push(new move(row, col));
            if ( !nxt || col == 0 ) { break; }
            col--;
            [obb, nxt] = obs(Piece[piece].color, row, col);
        }
        return pmoves;
    } else {
        return [];
    }
}

// This Function provide possible moves for the piece to Move Top Right From
// users prespective
function moveDTR( piece, row, col ) {
    if ( col != 7 && row!= 7 ) {
        if ( Piece[piece]['type'] == 'PAWN' ) {
            [obb, nxt] = obs(Piece[piece].color, row+1, col+1);
            if ( obb && !nxt && Piece[piece].color == 'white' ) {
                return [new move(row+1, col+1)];
            } else {
                return [];
            }
        } else if ( Piece[piece]['type'] == 'KING' ) {
             if (obs(Piece[piece].color, row+1, col+1)[0] ) {
                 // var pmove =
                 return [new move(row+1, col+1)];
             } else {
                 return [];
             }
        } else {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs(Piece[piece].color, ++row, ++col);
            // console.log([obb, nxt]);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || col == 7 || row == 7 ) { break; }
                col++;
                row++;
                [obb, nxt] = obs(Piece[piece].color, row, col);
            }
            return pmoves;
        }
    } else {
        return [];
    }
}

// This Function provide possible moves for the piece to Move Top Left From users
// prespective
function moveDTL( piece, row, col ) {
    if ( col != 0 && row!= 7 ) {
        if ( Piece[piece]['type'] == 'PAWN' ) {
            [obb, nxt] = obs(Piece[piece].color, row+1, col-1);
            if ( obb && !nxt  && Piece[piece].color == 'white' ) {
                return [new move(row+1, col-1)];
            } else {
                return [];
            }
        } else if ( Piece[piece]['type'] == 'KING' ) {
             if (obs(Piece[piece].color, row+1, col-1)[0] ) {
                 // var pmove =
                 return [new move(row+1, col-1)];
             } else {
                 return [];
             }
        } else {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs(Piece[piece].color, ++row, --col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || col == 0 || row == 7 ) { break; }
                col--;
                row++;
                [obb, nxt] = obs(Piece[piece].color, row, col);
            }
            return pmoves;
        }
    } else {
        return [];
    }
}

// This Function provide possible moves for the piece to Move Bottom Left From
// users prespective
function moveDBL( piece, row, col ) {
    if ( col != 0 && row!= 0 ) {
        if ( Piece[piece]['type'] == 'PAWN' ) {
            [obb, nxt] = obs(Piece[piece].color, row-1, col-1);
            if ( obb && !nxt && Piece[piece].color == 'black' ) {
                return [new move(row-1, col-1)];
            } else {
                return [];
            }
        } else if ( Piece[piece]['type'] == 'KING' ) {
             if (obs(Piece[piece].color, row-1, col-1)[0] ) {
                 // var pmove =
                 return [new move(row-1, col-1)];
             } else {
                 return [];
             }
        } else {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs(Piece[piece].color, --row, --col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || col == 0 || row == 0 ) { break; }
                col--;
                row--;
                [obb, nxt] = obs(Piece[piece].color, row, col);
            }
            return pmoves;
        }
    } else {
        return [];
    }
}

// This Function provide possible moves for the piece to Move Bottom Right From
// users prespective
function moveDBR( piece, row, col ) {
    if ( col != 7 && row!= 0 ) {
        if ( Piece[piece]['type'] == 'PAWN' ) {
            [obb, nxt] = obs(Piece[piece].color, row-1, col+1);
            if ( obb && !nxt && Piece[piece].color == 'black' ) {
                return [new move(row-1, col+1)];
            } else {
                return [];
            }
        } else if ( Piece[piece]['type'] == 'KING' ) {
             if (obs(Piece[piece].color, row-1, col+1)[0] ) {
                 // var pmove =
                 return [new move(row-1, col+1)];
             } else {
                 return [];
             }
        } else {
            var pmoves = [];
            var obb, nxt;
            [obb, nxt] = obs(Piece[piece].color, --row, ++col);
            while ( obb ) {
                // console.log([obb, nxt]);
                pmoves.push(new move(row, col));
                if ( !nxt || col == 7 || row == 0 ) { break; }
                col++;
                row--;
                [obb, nxt] = obs(Piece[piece].color, row, col);
            }
            return pmoves;
        }
    } else {
        return [];
    }
}

// This is a fuction only to determine all the possible moves a knight has.
function moveKNT( piece, row, col ) {
    var hm = [[+2,+1],[+2,-1],[-2,+1],[-2,-1],[+1,+2],[+1,-2],[-1,+2],[-1,-2]];
    var amoves = [], pmoves = [];
    hm.forEach(function ( data ) {
        var newRow = row+data[0];
        var newCol = col+data[1];
        if ( newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7 ) {
            amoves.push(new move(newRow, newCol));
        }
    });
    // console.log(amoves);
    amoves.forEach(function ( move ) {
        if ( obs(Piece[piece].color, move.row, move.col)[0] ) {
            pmoves.push(move);
        }
    });
    return pmoves
}

// To determine if the king is check
function checked(color) {
    var boxID;
    var pmid = [];
    if ( color == 'white' ) {
        boxID = document.getElementsByClassName('wKing')[0].parentElement.id;
        blackPieces.forEach( function ( pid ) {
            piecePMove[pid].forEach(function (move) {
                pmid.push(move.id);
            });
        });
        if ( pmid.indexOf(boxID) >=0 ) {
            document.getElementById('clicked').innerHTML = '<strong>White King is in Check State</strong>';
        }
    } else if ( color == 'black' ) {
        boxID = document.getElementsByClassName('bKing')[0].parentElement.id;
        whitePieces.forEach( function ( pid ) {
            piecePMove[pid].forEach(function (move) {
                pmid.push(move.id);
            });
        });
        if ( pmid.indexOf(boxID) >=0 ) {
            document.getElementById('clicked').innerHTML = '<strong>Black King is in Check State</strong>';
        }
    }
}

//userClick fuction
function userClick( e ) {
    var sqID = e.parentElement.id;
    var npp = new piecePos(sqID);
    if ( count == 0 && npp.id != "BLK" ) {
        count++;
        parr = [];
        pp = new piecePos(sqID);
        // console.log(pp);
        piecePMove[pp.id].forEach(function ( move ) {
            parr.push(move.id);
        });
        parr.push(sqID);
//        document.getElementById('possible').innerHTML = parr;
        unSetEvent();
        parr.forEach(function (id) {
            document.getElementById(id).classList.add('movesPossible');
            document.getElementById(id).style.pointerEvents = 'auto';
        });
    } else if ( count == 1 && parr.indexOf(sqID) >=0 && sqID != pp.old ) {
        var prevBoard = board[pp.rowVal][pp.colVal];
        var nxtBoard = board[npp.rowVal][npp.colVal];
        board[pp.rowVal][pp.colVal] = 'BLK';
        board[npp.rowVal][npp.colVal] = pp.id;
        pMove();
        count--;
        parr.forEach(function (id) {
            document.getElementById(id).classList.remove('movesPossible');
            document.getElementById(id).style.pointerEvents = 'none';
        });
        if (( pp.color == 'white' && whiteCheckPath.length != 0 ) || ( pp.color == 'black' && blackCheckPath.length != 0 )) {
            board[pp.rowVal][pp.colVal] = prevBoard;
            board[npp.rowVal][npp.colVal] = nxtBoard;
            var inst2 = setTimeout(function () {
                pMove();
                unSetEvent();
                setEvent(pp.color);
            } , 100);
        } else {
            Piece[pp.id]['hasMove'] = true;
            newGame.myMove = pp.old+'-'+sqID;
            document.getElementById(pp.old).innerHTML = Piece['BLK']['img'];
            document.getElementById(sqID).innerHTML = Piece[pp.id]['img'];
            if ( blackCheckPath.length > 0 || whiteCheckPath.length > 0 ) {
                isCheckMate((blackCheckPath.length > 0)? 'black':'white');
            }
            newGame.run();
        }
    } else {
        parr.forEach(function (id) {
            document.getElementById(id).classList.remove('movesPossible');
        });
        count--;
        unSetEvent();
        setEvent(pp.color);
    }
}

// A functions that predicts and stores all the possible moves of all the pieces.
function pMove () {
    if (blackCheckPath.length > 0 ) {
        blackCheckPath.forEach( function (path) {
            document.getElementById(path[0]).classList.remove('check');
            document.getElementById(path[path.length-1]).classList.remove('check');
        });
    }
    if (whiteCheckPath.length > 0 ) {
        whiteCheckPath.forEach( function (path) {
            document.getElementById(path[0]).classList.remove('check');
            document.getElementById(path[path.length-1]).classList.remove('check');
        });
    }
    blackCheckPath = [];
    whiteCheckPath = [];
    var wKin; //g = document.getElementsByClassName('wKing')[0].parentElement.id;
    var bKing; // = document.getElementsByClassName('bKing')[0].parentElement.id;
    rows.forEach(function (row) {
        cols.forEach(function (col) {
            if (board[row][col] == 'WKG') {
                wKing = col+row;
            } else if (board[row][col] == 'BKG') {
                bKing = col+row;
            }
        });
    });
//    console.log(board);
//    console.log(bKing);
    rows.forEach(function (row) {
        cols.forEach(function (col) {
            var pid = board[row][col];
            if (!( pid == 'BLK' )) {
                var moves = [];
                var moveFunc = pieceMove[Piece[pid]['type']];
                var i = 0;
                moveFunc.forEach(function (f) {
                    var m = f(pid, rows.indexOf(row), cols.indexOf(col));
                    if ( Piece[pid]['type'] != 'KING' && m.length != 0 && (m[m.length-1].id == bKing && Piece[pid]['color'] != 'black' || m[m.length-1].id == wKing && Piece[pid]['color'] != 'white') ) {
                        // console.log(board);
                        var path = [col+row];
                        if ( m[m.length-1].id == bKing ) {
                            m.forEach(function (move) {
                                path.push(move.id);
                            });
//                            console.log(pid + " " + path);
                            blackCheckPath.push(path);
                        } else if ( m[m.length-1].id == wKing ) {
                            m.forEach(function (move) {
                                path.push(move.id);
                            });
                            whiteCheckPath.push(path);
                        }
//                        console.log(path);
                        document.getElementById(path[0]).classList.add('check');
                        document.getElementById(path[path.length-1]).classList.add('check');
                    }
                    moves = moves.concat(m);
                });
                piecePMove[pid] = [];
                piecePMove[pid] = piecePMove[pid].concat(moves);
            }
        });
    });
}

//
function setEvent( color ) {
    rows.forEach(function(r) {
        cols.forEach(function(c) {
            var id = c + "" + r;
            if ( board[r][c] != 'BLK' && Piece[board[r][c]]['color'] == color ) {
                // if ()
               document.getElementById(id).style.pointerEvents = 'auto'; document.getElementById(id).classList.add('mouseH');
            }
        });
    });
}

//
function unSetEvent() {
    rows.forEach(function(r) {
        cols.forEach(function(c) {
            var id = c + "" + r;
            if ( board[r][c] != 'BLK' ) {
                document.getElementById(id).classList.remove('mouseH');
            }
            document.getElementById(id).style.pointerEvents = 'none';
        });
    });
}

var PlayerOne = "";
var PlayerTwo = "";
var color = "";
function OnLineGame() {
    this.PlayerOne = "";
    this.color = "";
    this.PlayerTwo = "";
    this.hasStarted = false;
    this.myMove = "alpha";
    
    this.run = function () {
        if (!this.hasStarted) {
            PlayerOne = document.getElementById('p1').value;
            console.log(PlayerOne);
            document.getElementById('automatching').style.display = 'flex';
            automatch = setInterval(aTimer, 1000);
            var autoM = setTimeout(function () {
                document.location.reload(true);
            }, 15000);
            var reloadTimer = setTimeout(function() {
                document.getElementById('msg').innerHTML = "No Match Found! Reloading in 5 Seconds"
            }, 10000);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    clearTimeout(autoM);
                    resp = this.responseText.split('-');
                    PlayerTwo = resp[0];
                    color = resp[1].slice(0,-2);
                    if (color == 'black') {
                        var hoverPull = getComputedStyle(document.documentElement).getPropertyValue('--hoverPull');
                        var maxPull = getComputedStyle(document.documentElement).getPropertyValue('--maxPull')
                        document.documentElement.style.setProperty('--hoverPull', hoverPull*-1);
                        document.documentElement.style.setProperty('--maxPull', maxPull*-1);
                    } 
                    console.log(PlayerTwo);
//                    document.getElementById('script').innerHTML = resp;
                    document.getElementsByClassName('body')[0].style.display = 'none';
                    document.getElementsByClassName('chess')[0].classList.add((color=='white')? 'whiteTurn':'blackTurn');
                    document.getElementById('automatching').style.display = 'none';
                    initTimer("60:00");
                    if (color == 'white') {
                        document.getElementsByClassName('userName')[0].innerHTML = PlayerOne;
                        setEvent('white');
                    } else {
                        document.getElementsByClassName('userName')[0].innerHTML = PlayerTwo;
                        var xhttp2 = new XMLHttpRequest();
                        xhttp2.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                console.log(this.responseText);
                                var move = this.responseText.split('-');
                                console.log(move);
                                var m1 = move[0];
                                var m2 = move[1].slice(0, -2);
                                console.log(m2);
                                var pi = board[m1[1]][m1[0]];
                                document.getElementById(m1).innerHTML = Piece['BLK']['img'];
                                document.getElementById(m2).innerHTML = Piece[pi]['img'];
                                board[m1[1]][m1[0]] = 'BLK';
                                board[m2[1]][m2[0]] = pi;
                                pMove();
                                setEvent(color);
                                document.getElementsByClassName('userName')[0].innerHTML = PlayerOne;
                            }
                        };
                        console.log(this.myMove);
                        this.myMove = "no";
                        xhttp2.open("GET", "py/move.py?p1="+PlayerOne+"&p2="+PlayerTwo+"&move="+this.myMove, true);
                        xhttp2.send();
                    }
                }
            };
            xhttp.open("GET", "py/index.py?user="+PlayerOne, true);
            xhttp.send();
            this.hasStarted = true;
        } else {
            document.getElementsByClassName('userName')[0].innerHTML = PlayerTwo;
            var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    var move = this.responseText.split('-');
                    console.log(move);
                    var m1 = move[0];
                    var m2 = move[1].slice(0, -2);
                    console.log(m2);
                    var pi = board[m1[1]][m1[0]];
                    document.getElementById(m1).innerHTML = Piece['BLK']['img'];
                    document.getElementById(m2).innerHTML = Piece[pi]['img'];
                    board[m1[1]][m1[0]] = 'BLK';
                    board[m2[1]][m2[0]] = pi;
                    pMove();
                    if ( blackCheckPath.length > 0 || whiteCheckPath.length > 0 ) {
                        isCheckMate((blackCheckPath.length > 0)? 'black':'white');
                    }
                    setEvent(color);
                    document.getElementsByClassName('userName')[0].innerHTML = PlayerOne;
                }
            };
            xhttp2.open("GET", "py/move.py?p1="+PlayerOne+"&p2="+PlayerTwo+"&move="+this.myMove, true);
            xhttp2.send();
        }
    }
}


// Where it all begins
function Game() {
    this.turn = 'white';
    this.started = false;
    this.PlayerOne = ""
    this.PlayerTwo = ""
    this.myMove = "";
    
    this.black = function() {
        
        document.getElementById('p2Start').disabled = false;
        document.getElementById('black2PBtn').classList.add('btn-active');
        document.getElementById('white2PBtn').classList.remove('btn-active');
        this.PlayerTwo = document.getElementById('p2p1').value;
        document.getElementById('p2p1').disabled = true;
        this.PlayerOne = document.getElementById('p2p2').value;
        document.getElementById('p2p2').disabled = true;
    }
    
    this.white = function() {
        
        document.getElementById('p2Start').disabled = false;
        document.getElementById('black2PBtn').classList.remove('btn-active');
        document.getElementById('white2PBtn').classList.add('btn-active');
        this.PlayerOne = document.getElementById('p2p1').value;
        document.getElementById('p2p1').disabled = true;
        this.PlayerTwo = document.getElementById('p2p2').value;
        document.getElementById('p2p2').disabled = true;
    }
    
    this.run = function () {
        // console.log('inside  run function');
        // console.log(this.started);
        if ( !this.started ) {
            document.getElementsByClassName('body')[0].style.display = 'none';
            document.getElementsByClassName('chess')[0].classList.add('whiteTurn');
            setEvent('white');
            document.getElementsByClassName('userName')[0].innerHTML = this.PlayerOne;
            this.started = true;
            this.turn = 'black';
            initTimer("60:00");
        } else {
            // console.log('inside else block');
            unSetEvent();
            document.getElementsByClassName('userName')[0].innerHTML = (this.turn=='white')? this.PlayerOne:this.PlayerTwo;
            var hoverPull = getComputedStyle(document.documentElement).getPropertyValue('--hoverPull');
            var maxPull = getComputedStyle(document.documentElement).getPropertyValue('--maxPull')
            document.documentElement.style.setProperty('--hoverPull', hoverPull*-1);
            document.documentElement.style.setProperty('--maxPull', maxPull*-1);
            document.getElementsByClassName('chess')[0].classList.toggle('blackTurn');
            setEvent(this.turn);
//            initTimer("01:00");
            if ( this.turn == 'white' ) { this.turn = 'black'; } else { this.turn = 'white'; }
        }
    }
}
var min = 0, seconds = 0;
function aTimer () {
    var ms, ss;
    seconds++;
    if (seconds > 59) {
        min++;
        seconds = 0;
    }
    ms = (min<10)? "0"+min:min;
    ss = (seconds<10)? "0"+seconds:seconds;
    document.getElementById('atTimer').innerHTML = ms+":"+ss;
}

function isCheckMate (color) {
    var kpid = (color=='white')? 'WKG':'BKG';
    var fbid = (kpid=='WKG')? 'wKing':'bKing';
    var kbid = document.getElementsByClassName(fbid)[0].parentElement.id;
    var nPossible = [];
    var kingMoves = piecePMove[kpid];
    var pieces = (color=='black')? whitePieces:blackPieces;
    var fpieces = (color=='white')? whitePieces:blackPieces;
    var kMovesStr = []
    kingMoves.forEach(function (m) {
               kMovesStr.push(m.id);
           });
    console.log('Phase 1');
    kingMoves.forEach( function ( id ) {
       pieces.forEach( function ( bid ) {
           var moves = piecePMove[bid];
           var moveStr = [];
           moves.forEach(function (m) {
               moveStr.push(m.id);
           });
           moves.forEach( function (move) {
               if ( move.id == id.id && nPossible.indexOf(id.id) < 0 ){
                   nPossible.push(id.id);
               }
           });
       }); 
    });
//    console.log('KM: ' + kingMoves);
    var checkPath = (color=='black')? blackCheckPath:whiteCheckPath;
    if (kingMoves.length == nPossible.length) {
        var cMate = true;
        console.log('Phase 2');
        if (checkPath.length > 1 ) {
            console.log("Check Mate");
        } else {
            fpieces.forEach(function (pid) {
                var pmoves = [];
                piecePMove[pid].forEach(function (move) {
                    pmoves.push(move.id);
                });
                var inter = pmoves.filter(function(value) {
                    return (checkPath[0].indexOf(value) > -1);
                });
                console.log(pid + " " + inter);
                if ((inter.length > 0) && Piece[pid]['type']!='KING') {
                    console.log('Not CheckMate');
                    cMate = false;
                }
            });
        }
        if (cMate) {
            console.log("Check Mate");
            document.getElementById('checkMate').style.setProperty('top', '50%');
            document.getElementById('timer').style.display = 'none';
        }
    }
}

// Function Calls

setBoard();
pMove();
var newGame = new OnLineGame();
var automatch;
// setEvent();
//isCheckMate('white');
//isCheckMate('black');