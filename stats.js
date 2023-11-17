
let equipe = prompt("Quelle est le nom de l'équipe contre laquelle vous avez joué?");
let nomEquipe = document.getElementById('nomEquipe');
let nEquipe = document.getElementById('nEquipe');
nomEquipe.append(equipe);
nEquipe.innerHTML = equipe;

// Obtenir la date actuelle
let dateActuelle = new Date();
        
 // Formater la date
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);
document.getElementById('date').innerHTML = dateFormatee


// Joueur 1
//Tir
let _2PtsReussisJ1 = 0;
let _2PtsTentesj1 = 0;
//2 points
//2 points Reussi
document.getElementById('j1ajouter2PtsR').onclick = function () {
    _2PtsReussisJ1 += 1;
    _2PtsTentesj1 +=1;
   
    document.getElementById('j1-2PtsR').innerHTML = _2PtsReussisJ1;
    document.getElementById('j1-2PtsT').innerHTML = _2PtsTentesj1;
    calculerPointsJ1();
};

document.getElementById('j1enlever2PtsR').onclick = function () {
    _2PtsReussisJ1 -= 1;
    if (_2PtsReussisJ1 < 0) {
        _2PtsReussisJ1 = 0;
    }
    document.getElementById('j1-2PtsR').innerHTML = _2PtsReussisJ1;
    calculerPointsJ1();

};
//2 points Tente
document.getElementById('j1ajouter2PtsT').onclick = function () {
    _2PtsTentesj1 +=1;
    document.getElementById('j1-2PtsT').innerHTML = _2PtsTentesj1;
    calculerEfficaciteJ1();

};

document.getElementById('j1enlever2PtsT').onclick = function () {
    _2PtsTentesj1 -= 1;
    if (_2PtsTentesj1 < _2PtsReussisJ1) {
        _2PtsTentesj1 = _2PtsReussisJ1
    }
    document.getElementById('j1-2PtsT').innerHTML = _2PtsTentesj1;
    calculerEfficaciteJ1();

};
// 3points
let _3PtsReussisJ1 = 0;
let _3PtsTentesj1 = 0;
//3 points Reussi
document.getElementById('j1ajouter3PtsR').onclick = function () {
    _3PtsReussisJ1 += 1;
    _3PtsTentesj1 +=1;
    document.getElementById('j1-3PtsR').innerHTML = _3PtsReussisJ1;
    document.getElementById('j1-3PtsT').innerHTML = _3PtsTentesj1;
    calculerPointsJ1();

};

document.getElementById('j1enlever3PtsR').onclick = function () {
    _3PtsReussisJ1 -= 1;
    if (_3PtsReussisJ1 < 0) {
        _3PtsReussisJ1 = 0;
    }
    document.getElementById('j1-3PtsR').innerHTML = _3PtsReussisJ1;
    calculerPointsJ1();

};
//3 points Tente
document.getElementById('j1ajouter3PtsT').onclick = function () {
    _3PtsTentesj1 +=1;
    document.getElementById('j1-3PtsT').innerHTML = _3PtsTentesj1;
    calculerEfficaciteJ1();

};

document.getElementById('j1enlever3PtsT').onclick = function () {
    _3PtsTentesj1 -= 1;
    if (_3PtsTentesj1 < _3PtsReussisJ1) {
        _3PtsTentesj1 = _3PtsReussisJ1
    }
    document.getElementById('j1-3PtsT').innerHTML = _3PtsTentesj1;
    calculerEfficaciteJ1();

};

// free throw
let ftReussisJ1 = 0;
let ftTentesj1 = 0;
//free throw Reussi
document.getElementById('j1ajouterFTR').onclick = function () {
    ftReussisJ1 += 1;
    ftTentesj1 +=1;
    document.getElementById('j1FTR').innerHTML = ftReussisJ1;
    document.getElementById('j1FTT').innerHTML = ftTentesj1;
    calculerPointsJ1();

};

document.getElementById('j1enleverFTR').onclick = function () {
    ftReussisJ1 -= 1;
    document.getElementById('j1FTR').innerHTML = ftReussisJ1;
    calculerPointsJ1();

};
//free throw Tente
document.getElementById('j1ajouterFTT').onclick = function () {
    ftTentesj1 +=1;
    document.getElementById('j1FTT').innerHTML = ftTentesj1;
    calculerEfficaciteJ1();

};

document.getElementById('j1enleverFTT').onclick = function () {
    ftTentesj1 -= 1;
    if (ftTentesj1 < ftReussisJ1) {
        ftTentesj1 = ftReussisJ1
    }
    document.getElementById('j1FTT').innerHTML = ftTentesj1;
    calculerEfficaciteJ1();

};

function calculerPointsJ1() {
    let nbPointsJ1 = (_2PtsReussisJ1 * 2) + (_3PtsReussisJ1 * 3) + ftReussisJ1;
    document.getElementById('j1Pts').innerHTML = nbPointsJ1;
    calculerEfficaciteJ1();
}

//Rebond
let oRebJ1 = 0;
let dRebJ1 = 0;

//offensive rebound
document.getElementById('j1ajouterOREB').onclick = function () {
    oRebJ1 += 1;
    document.getElementById('j1OREB').innerHTML = oRebJ1;
    calculerRebondJ1();
    calculerEfficaciteJ1();

};

document.getElementById('j1enleverOREB').onclick = function () {
    oRebJ1 -= 1;
    if (oRebJ1 < 0) {
        oRebJ1 = 0;
    }
    document.getElementById('j1OREB').innerHTML = oRebJ1;
    calculerRebondJ1();
};
//defensive rebound
document.getElementById('j1ajouterDREB').onclick = function () {
    dRebJ1 +=1;
    document.getElementById('j1DREB').innerHTML = dRebJ1;
    calculerRebondJ1();
};

document.getElementById('j1enleverDREB').onclick = function () {
    dRebJ1 -= 1;
    if (dRebJ1 < 0) {
        dRebJ1 = 0;
    }
    document.getElementById('j1DREB').innerHTML = dRebJ1;
    calculerRebondJ1();
    
};

function calculerRebondJ1(){
    let tRebJ1 = oRebJ1 + dRebJ1;
    document.getElementById('j1TREB').innerHTML = tRebJ1;
    calculerEfficaciteJ1();
}
//ASSIST
let nbAss = 0;
document.getElementById('j1ajouterAss').onclick = function () {
    nbAss +=1;
    document.getElementById('j1Ass').innerHTML = nbAss;
    calculerEfficaciteJ1();
};

document.getElementById('j1enleverAss').onclick = function () {
    nbAss -= 1;
    if (nbAss < 0) {
        nbAss = 0;
    }
    document.getElementById('j1Ass').innerHTML = nbAss;
    calculerEfficaciteJ1();
};
//STEALS
let nbStl = 0;
document.getElementById('j1ajouterStl').onclick = function () {
    nbStl +=1;
    document.getElementById('j1Stl').innerHTML = nbStl;
    calculerEfficaciteJ1();
};

document.getElementById('j1enleverStl').onclick = function () {
    nbStl -= 1;
    if (nbStl < 0) {
        nbStl = 0;
    }
    document.getElementById('j1Stl').innerHTML = nbStl;
    calculerEfficaciteJ1();
};
//BLOCKS
let nbBlk = 0;
document.getElementById('j1ajouterBlk').onclick = function () {
    nbBlk +=1;
    document.getElementById('j1Blk').innerHTML = nbBlk;
    calculerEfficaciteJ1();
};

document.getElementById('j1enleverBlk').onclick = function () {
    nbBlk -= 1;
    if (nbBlk < 0) {
        nbBlk = 0;
    }
    document.getElementById('j1Blk').innerHTML = nbBlk;
    calculerEfficaciteJ1();
};
//TURNOVERS
let nbTo = 0;
document.getElementById('j1ajouterTo').onclick = function () {
    nbTo +=1;
    document.getElementById('j1To').innerHTML = nbTo;
    calculerEfficaciteJ1();
};

document.getElementById('j1enleverTo').onclick = function () {
    nbTo -= 1;
    if (nbTo < 0) {
        nbTo = 0;
    }
    document.getElementById('j1To').innerHTML = nbTo;
    calculerEfficaciteJ1();
};
//FOULS
let nbFls = 0;
document.getElementById('j1ajouterFls').onclick = function () {
    nbFls +=1;
    
    if (nbFls > 6) {
        document.getElementById('j1Fls').innerHTML = "Foul out";
        nbFls = 6;
    } else{
        document.getElementById('j1Fls').innerHTML = nbFls;
    }
    calculerEfficaciteJ1();
};

document.getElementById('j1enleverFls').onclick = function () {
    nbFls -= 1;
    if (nbFls < 0) {
        nbFls = 0;
    }
    document.getElementById('j1Fls').innerHTML = nbFls;
    calculerEfficaciteJ1();
};

function calculerEfficaciteJ1(){
    let pointTotalJ1 = (_2PtsReussisJ1 * 2) + (_3PtsReussisJ1 * 3) + ftReussisJ1;
    let totalRebJ1 = oRebJ1 + dRebJ1;
    let eff = pointTotalJ1 + totalRebJ1 + nbAss + nbStl + nbBlk + (_2PtsReussisJ1 - _2PtsTentesj1) + (_3PtsReussisJ1 - _3PtsTentesj1)
    + (ftReussisJ1 - ftTentesj1) - nbTo; 
    document.getElementById('j1Eff').innerHTML=eff;
    calculerTotaux();
}
// Joueur 2
//Tir
let _2PtsReussisJ2 = 0;
let _2PtsTentesj2 = 0;
//2 points
//2 points Reussi
document.getElementById('j2ajouter2PtsR').onclick = function () {
    _2PtsReussisJ2 += 1;
    _2PtsTentesj2 += 1;

    document.getElementById('j2-2PtsR').innerHTML = _2PtsReussisJ2;
    document.getElementById('j2-2PtsT').innerHTML = _2PtsTentesj2;
    calculerPointsJ2();
};

document.getElementById('j2enlever2PtsR').onclick = function () {
    _2PtsReussisJ2 -= 1;
    if (_2PtsReussisJ2 < 0) {
        _2PtsReussisJ2 = 0;
    }
    document.getElementById('j2-2PtsR').innerHTML = _2PtsReussisJ2;
    calculerPointsJ2();

};
//2 points Tente
document.getElementById('j2ajouter2PtsT').onclick = function () {
    _2PtsTentesj2 += 1;
    document.getElementById('j2-2PtsT').innerHTML = _2PtsTentesj2;
    calculerEfficaciteJ2();

};

document.getElementById('j2enlever2PtsT').onclick = function () {
    _2PtsTentesj2 -= 1;
    if (_2PtsTentesj2 < _2PtsReussisJ2) {
        _2PtsTentesj2 = _2PtsReussisJ2
    }
    document.getElementById('j2-2PtsT').innerHTML = _2PtsTentesj2;
    calculerEfficaciteJ2();

};
// 3points
let _3PtsReussisJ2 = 0;
let _3PtsTentesj2 = 0;
//3 points Reussi
document.getElementById('j2ajouter3PtsR').onclick = function () {
    _3PtsReussisJ2 += 1;
    _3PtsTentesj2 += 1;
    document.getElementById('j2-3PtsR').innerHTML = _3PtsReussisJ2;
    document.getElementById('j2-3PtsT').innerHTML = _3PtsTentesj2;
    calculerPointsJ2();

};

document.getElementById('j2enlever3PtsR').onclick = function () {
    _3PtsReussisJ2 -= 1;
    if (_3PtsReussisJ2 < 0) {
        _3PtsReussisJ2 = 0;
    }
    document.getElementById('j2-3PtsR').innerHTML = _3PtsReussisJ2;
    calculerPointsJ2();

};
//3 points Tente
document.getElementById('j2ajouter3PtsT').onclick = function () {
    _3PtsTentesj2 += 1;
    document.getElementById('j2-3PtsT').innerHTML = _3PtsTentesj2;
    calculerEfficaciteJ2();

};

document.getElementById('j2enlever3PtsT').onclick = function () {
    _3PtsTentesj2 -= 1;
    if (_3PtsTentesj2 < _3PtsReussisJ2) {
        _3PtsTentesj2 = _3PtsReussisJ2
    }
    document.getElementById('j2-3PtsT').innerHTML = _3PtsTentesj2;
    calculerEfficaciteJ2();

};

// free throw
let ftReussisJ2 = 0;
let ftTentesj2 = 0;
//free throw Reussi
document.getElementById('j2ajouterFTR').onclick = function () {
    ftReussisJ2 += 1;
    ftTentesj2 += 1;
    document.getElementById('j2FTR').innerHTML = ftReussisJ2;
    document.getElementById('j2FTT').innerHTML = ftTentesj2;
    calculerPointsJ2();

};

document.getElementById('j2enleverFTR').onclick = function () {
    ftReussisJ2 -= 1;
    document.getElementById('j2FTR').innerHTML = ftReussisJ2;
    calculerPointsJ2();

};
//free throw Tente
document.getElementById('j2ajouterFTT').onclick = function () {
    ftTentesj2 += 1;
    document.getElementById('j2FTT').innerHTML = ftTentesj2;
    calculerEfficaciteJ2();

};

document.getElementById('j2enleverFTT').onclick = function () {
    ftTentesj2 -= 1;
    if (ftTentesj2 < ftReussisJ2) {
        ftTentesj2 = ftReussisJ2
    }
    document.getElementById('j2FTT').innerHTML = ftTentesj2;
    calculerEfficaciteJ2();

};

function calculerPointsJ2() {
    let nbPointsJ2 = (_2PtsReussisJ2 * 2) + (_3PtsReussisJ2 * 3) + ftReussisJ2;
    document.getElementById('j2Pts').innerHTML = nbPointsJ2;
    calculerEfficaciteJ2();
}

//Rebond
let oRebJ2 = 0;
let dRebJ2 = 0;

//offensive rebound
document.getElementById('j2ajouterOREB').onclick = function () {
    oRebJ2 += 1;
    document.getElementById('j2OREB').innerHTML = oRebJ2;
    calculerRebondJ2();
    calculerEfficaciteJ2();

};

