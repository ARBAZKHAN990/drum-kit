
// sllecting length


// looping
for(var i = 0; i< buttonLength; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", ClickMe)
}
function ClickMe(){

 // sound for every drum using switch casess
var soundCreated = this.innerHTML

  switch (soundCreated) {
    case "w":
    var audio1 = new Audio("sounds/tom1-1.mp3");        // audio play
    audio1.play();
      break;
    case "a":
    var audio2 = new Audio("sounds/tom1-2.mp3");        // audio play
    audio2.play();
      break;
      case "s":
      var audio3 = new Audio("sounds/tom1-3.mp3");        // audio play
      audio3.play();
        break;
        case "d":
        var audio4 = new Audio("sounds/tom1-4.mp3");        // audio play
        audio4.play();
          break;
          case "j":
          var audio5 = new Audio("sounds/crash.mp3");        // audio play
          audio5.play();
            break;
            case "k":
            var audio6 = new Audio("sounds/kick-base.mp3");        // audio play
            audio6.play();
              break;
              case "l":
              var audio7 = new Audio("sounds/snare.mp3");        // audio play
              audio7.play();
                break;
    default:

  }


}
