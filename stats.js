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

let _2PtsReussisj = Array(12).fill(0);
let _2PtsTentesj = Array(12).fill(0);
let _3PtsReussisj = Array(12).fill(0);
let _3PtsTentesj = Array(12).fill(0);
let ftReussisj = Array(12).fill(0);
let ftTentesj = Array(12).fill(0);
let oRebj = Array(12).fill(0);
let dRebj = Array(12).fill(0);
let assj = Array(12).fill(0);
let stlj = Array(12).fill(0);
let blkj = Array(12).fill(0);
let toj = Array(12).fill(0);
let flsj = Array(12).fill(0);

for (let i = 1; i <= 12; i++) {
    // AJOUTER 2 POINT REUSSI
    document.getElementById("j" + i + "ajouter2PtsR").onclick = function () {
        _2PtsReussisj[i - 1] += 1;
        _2PtsTentesj[i - 1] += 1;

        document.getElementById("j" + i + "-2PtsR").innerHTML = _2PtsReussisj[i - 1];
        document.getElementById("j" + i + "-2PtsT").innerHTML = _2PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    // ENLEVER 2 POINTS REUSSI
    document.getElementById("j" + i + "enlever2PtsR").onclick = function () {
        _2PtsReussisj[i - 1] -= 1;
        if (_2PtsReussisj[i - 1] < 0) {
            _2PtsReussisj[i - 1] = 0
        }
        document.getElementById("j" + i + "-2PtsR").innerHTML = _2PtsReussisj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // AJOUTER 2 POINT TENTÉS
    document.getElementById("j" + i + "ajouter2PtsT").onclick = function () {
        _2PtsTentesj[i - 1] += 1;
    
        document.getElementById("j" + i + "-2PtsT").innerHTML = _2PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    
    // ENLEVER 2 POINTS TENTÉS
    document.getElementById("j" + i + "enlever2PtsT").onclick = function () {
        _2PtsTentesj[i - 1] -= 1;
        if (_2PtsTentesj[i - 1] < _2PtsReussisj[i -1]) {
            _2PtsTentesj[i - 1] = _2PtsReussisj[i - 1];
        }
        document.getElementById("j" + i + "-2PtsT").innerHTML = _2PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    // AJOUTER 3 POINT REUSSI
    document.getElementById("j" + i + "ajouter3PtsR").onclick = function () {
        _3PtsReussisj[i - 1] += 1;
        _3PtsTentesj[i - 1] += 1;

        document.getElementById("j" + i + "-3PtsR").innerHTML = _3PtsReussisj[i - 1];
        document.getElementById("j" + i + "-3PtsT").innerHTML = _3PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    // ENLEVER 3 POINTS REUSSI
    document.getElementById("j" + i + "enlever3PtsR").onclick = function () {
        _3PtsReussisj[i - 1] -= 1;
        if (_3PtsReussisj[i - 1] < 0) {
            _3PtsReussisj[i - 1] = 0
        }
        document.getElementById("j" + i + "-3PtsR").innerHTML = _3PtsReussisj[i - 1];
        calculerEfficaciteEtPointJ(i);

        
    };
    // AJOUTER 3 POINT TENTÉS
    document.getElementById("j" + i + "ajouter3PtsT").onclick = function () {
        _3PtsTentesj[i - 1] += 1;
    
        document.getElementById("j" + i + "-3PtsT").innerHTML = _3PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    
    // ENLEVER 3 POINTS TENTÉS
    document.getElementById("j" + i + "enlever3PtsT").onclick = function () {
        _3PtsTentesj[i - 1] -= 1;
        if (_3PtsTentesj[i - 1] < _3PtsReussisj[i -1]) {
            _3PtsTentesj[i - 1] = _3PtsReussisj[i - 1];
        }
        document.getElementById("j" + i + "-3PtsT").innerHTML = _3PtsTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);
            
    };

    // AJOUTER FREE THROW REUSSI
    document.getElementById("j" + i + "ajouterFTR").onclick = function () {
        ftReussisj[i - 1] += 1;
        ftTentesj[i - 1] += 1;

        document.getElementById("j" + i + "FTR").innerHTML = ftReussisj[i - 1];
        document.getElementById("j" + i + "FTT").innerHTML = ftTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    // ENLEVER FREE THROW REUSSI
    document.getElementById("j" + i + "enleverFTR").onclick = function () {
        ftReussisj[i - 1] -= 1;
        if (ftReussisj[i - 1] < 0) {
            ftReussisj[i - 1] = 0
        }
        document.getElementById("j" + i + "FTR").innerHTML = ftReussisj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // AJOUTER FREE THROW TENTÉS
    document.getElementById("j" + i + "ajouterFTT").onclick = function () {
        ftTentesj[i - 1] += 1;
    
        document.getElementById("j" + i + "FTT").innerHTML = ftTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    
    // ENLEVER FREE THROW TENTÉS
    document.getElementById("j" + i + "enleverFTT").onclick = function () {
        ftTentesj[i - 1] -= 1;
        if (ftTentesj[i - 1] < ftReussisj[i - 1]) {
            ftTentesj[i - 1] = ftReussisj[i - 1];
        }
        document.getElementById("j" + i + "FTT").innerHTML = ftTentesj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER OFFENSIVE REBOUND
    document.getElementById("j" + i + "ajouterOREB").onclick = function(){
        oRebj[i - 1] += 1
        document.getElementById("j" + i + "OREB").innerHTML = oRebj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    //ENLEVER OFFENSIVE REBOUND
    document.getElementById("j" + i + "enleverOREB").onclick = function(){
        oRebj[i - 1] -= 1
        if (oRebj[i-1] < 0) {
            oRebj[i-1]=0
        }
        document.getElementById("j" + i + "OREB").innerHTML = oRebj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    
    //AJOUTER DEFENSIVE REBOUND
    document.getElementById("j" + i + "ajouterDREB").onclick = function(){
        dRebj[i - 1] += 1
        document.getElementById("j" + i + "DREB").innerHTML = dRebj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER DEFENSIVE REBOUND
    document.getElementById("j" + i + "enleverDREB").onclick = function(){
        dRebj[i - 1] -= 1
        if (dRebj[i-1] < 0) {
            dRebj[i-1]=0;
        }
        document.getElementById("j" + i + "DREB").innerHTML = dRebj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER ASSIST
    document.getElementById("j" + i + "ajouterAss").onclick = function(){
        assj[i - 1] += 1
        document.getElementById("j" + i + "Ass").innerHTML = assj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER ASSIST
    document.getElementById("j" + i + "enleverAss").onclick = function(){
        assj[i - 1] -= 1
        if (assj[i-1] < 0) {
            assj[i-1]=0
        }
        document.getElementById("j" + i + "Ass").innerHTML = assj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER STEALS
    document.getElementById("j" + i + "ajouterStl").onclick = function(){
        stlj[i - 1] += 1
        document.getElementById("j" + i + "Stl").innerHTML = stlj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER STEALS
    document.getElementById("j" + i + "enleverStl").onclick = function(){
        stlj[i - 1] -= 1
        if (stlj[i-1] < 0) {
            stlj[i-1]=0
        }
        document.getElementById("j" + i + "Stl").innerHTML = stlj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER BLOCKS
    document.getElementById("j" + i + "ajouterBlk").onclick = function(){
        blkj[i - 1] += 1
        document.getElementById("j" + i + "Blk").innerHTML = blkj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER BLOCKS
    document.getElementById("j" + i + "enleverBlk").onclick = function(){
        blkj[i - 1] -= 1
        if (blkj[i-1] < 0) {
            blkj[i-1]=0
        }
        document.getElementById("j" + i + "Blk").innerHTML = blkj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER TURNOVERS
    document.getElementById("j" + i + "ajouterTo").onclick = function(){
        toj[i - 1] += 1
        document.getElementById("j" + i + "To").innerHTML = toj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER TURNOVERS
    document.getElementById("j" + i + "enleverTo").onclick = function(){
        toj[i - 1] -= 1
        if (toj[i-1] < 0) {
            toj[i-1]=0
        }
        document.getElementById("j" + i + "To").innerHTML = toj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };

    //AJOUTER TURNOVERS
    document.getElementById("j" + i + "ajouterFls").onclick = function(){
        flsj[i - 1] += 1
        document.getElementById("j" + i + "Fls").innerHTML = flsj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
    // ENLEVER TURNOVERS
    document.getElementById("j" + i + "enleverFls").onclick = function(){
        flsj[i - 1] -= 1
        if (flsj[i-1] < 0) {
            flsj[i-1]=0
        }
        document.getElementById("j" + i + "Fls").innerHTML = flsj[i - 1];
        calculerEfficaciteEtPointJ(i);

    };
}


function calculerEfficaciteEtPointJ(indexJoueur) {

    let pointTotal = (_2PtsReussisj[indexJoueur - 1] * 2) + (_3PtsReussisj[indexJoueur - 1] * 3) + ftReussisj[indexJoueur - 1];
    document.getElementById("j" + indexJoueur + "Pts").innerHTML = pointTotal;

    let totalReb = oRebj[indexJoueur - 1] + dRebj[indexJoueur - 1];
    document.getElementById("j" + indexJoueur + "TREB").innerHTML = totalReb;

    let eff = pointTotal + totalReb + assj[indexJoueur - 1] + stlj[indexJoueur - 1] + blkj[indexJoueur - 1] +
        (_2PtsReussisj[indexJoueur - 1] - _2PtsTentesj[indexJoueur - 1]) + (_3PtsReussisj[indexJoueur - 1] - _3PtsTentesj[indexJoueur - 1]) +
        (ftReussisj[indexJoueur - 1] - ftTentesj[indexJoueur - 1]) - toj[indexJoueur - 1];

    document.getElementById("j" + indexJoueur + "Eff").innerHTML = eff;

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