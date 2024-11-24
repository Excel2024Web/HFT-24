import FAQCard from "./FAQCard";

const FAQ = () => {
  const QA = [
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "HFT is open-themed, so let your imagination run wild and build whatever your heart desires.",
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
      question: "I’m a beginner, can I participate?",
      answer:
        "New to coding? No problem! HFT is for everyone and is sure to add wings to your coding journey.",
    },
  ];
  return (
    <div id="faq" className="faq mt-[80px]">
      <div className="container flex flex-col items-start px-10 py-10 mx-auto faq-container">
        <h1 className="text-5xl max-md:text-4xl font-base-neue-bold text-start faq-heading">
          FREQUENTLY ASKED
          <br />
          QUESTIONS .
        </h1>
        <div className="flex flex-col w-full pt-10 font-syne-medium">
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
            <a className="text-red-700" href="mailto:support@excelmec.org">
              support@excelmec.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
