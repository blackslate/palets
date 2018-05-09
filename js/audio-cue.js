"use strict"

;(function audioCueLoaded(palets){
  
  // palets is already initialized by the data scripts
  
  class Cues {
    constuctor (cueDiv) {
      this.cues = palets.pairs.cues // { vowels: [], consonants: [] }


    }
  }
  
  class AudioCue {
    constructor () {
      this.pairs = palets.pairs
      // { name: { <language-code>: string}
      // , section: "audio-cue"
      // , consonants: [...]
      // , vowels: [...]
      // , words: { <name>: { properties }}
      // , speakers: { <name>: { properties }}
      // , cues: { 
      //     vowels: { "str-ing": [ [ word1, word2 ], ... ] } 
      //   , consonants: { "str-ing": [ [ word1, word2 ], ... ] }
      // }
      
      this.elements = this._getElements()
    }

    // Private methods
    
    _getElements() {
      let elements = {}
      elements.cue = {
        
      }
    }



    // Public methods

    activate () 

    }

    disactivate () {

    }
  } 

})(window.palets)