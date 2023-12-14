import { useState, useEffect } from 'react'

interface Props {
  words: string[]
  speed?: number
}

const colorList = [
  'amber',
  'green',
  'teal',
  'sky',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
]

const aOrAn = (word: string) => {
  const aList = ['a', 'e', 'i', 'o', 'u']
  if (aList.includes(word.toLowerCase()[0])) {
    return 'an'
  } else {
    return 'a'
  }
}


const TypingEffect: React.FC<Props> = ({ words, speed = 1000 }) => {
  const randomNumber = Math.floor(Math.random() * colorList.length)
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [color, setColor] = useState(colorList[randomNumber])
  const [typeSpeed, setTypeSpeed] = useState(speed)
  
  useEffect(() => {
    const currentWord = words[wordIndex]

    const type = () => {
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
      } else {
        setText(currentWord.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentWord) {
        setTypeSpeed(1000) 
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setTypeSpeed(speed)
        setWordIndex((prevWordIndex) => {
          const newIndex = (prevWordIndex + 1) % words.length;
          const newColor = colorList[newIndex];
          setColor(newColor);
          return newIndex;
        });
      } else {
        setTypeSpeed(speed)
      }
    }

    const timer = setTimeout(type, typeSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex])

  return (
    <>
      <span>{aOrAn(text)} </span>
      <span style={{ color }}>{text}</span>
    </>
  )
}

export default TypingEffect