import styles from "../styles/pages/Home.module.scss";
import logoImg from "../assets/img/logo.png";
import LiquidGlassButton from "../components/LiquidGlassButton";
import { DiscordIcon, TwitterIcon } from "../utils/Icons";

const HomePage = () => {
  const handleTwitterClick = () => {
    window.open("https://x.com/LostariaMC", "_blank", "noopener,noreferrer");
  };

  const handleDiscordClick = () => {
    window.open(
      "https://discord.gg/yZn4GeTJeA",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="Lostaria" className={styles.logo} />
        </div>
        <h1 className={styles.title}>Lostaria</h1>
        <p className={styles.subtitle}>On revient bientôt !</p>
        <div className={styles.comingSoon}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.socialButtons}>
          <LiquidGlassButton
            className={styles.socialButton}
            onClick={handleTwitterClick}
            arialLabel="Suivre Lostaria sur Twitter"
          >
            <TwitterIcon className={styles.socialIcon} />
            Twitter
          </LiquidGlassButton>
          <LiquidGlassButton
            className={styles.socialButton}
            onClick={handleDiscordClick}
            arialLabel="Rejoindre le Discord Lostaria"
          >
            <DiscordIcon className={styles.socialIcon} />
            Discord
          </LiquidGlassButton>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