document.getElementById('j2enleverOREB').onclick = function () {
    oRebJ2 -= 1;
    if (oRebJ2 < 0) {
        oRebJ2 = 0;
    }
    document.getElementById('j2OREB').innerHTML = oRebJ2;
    calculerRebondJ2();
};
//defensive rebound
document.getElementById('j2ajouterDREB').onclick = function () {
    dRebJ2 += 1;
    document.getElementById('j2DREB').innerHTML = dRebJ2;
    calculerRebondJ2();
};

document.getElementById('j2enleverDREB').onclick = function () {
    dRebJ2 -= 1;
    if (dRebJ2 < 0) {
        dRebJ2 = 0;
    }
    document.getElementById('j2DREB').innerHTML = dRebJ2;
    calculerRebondJ2();

};

function calculerRebondJ2() {
    let tRebJ2 = oRebJ2 + dRebJ2;
    document.getElementById('j2TREB').innerHTML = tRebJ2;
    calculerEfficaciteJ2();
}
//ASSIST
let nbAssJ2 = 0;
document.getElementById('j2ajouterAss').onclick = function () {
    nbAssJ2 += 1;
    document.getElementById('j2Ass').innerHTML = nbAssJ2;
    calculerEfficaciteJ2();
};

document.getElementById('j2enleverAss').onclick = function () {
    nbAssJ2 -= 1;
    if (nbAssJ2 < 0) {
        nbAssJ2 = 0;
    }
    document.getElementById('j2Ass').innerHTML = nbAssJ2;
    calculerEfficaciteJ2();
};
//STEALS
let nbStlJ2 = 0;
document.getElementById('j2ajouterStl').onclick = function () {
    nbStlJ2 += 1;
    document.getElementById('j2Stl').innerHTML = nbStlJ2;
    calculerEfficaciteJ2();
};

document.getElementById('j2enleverStl').onclick = function () {
    nbStlJ2 -= 1;
    if (nbStlJ2 < 0) {
        nbStlJ2 = 0;
    }
    document.getElementById('j2Stl').innerHTML = nbStlJ2;
    calculerEfficaciteJ2();
};
//BLOCKS
let nbBlkJ2 = 0;
document.getElementById('j2ajouterBlk').onclick = function () {
    nbBlkJ2 += 1;
    document.getElementById('j2Blk').innerHTML = nbBlkJ2;
    calculerEfficaciteJ2();
};

document.getElementById('j2enleverBlk').onclick = function () {
    nbBlkJ2 -= 1;
    if (nbBlkJ2 < 0) {
        nbBlkJ2 = 0;
    }
    document.getElementById('j2Blk').innerHTML = nbBlkJ2;
    calculerEfficaciteJ2();
};
//TURNOVERS
let nbToJ2 = 0;
document.getElementById('j2ajouterTo').onclick = function () {
    nbToJ2 += 1;
    document.getElementById('j2To').innerHTML = nbToJ2;
    calculerEfficaciteJ2();
};

document.getElementById('j2enleverTo').onclick = function () {
    nbToJ2 -= 1;
    if (nbToJ2 < 0) {
        nbToJ2 = 0;
    }
    document.getElementById('j2To').innerHTML = nbToJ2;
    calculerEfficaciteJ2();
};
//FOULS
let nbFlsJ2 = 0;
document.getElementById('j2ajouterFls').onclick = function () {
    nbFlsJ2 += 1;

    if (nbFlsJ2 > 6) {
        document.getElementById('j2Fls').innerHTML = "Foul out";
        nbFlsJ2 = 6;
    } else {
        document.getElementById('j2Fls').innerHTML = nbFlsJ2;
    }
    calculerEfficaciteJ2();
};

document.getElementById('j2enleverFls').onclick = function () {
    nbFlsJ2 -= 1;
    if (nbFlsJ2 < 0) {
        nbFlsJ2 = 0;
    }
    document.getElementById('j2Fls').innerHTML = nbFlsJ2;
    calculerEfficaciteJ2();
};

function calculerEfficaciteJ2() {
    let pointTotalJ2 = (_2PtsReussisJ2 * 2) + (_3PtsReussisJ2 * 3) + ftReussisJ2;
    let totalRebJ2 = oRebJ2 + dRebJ2;
    let effJ2 = pointTotalJ2 + totalRebJ2 + nbAssJ2 + nbStlJ2 + nbBlkJ2 + (_2PtsReussisJ2 - _2PtsTentesj2) + (_3PtsReussisJ2 - _3PtsTentesj2)
        + (ftReussisJ2 - ftTentesj2) - nbToJ2;
    document.getElementById('j2Eff').innerHTML = effJ2;
    calculerTotaux();
}
// Joueur 3
//Tir
let _2PtsReussisJ3 = 0;
let _2PtsTentesj3 = 0;
//2 points
//2 points Reussi
document.getElementById('j3ajouter2PtsR').onclick = function () {
    _2PtsReussisJ3 += 1;
    _2PtsTentesj3 += 1;

    document.getElementById('j3-2PtsR').innerHTML = _2PtsReussisJ3;
    document.getElementById('j3-2PtsT').innerHTML = _2PtsTentesj3;
    calculerPointsJ3();
};

document.getElementById('j3enlever2PtsR').onclick = function () {
    _2PtsReussisJ3 -= 1;
    if (_2PtsReussisJ3 < 0) {
        _2PtsReussisJ3 = 0;
    }
    document.getElementById('j3-2PtsR').innerHTML = _2PtsReussisJ3;
    calculerPointsJ3();

};
//2 points Tente
document.getElementById('j3ajouter2PtsT').onclick = function () {
    _2PtsTentesj3 += 1;
    document.getElementById('j3-2PtsT').innerHTML = _2PtsTentesj3;
    calculerEfficaciteJ3();

};

document.getElementById('j3enlever2PtsT').onclick = function () {
    _2PtsTentesj3 -= 1;
    if (_2PtsTentesj3 < _2PtsReussisJ3) {
        _2PtsTentesj3 = _2PtsReussisJ3
    }
    document.getElementById('j3-2PtsT').innerHTML = _2PtsTentesj3;
    calculerEfficaciteJ3();

};
// 3points
let _3PtsReussisJ3 = 0;
let _3PtsTentesj3 = 0;
//3 points Reussi
document.getElementById('j3ajouter3PtsR').onclick = function () {
    _3PtsReussisJ3 += 1;
    _3PtsTentesj3 += 1;
    document.getElementById('j3-3PtsR').innerHTML = _3PtsReussisJ3;
    document.getElementById('j3-3PtsT').innerHTML = _3PtsTentesj3;
    calculerPointsJ3();

};

document.getElementById('j3enlever3PtsR').onclick = function () {
    _3PtsReussisJ3 -= 1;
    if (_3PtsReussisJ3 < 0) {
        _3PtsReussisJ3 = 0;
    }
    document.getElementById('j3-3PtsR').innerHTML = _3PtsReussisJ3;
    calculerPointsJ3();

};
//3 points Tente
document.getElementById('j3ajouter3PtsT').onclick = function () {
    _3PtsTentesj3 += 1;
    document.getElementById('j3-3PtsT').innerHTML = _3PtsTentesj3;
    calculerEfficaciteJ3();

};

document.getElementById('j3enlever3PtsT').onclick = function () {
    _3PtsTentesj3 -= 1;
    if (_3PtsTentesj3 < _3PtsReussisJ3) {
        _3PtsTentesj3 = _3PtsReussisJ3
    }
    document.getElementById('j3-3PtsT').innerHTML = _3PtsTentesj3;
    calculerEfficaciteJ3();

};

// free throw
let ftReussisJ3 = 0;
let ftTentesj3 = 0;
//free throw Reussi
document.getElementById('j3ajouterFTR').onclick = function () {
    ftReussisJ3 += 1;
    ftTentesj3 += 1;
    document.getElementById('j3FTR').innerHTML = ftReussisJ3;
    document.getElementById('j3FTT').innerHTML = ftTentesj3;
    calculerPointsJ3();

};

document.getElementById('j3enleverFTR').onclick = function () {
    ftReussisJ3 -= 1;
    document.getElementById('j3FTR').innerHTML = ftReussisJ3;
    calculerPointsJ3();

};
//free throw Tente
document.getElementById('j3ajouterFTT').onclick = function () {
    ftTentesj3 += 1;
    document.getElementById('j3FTT').innerHTML = ftTentesj3;
    calculerEfficaciteJ3();

};

document.getElementById('j3enleverFTT').onclick = function () {
    ftTentesj3 -= 1;
    if (ftTentesj3 < ftReussisJ3) {
        ftTentesj3 = ftReussisJ3
    }
    document.getElementById('j3FTT').innerHTML = ftTentesj3;
    calculerEfficaciteJ3();

};

function calculerPointsJ3() {
    let nbPointsJ3 = (_2PtsReussisJ3 * 2) + (_3PtsReussisJ3 * 3) + ftReussisJ3;
    document.getElementById('j3Pts').innerHTML = nbPointsJ3;
    calculerEfficaciteJ3();
}

//Rebond
let oRebJ3 = 0;
let dRebJ3 = 0;

//offensive rebound
document.getElementById('j3ajouterOREB').onclick = function () {
    oRebJ3 += 1;
    document.getElementById('j3OREB').innerHTML = oRebJ3;
    calculerRebondJ3();
    calculerEfficaciteJ3();

};

document.getElementById('j3enleverOREB').onclick = function () {
    oRebJ3 -= 1;
    if (oRebJ3 < 0) {
        oRebJ3 = 0;
    }
    document.getElementById('j3OREB').innerHTML = oRebJ3;
    calculerRebondJ3();
};
//defensive rebound
document.getElementById('j3ajouterDREB').onclick = function () {
    dRebJ3 += 1;
    document.getElementById('j3DREB').innerHTML = dRebJ3;
    calculerRebondJ3();
};

document.getElementById('j3enleverDREB').onclick = function () {
    dRebJ3 -= 1;
    if (dRebJ3 < 0) {
        dRebJ3 = 0;
    }
    document.getElementById('j3DREB').innerHTML = dRebJ3;
    calculerRebondJ3();

};

function calculerRebondJ3() {
    let tRebJ3 = oRebJ3 + dRebJ3;
    document.getElementById('j3TREB').innerHTML = tRebJ3;
    calculerEfficaciteJ3();
}
//ASSIST
let nbAssJ3 = 0;
document.getElementById('j3ajouterAss').onclick = function () {
    nbAssJ3 += 1;
    document.getElementById('j3Ass').innerHTML = nbAssJ3;
    calculerEfficaciteJ3();
};

document.getElementById('j3enleverAss').onclick = function () {
    nbAssJ3 -= 1;
    if (nbAssJ3 < 0) {
        nbAssJ3 = 0;
    }
    document.getElementById('j3Ass').innerHTML = nbAssJ3;
    calculerEfficaciteJ3();
};
//STEALS
let nbStlJ3 = 0;
document.getElementById('j3ajouterStl').onclick = function () {
    nbStlJ3 += 1;
    document.getElementById('j3Stl').innerHTML = nbStlJ3;
    calculerEfficaciteJ3();
};

document.getElementById('j3enleverStl').onclick = function () {
    nbStlJ3 -= 1;
    if (nbStlJ3 < 0) {
        nbStlJ3 = 0;
    }
    document.getElementById('j3Stl').innerHTML = nbStlJ3;
    calculerEfficaciteJ3();
};
//BLOCKS
let nbBlkJ3 = 0;
document.getElementById('j3ajouterBlk').onclick = function () {
    nbBlkJ3 += 1;
    document.getElementById('j3Blk').innerHTML = nbBlkJ3;
    calculerEfficaciteJ3();
};

document.getElementById('j3enleverBlk').onclick = function () {
    nbBlkJ3 -= 1;
    if (nbBlkJ3 < 0) {
        nbBlkJ3 = 0;
    }
    document.getElementById('j3Blk').innerHTML = nbBlkJ3;
    calculerEfficaciteJ3();
};
//TURNOVERS
let nbToJ3 = 0;
document.getElementById('j3ajouterTo').onclick = function () {
    nbToJ3 += 1;
    document.getElementById('j3To').innerHTML = nbToJ3;
    calculerEfficaciteJ3();
};

document.getElementById('j3enleverTo').onclick = function () {
    nbToJ3 -= 1;
    if (nbToJ3 < 0) {
        nbToJ3 = 0;
    }
    document.getElementById('j3To').innerHTML = nbToJ3;
    calculerEfficaciteJ3();
};
//FOULS
let nbFlsJ3 = 0;
document.getElementById('j3ajouterFls').onclick = function () {
    nbFlsJ3 += 1;

    if (nbFlsJ3 > 6) {
        document.getElementById('j3Fls').innerHTML = "Foul out";
        nbFlsJ3 = 6;
    } else {
        document.getElementById('j3Fls').innerHTML = nbFlsJ3;
    }
    calculerEfficaciteJ3();
};

document.getElementById('j3enleverFls').onclick = function () {
    nbFlsJ3 -= 1;
    if (nbFlsJ3 < 0) {
        nbFlsJ3 = 0;
    }
    document.getElementById('j3Fls').innerHTML = nbFlsJ3;
    calculerEfficaciteJ3();
};

function calculerEfficaciteJ3() {
    let pointTotalJ3 = (_2PtsReussisJ3 * 2) + (_3PtsReussisJ3 * 3) + ftReussisJ3;
    let totalRebJ3 = oRebJ3 + dRebJ3;
    let effJ3 = pointTotalJ3 + totalRebJ3 + nbAssJ3 + nbStlJ3 + nbBlkJ3 + (_2PtsReussisJ3 - _2PtsTentesj3) + (_3PtsReussisJ3 - _3PtsTentesj3)
        + (ftReussisJ3 - ftTentesj3) - nbToJ3;
    document.getElementById('j3Eff').innerHTML = effJ3;
    calculerTotaux();

}


