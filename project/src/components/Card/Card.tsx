import { UserProps } from "../../App";
import CardLogo from "./CardLogo";

interface CardProps {
  user: UserProps;
}

export const Card = ({ user }: CardProps) => {
  const { imageSource, name, surname, company, position, email, social } = user;

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
      <div className={`card--body ${imageSource ? "center" : ""}`}>
        <div className="card--body-identity">
          {imageSource && <div className="card--body-identity-picture"></div>}

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

        {/* <div className="card--body-name">
          <p className="title">{surname}</p>
          <p className="subtitle">{name}</p>
          <p className="text bold">{position}</p>
          <p className="text">
            @ <span className="text bold">{company}</span>
          </p>
        </div> */}
        {/* <div className="card--body-job">
          <div className="card--body-position">
            <p className="text bold">{position}</p>
            <p className="text">
              @ <span className="text bold">{company}</span>
            </p>
          </div>
          <div className="card--body-company">
            <p className="text">
              @ <span className="text bold">{company}</span>
            </p>
          </div>
        </div> */}

        {/* <div className="card--body-contact">
          <p className="text bold">{position}</p>
          <p className="text">
            @ <span className="text bold">{company}</span>
          </p>
        </div> */}
      </div>
      <div className="card--footer">
        <div className="card--footer-contacts">
          <p className="text">{email}</p>
          <p className="text">{social}</p>
        </div>

        {social ? (
          <div className={`card--footer-qrcode ${social ? "valid" : ""}`}>
            {/* generate a qr code with API QR.io  https://qr.io/api-documentation */}
          </div>
        ) : (
          <CardLogo size={70} color="#e1ff02" />
        )}
      </div>

      <p className="title id center">ID:XXXXX</p>
    </div>
  );
};
