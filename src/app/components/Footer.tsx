import { Link, Button } from "@nextui-org/react";
import EmailIcon from "../icons/EmailIcon";

export const Footer = () => {
  return (
    <div className="mb-5 flex justify-end">
      <Button variant="solid" color="secondary">
        <Link
          
          
          href="mailto: chrisobrien88@gmail.com"
          target="_blank"
          className="text-gray-600"
        >
          <EmailIcon fill="gray" className="mr-2" />
          Get in touch
        </Link>
      </Button>
    </div>
  );
};