// Joueur 4
//Tir
let _2PtsReussisJ4 = 0;
let _2PtsTentesj4 = 0;
//2 points
//2 points Reussi
document.getElementById('j4ajouter2PtsR').onclick = function () {
    _2PtsReussisJ4 += 1;
    _2PtsTentesj4 += 1;

    document.getElementById('j4-2PtsR').innerHTML = _2PtsReussisJ4;
    document.getElementById('j4-2PtsT').innerHTML = _2PtsTentesj4;
    calculerPointsJ4();
};

document.getElementById('j4enlever2PtsR').onclick = function () {
    _2PtsReussisJ4 -= 1;
    if (_2PtsReussisJ4 < 0) {
        _2PtsReussisJ4 = 0;
    }
    document.getElementById('j4-2PtsR').innerHTML = _2PtsReussisJ4;
    calculerPointsJ4();
};

//2 points Tente
document.getElementById('j4ajouter2PtsT').onclick = function () {
    _2PtsTentesj4 += 1;
    document.getElementById('j4-2PtsT').innerHTML = _2PtsTentesj4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enlever2PtsT').onclick = function () {
    _2PtsTentesj4 -= 1;
    if (_2PtsTentesj4 < _2PtsReussisJ4) {
        _2PtsTentesj4 = _2PtsReussisJ4;
    }
    document.getElementById('j4-2PtsT').innerHTML = _2PtsTentesj4;
    calculerEfficaciteJ4();
};

// 3points
let _3PtsReussisJ4 = 0;
let _3PtsTentesj4 = 0;
//3 points Reussi
document.getElementById('j4ajouter3PtsR').onclick = function () {
    _3PtsReussisJ4 += 1;
    _3PtsTentesj4 += 1;
    document.getElementById('j4-3PtsR').innerHTML = _3PtsReussisJ4;
    document.getElementById('j4-3PtsT').innerHTML = _3PtsTentesj4;
    calculerPointsJ4();
};

document.getElementById('j4enlever3PtsR').onclick = function () {
    _3PtsReussisJ4 -= 1;
    if (_3PtsReussisJ4 < 0) {
        _3PtsReussisJ4 = 0;
    }
    document.getElementById('j4-3PtsR').innerHTML = _3PtsReussisJ4;
    calculerPointsJ4();
};

//3 points Tente
document.getElementById('j4ajouter3PtsT').onclick = function () {
    _3PtsTentesj4 += 1;
    document.getElementById('j4-3PtsT').innerHTML = _3PtsTentesj4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enlever3PtsT').onclick = function () {
    _3PtsTentesj4 -= 1;
    if (_3PtsTentesj4 < _3PtsReussisJ4) {
        _3PtsTentesj4 = _3PtsReussisJ4;
    }
    document.getElementById('j4-3PtsT').innerHTML = _3PtsTentesj4;
    calculerEfficaciteJ4();
};

// free throw
let ftReussisJ4 = 0;
let ftTentesj4 = 0;
//free throw Reussi
document.getElementById('j4ajouterFTR').onclick = function () {
    ftReussisJ4 += 1;
    ftTentesj4 += 1;
    document.getElementById('j4FTR').innerHTML = ftReussisJ4;
    document.getElementById('j4FTT').innerHTML = ftTentesj4;
    calculerPointsJ4();
};

document.getElementById('j4enleverFTR').onclick = function () {
    ftReussisJ4 -= 1;
    document.getElementById('j4FTR').innerHTML = ftReussisJ4;
    calculerPointsJ4();
};

//free throw Tente
document.getElementById('j4ajouterFTT').onclick = function () {
    ftTentesj4 += 1;
    document.getElementById('j4FTT').innerHTML = ftTentesj4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverFTT').onclick = function () {
    ftTentesj4 -= 1;
    if (ftTentesj4 < ftReussisJ4) {
        ftTentesj4 = ftReussisJ4;
    }
    document.getElementById('j4FTT').innerHTML = ftTentesj4;
    calculerEfficaciteJ4();
};

function calculerPointsJ4() {
    let nbPointsJ4 = (_2PtsReussisJ4 * 2) + (_3PtsReussisJ4 * 3) + ftReussisJ4;
    document.getElementById('j4Pts').innerHTML = nbPointsJ4;
    calculerEfficaciteJ4();
}

//Rebond
let oRebJ4 = 0;
let dRebJ4 = 0;

//offensive rebound
document.getElementById('j4ajouterOREB').onclick = function () {
    oRebJ4 += 1;
    document.getElementById('j4OREB').innerHTML = oRebJ4;
    calculerRebondJ4();
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverOREB').onclick = function () {
    oRebJ4 -= 1;
    if (oRebJ4 < 0) {
        oRebJ4 = 0;
    }
    document.getElementById('j4OREB').innerHTML = oRebJ4;
    calculerRebondJ4();
};

//defensive rebound
document.getElementById('j4ajouterDREB').onclick = function () {
    dRebJ4 += 1;
    document.getElementById('j4DREB').innerHTML = dRebJ4;
    calculerRebondJ4();
};

document.getElementById('j4enleverDREB').onclick = function () {
    dRebJ4 -= 1;
    if (dRebJ4 < 0) {
        dRebJ4 = 0;
    }
    document.getElementById('j4DREB').innerHTML = dRebJ4;
    calculerRebondJ4();
};

function calculerRebondJ4() {
    let tRebJ4 = oRebJ4 + dRebJ4;
    document.getElementById('j4TREB').innerHTML = tRebJ4;
    calculerEfficaciteJ4();
}

//ASSIST
let nbAssJ4 = 0;
document.getElementById('j4ajouterAss').onclick = function () {
    nbAssJ4 += 1;
    document.getElementById('j4Ass').innerHTML = nbAssJ4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverAss').onclick = function () {
    nbAssJ4 -= 1;
    if (nbAssJ4 < 0) {
        nbAssJ4 = 0;
    }
    document.getElementById('j4Ass').innerHTML = nbAssJ4;
    calculerEfficaciteJ4();
};

//STEALS
let nbStlJ4 = 0;
document.getElementById('j4ajouterStl').onclick = function () {
    nbStlJ4 += 1;
    document.getElementById('j4Stl').innerHTML = nbStlJ4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverStl').onclick = function () {
    nbStlJ4 -= 1;
    if (nbStlJ4 < 0) {
        nbStlJ4 = 0;
    }
    document.getElementById('j4Stl').innerHTML = nbStlJ4;
    calculerEfficaciteJ4();
};

//BLOCKS
let nbBlkJ4 = 0;
document.getElementById('j4ajouterBlk').onclick = function () {
    nbBlkJ4 += 1;
    document.getElementById('j4Blk').innerHTML = nbBlkJ4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverBlk').onclick = function () {
    nbBlkJ4 -= 1;
    if (nbBlkJ4 < 0) {
        nbBlkJ4 = 0;
    }
    document.getElementById('j4Blk').innerHTML = nbBlkJ4;
    calculerEfficaciteJ4();
};

//TURNOVERS
let nbToJ4 = 0;
document.getElementById('j4ajouterTo').onclick = function () {
    nbToJ4 += 1;
    document.getElementById('j4To').innerHTML = nbToJ4;
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverTo').onclick = function () {
    nbToJ4 -= 1;
    if (nbToJ4 < 0) {
        nbToJ4 = 0;
    }
    document.getElementById('j4To').innerHTML = nbToJ4;
    calculerEfficaciteJ4();
};

//FOULS
let nbFlsJ4 = 0;
document.getElementById('j4ajouterFls').onclick = function () {
    nbFlsJ4 += 1;

    if (nbFlsJ4 > 6) {
        document.getElementById('j4Fls').innerHTML = "Foul out";
        nbFlsJ4 = 6;
    } else {
        document.getElementById('j4Fls').innerHTML = nbFlsJ4;
    }
    calculerEfficaciteJ4();
};

document.getElementById('j4enleverFls').onclick = function () {
    nbFlsJ4 -= 1;
    if (nbFlsJ4 < 0) {
        nbFlsJ4 = 0;
    }
    document.getElementById('j4Fls').innerHTML = nbFlsJ4;
    calculerEfficaciteJ4();
};

function calculerEfficaciteJ4() {
    let pointTotalJ4 = (_2PtsReussisJ4 * 2) + (_3PtsReussisJ4 * 3) + ftReussisJ4;
    let totalRebJ4 = oRebJ4 + dRebJ4;
    let effJ4 = pointTotalJ4 + totalRebJ4 + nbAssJ4 + nbStlJ4 + nbBlkJ4 + (_2PtsReussisJ4 - _2PtsTentesj4) + (_3PtsReussisJ4 - _3PtsTentesj4)
        + (ftReussisJ4 - ftTentesj4) - nbToJ4;
    document.getElementById('j4Eff').innerHTML = effJ4;
    calculerTotaux();

}
// Joueur 5
//Tir
let _2PtsReussisj5 = 0;
let _2PtsTentesj5 = 0;
//2 points
//2 points Reussi
document.getElementById('j5ajouter2PtsR').onclick = function () {
    _2PtsReussisj5 += 1;
    _2PtsTentesj5 += 1;

    document.getElementById('j5-2PtsR').innerHTML = _2PtsReussisj5;
    document.getElementById('j5-2PtsT').innerHTML = _2PtsTentesj5;
    calculerPointsj5();
};

document.getElementById('j5enlever2PtsR').onclick = function () {
    _2PtsReussisj5 -= 1;
    if (_2PtsReussisj5 < 0) {
        _2PtsReussisj5 = 0;
    }
    document.getElementById('j5-2PtsR').innerHTML = _2PtsReussisj5;
    calculerPointsj5();
};

//2 points Tente
document.getElementById('j5ajouter2PtsT').onclick = function () {
    _2PtsTentesj5 += 1;
    document.getElementById('j5-2PtsT').innerHTML = _2PtsTentesj5;
    calculerEfficacitej5();
};

document.getElementById('j5enlever2PtsT').onclick = function () {
    _2PtsTentesj5 -= 1;
    if (_2PtsTentesj5 < _2PtsReussisj5) {
        _2PtsTentesj5 = _2PtsReussisj5;
    }
    document.getElementById('j5-2PtsT').innerHTML = _2PtsTentesj5;
    calculerEfficacitej5();
};

// 3points
let _3PtsReussisj5 = 0;
let _3PtsTentesj5 = 0;
//3 points Reussi
document.getElementById('j5ajouter3PtsR').onclick = function () {
    _3PtsReussisj5 += 1;
    _3PtsTentesj5 += 1;
    document.getElementById('j5-3PtsR').innerHTML = _3PtsReussisj5;
    document.getElementById('j5-3PtsT').innerHTML = _3PtsTentesj5;
    calculerPointsj5();
};

document.getElementById('j5enlever3PtsR').onclick = function () {
    _3PtsReussisj5 -= 1;
    if (_3PtsReussisj5 < 0) {
        _3PtsReussisj5 = 0;
    }
    document.getElementById('j5-3PtsR').innerHTML = _3PtsReussisj5;
    calculerPointsj5();
};

//3 points Tente
document.getElementById('j5ajouter3PtsT').onclick = function () {
    _3PtsTentesj5 += 1;
    document.getElementById('j5-3PtsT').innerHTML = _3PtsTentesj5;
    calculerEfficacitej5();
};

document.getElementById('j5enlever3PtsT').onclick = function () {
    _3PtsTentesj5 -= 1;
    if (_3PtsTentesj5 < _3PtsReussisj5) {
        _3PtsTentesj5 = _3PtsReussisj5;
    }
    document.getElementById('j5-3PtsT').innerHTML = _3PtsTentesj5;
    calculerEfficacitej5();
};

// free throw
let ftReussisj5 = 0;
let ftTentesj5 = 0;
//free throw Reussi
document.getElementById('j5ajouterFTR').onclick = function () {
    ftReussisj5 += 1;
    ftTentesj5 += 1;
    document.getElementById('j5FTR').innerHTML = ftReussisj5;
    document.getElementById('j5FTT').innerHTML = ftTentesj5;
    calculerPointsj5();
};

document.getElementById('j5enleverFTR').onclick = function () {
    ftReussisj5 -= 1;
    document.getElementById('j5FTR').innerHTML = ftReussisj5;
    calculerPointsj5();
};

//free throw Tente
document.getElementById('j5ajouterFTT').onclick = function () {
    ftTentesj5 += 1;
    document.getElementById('j5FTT').innerHTML = ftTentesj5;
    calculerEfficacitej5();
};

document.getElementById('j5enleverFTT').onclick = function () {
    ftTentesj5 -= 1;
    if (ftTentesj5 < ftReussisj5) {
        ftTentesj5 = ftReussisj5;
    }
    document.getElementById('j5FTT').innerHTML = ftTentesj5;
    calculerEfficacitej5();
};

function calculerPointsj5() {
    let nbPointsj5 = (_2PtsReussisj5 * 2) + (_3PtsReussisj5 * 3) + ftReussisj5;
    document.getElementById('j5Pts').innerHTML = nbPointsj5;
    calculerEfficacitej5();
}

//Rebond
let oRebj5 = 0;
let dRebj5 = 0;

//offensive rebound
document.getElementById('j5ajouterOREB').onclick = function () {
    oRebj5 += 1;
    document.getElementById('j5OREB').innerHTML = oRebj5;
    calculerRebondj5();
    calculerEfficacitej5();
};

document.getElementById('j5enleverOREB').onclick = function () {
    oRebj5 -= 1;
    if (oRebj5 < 0) {
        oRebj5 = 0;
    }
    document.getElementById('j5OREB').innerHTML = oRebj5;
    calculerRebondj5();
};

//defensive rebound
document.getElementById('j5ajouterDREB').onclick = function () {
    dRebj5 += 1;
    document.getElementById('j5DREB').innerHTML = dRebj5;
    calculerRebondj5();
};

document.getElementById('j5enleverDREB').onclick = function () {
    dRebj5 -= 1;
    if (dRebj5 < 0) {
        dRebj5 = 0;
    }
    document.getElementById('j5DREB').innerHTML = dRebj5;
    calculerRebondj5();
};

function calculerRebondj5() {
    let tRebj5 = oRebj5 + dRebj5;
    document.getElementById('j5TREB').innerHTML = tRebj5;
    calculerEfficacitej5();
}

