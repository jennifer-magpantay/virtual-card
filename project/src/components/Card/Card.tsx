import { useEffect } from "react";

import { UserProps } from "../../App";
import CardLogo from "./CardLogo";

interface CardProps {
  user: UserProps;
}

export const Card = ({ user }: CardProps) => {
  const { name, surname, company, position, email, social } = user;

  const generateQRCode = (social: string, pixels: string) => {
    const encodeSocialUrl = encodeURI(social);
    const URL_API = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeSocialUrl}&size=${pixels}x${pixels}`;

    return URL_API;
  };

  const formatSocialText = (social: string) => {
    const formatedSocialText = social.replace("https://", "");
    return formatedSocialText;
  };

  return (
    <div className="card">
      <div className="card--header">
        <div className="card--header-logo">
          <CardLogo size={50} color="#e1ff02" />
        </div>
        <div className="card--header-text">
          <p className="subtitle">ID BADGE</p>
        </div>
      </div>
      <div className="card--body ${imageSource">
        <div className="card--body-identity">
          <p className="title">{surname}</p>
          <p className="subtitle">{name}</p>
          <p className="text bold">{position}</p>
          <p className="text">
            @ <span className="text">{company}</span>
          </p>
        </div>

        <div className="card--body-id">
          <p className="title id">ID:XXXXX</p>
        </div>
      </div>
      <div className="card--footer">
        <div className="card--footer-contacts">
          <p className="text">{email}</p>
          <p className="text">{formatSocialText(social)}</p>
        </div>

        {social ? (
          <div className={`card--footer-qrcode ${social ? "valid" : ""}`}>
            <img src={generateQRCode(social, "180")} alt="QRCODE" />
          </div>
        ) : (
          <CardLogo size={70} color="#e1ff02" />
        )}
      </div>

      <p className="title id center">ID:XXXXX</p>
    </div>
  );
};
