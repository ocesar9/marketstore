import githubLogo from "/assets/github.png";
import linkedInLogo from "/assets/linkedin.png";
import perfilPhoto from "/images/perfil.jpg";

export default function About() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center gap-4"
      style={{ height: "80vh" }}
    >
      <p className="fs-5 text-bold text-center mb-0" style={{ fontWeight: "600" }}>
        This project implements an advanced shopping cart with features like
        navigation using React Router, responsive UI components with React
        Bootstrap, and persistent data storage using LocalStorage. For user
        authentication, it utilizes bcrypt for secure password hashing, Express
        for backend API development, and CORS for security. Additionally, it
        incorporates React Email for creating and sending custom emails,
        potentially leveraging Resend for email management and delivery
        tracking. Overall, this project combines various frameworks and
        libraries to create a robust e-commerce solution with enhanced user
        experience and security measures.
      </p>
      <div className="d-flex flex-column align-items-center gap-2">
        <div
          style={{
            height: "180px",
            width: "180px",
            border: "2px solid black",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${perfilPhoto})`,
          }}
        ></div>
        <div className="d-flex flex-column align-items-center" style={{fontWeight:"700"}}>
            <h2 className="fs-2 text-uppercase">Júlio Guimarães</h2>
            <span>Created and developed by</span>
        </div>
        <div className="d-flex gap-3">
        <a
          href="https://www.linkedin.com/in/j%C3%BAlio-guimar%C3%A3es-183110162/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="github" width={36} height={36} />
        </a>
        <a
          href="https://github.com/ocesar9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github" width={36} height={36} />
        </a>
      </div>
      </div>
    </div>
  );
}
