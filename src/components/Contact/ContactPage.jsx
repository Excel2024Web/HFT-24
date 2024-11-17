import ContactCard from "./ContactCard";
import chairperson from "../../assets/contacts/sreeparvathy_crop.jpg";
import gensec from "../../assets/contacts/arif.jpg";
import jointsec from "../../assets/contacts/akash.jpg";
import eventhead from "../../assets/contacts/Harin.jpg";
import eventhead2 from "../../assets/contacts/Rohit.jpg";
import cstech from "@/assets/contacts/vaid.jpg";

export default function Contact() {
  const contactDetails = [
    {
      name: "Sreeparvathy S Nair",
      title: "Chairperson",
      email: "sreeparvathynair.mec@gmail.com",
      phone: "+918590827371",
      linkedin: "https://www.linkedin.com/in/sreeparvathy-nair-b29a6326b/",
      img: chairperson,
    },

    {
      name: "Arif Basheer",
      title: "General Secretary",
      email: "arifbasheer.mec@gmail.com",
      phone: "+919037473024",
      linkedin: "https://www.linkedin.com/in/arif-basheer-b20491258/",
      img: gensec,
    },

    {
      name: "Akash V P",
      title: "Joint Secretary",
      email: "akashvp.mec@gmail.com",
      phone: "+919633776062",
      linkedin: "https://www.linkedin.com/in/akashvp/",
      img: jointsec,
    },

    {
      name: "Vaidyanath B",
      title: "CS-Tech Manager",
      email: "vaidyanathb.mec@gmail.com",
      phone: "+918289986700",
      linkedin: "https://www.linkedin.com/in/vaidyanath-b-b169a5258/",
      img: cstech,
    },

    {
      name: "Harin V",
      title: "Event Head",
      email: "harinvchirappanath@gmail.com",
      phone: "+916282668713",
      linkedin: "https://www.linkedin.com/in/harin-v-chirappanath-755669242",
      img: eventhead,
    },

    {
      name: "Rohit Anish",
      title: "Event Head",
      email: "",
      phone: "+918301037205",
      linkedin: "https://www.linkedin.com/in/rohit-anish-b6b587140",
      img: eventhead2,
    },
  ];
  return (
    <>
      <div className="w-[100vw] flex justify-center items-center flex-col overflow-hidden h-full pb-10">
        <h1 className="mt-10 text-4xl sm:text-6xl text-center font-base-neue-bold text-white tracking-wider">
          Contact Us
        </h1>
        <p className="text-center font-syne-medium md:w-[30vw] w-[90vw] mt-5 mb-10 bg-gradient-to-r  bg-clip-text text-white text-[18px]">
          If you have questions, feedback, or just want to chat, feel free to
          reach out to us.
        </p>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-[50px]">
          {contactDetails.map((cd, index) => (
            <ContactCard key={index} details={cd} />
          ))}
        </div>
      </div>
    </>
  );
}
