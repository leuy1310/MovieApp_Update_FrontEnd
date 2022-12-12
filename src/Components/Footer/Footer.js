import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function Footer() {
  const links = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Act on Specified Commercial Transactions",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="bg-black  w-full h-full pt-16 pb-5 pl-5 pr-5 text-white z-10">
      <div className="flex justify-start text-white">
        <a href="facebook.com" className="text-4xl mr-5">
          <AiFillFacebook />
        </a>
        <a href="twitter.com" className="text-4xl mr-5">
          <AiFillTwitterSquare />
        </a>
        <a href="instagram.com" className="text-4xl mr-5">
          <AiFillInstagram />
        </a>
        <a href="youtube.com" className="text-4xl">
          <AiFillYoutube />
        </a>
      </div>
      <div className="pt-10">
        <ul className="m-0 p-0 flex flex-wrap">
          {links.map((link) => (
            <li className="basis-1/4 mb-4" key={link}>
              <a href="/" className="text-gray-400 select-none">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-10 pb-10 text-center">
        <h1 className="text-white select-none">Netflix is created by Uy VTI</h1>
      </div>
    </div>
  );
}

export default Footer;
