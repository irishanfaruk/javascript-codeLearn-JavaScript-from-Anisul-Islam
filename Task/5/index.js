// vowel and consonant

var x = prompt("Enter a ltter")
x = x.toLowerCase()
switch (x) {
// systeme 1
    /*
     case 'a':
     case 'e':
     case 'i':
     case 'o':
     case 'u':
         document.write(x + ' ltter is vowel');
         break;
    */
//    systeme 2
    case 'a':
        document.write(x + ' ltter is vowel');
        break;
    case 'e':
        document.write(x + ' ltter is vowel');
        break;
    case 'i':
        document.write(x + ' ltter is vowel');
        break;
    case 'o':
        document.write(x + ' ltter is vowel');
        break;
    case 'u':
        document.write(x + ' ltter is vowel');
        break;
    default:
        document.write(x + ' ltter is consonant');

}