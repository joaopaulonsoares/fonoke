import styles from '@/styles/Home.module.css'
import AnimatedText from "react-animated-text-content";

interface KaraokeInterface{
  text:string
}

const vogais = ["a", "e", "i", "o", "u"]

function removeAccentofVogal(text:string){       
    let testChar = text + ''
    testChar = testChar.toLowerCase();                                                         
    testChar = testChar.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    testChar = testChar.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    testChar = testChar.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    testChar = testChar.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    testChar = testChar.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    return testChar;                 
}

export function KaraokeText({text}:KaraokeInterface){

  const worldWithVogalsMultiplied = text.split('').map(function(char) {
    if (vogais.indexOf(removeAccentofVogal(char).toLowerCase()) !== -1) {
      return char.repeat(4)
    } else {
      return char
    }
  }).join('');

  return (
    <AnimatedText
      type="chars" // animate words or chars
      animationType="wave"
      interval={0.2}
      duration={3}
      tag="p"
      className={styles.karaokeFont}
      includeWhiteSpaces
      threshold={0.3}
  >
    {worldWithVogalsMultiplied}
  </AnimatedText>
  )
}