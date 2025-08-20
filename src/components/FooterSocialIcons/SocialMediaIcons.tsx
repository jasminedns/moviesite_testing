import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  TwitterLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react/ssr";

const LinkArray = [
  { name: "Instagram", link: "https://instagram.com/", icon: InstagramLogoIcon },
  { name: "Facebook", link: "https://facebook.com/", icon: FacebookLogoIcon },
  { name: "Twitter", link: "https://twitter.com/", icon: TwitterLogoIcon },
  { name: "YouTube", link: "https://youTube.com/", icon: YoutubeLogoIcon },
];

export default function SocialMediaIcons() {  
  return (
    <div className="flex flex-row p-5">
      {LinkArray.map(({ name, link, icon: Icon }) => (
        <a
            data-testid = "social-icons"
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="mx-3"
        >
          <Icon size={32} className="hover:p-0.5"/>
        </a>
      ))}
    </div>
  );
}