//ASSIST
let nbAssj5 = 0;
document.getElementById('j5ajouterAss').onclick = function () {
    nbAssj5 += 1;
    document.getElementById('j5Ass').innerHTML = nbAssj5;
    calculerEfficacitej5();
};

document.getElementById('j5enleverAss').onclick = function () {
    nbAssj5 -= 1;
    if (nbAssj5 < 0) {
        nbAssj5 = 0;
    }
    document.getElementById('j5Ass').innerHTML = nbAssj5;
    calculerEfficacitej5();
};

//STEALS
let nbStlj5 = 0;
document.getElementById('j5ajouterStl').onclick = function () {
    nbStlj5 += 1;
    document.getElementById('j5Stl').innerHTML = nbStlj5;
    calculerEfficacitej5();
};

document.getElementById('j5enleverStl').onclick = function () {
    nbStlj5 -= 1;
    if (nbStlj5 < 0) {
        nbStlj5 = 0;
    }
    document.getElementById('j5Stl').innerHTML = nbStlj5;
    calculerEfficacitej5();
};

//BLOCKS
let nbBlkj5 = 0;
document.getElementById('j5ajouterBlk').onclick = function () {
    nbBlkj5 += 1;
    document.getElementById('j5Blk').innerHTML = nbBlkj5;
    calculerEfficacitej5();
};

document.getElementById('j5enleverBlk').onclick = function () {
    nbBlkj5 -= 1;
    if (nbBlkj5 < 0) {
        nbBlkj5 = 0;
    }
    document.getElementById('j5Blk').innerHTML = nbBlkj5;
    calculerEfficacitej5();
};

//TURNOVERS
let nbToj5 = 0;
document.getElementById('j5ajouterTo').onclick = function () {
    nbToj5 += 1;
    document.getElementById('j5To').innerHTML = nbToj5;
    calculerEfficacitej5();
};

document.getElementById('j5enleverTo').onclick = function () {
    nbToj5 -= 1;
    if (nbToj5 < 0) {
        nbToj5 = 0;
    }
    document.getElementById('j5To').innerHTML = nbToj5;
    calculerEfficacitej5();
};

//FOULS
let nbFlsj5 = 0;
document.getElementById('j5ajouterFls').onclick = function () {
    nbFlsj5 += 1;

    if (nbFlsj5 > 6) {
        document.getElementById('j5Fls').innerHTML = "Foul out";
        nbFlsj5 = 6;
    } else {
        document.getElementById('j5Fls').innerHTML = nbFlsj5;
    }
    calculerEfficacitej5();
};

document.getElementById('j5enleverFls').onclick = function () {
    nbFlsj5 -= 1;
    if (nbFlsj5 < 0) {
        nbFlsj5 = 0;
    }
    document.getElementById('j5Fls').innerHTML = nbFlsj5;
    calculerEfficacitej5();
};

function calculerEfficacitej5() {
    let pointTotalj5 = (_2PtsReussisj5 * 2) + (_3PtsReussisj5 * 3) + ftReussisj5;
    let totalRebj5 = oRebj5 + dRebj5;
    let effj5 = pointTotalj5 + totalRebj5 + nbAssj5 + nbStlj5 + nbBlkj5 + (_2PtsReussisj5 - _2PtsTentesj5) + (_3PtsReussisj5 - _3PtsTentesj5)
        + (ftReussisj5 - ftTentesj5) - nbToj5;
    document.getElementById('j5Eff').innerHTML = effj5;
    calculerTotaux();

}
// Joueur 6
//Tir
let _2PtsReussisj6 = 0;
let _2PtsTentesj6 = 0;
//2 points
//2 points Reussi
document.getElementById('j6ajouter2PtsR').onclick = function () {
    _2PtsReussisj6 += 1;
    _2PtsTentesj6 += 1;

    document.getElementById('j6-2PtsR').innerHTML = _2PtsReussisj6;
    document.getElementById('j6-2PtsT').innerHTML = _2PtsTentesj6;
    calculerPointsj6();
};

document.getElementById('j6enlever2PtsR').onclick = function () {
    _2PtsReussisj6 -= 1;
    if (_2PtsReussisj6 < 0) {
        _2PtsReussisj6 = 0;
    }
    document.getElementById('j6-2PtsR').innerHTML = _2PtsReussisj6;
    calculerPointsj6();
};

//2 points Tente
document.getElementById('j6ajouter2PtsT').onclick = function () {
    _2PtsTentesj6 += 1;
    document.getElementById('j6-2PtsT').innerHTML = _2PtsTentesj6;
    calculerEfficacitej6();
};

document.getElementById('j6enlever2PtsT').onclick = function () {
    _2PtsTentesj6 -= 1;
    if (_2PtsTentesj6 < _2PtsReussisj6) {
        _2PtsTentesj6 = _2PtsReussisj6;
    }
    document.getElementById('j6-2PtsT').innerHTML = _2PtsTentesj6;
    calculerEfficacitej6();
};

// 3points
let _3PtsReussisj6 = 0;
let _3PtsTentesj6 = 0;
//3 points Reussi
document.getElementById('j6ajouter3PtsR').onclick = function () {
    _3PtsReussisj6 += 1;
    _3PtsTentesj6 += 1;
    document.getElementById('j6-3PtsR').innerHTML = _3PtsReussisj6;
    document.getElementById('j6-3PtsT').innerHTML = _3PtsTentesj6;
    calculerPointsj6();
};

document.getElementById('j6enlever3PtsR').onclick = function () {
    _3PtsReussisj6 -= 1;
    if (_3PtsReussisj6 < 0) {
        _3PtsReussisj6 = 0;
    }
    document.getElementById('j6-3PtsR').innerHTML = _3PtsReussisj6;
    calculerPointsj6();
};

//3 points Tente
document.getElementById('j6ajouter3PtsT').onclick = function () {
    _3PtsTentesj6 += 1;
    document.getElementById('j6-3PtsT').innerHTML = _3PtsTentesj6;
    calculerEfficacitej6();
};

document.getElementById('j6enlever3PtsT').onclick = function () {
    _3PtsTentesj6 -= 1;
    if (_3PtsTentesj6 < _3PtsReussisj6) {
        _3PtsTentesj6 = _3PtsReussisj6;
    }
    document.getElementById('j6-3PtsT').innerHTML = _3PtsTentesj6;
    calculerEfficacitej6();
};

// free throw
let ftReussisj6 = 0;
let ftTentesj6 = 0;
//free throw Reussi
document.getElementById('j6ajouterFTR').onclick = function () {
    ftReussisj6 += 1;
    ftTentesj6 += 1;
    document.getElementById('j6FTR').innerHTML = ftReussisj6;
    document.getElementById('j6FTT').innerHTML = ftTentesj6;
    calculerPointsj6();
};

document.getElementById('j6enleverFTR').onclick = function () {
    ftReussisj6 -= 1;
    document.getElementById('j6FTR').innerHTML = ftReussisj6;
    calculerPointsj6();
};

//free throw Tente
document.getElementById('j6ajouterFTT').onclick = function () {
    ftTentesj6 += 1;
    document.getElementById('j6FTT').innerHTML = ftTentesj6;
    calculerEfficacitej6();
};

document.getElementById('j6enleverFTT').onclick = function () {
    ftTentesj6 -= 1;
    if (ftTentesj6 < ftReussisj6) {
        ftTentesj6 = ftReussisj6;
    }
    document.getElementById('j6FTT').innerHTML = ftTentesj6;
    calculerEfficacitej6();
};

function calculerPointsj6() {
    let nbPointsj6 = (_2PtsReussisj6 * 2) + (_3PtsReussisj6 * 3) + ftReussisj6;
    document.getElementById('j6Pts').innerHTML = nbPointsj6;
    calculerEfficacitej6();
}

//Rebond
let oRebj6 = 0;
let dRebj6 = 0;

//offensive rebound
document.getElementById('j6ajouterOREB').onclick = function () {
    oRebj6 += 1;
    document.getElementById('j6OREB').innerHTML = oRebj6;
    calculerRebondj6();
    calculerEfficacitej6();
};

document.getElementById('j6enleverOREB').onclick = function () {
    oRebj6 -= 1;
    if (oRebj6 < 0) {
        oRebj6 = 0;
    }
    document.getElementById('j6OREB').innerHTML = oRebj6;
    calculerRebondj6();
};

//defensive rebound
document.getElementById('j6ajouterDREB').onclick = function () {
    dRebj6 += 1;
    document.getElementById('j6DREB').innerHTML = dRebj6;
    calculerRebondj6();
};

document.getElementById('j6enleverDREB').onclick = function () {
    dRebj6 -= 1;
    if (dRebj6 < 0) {
        dRebj6 = 0;
    }
    document.getElementById('j6DREB').innerHTML = dRebj6;
    calculerRebondj6();
};

function calculerRebondj6() {
    let tRebj6 = oRebj6 + dRebj6;
    document.getElementById('j6TREB').innerHTML = tRebj6;
    calculerEfficacitej6();
}

//ASSIST
let nbAssj6 = 0;
document.getElementById('j6ajouterAss').onclick = function () {
    nbAssj6 += 1;
    document.getElementById('j6Ass').innerHTML = nbAssj6;
    calculerEfficacitej6();
};

document.getElementById('j6enleverAss').onclick = function () {
    nbAssj6 -= 1;
    if (nbAssj6 < 0) {
        nbAssj6 = 0;
    }
    document.getElementById('j6Ass').innerHTML = nbAssj6;
    calculerEfficacitej6();
};

//STEALS
let nbStlj6 = 0;
document.getElementById('j6ajouterStl').onclick = function () {
    nbStlj6 += 1;
    document.getElementById('j6Stl').innerHTML = nbStlj6;
    calculerEfficacitej6();
};

document.getElementById('j6enleverStl').onclick = function () {
    nbStlj6 -= 1;
    if (nbStlj6 < 0) {
        nbStlj6 = 0;
    }
    document.getElementById('j6Stl').innerHTML = nbStlj6;
    calculerEfficacitej6();
};

//BLOCKS
let nbBlkj6 = 0;
document.getElementById('j6ajouterBlk').onclick = function () {
    nbBlkj6 += 1;
    document.getElementById('j6Blk').innerHTML = nbBlkj6;
    calculerEfficacitej6();
};

document.getElementById('j6enleverBlk').onclick = function () {
    nbBlkj6 -= 1;
    if (nbBlkj6 < 0) {
        nbBlkj6 = 0;
    }
    document.getElementById('j6Blk').innerHTML = nbBlkj6;
    calculerEfficacitej6();
};

//TURNOVERS
let nbToj6 = 0;
document.getElementById('j6ajouterTo').onclick = function () {
    nbToj6 += 1;
    document.getElementById('j6To').innerHTML = nbToj6;
    calculerEfficacitej6();
};

document.getElementById('j6enleverTo').onclick = function () {
    nbToj6 -= 1;
    if (nbToj6 < 0) {
        nbToj6 = 0;
    }
    document.getElementById('j6To').innerHTML = nbToj6;
    calculerEfficacitej6();
};

//FOULS
let nbFlsj6 = 0;
document.getElementById('j6ajouterFls').onclick = function () {
    nbFlsj6 += 1;

    if (nbFlsj6 > 6) {
        document.getElementById('j6Fls').innerHTML = "Foul out";
        nbFlsj6 = 6;
    } else {
        document.getElementById('j6Fls').innerHTML = nbFlsj6;
    }
    calculerEfficacitej6();
};

document.getElementById('j6enleverFls').onclick = function () {
    nbFlsj6 -= 1;
    if (nbFlsj6 < 0) {
        nbFlsj6 = 0;
    }
    document.getElementById('j6Fls').innerHTML = nbFlsj6;
    calculerEfficacitej6();
};

function calculerEfficacitej6() {
    let pointTotalj6 = (_2PtsReussisj6 * 2) + (_3PtsReussisj6 * 3) + ftReussisj6;
    let totalRebj6 = oRebj6 + dRebj6;
    let effj6 = pointTotalj6 + totalRebj6 + nbAssj6 + nbStlj6 + nbBlkj6 + (_2PtsReussisj6 - _2PtsTentesj6) + (_3PtsReussisj6 - _3PtsTentesj6)
        + (ftReussisj6 - ftTentesj6) - nbToj6;
    document.getElementById('j6Eff').innerHTML = effj6;
    calculerTotaux();

}
// Joueur 7
//Tir
let _2PtsReussisj7 = 0;
let _2PtsTentesj7 = 0;
//2 points
//2 points Reussi
document.getElementById('j7ajouter2PtsR').onclick = function () {
    _2PtsReussisj7 += 1;
    _2PtsTentesj7 += 1;

    document.getElementById('j7-2PtsR').innerHTML = _2PtsReussisj7;
    document.getElementById('j7-2PtsT').innerHTML = _2PtsTentesj7;
    calculerPointsj7();
};

document.getElementById('j7enlever2PtsR').onclick = function () {
    _2PtsReussisj7 -= 1;
    if (_2PtsReussisj7 < 0) {
        _2PtsReussisj7 = 0;
    }
    document.getElementById('j7-2PtsR').innerHTML = _2PtsReussisj7;
    calculerPointsj7();
};

//2 points Tente
document.getElementById('j7ajouter2PtsT').onclick = function () {
    _2PtsTentesj7 += 1;
    document.getElementById('j7-2PtsT').innerHTML = _2PtsTentesj7;
    calculerEfficacitej7();
};

document.getElementById('j7enlever2PtsT').onclick = function () {
    _2PtsTentesj7 -= 1;
    if (_2PtsTentesj7 < _2PtsReussisj7) {
        _2PtsTentesj7 = _2PtsReussisj7;
    }
    document.getElementById('j7-2PtsT').innerHTML = _2PtsTentesj7;
    calculerEfficacitej7();
};

// 3points
let _3PtsReussisj7 = 0;
let _3PtsTentesj7 = 0;
//3 points Reussi
document.getElementById('j7ajouter3PtsR').onclick = function () {
    _3PtsReussisj7 += 1;
    _3PtsTentesj7 += 1;
    document.getElementById('j7-3PtsR').innerHTML = _3PtsReussisj7;
    document.getElementById('j7-3PtsT').innerHTML = _3PtsTentesj7;
    calculerPointsj7();
};

