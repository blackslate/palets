"use strict"

;(function contrasts(palets){

  if (!palets) {
    palets = window.palets = {}
  }

  /**
   * For minimal_pairs either answer can be used as the cue, so no
   * specific "cue" key is needed. A default audio icon will be shown.
   * @type {Array}
   */
  let palets.minimal_pairs = [
    { cue: {
        text:  ""
      , image: ""
      , audio: ""
      }
    , answers: [
        { text:  "sheet"
        , image: "sheet.jpg"
        , audio: ["james/sheet.mp3"]
        }
      , { text:  "shit"
        , image: "shit.jpg"
        , audio: ["james/shit.mp3"]
        }
      ]
    }

  , { answers: [
        { text:  "sheep"
        , image: "sheep.jpg"
        , audio: ["james/sheep.mp3"]
        }
      , { text:  "ship"
        , image: "ship.jpg"
        , audio: ["james/ship.mp3"]
        }
      ]
    }

  ]

  let palets.svoy = [
    { cue: {
        text: "Ты не видела {cloze} собаку."
      , image: ""
      , audio: ""
      }
    , answers: [
        { text: "свою"
        , image: ""
        , audio: "AUDIO FOR Ты не видела свою собаку."
        , right: true
        , preferred: true
        }
      , { text:  "твою"
        , image: ""
        , audio: "AUDIO FOR Ты не видела твою собаку."
        , right: true
        }
      ]
    }

  ]


})(palets)


// Need to show an image for
// * The cue
// * Each answer