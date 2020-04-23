/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {    /**
     * Create phrase.
     * @param {string} phrase - The text of the phrase
     */
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };
    
    /**
     * Display boxes for the letters on the web page
     */
    addPhraseToDisplay() {
        let html = '<ul>';
        for (let i = 0; i < this.phrase.length; i += 1) {
            const letter = this.phrase[i];
            if (letter == ' ') {
                html += '<li class="space"> </li>';
            } else {
                html += `<li class="hide letter ${letter}">${letter}</li>`;
            };
        };
        html += '</ul>';
        document.getElementById("phrase").innerHTML = html;
    };
    
    /**
     * Check it the letter given by the player is in the phrase
     * @param  {string} letter - The letter choosed by the player
     * @return {boolen}          Yes if the letter is in the phrase
     */
    checkLetter(letter) {return this.phrase.indexOf(letter) != -1};
    
    /**
     * Show the mached letter and make it boucing. The letters allready shown did not bonce.
     * @param {string} letter - the letter to show if it is on the phrase
     */
    showMatchedLetter(letter) {
        const divPhrase = document.getElementById("phrase");
        const regExp = new RegExp(`hide letter ${letter}`, "g");
        let html = divPhrase.innerHTML;
        html = html.replace(/animated bounce delay\-2s/g, "");
        html = html.replace(regExp, `show letter ${letter} animated bounce delay-2s`);
        divPhrase.innerHTML = html;
    };
    
    /**
     * Remove boxes from the displayed phrase
     */
    resetLetter() {
        const divPhrase = document.getElementById("phrase");
        divPhrase.innerHTML = '<ul></ul>';
    };
};


