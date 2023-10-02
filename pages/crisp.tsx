
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("afa9e133-dad1-4749-98ff-eea8f317c268");
  });
  return null;
}

export default CrispChat;