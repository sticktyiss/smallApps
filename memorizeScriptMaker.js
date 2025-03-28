// Script runs to help in memorizing scripts/speeches.
// Takes the first letter of each word (along with punctuation) 
// and creates the condensed version.

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

const firstLetterScript = (para) => {
  spaceSplitpara = para.split(" ");
  console.log(spaceSplitpara);
}

script = "Hi, I’m [Your Name], the founder of Kumo Link. We help small businesses establish a powerful online presence through high-quality web development and SEO optimization. In today’s digital world, having a great website isn’t just about looking good—it’s about being found by the right customers and turning visitors into paying clients."

firstLetterScript(script);