// Script runs to help in memorizing scripts/speeches.
// Takes the first letter of each word (along with punctuation) 
// and creates the condensed version.
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");
const para4 = document.getElementById("para4");
const para5 = document.getElementById("para5");

const script = [
  "Hi, I’m Tyiss, the founder of Kumo Link. We help small businesses establish a powerful online presence through high quality web development and SEO optimization. In today’s digital world, having a great website isn’t just about looking good, it’s about being found by the right customers and turning visitors into paying clients.",
  "Many small businesses struggle with websites that are outdated, slow, or invisible in search results. They either don’t have the time, expertise, or resources to create an effective online presence. Without proper SEO and optimization, they’re missing out on valuable customers who are searching for their services every day.",
  "That’s where Kumo Link comes in. We build modern, user-friendly websites that are not just visually appealing but also optimized for search engines, helping businesses rank higher and attract more customers. Our services go beyond web design—we offer SEO consulting, website performance enhancements, and even social media guidance to help businesses maximize their digital footprint. Plus, we structure our packages to be flexible and scalable, so small businesses can afford top-tier digital solutions without breaking the bank.",
  "Unlike generic website builders or agencies that charge a fortune for cookie-cutter designs, Kumo Link focuses on custom solutions tailored to each client’s needs. We use cutting-edge technology like React, Next.js, and Schema.org integration to ensure every website is fast, responsive, and optimized for growth. Whether you need a brand-new website, an SEO revamp, or ongoing support, we make sure your business gets real, measurable results.",
  "If you’re ready to take your business’s online presence to the next level, let’s talk! I’d love to discuss how Kumo Link can help your business grow."
]

// script.forEach((p)=>firstLetterScript(p));

para1.innerHTML = script[0];
para2.innerHTML = script[1];
para3.innerHTML = script[2];
para4.innerHTML = script[3];

const firstLetterScript = (para) => {
  const spaceSplitpara = para.innerHTML.split(" ");
  // console.log(spaceSplitpara);
  const letterSplitpara = spaceSplitpara.map((e)=>{
    // console.log(e[0].toUpperCase());
    return (e[0].toUpperCase());
  });
  console.log(letterSplitpara);
  para.innerHTML = letterSplitpara;
}
para5.innerHTML = script[4];