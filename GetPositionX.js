/**
* Returning note block x position
*/

function getPositionX(n){
         
           let noWhiteKeys = getSetupInfo()[0],
               noBlackKeys = getSetupInfo()[1],
               noKeys = noWhiteKeys + noBlackKeys,
               right = getSetupInfo()[2],
               left = getSetupInfo()[3];

           let pianoLength = right-left,
               noteWidth = pianoLength/noWhiteKeys,
               blackNoteWidth = 0.68181818 * noteWidth,
               noteCenter = noteWidth/2,

               blackNoteCenter = blackNoteWidth/2,
          //  blackDist1 = 0.59090909 * noteWidth,
               blackDist1 = 0.52 * noteWidth,
               blackDist2 = 1.18181818 * noteWidth;

    switch(n){

    // white notes
    case 'C1':  return left+1*noteCenter; break;
    case 'D1':  return left+3*noteCenter; break;
    case 'E1':  return left+5*noteCenter; break;
    case 'F1':  return left+7*noteCenter; break;
    case 'G1':  return left+9*noteCenter; break;
    case 'A1':  return left+11*noteCenter; break;
    case 'B1':  return left+13*noteCenter; break;

    case 'C2':  return left+15*noteCenter; break;
    case 'D2':  return left+17*noteCenter; break;
    case 'E2':  return left+19*noteCenter; break;
    case 'F2':  return left+21*noteCenter; break;
    case 'G2':  return left+23*noteCenter; break;
    case 'A2':  return left+25*noteCenter; break;
    case 'B2':  return left+27*noteCenter; break;

    case 'C3':  return left+29*noteCenter; break;
    case 'D3':  return left+31*noteCenter; break;
    case 'E3':  return left+33*noteCenter; break;
    case 'F3':  return left+35*noteCenter; break;
    case 'G3':  return left+37*noteCenter; break;
    case 'A3':  return left+39*noteCenter; break;
    case 'B3':  return left+41*noteCenter; break;

    case 'C4':  return left+43*noteCenter; break;
    case 'D4':  return left+45*noteCenter; break;
    case 'E4':  return left+47*noteCenter; break;
    case 'F4':  return left+49*noteCenter; break;
    case 'G4':  return left+51*noteCenter; break;
    case 'A4':  return left+53*noteCenter; break;
    case 'B4':  return left+55*noteCenter; break;

    case 'C5':  return left+57*noteCenter; break;
    case 'D5':  return left+59*noteCenter; break;
    case 'E5':  return left+61*noteCenter; break;
    case 'F5':  return left+63*noteCenter; break;
    case 'G5':  return left+65*noteCenter; break;
    case 'A5':  return left+67*noteCenter; break;
    case 'B5':  return left+69*noteCenter; break;


    // Black notes

    case 'Db1':  return left + 1 * blackDist1 + blackNoteCenter; break;
    case 'Eb1':  return left + 2 * blackDist1 + 1 *blackNoteWidth + blackNoteCenter; break;

    case 'Gb1':  return left + 4 * blackDist1 + 2 * blackNoteWidth + blackNoteCenter; break;
    case 'Ab1':  return left + 5 * blackDist1 + 3 * blackNoteWidth + blackNoteCenter; break;
    case 'Bb1':  return left + 6 * blackDist1 + 4 * blackNoteWidth + blackNoteCenter; break;

    case 'Db2':  return left + 8 * blackDist1 + 5 * blackNoteWidth + blackNoteCenter; break;
    case 'Eb2':  return left + 9 * blackDist1 + 6 * blackNoteWidth + blackNoteCenter; break;

    case 'Gb2':  return left + 11 * blackDist1 + 7 * blackNoteWidth + blackNoteCenter; break;
    case 'Ab2':  return left + 12 * blackDist1 + 8 * blackNoteWidth + blackNoteCenter; break;
    case 'Bb2':  return left + 13 * blackDist1 + 9 * blackNoteWidth + blackNoteCenter; break;

    case 'Db3':  return left + 15 * blackDist1 + 10 * blackNoteWidth + blackNoteCenter; break;
    case 'Eb3':  return left + 16 * blackDist1 + 11 * blackNoteWidth + blackNoteCenter; break;

    case 'Gb3':  return left + 18 * blackDist1 + 12 * blackNoteWidth + blackNoteCenter; break;
    case 'Ab3':  return left + 19 * blackDist1 + 13 * blackNoteWidth + blackNoteCenter; break;
    case 'Bb3':  return left + 20 * blackDist1 + 14 * blackNoteWidth + blackNoteCenter; break;

    case 'Db4':  return left + 22 * blackDist1 + 15 * blackNoteWidth + blackNoteCenter; break;
    case 'Eb4':  return left + 23 * blackDist1 + 16 * blackNoteWidth + blackNoteCenter; break;

    case 'Gb4':  return left + 25 * blackDist1 + 17 * blackNoteWidth + blackNoteCenter; break;
    case 'Ab4':  return left + 26 * blackDist1 + 18 * blackNoteWidth + blackNoteCenter; break;
    case 'Bb4':  return left + 27 * blackDist1 + 19 * blackNoteWidth + blackNoteCenter; break;

    case 'Db5':  return left + 29 * blackDist1 + 20 * blackNoteWidth + blackNoteCenter; break;
    case 'Eb5':  return left + 30 * blackDist1 + 21 * blackNoteWidth + blackNoteCenter; break;

    case 'Gb5':  return left + 32 * blackDist1 + 22 * blackNoteWidth + blackNoteCenter; break;
    case 'Ab5':  return left + 33 * blackDist1 + 23 * blackNoteWidth + blackNoteCenter; break;
    case 'Bb5':  return left + 34 * blackDist1 + 24 * blackNoteWidth + blackNoteCenter; break;




    default: return 0;  break;
    }
}