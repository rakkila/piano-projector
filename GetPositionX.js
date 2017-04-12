/**
* Returning note block x position
*/

function getPositionX(n){


        let left = -10.20,
            right = 11.05;
        pianoLength = right-left,
        noteWidth = pianoLength/(36),
        noteCenter = pianoLength/(36*2);

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
/*
    case 'C3':  return -0.8; break;
 
    case 'D3':  return -0.42; break;
    
    case 'E3':  return -0.04; break;
    case 'F3':  return 0.27; break;
    case 'Gb3':  return 0.42; break;
    case 'G3':   return 0.65; break;
    case 'Ab3':  return 0.83; break;
    case 'A3':  return 1.03; break;
    case 'Bb3':  return 1.23; break;
    case 'B3':  return 1.39; break;
    case 'C4':  return 1.7;  break;
    case 'Db4':  return 1.85; break;
    case 'D4':  return 2.07; break;
    case 'Eb4':  return 2.27; break;
    case 'E4':  return 2.45; break;
    case 'F4':  return 2.77; break;
    case 'Gb4':  return 2.89; break;
    case 'G4':  return 3.12; break;
    case 'Ab4':  return 3.27; break;
    case 'A4':  return 3.49; break;
    case 'Bb4':  return 3.68; break;
    case 'B4':  return 3.85; break;

    // Black notes
    case 'Db3':  return -0.64; break;
    case 'Eb3':  return -0.21; break;

*/

    default: return 0;  break;
    }
}