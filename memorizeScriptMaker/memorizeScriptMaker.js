// Script runs to help in memorizing scripts/speeches.
// Takes the first letter of each word (along with punctuation) 
// and creates the condensed version.

function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

const firstLetterScript = (para) => {
  const spaceSplitpara = para.split(" ");
  // console.log(spaceSplitpara);
  const letterSplitpara = spaceSplitpara.map((e)=>{
    // console.log(e[0].toUpperCase());
    return (e[0].toUpperCase());
  });
  console.log(letterSplitpara);
}

const script = ["Hi, I’m Tyiss, the founder of Kumo Link. We help small businesses establish a powerful online presence through high quality web development and SEO optimization. In today’s digital world, having a great website isn’t just about looking good, it’s about being found by the right customers and turning visitors into paying clients.","Startups face unique challenges: tight budgets, fierce competition, and the need to scale fast. Many early-stage companies settle for DIY website builders or generic templates that don’t reflect their brand, aren’t optimized for search engines, and fail to convert visitors into customers. Without a strong digital foundation, even the best startup ideas can struggle to gain traction.","Kumo Link helps startups launch and scale with custom-built, high-performance websites that are designed for growth. We don’t just build websites—we create SEO-optimized, conversion-driven platforms that work as an extension of your business. Our tech stack includes React, Next.js, and Schema.org integration to ensure your site loads fast, ranks high, and stands out in a crowded market. Whether you're pre-launch or scaling rapidly, we build with flexibility in mind so your website can grow alongside your business.","Unlike big agencies that charge sky-high fees or website builders that leave you stuck with a generic design, Kumo Link offers a startup-friendly approach—custom solutions at competitive pricing, designed for scalability. We understand startups need speed, efficiency, and adaptability, so we focus on lean, results-driven development that gets your business online and competitive fast. Plus, with built-in SEO and performance optimization, your site won’t just look good—it will work hard to bring in customers and investors alike.","If you’re launching a startup or scaling your business, let’s talk! A strong online presence can be the difference between getting noticed or getting left behind. You can check out our work at [your website URL], or let’s set up a quick chat to see how Kumo Link can help accelerate your growth."]

script.forEach((p)=>firstLetterScript(p));