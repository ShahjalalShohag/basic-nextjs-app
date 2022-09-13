import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Awesome</span> Next App
      </h1>
      <p className={headerStyles.description}>
        Is this the best next app in the world?
      </p>
    </div>
  );
};

export default Header;
