"use strict"

;(function contrasts(palets){

  if (!palets) {
    palets = window.palets = {}
  }

  palets.pairs = {
    "name": {
      "en": "Minimal Pairs"
    , "ru": "Минимальные пары"
    , "fr": "Paire minimale"
    }

  , "section": "audio-cue"

  , "words": {
      "sheep": {
       "text":  "sheep"
      , "image": "sheep.jpg"
      , "audio": ["james/sheep.mp3"]
      , "phonetics": "ʃi:p"
      }
    , "sheet": {
        "text":  "sheet"
      , "image": "sheet.jpg"
      , "audio": ["james/sheet.mp3"]
      , "phonetics": "ʃi:t"
      }
    , "shit":  {
        "text":  "shit"
      , "image": "shit.jpg"
      , "audio": ["james/shit.mp3"]
      , "phonetics": "ʃɪt"
      }
    , "ship":  {
        "text":  "ship"
      , "image": "ship.jpg"
      , "audio": ["james/ship.mp3"]
      , "phonetics": "ʃɪp"
      }
    }

  , "cues": {
      "vowels": {
        "ɪ-i:": [["ship", "sheep"], ["shit", "sheet"]]
      }
    , "consonants": {
        "p-t:": [["ship", "shit"], ["sheep", "sheet"]]
      }
    }

  , "vowels": [
      "e"   // Went, intend, send, letter.
    , "æ"   // Cat, hand, nap, flat, have.
    , "ɒ"   // Rob, top, watch, squat, sausage.
    , "ə"   // Alive, again, mother
    , "ɪ"   // it, dish.
    , "ʊ"   // Put, look, should, cook, book, look.
    , "ʌ"   // Fun, love, money, one, London, come.

    , "i:"  // Need, beat, team.
    , "u:"  // Few, boot, lose, gloomy, fruit, chew.
    , "ɑ:"  // Fast, car, hard, bath.
    , "ɔ:"  // Talk, law, bored, yawn, jaw.
    , "ɜ:"  // Nurse, heard, third, turn.
 
    , "aɪ"  // My, sight, pride, kind, flight
    , "aʊ" // Mouth, house, brown, cow, out
    , "eə"  // Hair, there, care, stairs, pear
    , "eɪ"  // Face, space, rain , case, eight
    , "ɔɪ"  // Joy, employ, toy, coil, oyster.
    , "əʊ" // No, don’t, stones, alone, hole
    , "ɪə"  // Near, ear, clear, tear, beer, fear
    ]

  , "consonants": [
      "b"  // bay
    , "d"  // die
    , "dʒ" // judge
    , "f"  // fee
    , "h"  // hay
    , "j"  // yes
    , "k"  // cake
    , "l"  // lie
    , "m"  // may
    , "n"  // no
    , "p"  // pay
    , "s"  // so
    , "t"  // tie
    , "tʃ" // church
    , "v"  // vow
    , "w"  // weigh
    , "z"  // zoo
    , "ð"  // they
    , "ŋ"  // sing
    , "ɡ"  // go
    , "ɹ"  // rye
    , "ʃ"  // show
    , "ʒ"  // Jacques
    , "θ"  // thigh
    ]

  , "speakers": {
      "james": {
        "image": ""
      , "name": "James"
      , "accent": "British"
      }
    }
  }

  palets.svoy = [
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


})(window.palets)