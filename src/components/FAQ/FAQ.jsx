import FAQCard from "./FAQCard";

const FAQ = () => {
  const QA = [
    {
      question: "What is the theme of the Hackathon?",
      answer:
        "The hackathon is open-themed, giving you the freedom to build your wildest ideas.",
    },
    {
      question: "How much is the registration fee?",
      answer:
        "Absolutely Zil, Nothing, Nada. The Hackathon is completely free of cost to all selected teams.",
    },
    {
      question: "How many people should be there in a team?",
      answer: "A team should consist between 2 and 5 members",
    },
    {
      question: "What about food?",
      answer:
        "What about it? We only require that you bring your laptop and items necessary for you to hack. We’ll take care of all your needs, be it food or food.",
    },
    {
      question: "Can I work on my idea before the Hackathon?",
      answer: "No. Feel free to brainstorm and create wireframes though",
    },
    {
      question: "I’m a beginner, can I participate?",
      answer:
        "Ofcourse! We have THE most amazing mentors to help you out at all times!",
    },
  ];
  return (
    <div className="faq">
      <div className="faq-container container mx-auto px-10 py-10 flex flex-col items-start">
        <h1 className="font-bold text-start faq-heading">
          FREQUENTLY ASKED
          <br />
          QUESTIONS .
        </h1>
        <div className="flex flex-col w-full pt-10">
          {QA.map((qa, index) => (
            <FAQCard
              key={index}
              question={qa.question}
              answer={qa.answer}
              index={index}
            />
          ))}
          <div className="pt-5 text-md m-auto">
            Have more questions? Feel free to contact us at{" "}
            <a className="text-purple-500" href="mailto:support@excelmec.org">
              support@excelmec.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