document.getElementById('j7enlever3PtsR').onclick = function () {
    _3PtsReussisj7 -= 1;
    if (_3PtsReussisj7 < 0) {
        _3PtsReussisj7 = 0;
    }
    document.getElementById('j7-3PtsR').innerHTML = _3PtsReussisj7;
    calculerPointsj7();
};

//3 points Tente
document.getElementById('j7ajouter3PtsT').onclick = function () {
    _3PtsTentesj7 += 1;
    document.getElementById('j7-3PtsT').innerHTML = _3PtsTentesj7;
    calculerEfficacitej7();
};

document.getElementById('j7enlever3PtsT').onclick = function () {
    _3PtsTentesj7 -= 1;
    if (_3PtsTentesj7 < _3PtsReussisj7) {
        _3PtsTentesj7 = _3PtsReussisj7;
    }
    document.getElementById('j7-3PtsT').innerHTML = _3PtsTentesj7;
    calculerEfficacitej7();
};

// free throw
let ftReussisj7 = 0;
let ftTentesj7 = 0;
//free throw Reussi
document.getElementById('j7ajouterFTR').onclick = function () {
    ftReussisj7 += 1;
    ftTentesj7 += 1;
    document.getElementById('j7FTR').innerHTML = ftReussisj7;
    document.getElementById('j7FTT').innerHTML = ftTentesj7;
    calculerPointsj7();
};

document.getElementById('j7enleverFTR').onclick = function () {
    ftReussisj7 -= 1;
    document.getElementById('j7FTR').innerHTML = ftReussisj7;
    calculerPointsj7();
};

//free throw Tente
document.getElementById('j7ajouterFTT').onclick = function () {
    ftTentesj7 += 1;
    document.getElementById('j7FTT').innerHTML = ftTentesj7;
    calculerEfficacitej7();
};

document.getElementById('j7enleverFTT').onclick = function () {
    ftTentesj7 -= 1;
    if (ftTentesj7 < ftReussisj7) {
        ftTentesj7 = ftReussisj7;
    }
    document.getElementById('j7FTT').innerHTML = ftTentesj7;
    calculerEfficacitej7();
};

function calculerPointsj7() {
    let nbPointsj7 = (_2PtsReussisj7 * 2) + (_3PtsReussisj7 * 3) + ftReussisj7;
    document.getElementById('j7Pts').innerHTML = nbPointsj7;
    calculerEfficacitej7();
}

//Rebond
let oRebj7 = 0;
let dRebj7 = 0;

//offensive rebound
document.getElementById('j7ajouterOREB').onclick = function () {
    oRebj7 += 1;
    document.getElementById('j7OREB').innerHTML = oRebj7;
    calculerRebondj7();
    calculerEfficacitej7();
};

document.getElementById('j7enleverOREB').onclick = function () {
    oRebj7 -= 1;
    if (oRebj7 < 0) {
        oRebj7 = 0;
    }
    document.getElementById('j7OREB').innerHTML = oRebj7;
    calculerRebondj7();
};

//defensive rebound
document.getElementById('j7ajouterDREB').onclick = function () {
    dRebj7 += 1;
    document.getElementById('j7DREB').innerHTML = dRebj7;
    calculerRebondj7();
};

document.getElementById('j7enleverDREB').onclick = function () {
    dRebj7 -= 1;
    if (dRebj7 < 0) {
        dRebj7 = 0;
    }
    document.getElementById('j7DREB').innerHTML = dRebj7;
    calculerRebondj7();
};

function calculerRebondj7() {
    let tRebj7 = oRebj7 + dRebj7;
    document.getElementById('j7TREB').innerHTML = tRebj7;
    calculerEfficacitej7();
}

//ASSIST
let nbAssj7 = 0;
document.getElementById('j7ajouterAss').onclick = function () {
    nbAssj7 += 1;
    document.getElementById('j7Ass').innerHTML = nbAssj7;
    calculerEfficacitej7();
};

document.getElementById('j7enleverAss').onclick = function () {
    nbAssj7 -= 1;
    if (nbAssj7 < 0) {
        nbAssj7 = 0;
    }
    document.getElementById('j7Ass').innerHTML = nbAssj7;
    calculerEfficacitej7();
};

//STEALS
let nbStlj7 = 0;
document.getElementById('j7ajouterStl').onclick = function () {
    nbStlj7 += 1;
    document.getElementById('j7Stl').innerHTML = nbStlj7;
    calculerEfficacitej7();
};

document.getElementById('j7enleverStl').onclick = function () {
    nbStlj7 -= 1;
    if (nbStlj7 < 0) {
        nbStlj7 = 0;
    }
    document.getElementById('j7Stl').innerHTML = nbStlj7;
    calculerEfficacitej7();
};

//BLOCKS
let nbBlkj7 = 0;
document.getElementById('j7ajouterBlk').onclick = function () {
    nbBlkj7 += 1;
    document.getElementById('j7Blk').innerHTML = nbBlkj7;
    calculerEfficacitej7();
};

document.getElementById('j7enleverBlk').onclick = function () {
    nbBlkj7 -= 1;
    if (nbBlkj7 < 0) {
        nbBlkj7 = 0;
    }
    document.getElementById('j7Blk').innerHTML = nbBlkj7;
    calculerEfficacitej7();
};

//TURNOVERS
let nbToj7 = 0;
document.getElementById('j7ajouterTo').onclick = function () {
    nbToj7 += 1;
    document.getElementById('j7To').innerHTML = nbToj7;
    calculerEfficacitej7();
};

document.getElementById('j7enleverTo').onclick = function () {
    nbToj7 -= 1;
    if (nbToj7 < 0) {
        nbToj7 = 0;
    }
    document.getElementById('j7To').innerHTML = nbToj7;
    calculerEfficacitej7();
};

//FOULS
let nbFlsj7 = 0;
document.getElementById('j7ajouterFls').onclick = function () {
    nbFlsj7 += 1;

    if (nbFlsj7 > 6) {
        document.getElementById('j7Fls').innerHTML = "Foul out";
        nbFlsj7 = 6;
    } else {
        document.getElementById('j7Fls').innerHTML = nbFlsj7;
    }
    calculerEfficacitej7();
};

document.getElementById('j7enleverFls').onclick = function () {
    nbFlsj7 -= 1;
    if (nbFlsj7 < 0) {
        nbFlsj7 = 0;
    }
    document.getElementById('j7Fls').innerHTML = nbFlsj7;
    calculerEfficacitej7();
};

function calculerEfficacitej7() {
    let pointTotalj7 = (_2PtsReussisj7 * 2) + (_3PtsReussisj7 * 3) + ftReussisj7;
    let totalRebj7 = oRebj7 + dRebj7;
    let effj7 = pointTotalj7 + totalRebj7 + nbAssj7 + nbStlj7 + nbBlkj7 + (_2PtsReussisj7 - _2PtsTentesj7) + (_3PtsReussisj7 - _3PtsTentesj7)
        + (ftReussisj7 - ftTentesj7) - nbToj7;
    document.getElementById('j7Eff').innerHTML = effj7;
    calculerTotaux();

}
// Joueur 8
//Tir
let _2PtsReussisj8 = 0;
let _2PtsTentesj8 = 0;
//2 points
//2 points Reussi
document.getElementById('j8ajouter2PtsR').onclick = function () {
    _2PtsReussisj8 += 1;
    _2PtsTentesj8 += 1;

    document.getElementById('j8-2PtsR').innerHTML = _2PtsReussisj8;
    document.getElementById('j8-2PtsT').innerHTML = _2PtsTentesj8;
    calculerPointsj8();
};

document.getElementById('j8enlever2PtsR').onclick = function () {
    _2PtsReussisj8 -= 1;
    if (_2PtsReussisj8 < 0) {
        _2PtsReussisj8 = 0;
    }
    document.getElementById('j8-2PtsR').innerHTML = _2PtsReussisj8;
    calculerPointsj8();
};

//2 points Tente
document.getElementById('j8ajouter2PtsT').onclick = function () {
    _2PtsTentesj8 += 1;
    document.getElementById('j8-2PtsT').innerHTML = _2PtsTentesj8;
    calculerEfficacitej8();
};

document.getElementById('j8enlever2PtsT').onclick = function () {
    _2PtsTentesj8 -= 1;
    if (_2PtsTentesj8 < _2PtsReussisj8) {
        _2PtsTentesj8 = _2PtsReussisj8;
    }
    document.getElementById('j8-2PtsT').innerHTML = _2PtsTentesj8;
    calculerEfficacitej8();
};

// 3points
let _3PtsReussisj8 = 0;
let _3PtsTentesj8 = 0;
//3 points Reussi
document.getElementById('j8ajouter3PtsR').onclick = function () {
    _3PtsReussisj8 += 1;
    _3PtsTentesj8 += 1;
    document.getElementById('j8-3PtsR').innerHTML = _3PtsReussisj8;
    document.getElementById('j8-3PtsT').innerHTML = _3PtsTentesj8;
    calculerPointsj8();
};

document.getElementById('j8enlever3PtsR').onclick = function () {
    _3PtsReussisj8 -= 1;
    if (_3PtsReussisj8 < 0) {
        _3PtsReussisj8 = 0;
    }
    document.getElementById('j8-3PtsR').innerHTML = _3PtsReussisj8;
    calculerPointsj8();
};

//3 points Tente
document.getElementById('j8ajouter3PtsT').onclick = function () {
    _3PtsTentesj8 += 1;
    document.getElementById('j8-3PtsT').innerHTML = _3PtsTentesj8;
    calculerEfficacitej8();
};

document.getElementById('j8enlever3PtsT').onclick = function () {
    _3PtsTentesj8 -= 1;
    if (_3PtsTentesj8 < _3PtsReussisj8) {
        _3PtsTentesj8 = _3PtsReussisj8;
    }
    document.getElementById('j8-3PtsT').innerHTML = _3PtsTentesj8;
    calculerEfficacitej8();
};

// free throw
let ftReussisj8 = 0;
let ftTentesj8 = 0;
//free throw Reussi
document.getElementById('j8ajouterFTR').onclick = function () {
    ftReussisj8 += 1;
    ftTentesj8 += 1;
    document.getElementById('j8FTR').innerHTML = ftReussisj8;
    document.getElementById('j8FTT').innerHTML = ftTentesj8;
    calculerPointsj8();
};

document.getElementById('j8enleverFTR').onclick = function () {
    ftReussisj8 -= 1;
    document.getElementById('j8FTR').innerHTML = ftReussisj8;
    calculerPointsj8();
};

//free throw Tente
document.getElementById('j8ajouterFTT').onclick = function () {
    ftTentesj8 += 1;
    document.getElementById('j8FTT').innerHTML = ftTentesj8;
    calculerEfficacitej8();
};

document.getElementById('j8enleverFTT').onclick = function () {
    ftTentesj8 -= 1;
    if (ftTentesj8 < ftReussisj8) {
        ftTentesj8 = ftReussisj8;
    }
    document.getElementById('j8FTT').innerHTML = ftTentesj8;
    calculerEfficacitej8();
};

function calculerPointsj8() {
    let nbPointsj8 = (_2PtsReussisj8 * 2) + (_3PtsReussisj8 * 3) + ftReussisj8;
    document.getElementById('j8Pts').innerHTML = nbPointsj8;
    calculerEfficacitej8();
}

//Rebond
let oRebj8 = 0;
let dRebj8 = 0;

//offensive rebound
document.getElementById('j8ajouterOREB').onclick = function () {
    oRebj8 += 1;
    document.getElementById('j8OREB').innerHTML = oRebj8;
    calculerRebondj8();
    calculerEfficacitej8();
};

document.getElementById('j8enleverOREB').onclick = function () {
    oRebj8 -= 1;
    if (oRebj8 < 0) {
        oRebj8 = 0;
    }
    document.getElementById('j8OREB').innerHTML = oRebj8;
    calculerRebondj8();
};

//defensive rebound
document.getElementById('j8ajouterDREB').onclick = function () {
    dRebj8 += 1;
    document.getElementById('j8DREB').innerHTML = dRebj8;
    calculerRebondj8();
};

document.getElementById('j8enleverDREB').onclick = function () {
    dRebj8 -= 1;
    if (dRebj8 < 0) {
        dRebj8 = 0;
    }
    document.getElementById('j8DREB').innerHTML = dRebj8;
    calculerRebondj8();
};

function calculerRebondj8() {
    let tRebj8 = oRebj8 + dRebj8;
    document.getElementById('j8TREB').innerHTML = tRebj8;
    calculerEfficacitej8();
}

//ASSIST
let nbAssj8 = 0;
document.getElementById('j8ajouterAss').onclick = function () {
    nbAssj8 += 1;
    document.getElementById('j8Ass').innerHTML = nbAssj8;
    calculerEfficacitej8();
};

document.getElementById('j8enleverAss').onclick = function () {
    nbAssj8 -= 1;
    if (nbAssj8 < 0) {
        nbAssj8 = 0;
    }
    document.getElementById('j8Ass').innerHTML = nbAssj8;
    calculerEfficacitej8();
};

//STEALS
let nbStlj8 = 0;
document.getElementById('j8ajouterStl').onclick = function () {
    nbStlj8 += 1;
    document.getElementById('j8Stl').innerHTML = nbStlj8;
    calculerEfficacitej8();
};

document.getElementById('j8enleverStl').onclick = function () {
    nbStlj8 -= 1;
    if (nbStlj8 < 0) {
        nbStlj8 = 0;
    }
    document.getElementById('j8Stl').innerHTML = nbStlj8;
    calculerEfficacitej8();
};

//BLOCKS
let nbBlkj8 = 0;
document.getElementById('j8ajouterBlk').onclick = function () {
    nbBlkj8 += 1;
    document.getElementById('j8Blk').innerHTML = nbBlkj8;
    calculerEfficacitej8();
};

