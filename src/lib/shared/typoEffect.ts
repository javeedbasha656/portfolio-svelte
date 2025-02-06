export const typoEffect = (
  isTyping: boolean,
  currentCharIndex: number,
  currentWordIndex: number,
  wordPauseInterval: number,
  typingInterval: number,
  deletingInterval: number,
  word: string,
  technologiesList: string[],
  displayText: string
) => {
    
  if (isTyping && currentCharIndex < word.length) {
    const timeout = setTimeout(() => {
      displayText += word[currentCharIndex];
      currentCharIndex = currentCharIndex + 1;
    }, typingInterval);
    return () => clearTimeout(timeout);
  } else if (isTyping && currentCharIndex === word.length) {
    const timeout = setTimeout(() => {
      isTyping = false;
    }, wordPauseInterval);
    return () => clearTimeout(timeout);
  } else if (!isTyping && currentCharIndex > 0) {
    const timeout = setTimeout(() => {
      displayText = displayText.slice(0, -1);
      currentCharIndex = currentCharIndex - 1;
    }, deletingInterval);
    return () => clearTimeout(timeout);
  } else if (!isTyping && currentCharIndex === 0) {
    const timeout = setTimeout(() => {
      currentWordIndex = (currentWordIndex + 1) % technologiesList.length;
      isTyping = true;
    }, typingInterval);
    return () => clearTimeout(timeout);
  }
};
