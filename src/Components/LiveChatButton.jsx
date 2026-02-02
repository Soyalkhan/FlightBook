import { MessageCircleMore } from "lucide-react";

const LiveChatButton = () => {
  const handleClick = () => {
    const phone = "919625072091"; // Country code + number
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const message = `Enquiry from flyanza%0ADate: ${date}%0ATime: ${time}`;

    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="flex gap-3 justify-center items-center  hover:bg-white text-[#1cef99] font-bold py-2 px-4 border-2 border-[#1cef99] rounded-full"
      >
        Live chat with Agent on WhatsApp <MessageCircleMore size={24} />
      </button>
    </div>
  );
};

export default LiveChatButton;