document.getElementById('j8enleverBlk').onclick = function () {
    nbBlkj8 -= 1;
    if (nbBlkj8 < 0) {
        nbBlkj8 = 0;
    }
    document.getElementById('j8Blk').innerHTML = nbBlkj8;
    calculerEfficacitej8();
};

//TURNOVERS
let nbToj8 = 0;
document.getElementById('j8ajouterTo').onclick = function () {
    nbToj8 += 1;
    document.getElementById('j8To').innerHTML = nbToj8;
    calculerEfficacitej8();
};

document.getElementById('j8enleverTo').onclick = function () {
    nbToj8 -= 1;
    if (nbToj8 < 0) {
        nbToj8 = 0;
    }
    document.getElementById('j8To').innerHTML = nbToj8;
    calculerEfficacitej8();
};

//FOULS
let nbFlsj8 = 0;
document.getElementById('j8ajouterFls').onclick = function () {
    nbFlsj8 += 1;

    if (nbFlsj8 > 6) {
        document.getElementById('j8Fls').innerHTML = "Foul out";
        nbFlsj8 = 6;
    } else {
        document.getElementById('j8Fls').innerHTML = nbFlsj8;
    }
    calculerEfficacitej8();
};

document.getElementById('j8enleverFls').onclick = function () {
    nbFlsj8 -= 1;
    if (nbFlsj8 < 0) {
        nbFlsj8 = 0;
    }
    document.getElementById('j8Fls').innerHTML = nbFlsj8;
    calculerEfficacitej8();
};

function calculerEfficacitej8() {
    let pointTotalj8 = (_2PtsReussisj8 * 2) + (_3PtsReussisj8 * 3) + ftReussisj8;
    let totalRebj8 = oRebj8 + dRebj8;
    let effj8 = pointTotalj8 + totalRebj8 + nbAssj8 + nbStlj8 + nbBlkj8 + (_2PtsReussisj8 - _2PtsTentesj8) + (_3PtsReussisj8 - _3PtsTentesj8)
        + (ftReussisj8 - ftTentesj8) - nbToj8;
    document.getElementById('j8Eff').innerHTML = effj8;
    calculerTotaux();

}
// Joueur 9
//Tir
let _2PtsReussisj9 = 0;
let _2PtsTentesj9 = 0;
//2 points
//2 points Reussi
document.getElementById('j9ajouter2PtsR').onclick = function () {
    _2PtsReussisj9 += 1;
    _2PtsTentesj9 += 1;

    document.getElementById('j9-2PtsR').innerHTML = _2PtsReussisj9;
    document.getElementById('j9-2PtsT').innerHTML = _2PtsTentesj9;
    calculerPointsj9();
};

document.getElementById('j9enlever2PtsR').onclick = function () {
    _2PtsReussisj9 -= 1;
    if (_2PtsReussisj9 < 0) {
        _2PtsReussisj9 = 0;
    }
    document.getElementById('j9-2PtsR').innerHTML = _2PtsReussisj9;
    calculerPointsj9();
};

//2 points Tente
document.getElementById('j9ajouter2PtsT').onclick = function () {
    _2PtsTentesj9 += 1;
    document.getElementById('j9-2PtsT').innerHTML = _2PtsTentesj9;
    calculerEfficacitej9();
};

document.getElementById('j9enlever2PtsT').onclick = function () {
    _2PtsTentesj9 -= 1;
    if (_2PtsTentesj9 < _2PtsReussisj9) {
        _2PtsTentesj9 = _2PtsReussisj9;
    }
    document.getElementById('j9-2PtsT').innerHTML = _2PtsTentesj9;
    calculerEfficacitej9();
};

// 3points
let _3PtsReussisj9 = 0;
let _3PtsTentesj9 = 0;
//3 points Reussi
document.getElementById('j9ajouter3PtsR').onclick = function () {
    _3PtsReussisj9 += 1;
    _3PtsTentesj9 += 1;
    document.getElementById('j9-3PtsR').innerHTML = _3PtsReussisj9;
    document.getElementById('j9-3PtsT').innerHTML = _3PtsTentesj9;
    calculerPointsj9();
};

document.getElementById('j9enlever3PtsR').onclick = function () {
    _3PtsReussisj9 -= 1;
    if (_3PtsReussisj9 < 0) {
        _3PtsReussisj9 = 0;
    }
    document.getElementById('j9-3PtsR').innerHTML = _3PtsReussisj9;
    calculerPointsj9();
};

//3 points Tente
document.getElementById('j9ajouter3PtsT').onclick = function () {
    _3PtsTentesj9 += 1;
    document.getElementById('j9-3PtsT').innerHTML = _3PtsTentesj9;
    calculerEfficacitej9();
};

document.getElementById('j9enlever3PtsT').onclick = function () {
    _3PtsTentesj9 -= 1;
    if (_3PtsTentesj9 < _3PtsReussisj9) {
        _3PtsTentesj9 = _3PtsReussisj9;
    }
    document.getElementById('j9-3PtsT').innerHTML = _3PtsTentesj9;
    calculerEfficacitej9();
};

// free throw
let ftReussisj9 = 0;
let ftTentesj9 = 0;
//free throw Reussi
document.getElementById('j9ajouterFTR').onclick = function () {
    ftReussisj9 += 1;
    ftTentesj9 += 1;
    document.getElementById('j9FTR').innerHTML = ftReussisj9;
    document.getElementById('j9FTT').innerHTML = ftTentesj9;
    calculerPointsj9();
};

document.getElementById('j9enleverFTR').onclick = function () {
    ftReussisj9 -= 1;
    document.getElementById('j9FTR').innerHTML = ftReussisj9;
    calculerPointsj9();
};

//free throw Tente
document.getElementById('j9ajouterFTT').onclick = function () {
    ftTentesj9 += 1;
    document.getElementById('j9FTT').innerHTML = ftTentesj9;
    calculerEfficacitej9();
};

document.getElementById('j9enleverFTT').onclick = function () {
    ftTentesj9 -= 1;
    if (ftTentesj9 < ftReussisj9) {
        ftTentesj9 = ftReussisj9;
    }
    document.getElementById('j9FTT').innerHTML = ftTentesj9;
    calculerEfficacitej9();
};

function calculerPointsj9() {
    let nbPointsj9 = (_2PtsReussisj9 * 2) + (_3PtsReussisj9 * 3) + ftReussisj9;
    document.getElementById('j9Pts').innerHTML = nbPointsj9;
    calculerEfficacitej9();
}

//Rebond
let oRebj9 = 0;
let dRebj9 = 0;

//offensive rebound
document.getElementById('j9ajouterOREB').onclick = function () {
    oRebj9 += 1;
    document.getElementById('j9OREB').innerHTML = oRebj9;
    calculerRebondj9();
    calculerEfficacitej9();
};

document.getElementById('j9enleverOREB').onclick = function () {
    oRebj9 -= 1;
    if (oRebj9 < 0) {
        oRebj9 = 0;
    }
    document.getElementById('j9OREB').innerHTML = oRebj9;
    calculerRebondj9();
};

//defensive rebound
document.getElementById('j9ajouterDREB').onclick = function () {
    dRebj9 += 1;
    document.getElementById('j9DREB').innerHTML = dRebj9;
    calculerRebondj9();
};

document.getElementById('j9enleverDREB').onclick = function () {
    dRebj9 -= 1;
    if (dRebj9 < 0) {
        dRebj9 = 0;
    }
    document.getElementById('j9DREB').innerHTML = dRebj9;
    calculerRebondj9();
};

function calculerRebondj9() {
    let tRebj9 = oRebj9 + dRebj9;
    document.getElementById('j9TREB').innerHTML = tRebj9;
    calculerEfficacitej9();
}

//ASSIST
let nbAssj9 = 0;
document.getElementById('j9ajouterAss').onclick = function () {
    nbAssj9 += 1;
    document.getElementById('j9Ass').innerHTML = nbAssj9;
    calculerEfficacitej9();
};

document.getElementById('j9enleverAss').onclick = function () {
    nbAssj9 -= 1;
    if (nbAssj9 < 0) {
        nbAssj9 = 0;
    }
    document.getElementById('j9Ass').innerHTML = nbAssj9;
    calculerEfficacitej9();
};

//STEALS
let nbStlj9 = 0;
document.getElementById('j9ajouterStl').onclick = function () {
    nbStlj9 += 1;
    document.getElementById('j9Stl').innerHTML = nbStlj9;
    calculerEfficacitej9();
};

document.getElementById('j9enleverStl').onclick = function () {
    nbStlj9 -= 1;
    if (nbStlj9 < 0) {
        nbStlj9 = 0;
    }
    document.getElementById('j9Stl').innerHTML = nbStlj9;
    calculerEfficacitej9();
};

//BLOCKS
let nbBlkj9 = 0;
document.getElementById('j9ajouterBlk').onclick = function () {
    nbBlkj9 += 1;
    document.getElementById('j9Blk').innerHTML = nbBlkj9;
    calculerEfficacitej9();
};

document.getElementById('j9enleverBlk').onclick = function () {
    nbBlkj9 -= 1;
    if (nbBlkj9 < 0) {
        nbBlkj9 = 0;
    }
    document.getElementById('j9Blk').innerHTML = nbBlkj9;
    calculerEfficacitej9();
};

//TURNOVERS
let nbToj9 = 0;
document.getElementById('j9ajouterTo').onclick = function () {
    nbToj9 += 1;
    document.getElementById('j9To').innerHTML = nbToj9;
    calculerEfficacitej9();
};

document.getElementById('j9enleverTo').onclick = function () {
    nbToj9 -= 1;
    if (nbToj9 < 0) {
        nbToj9 = 0;
    }
    document.getElementById('j9To').innerHTML = nbToj9;
    calculerEfficacitej9();
};

//FOULS
let nbFlsj9 = 0;
document.getElementById('j9ajouterFls').onclick = function () {
    nbFlsj9 += 1;

    if (nbFlsj9 > 6) {
        document.getElementById('j9Fls').innerHTML = "Foul out";
        nbFlsj9 = 6;
    } else {
        document.getElementById('j9Fls').innerHTML = nbFlsj9;
    }
    calculerEfficacitej9();
};

document.getElementById('j9enleverFls').onclick = function () {
    nbFlsj9 -= 1;
    if (nbFlsj9 < 0) {
        nbFlsj9 = 0;
    }
    document.getElementById('j9Fls').innerHTML = nbFlsj9;
    calculerEfficacitej9();
};

function calculerEfficacitej9() {
    let pointTotalj9 = (_2PtsReussisj9 * 2) + (_3PtsReussisj9 * 3) + ftReussisj9;
    let totalRebj9 = oRebj9 + dRebj9;
    let effj9 = pointTotalj9 + totalRebj9 + nbAssj9 + nbStlj9 + nbBlkj9 + (_2PtsReussisj9 - _2PtsTentesj9) + (_3PtsReussisj9 - _3PtsTentesj9)
        + (ftReussisj9 - ftTentesj9) - nbToj9;
    document.getElementById('j9Eff').innerHTML = effj9;
    calculerTotaux();

}
// Joueur 10
//Tir
let _2PtsReussisj10 = 0;
let _2PtsTentesj10 = 0;
//2 points
//2 points Reussi
document.getElementById('j10ajouter2PtsR').onclick = function () {
    _2PtsReussisj10 += 1;
    _2PtsTentesj10 += 1;

    document.getElementById('j10-2PtsR').innerHTML = _2PtsReussisj10;
    document.getElementById('j10-2PtsT').innerHTML = _2PtsTentesj10;
    calculerPointsj10();
};

document.getElementById('j10enlever2PtsR').onclick = function () {
    _2PtsReussisj10 -= 1;
    if (_2PtsReussisj10 < 0) {
        _2PtsReussisj10 = 0;
    }
    document.getElementById('j10-2PtsR').innerHTML = _2PtsReussisj10;
    calculerPointsj10();
};

//2 points Tente
document.getElementById('j10ajouter2PtsT').onclick = function () {
    _2PtsTentesj10 += 1;
    document.getElementById('j10-2PtsT').innerHTML = _2PtsTentesj10;
    calculerEfficacitej10();
};

document.getElementById('j10enlever2PtsT').onclick = function () {
    _2PtsTentesj10 -= 1;
    if (_2PtsTentesj10 < _2PtsReussisj10) {
        _2PtsTentesj10 = _2PtsReussisj10;
    }
    document.getElementById('j10-2PtsT').innerHTML = _2PtsTentesj10;
    calculerEfficacitej10();
};

// 3points
let _3PtsReussisj10 = 0;
let _3PtsTentesj10 = 0;
//3 points Reussi
document.getElementById('j10ajouter3PtsR').onclick = function () {
    _3PtsReussisj10 += 1;
    _3PtsTentesj10 += 1;
    document.getElementById('j10-3PtsR').innerHTML = _3PtsReussisj10;
    document.getElementById('j10-3PtsT').innerHTML = _3PtsTentesj10;
    calculerPointsj10();
};

document.getElementById('j10enlever3PtsR').onclick = function () {
    _3PtsReussisj10 -= 1;
    if (_3PtsReussisj10 < 0) {
        _3PtsReussisj10 = 0;
    }
    document.getElementById('j10-3PtsR').innerHTML = _3PtsReussisj10;
    calculerPointsj10();
};

//3 points Tente
document.getElementById('j10ajouter3PtsT').onclick = function () {
    _3PtsTentesj10 += 1;
    document.getElementById('j10-3PtsT').innerHTML = _3PtsTentesj10;
    calculerEfficacitej10();
};

document.getElementById('j10enlever3PtsT').onclick = function () {
    _3PtsTentesj10 -= 1;
    if (_3PtsTentesj10 < _3PtsReussisj10) {
        _3PtsTentesj10 = _3PtsReussisj10;
    }
    document.getElementById('j10-3PtsT').innerHTML = _3PtsTentesj10;
    calculerEfficacitej10();
};

// free throw
let ftReussisj10 = 0;
let ftTentesj10 = 0;
//free throw Reussi
document.getElementById('j10ajouterFTR').onclick = function () {
    ftReussisj10 += 1;
    ftTentesj10 += 1;
    document.getElementById('j10FTR').innerHTML = ftReussisj10;
    document.getElementById('j10FTT').innerHTML = ftTentesj10;
    calculerPointsj10();
};

