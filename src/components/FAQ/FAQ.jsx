import FAQCard from "./FAQCard";
import Bg from "@/assets/faq/11.png";
import Image from "next/image";
import astro2 from "@/assets/Landing/astro2.svg";
import astro3 from "@/assets/Landing/astro3.svg";
import bottom_right from "../../assets/backgrounds/about/bottomright.png";

const FAQ = () => {
  const QA = [
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "This time, we’re diving into Gen AI and fintech, but open innovation welcomes bold ideas beyond these themes",
    },
    {
      question: "How much is the registration fee?",
      answer:
        "It's free! Yeah, you heard that right. No strings attached, just pure coding fun.",
    },
    {
      question: "How many people should be there in a team?",
      answer: "You can form teams of 2-4 members.",
    },
    {
      question: "What about food?",
      answer:
        "Don't worry about hunger pangs. We've got you covered with food and refreshments. Just don't forget your laptop and coding skills.",
    },
    {
      question: "Can I work on my idea before the Hackathon?",
      answer: "No. Feel free to brainstorm and create wireframes though",
    },
    {
      question: "Is hybrid participation allowed?",
      answer:
        "Nope! Everyone on the team needs to show up offline. Think of it as a team-building exercise—you can’t share pizza or high-fives over Zoom! 😉",
    },
    {
      question: "I’m a beginner, can I participate?",
      answer:
        "New to coding? No problem! HFT is for everyone and is sure to add wings to your coding journey.",
    },
  ];
  return (
    <div id="faq" className="faq mt-[80px] px-4 relative">
      <Image className="bottom-right1 top-[-80px] z-[0]" src={bottom_right} />
      <div className="relative container flex flex-col z-10 items-start px-10 py-10 mx-auto faq-container overflow-hidden ">
        <Image
          src={Bg}
          alt="bg"
          className="absolute z-0 top-0 bottom-0 right-0 left-0 opacity-80"
          fill
        />
        {/* <Image
            className="hidden sm:block absolute bottom-0 md:bottom-0 md:right-[-8rem] z-0"
            src={astro2}
            alt="astro"
          />
          <Image
            className="sm:hidden absolute bottom-0 sm:bottom-0 right-0 sm:right-[-4rem] z-0"
            src={astro3}
            alt="astro-mob"
          /> */}
        <h1 className="text-5xl max-md:text-4xl font-base-neue-bold text-start faq-heading z-20">
          FREQUENTLY ASKED
          <br />
          QUESTIONS .
        </h1>
        <div className="flex flex-col w-full pt-10 font-syne-medium z-20">
          {QA.map((qa, index) => (
            <FAQCard
              key={index}
              question={qa.question}
              answer={qa.answer}
              index={index}
            />
          ))}
          <div className="pt-5 m-auto text-md">
            Have more questions? Feel free to contact us at{" "}
            <a className="underline" href="mailto:support@excelmec.org">
              support@excelmec.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
