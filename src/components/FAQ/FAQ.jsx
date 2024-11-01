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
    {
      question: "I have more questions.",
      answer:
        "I have no more answers. JUST KIDDING! Feel free to contact us at support@excelmec.org.",
    },
  ];
  return (
    <div className="container max-w-full md:max-w-[70%] mx-auto py-8">
      <h2 className="text-4xl text-center text-white py-5 tracking-wide">
        Frequently Asked Questions
      </h2>
      <div className="container flex flex-col m-auto p-[20px] sm:p-[50px] justify-evenly items-center">
        {QA.map((qa, index) => (
          <FAQCard key={index} question={qa.question} answer={qa.answer} />
        ))}
      </div>
    </div>
  );
};
export default FAQ;
