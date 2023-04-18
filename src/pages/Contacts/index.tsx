import React from "react";
import styles from "../../styles";
import { socialMediaLinks } from "../../constants/index";

const Contact: React.FC = () => {
  return (
    <div className="p-6">
      <h3 className={`${styles.heading3} text-black mb-8`}>Contacts</h3>
      <div className="px-4">
        <div className="pb-8">
          <p className={`${styles.paragraph} mb-4`}>
            For business questions, contact us in a way convenient for you:
          </p>
          <p className={`${styles.paragraph} pl-4`}>+420 123 456 789</p>
          <p className={`${styles.paragraph} pl-4`}>johndoe@example.com</p>
        </div>
        <p className={`${styles.paragraph} text-black pb-4`}>
          We actively post on our social networks various interesting things for
          both factory owners and simple radio amateurs. Our products are used
          by the world's top companies. Follow us and don't forget to comment
          and share with others ;-)
        </p>
        <ul className="flex gap-4 pb-4 pl-4">
          {socialMediaLinks.map((item) => (
            <li key={item.name} className="relative hover:-top-1">
              <a href={item.link}>
                <img src={item.imageUrl} alt={item.name} className="w-[26px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