document.getElementById('j10enleverFTR').onclick = function () {
    ftReussisj10 -= 1;
    document.getElementById('j10FTR').innerHTML = ftReussisj10;
    calculerPointsj10();
};

//free throw Tente
document.getElementById('j10ajouterFTT').onclick = function () {
    ftTentesj10 += 1;
    document.getElementById('j10FTT').innerHTML = ftTentesj10;
    calculerEfficacitej10();
};

document.getElementById('j10enleverFTT').onclick = function () {
    ftTentesj10 -= 1;
    if (ftTentesj10 < ftReussisj10) {
        ftTentesj10 = ftReussisj10;
    }
    document.getElementById('j10FTT').innerHTML = ftTentesj10;
    calculerEfficacitej10();
};

function calculerPointsj10() {
    let nbPointsj10 = (_2PtsReussisj10 * 2) + (_3PtsReussisj10 * 3) + ftReussisj10;
    document.getElementById('j10Pts').innerHTML = nbPointsj10;
    calculerEfficacitej10();
}

//Rebond
let oRebj10 = 0;
let dRebj10 = 0;

//offensive rebound
document.getElementById('j10ajouterOREB').onclick = function () {
    oRebj10 += 1;
    document.getElementById('j10OREB').innerHTML = oRebj10;
    calculerRebondj10();
    calculerEfficacitej10();
};

document.getElementById('j10enleverOREB').onclick = function () {
    oRebj10 -= 1;
    if (oRebj10 < 0) {
        oRebj10 = 0;
    }
    document.getElementById('j10OREB').innerHTML = oRebj10;
    calculerRebondj10();
};

//defensive rebound
document.getElementById('j10ajouterDREB').onclick = function () {
    dRebj10 += 1;
    document.getElementById('j10DREB').innerHTML = dRebj10;
    calculerRebondj10();
};

document.getElementById('j10enleverDREB').onclick = function () {
    dRebj10 -= 1;
    if (dRebj10 < 0) {
        dRebj10 = 0;
    }
    document.getElementById('j10DREB').innerHTML = dRebj10;
    calculerRebondj10();
};

function calculerRebondj10() {
    let tRebj10 = oRebj10 + dRebj10;
    document.getElementById('j10TREB').innerHTML = tRebj10;
    calculerEfficacitej10();
}

//ASSIST
let nbAssj10 = 0;
document.getElementById('j10ajouterAss').onclick = function () {
    nbAssj10 += 1;
    document.getElementById('j10Ass').innerHTML = nbAssj10;
    calculerEfficacitej10();
};

document.getElementById('j10enleverAss').onclick = function () {
    nbAssj10 -= 1;
    if (nbAssj10 < 0) {
        nbAssj10 = 0;
    }
    document.getElementById('j10Ass').innerHTML = nbAssj10;
    calculerEfficacitej10();
};

//STEALS
let nbStlj10 = 0;
document.getElementById('j10ajouterStl').onclick = function () {
    nbStlj10 += 1;
    document.getElementById('j10Stl').innerHTML = nbStlj10;
    calculerEfficacitej10();
};

document.getElementById('j10enleverStl').onclick = function () {
    nbStlj10 -= 1;
    if (nbStlj10 < 0) {
        nbStlj10 = 0;
    }
    document.getElementById('j10Stl').innerHTML = nbStlj10;
    calculerEfficacitej10();
};

//BLOCKS
let nbBlkj10 = 0;
document.getElementById('j10ajouterBlk').onclick = function () {
    nbBlkj10 += 1;
    document.getElementById('j10Blk').innerHTML = nbBlkj10;
    calculerEfficacitej10();
};

document.getElementById('j10enleverBlk').onclick = function () {
    nbBlkj10 -= 1;
    if (nbBlkj10 < 0) {
        nbBlkj10 = 0;
    }
    document.getElementById('j10Blk').innerHTML = nbBlkj10;
    calculerEfficacitej10();
};

//TURNOVERS
let nbToj10 = 0;
document.getElementById('j10ajouterTo').onclick = function () {
    nbToj10 += 1;
    document.getElementById('j10To').innerHTML = nbToj10;
    calculerEfficacitej10();
};

document.getElementById('j10enleverTo').onclick = function () {
    nbToj10 -= 1;
    if (nbToj10 < 0) {
        nbToj10 = 0;
    }
    document.getElementById('j10To').innerHTML = nbToj10;
    calculerEfficacitej10();
};

//FOULS
let nbFlsj10 = 0;
document.getElementById('j10ajouterFls').onclick = function () {
    nbFlsj10 += 1;

    if (nbFlsj10 > 6) {
        document.getElementById('j10Fls').innerHTML = "Foul out";
        nbFlsj10 = 6;
    } else {
        document.getElementById('j10Fls').innerHTML = nbFlsj10;
    }
    calculerEfficacitej10();
};

document.getElementById('j10enleverFls').onclick = function () {
    nbFlsj10 -= 1;
    if (nbFlsj10 < 0) {
        nbFlsj10 = 0;
    }
    document.getElementById('j10Fls').innerHTML = nbFlsj10;
    calculerEfficacitej10();
};

function calculerEfficacitej10() {
    let pointTotalj10 = (_2PtsReussisj10 * 2) + (_3PtsReussisj10 * 3) + ftReussisj10;
    let totalRebj10 = oRebj10 + dRebj10;
    let effj10 = pointTotalj10 + totalRebj10 + nbAssj10 + nbStlj10 + nbBlkj10 + (_2PtsReussisj10 - _2PtsTentesj10) + (_3PtsReussisj10 - _3PtsTentesj10)
        + (ftReussisj10 - ftTentesj10) - nbToj10;
    document.getElementById('j10Eff').innerHTML = effj10;
    calculerTotaux();

}
// Joueur 11
//Tir
let _2PtsReussisj11 = 0;
let _2PtsTentesj11 = 0;
//2 points
//2 points Reussi
document.getElementById('j11ajouter2PtsR').onclick = function () {
    _2PtsReussisj11 += 1;
    _2PtsTentesj11 += 1;

    document.getElementById('j11-2PtsR').innerHTML = _2PtsReussisj11;
    document.getElementById('j11-2PtsT').innerHTML = _2PtsTentesj11;
    calculerPointsj11();
};

document.getElementById('j11enlever2PtsR').onclick = function () {
    _2PtsReussisj11 -= 1;
    if (_2PtsReussisj11 < 0) {
        _2PtsReussisj11 = 0;
    }
    document.getElementById('j11-2PtsR').innerHTML = _2PtsReussisj11;
    calculerPointsj11();
};

//2 points Tente
document.getElementById('j11ajouter2PtsT').onclick = function () {
    _2PtsTentesj11 += 1;
    document.getElementById('j11-2PtsT').innerHTML = _2PtsTentesj11;
    calculerEfficacitej11();
};

document.getElementById('j11enlever2PtsT').onclick = function () {
    _2PtsTentesj11 -= 1;
    if (_2PtsTentesj11 < _2PtsReussisj11) {
        _2PtsTentesj11 = _2PtsReussisj11;
    }
    document.getElementById('j11-2PtsT').innerHTML = _2PtsTentesj11;
    calculerEfficacitej11();
};

// 3points
let _3PtsReussisj11 = 0;
let _3PtsTentesj11 = 0;
//3 points Reussi
document.getElementById('j11ajouter3PtsR').onclick = function () {
    _3PtsReussisj11 += 1;
    _3PtsTentesj11 += 1;
    document.getElementById('j11-3PtsR').innerHTML = _3PtsReussisj11;
    document.getElementById('j11-3PtsT').innerHTML = _3PtsTentesj11;
    calculerPointsj11();
};

document.getElementById('j11enlever3PtsR').onclick = function () {
    _3PtsReussisj11 -= 1;
    if (_3PtsReussisj11 < 0) {
        _3PtsReussisj11 = 0;
    }
    document.getElementById('j11-3PtsR').innerHTML = _3PtsReussisj11;
    calculerPointsj11();
};

//3 points Tente
document.getElementById('j11ajouter3PtsT').onclick = function () {
    _3PtsTentesj11 += 1;
    document.getElementById('j11-3PtsT').innerHTML = _3PtsTentesj11;
    calculerEfficacitej11();
};

document.getElementById('j11enlever3PtsT').onclick = function () {
    _3PtsTentesj11 -= 1;
    if (_3PtsTentesj11 < _3PtsReussisj11) {
        _3PtsTentesj11 = _3PtsReussisj11;
    }
    document.getElementById('j11-3PtsT').innerHTML = _3PtsTentesj11;
    calculerEfficacitej11();
};

// free throw
let ftReussisj11 = 0;
let ftTentesj11 = 0;
//free throw Reussi
document.getElementById('j11ajouterFTR').onclick = function () {
    ftReussisj11 += 1;
    ftTentesj11 += 1;
    document.getElementById('j11FTR').innerHTML = ftReussisj11;
    document.getElementById('j11FTT').innerHTML = ftTentesj11;
    calculerPointsj11();
};

document.getElementById('j11enleverFTR').onclick = function () {
    ftReussisj11 -= 1;
    document.getElementById('j11FTR').innerHTML = ftReussisj11;
    calculerPointsj11();
};

//free throw Tente
document.getElementById('j11ajouterFTT').onclick = function () {
    ftTentesj11 += 1;
    document.getElementById('j11FTT').innerHTML = ftTentesj11;
    calculerEfficacitej11();
};

document.getElementById('j11enleverFTT').onclick = function () {
    ftTentesj11 -= 1;
    if (ftTentesj11 < ftReussisj11) {
        ftTentesj11 = ftReussisj11;
    }
    document.getElementById('j11FTT').innerHTML = ftTentesj11;
    calculerEfficacitej11();
};

function calculerPointsj11() {
    let nbPointsj11 = (_2PtsReussisj11 * 2) + (_3PtsReussisj11 * 3) + ftReussisj11;
    document.getElementById('j11Pts').innerHTML = nbPointsj11;
    calculerEfficacitej11();
}

//Rebond
let oRebj11 = 0;
let dRebj11 = 0;

//offensive rebound
document.getElementById('j11ajouterOREB').onclick = function () {
    oRebj11 += 1;
    document.getElementById('j11OREB').innerHTML = oRebj11;
    calculerRebondj11();
    calculerEfficacitej11();
};

document.getElementById('j11enleverOREB').onclick = function () {
    oRebj11 -= 1;
    if (oRebj11 < 0) {
        oRebj11 = 0;
    }
    document.getElementById('j11OREB').innerHTML = oRebj11;
    calculerRebondj11();
};

//defensive rebound
document.getElementById('j11ajouterDREB').onclick = function () {
    dRebj11 += 1;
    document.getElementById('j11DREB').innerHTML = dRebj11;
    calculerRebondj11();
};

document.getElementById('j11enleverDREB').onclick = function () {
    dRebj11 -= 1;
    if (dRebj11 < 0) {
        dRebj11 = 0;
    }
    document.getElementById('j11DREB').innerHTML = dRebj11;
    calculerRebondj11();
};

function calculerRebondj11() {
    let tRebj11 = oRebj11 + dRebj11;
    document.getElementById('j11TREB').innerHTML = tRebj11;
    calculerEfficacitej11();
}

//ASSIST
let nbAssj11 = 0;
document.getElementById('j11ajouterAss').onclick = function () {
    nbAssj11 += 1;
    document.getElementById('j11Ass').innerHTML = nbAssj11;
    calculerEfficacitej11();
};

document.getElementById('j11enleverAss').onclick = function () {
    nbAssj11 -= 1;
    if (nbAssj11 < 0) {
        nbAssj11 = 0;
    }
    document.getElementById('j11Ass').innerHTML = nbAssj11;
    calculerEfficacitej11();
};

//STEALS
let nbStlj11 = 0;
document.getElementById('j11ajouterStl').onclick = function () {
    nbStlj11 += 1;
    document.getElementById('j11Stl').innerHTML = nbStlj11;
    calculerEfficacitej11();
};

document.getElementById('j11enleverStl').onclick = function () {
    nbStlj11 -= 1;
    if (nbStlj11 < 0) {
        nbStlj11 = 0;
    }
    document.getElementById('j11Stl').innerHTML = nbStlj11;
    calculerEfficacitej11();
};

//BLOCKS
let nbBlkj11 = 0;
document.getElementById('j11ajouterBlk').onclick = function () {
    nbBlkj11 += 1;
    document.getElementById('j11Blk').innerHTML = nbBlkj11;
    calculerEfficacitej11();
};

document.getElementById('j11enleverBlk').onclick = function () {
    nbBlkj11 -= 1;
    if (nbBlkj11 < 0) {
        nbBlkj11 = 0;
    }
    document.getElementById('j11Blk').innerHTML = nbBlkj11;
    calculerEfficacitej11();
};

//TURNOVERS
let nbToj11 = 0;
document.getElementById('j11ajouterTo').onclick = function () {
    nbToj11 += 1;
    document.getElementById('j11To').innerHTML = nbToj11;
    calculerEfficacitej11();
};

document.getElementById('j11enleverTo').onclick = function () {
    nbToj11 -= 1;
    if (nbToj11 < 0) {
        nbToj11 = 0;
    }
    document.getElementById('j11To').innerHTML = nbToj11;
    calculerEfficacitej11();
};

//FOULS
let nbFlsj11 = 0;
document.getElementById('j11ajouterFls').onclick = function () {
    nbFlsj11 += 1;

    if (nbFlsj11 > 6) {
        document.getElementById('j11Fls').innerHTML = "Foul out";
        nbFlsj11 = 6;
    } else {
        document.getElementById('j11Fls').innerHTML = nbFlsj11;
    }
    calculerEfficacitej11();
};

document.getElementById('j11enleverFls').onclick = function () {
    nbFlsj11 -= 1;
    if (nbFlsj11 < 0) {
        nbFlsj11 = 0;
    }
    document.getElementById('j11Fls').innerHTML = nbFlsj11;
    calculerEfficacitej11();
};

