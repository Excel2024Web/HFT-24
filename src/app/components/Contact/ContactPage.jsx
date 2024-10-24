import ContactCard from "./ContactCard";
import chairperson from "../../assets/contacts/sreeparvathy_crop.jpg"
import gensec from "../../assets/contacts/arif.jpg"
import jointsec from "../../assets/contacts/akash.jpg"
import sim from "../../assets/contacts/laya.jpg"
import eventhead from "../../assets/contacts/Athul.png"
import eventhead2 from "../../assets/contacts/aleena.jpg"



export default function Contact (){
    const contactDetails = [
        {
            name: "Sreeparvathy S Nair",
            title: "Chairperson",
            email: "sreeparvathynair.mec@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/sreeparvathy-nair-b29a6326b/",
            img: chairperson
        },
        
        {
            name: "Arif Basheer",
            title: "General Secretary",
            email: "arifbasheer.mec@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/arif-basheer-b20491258/",
            img: gensec
        },

        {
            name: "Akash V P",
            title: "Joint Secretary",
            email: "akashvp.mec@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/akashvp/",
            img: jointsec
        },

        {
            name: "Laya Sara Joy",
            title: "Social Initiatives Manager",
            email: "layasarajoy.mec@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/laya-sara-joy/",
            img: sim
        },

        {
            name: "Athul Babu",
            title: "Event Head",
            email: "athulbabu5088@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/athul-babu-9b55362a5/",
            img: eventhead
        },

        {
            name: "Aleena Prince",
            title: "Event Head",
            email: "aleenaprince.mec@gmail.com",
            phone: "",
            linkedin: "https://www.linkedin.com/in/aleena-prince-b85244230/",
            img: eventhead2
        }
    ]
    return (
        <>
        <div className="w-[100vw] flex justify-center items-center flex-col overflow-hidden h-full pb-10">
            <h1 className="text-center mt-10 text-4xl">Contact <span className="text-violet-500">Us</span></h1>
            <p className="text-center md:w-[30vw] w-[90vw] mt-5 mb-10 font-sans bg-gradient-to-r from-[#ffffff] to-[#00ffff] bg-clip-text text-transparent text-[18px]" >We’d love to hear from you! Whether you have questions, feedback, or just want to chat, feel free to reach out to us. Your thoughts and inquiries are valuable to us, and we’re here to help in any way we can.</p>
            <div className="flex flex-wrap justify-center flex-row items-center  h-fit w-[80vw] gap-[120px] align-middle">

                {contactDetails.map((cd, index) => (
                    <ContactCard
                        key={index}
                        details = {cd}
                    />
                ))}


            </div>
        </div>
        </>
    )
}