function calculerEfficacitej11() {
    let pointTotalj11 = (_2PtsReussisj11 * 2) + (_3PtsReussisj11 * 3) + ftReussisj11;
    let totalRebj11 = oRebj11 + dRebj11;
    let effj11 = pointTotalj11 + totalRebj11 + nbAssj11 + nbStlj11 + nbBlkj11 + (_2PtsReussisj11 - _2PtsTentesj11) + (_3PtsReussisj11 - _3PtsTentesj11)
        + (ftReussisj11 - ftTentesj11) - nbToj11;
    document.getElementById('j11Eff').innerHTML = effj11;
    calculerTotaux();

}
// Joueur 12
//Tir
let _2PtsReussisj12 = 0;
let _2PtsTentesj12 = 0;
//2 points
//2 points Reussi
document.getElementById('j12ajouter2PtsR').onclick = function () {
    _2PtsReussisj12 += 1;
    _2PtsTentesj12 += 1;

    document.getElementById('j12-2PtsR').innerHTML = _2PtsReussisj12;
    document.getElementById('j12-2PtsT').innerHTML = _2PtsTentesj12;
    calculerPointsj12();
};

document.getElementById('j12enlever2PtsR').onclick = function () {
    _2PtsReussisj12 -= 1;
    if (_2PtsReussisj12 < 0) {
        _2PtsReussisj12 = 0;
    }
    document.getElementById('j12-2PtsR').innerHTML = _2PtsReussisj12;
    calculerPointsj12();
};

//2 points Tente
document.getElementById('j12ajouter2PtsT').onclick = function () {
    _2PtsTentesj12 += 1;
    document.getElementById('j12-2PtsT').innerHTML = _2PtsTentesj12;
    calculerEfficacitej12();
};

document.getElementById('j12enlever2PtsT').onclick = function () {
    _2PtsTentesj12 -= 1;
    if (_2PtsTentesj12 < _2PtsReussisj12) {
        _2PtsTentesj12 = _2PtsReussisj12;
    }
    document.getElementById('j12-2PtsT').innerHTML = _2PtsTentesj12;
    calculerEfficacitej12();
};

// 3points
let _3PtsReussisj12 = 0;
let _3PtsTentesj12 = 0;
//3 points Reussi
document.getElementById('j12ajouter3PtsR').onclick = function () {
    _3PtsReussisj12 += 1;
    _3PtsTentesj12 += 1;
    document.getElementById('j12-3PtsR').innerHTML = _3PtsReussisj12;
    document.getElementById('j12-3PtsT').innerHTML = _3PtsTentesj12;
    calculerPointsj12();
};

document.getElementById('j12enlever3PtsR').onclick = function () {
    _3PtsReussisj12 -= 1;
    if (_3PtsReussisj12 < 0) {
        _3PtsReussisj12 = 0;
    }
    document.getElementById('j12-3PtsR').innerHTML = _3PtsReussisj12;
    calculerPointsj12();
};

//3 points Tente
document.getElementById('j12ajouter3PtsT').onclick = function () {
    _3PtsTentesj12 += 1;
    document.getElementById('j12-3PtsT').innerHTML = _3PtsTentesj12;
    calculerEfficacitej12();
};

document.getElementById('j12enlever3PtsT').onclick = function () {
    _3PtsTentesj12 -= 1;
    if (_3PtsTentesj12 < _3PtsReussisj12) {
        _3PtsTentesj12 = _3PtsReussisj12;
    }
    document.getElementById('j12-3PtsT').innerHTML = _3PtsTentesj12;
    calculerEfficacitej12();
};

// free throw
let ftReussisj12 = 0;
let ftTentesj12 = 0;
//free throw Reussi
document.getElementById('j12ajouterFTR').onclick = function () {
    ftReussisj12 += 1;
    ftTentesj12 += 1;
    document.getElementById('j12FTR').innerHTML = ftReussisj12;
    document.getElementById('j12FTT').innerHTML = ftTentesj12;
    calculerPointsj12();
};

document.getElementById('j12enleverFTR').onclick = function () {
    ftReussisj12 -= 1;
    document.getElementById('j12FTR').innerHTML = ftReussisj12;
    calculerPointsj12();
};

//free throw Tente
document.getElementById('j12ajouterFTT').onclick = function () {
    ftTentesj12 += 1;
    document.getElementById('j12FTT').innerHTML = ftTentesj12;
    calculerEfficacitej12();
};

document.getElementById('j12enleverFTT').onclick = function () {
    ftTentesj12 -= 1;
    if (ftTentesj12 < ftReussisj12) {
        ftTentesj12 = ftReussisj12;
    }
    document.getElementById('j12FTT').innerHTML = ftTentesj12;
    calculerEfficacitej12();
};

function calculerPointsj12() {
    let nbPointsj12 = (_2PtsReussisj12 * 2) + (_3PtsReussisj12 * 3) + ftReussisj12;
    document.getElementById('j12Pts').innerHTML = nbPointsj12;
    calculerEfficacitej12();
}

//Rebond
let oRebj12 = 0;
let dRebj12 = 0;

//offensive rebound
document.getElementById('j12ajouterOREB').onclick = function () {
    oRebj12 += 1;
    document.getElementById('j12OREB').innerHTML = oRebj12;
    calculerRebondj12();
    calculerEfficacitej12();
};

document.getElementById('j12enleverOREB').onclick = function () {
    oRebj12 -= 1;
    if (oRebj12 < 0) {
        oRebj12 = 0;
    }
    document.getElementById('j12OREB').innerHTML = oRebj12;
    calculerRebondj12();
};

//defensive rebound
document.getElementById('j12ajouterDREB').onclick = function () {
    dRebj12 += 1;
    document.getElementById('j12DREB').innerHTML = dRebj12;
    calculerRebondj12();
};

document.getElementById('j12enleverDREB').onclick = function () {
    dRebj12 -= 1;
    if (dRebj12 < 0) {
        dRebj12 = 0;
    }
    document.getElementById('j12DREB').innerHTML = dRebj12;
    calculerRebondj12();
};

function calculerRebondj12() {
    let tRebj12 = oRebj12 + dRebj12;
    document.getElementById('j12TREB').innerHTML = tRebj12;
    calculerEfficacitej12();
}

//ASSIST
let nbAssj12 = 0;
document.getElementById('j12ajouterAss').onclick = function () {
    nbAssj12 += 1;
    document.getElementById('j12Ass').innerHTML = nbAssj12;
    calculerEfficacitej12();
};

document.getElementById('j12enleverAss').onclick = function () {
    nbAssj12 -= 1;
    if (nbAssj12 < 0) {
        nbAssj12 = 0;
    }
    document.getElementById('j12Ass').innerHTML = nbAssj12;
    calculerEfficacitej12();
};

//STEALS
let nbStlj12 = 0;
document.getElementById('j12ajouterStl').onclick = function () {
    nbStlj12 += 1;
    document.getElementById('j12Stl').innerHTML = nbStlj12;
    calculerEfficacitej12();
};

document.getElementById('j12enleverStl').onclick = function () {
    nbStlj12 -= 1;
    if (nbStlj12 < 0) {
        nbStlj12 = 0;
    }
    document.getElementById('j12Stl').innerHTML = nbStlj12;
    calculerEfficacitej12();
};

//BLOCKS
let nbBlkj12 = 0;
document.getElementById('j12ajouterBlk').onclick = function () {
    nbBlkj12 += 1;
    document.getElementById('j12Blk').innerHTML = nbBlkj12;
    calculerEfficacitej12();
};

document.getElementById('j12enleverBlk').onclick = function () {
    nbBlkj12 -= 1;
    if (nbBlkj12 < 0) {
        nbBlkj12 = 0;
    }
    document.getElementById('j12Blk').innerHTML = nbBlkj12;
    calculerEfficacitej12();
};

//TURNOVERS
let nbToj12 = 0;
document.getElementById('j12ajouterTo').onclick = function () {
    nbToj12 += 1;
    document.getElementById('j12To').innerHTML = nbToj12;
    calculerEfficacitej12();
};

document.getElementById('j12enleverTo').onclick = function () {
    nbToj12 -= 1;
    if (nbToj12 < 0) {
        nbToj12 = 0;
    }
    document.getElementById('j12To').innerHTML = nbToj12;
    calculerEfficacitej12();
};

//FOULS
let nbFlsj12 = 0;
document.getElementById('j12ajouterFls').onclick = function () {
    nbFlsj12 += 1;

    if (nbFlsj12 > 6) {
        document.getElementById('j12Fls').innerHTML = "Foul out";
        nbFlsj12 = 6;
    } else {
        document.getElementById('j12Fls').innerHTML = nbFlsj12;
    }
    calculerEfficacitej12();
};

document.getElementById('j12enleverFls').onclick = function () {
    nbFlsj12 -= 1;
    if (nbFlsj12 < 0) {
        nbFlsj12 = 0;
    }
    document.getElementById('j12Fls').innerHTML = nbFlsj12;
    calculerEfficacitej12();
};

function calculerEfficacitej12() {
    let pointTotalj12 = (_2PtsReussisj12 * 2) + (_3PtsReussisj12 * 3) + ftReussisj12;
    let totalRebj12 = oRebj12 + dRebj12;
    let effj12 = pointTotalj12 + totalRebj12 + nbAssj12 + nbStlj12 + nbBlkj12 + (_2PtsReussisj12 - _2PtsTentesj12) + (_3PtsReussisj12 - _3PtsTentesj12)
        + (ftReussisj12 - ftTentesj12) - nbToj12;
    document.getElementById('j12Eff').innerHTML = effj12;
    calculerTotaux();
}
function calculerTotaux(){
    let totalfg = 0;
    let totalfga = 0 ;
    let total3fg = 0;
    let total3fga = 0;
    let totalft = 0;
    let totalfta = 0;
    let totalOreb = 0;
    let totalDreb = 0;
    let totalReb = 0;
    let totalAss = 0;
    let totalStl = 0;
    let totalBlk = 0;
    let totalTo = 0;
    let totalFls = 0;
    let totalEff = 0;
    let totalPts = 0;



   // Parcourir tous les joueurs et ajouter leurs points au total
   for (let i = 1; i <= 12; i++) {
        let fg = parseInt(document.getElementById("j" + i +"-2PtsR").textContent);
        totalfg += fg;
        let fga = parseInt(document.getElementById("j" + i +"-2PtsT").textContent);
        totalfga += fga;

        let _3fg = parseInt(document.getElementById("j" + i +"-3PtsR").textContent);
        total3fg += _3fg;
        let _3fga = parseInt(document.getElementById("j" + i +"-3PtsT").textContent);
        total3fga += _3fga;

        let ft = parseInt(document.getElementById("j" + i +"FTR").textContent);
        totalft += ft;
        let fta = parseInt(document.getElementById("j" + i +"FTT").textContent);
        totalfta += fta;

        let oReb = parseInt(document.getElementById("j" + i +"OREB").textContent);
        totalOreb += oReb;
        let dReb = parseInt(document.getElementById("j" + i +"DREB").textContent);
        totalDreb += dReb;
        let reb = parseInt(document.getElementById("j" + i +"TREB").textContent);
        totalReb += reb;

        let ass = parseInt(document.getElementById("j" + i +"Ass").textContent);
        totalAss += ass;

        let stl = parseInt(document.getElementById("j" + i +"Stl").textContent);
        totalStl += stl;

        let blk = parseInt(document.getElementById("j" + i +"Blk").textContent);
        totalBlk += blk;

        let to = parseInt(document.getElementById("j" + i +"To").textContent);
        totalTo += to;

        let fls = parseInt(document.getElementById("j" + i +"Fls").textContent);
        totalFls += fls;

        let eff = parseInt(document.getElementById("j" + i +"Eff").textContent);
        totalEff += eff;

        let pts = parseInt(document.getElementById("j" + i + "Pts").textContent);
        totalPts += pts;

   }

   // Mettre à jour l'élément HTML du total des points
   document.getElementById("fg").textContent = totalfg;
   document.getElementById("fga").textContent = totalfga;
   document.getElementById("3fg").textContent = total3fg;
   document.getElementById("3fga").textContent = total3fga;
   document.getElementById("ft").textContent = totalft;
   document.getElementById("fta").textContent = totalfta;
   document.getElementById("oReb").textContent = totalOreb;
   document.getElementById("dReb").textContent = totalDreb;
   document.getElementById("reb").textContent = totalReb;
   document.getElementById("ass").textContent = totalAss;
   document.getElementById("stl").textContent = totalStl;
   document.getElementById("blk").textContent = totalBlk;
   document.getElementById("to").textContent = totalTo;
   document.getElementById("fls").textContent = totalFls;
   document.getElementById("eff").textContent = totalEff;
   document.getElementById("pts").textContent = totalPts;

   let fgPerc = (totalfg/totalfga) * 100;
   document.getElementById('fgPerc').textContent = fgPerc.toFixed(1) + "%"

   let _3fgPerc = (total3fg/total3fga) * 100;
   document.getElementById('_3ptsperc').textContent = _3fgPerc.toFixed(1) + "%"

   let ftPerc = (totalft/totalfta) * 100;
   document.getElementById('ftPerc').textContent = ftPerc.toFixed(1) + "%"
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le bouton de capture d'écran
    var screenshotButton = document.getElementById("screenshotButton");

    // Ajoutez un écouteur d'événements au bouton de capture d'écran
    screenshotButton.addEventListener("click", function () {
        // Masquez temporairement les éléments à exclure
        var excludedElements = document.querySelectorAll('button');
        excludedElements.forEach(function (element) {
            element.style.display = 'none';
        });
        var capture = document.getElementById('capture');
        // Utilisez html2canvas pour créer une capture d'écran du body entier
        html2canvas(capture).then(function (canvas) {
            // Convertissez la capture d'écran en base64
            var screenshot = canvas.toDataURL("image/png");

            // Créez un lien de téléchargement pour la capture d'écran
            var link = document.createElement("a");
            link.href = screenshot;
            link.download = "StatsDesRivesVs"+equipe + ".png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Réaffichez les éléments précédemment masqués
            excludedElements.forEach(function (element) {
                element.style.display = '';
            });
        });
    });

});