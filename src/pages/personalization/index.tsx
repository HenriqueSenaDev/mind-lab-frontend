import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme-context";
import { ReactComponent as PrimaryTopShape } from "../../assets/personalization/primary-top-shape.svg";
import { ReactComponent as SecondaryTopShape } from "../../assets/personalization/secondary-top-shape.svg";
import { ReactComponent as PrimaryBottomShape } from "../../assets/personalization/primary-bottom-shape.svg";
import { ReactComponent as SecondaryBottomShape } from "../../assets/personalization/secondary-bottom-shape.svg";
import { ReactComponent as CheckIcon } from "../../assets/personalization/check.svg";
import { ReactComponent as PlayButtonIcon } from "../../assets/personalization/demo/play.svg";
import { ReactComponent as SearchIcon } from "../../assets/personalization/demo/search.svg";
import { ReactComponent as DemoCategoriesIcon } from "../../assets/personalization/demo/categories.svg";
import { ReactComponent as DemoSampleWolf } from "../../assets/personalization/demo/sample-wolf.svg";
import { ReactComponent as BottomWolf } from "../../assets/personalization/bottom-wolf.svg";
import themeDemoMonitor from "../../assets/personalization/demo/monitor.png";
import nextLessonArrow from "../../assets/personalization/demo/arrow.png";
import ColorSelector from "./components/color-selector";
import "./styles.css";

function Personalization() {
  const { setCurrentTheme, testTheme, colorToChange, setColorToChange } = useContext(ThemeContext);

  function visualizeMobileTestTheme() {
    setCurrentTheme(testTheme);
  }

  function applyTheme() {
    setCurrentTheme(testTheme);
    localStorage.setItem("defaultTheme", JSON.stringify(testTheme));
  }

  // componentWillUnmount 
  useEffect(() => {
    return () => {
      const defaultTheme = JSON.parse(localStorage.getItem("defaultTheme") as string);
      setCurrentTheme(defaultTheme);
    }
  }, []);

  return (
    <div className="personalization">
      <PrimaryTopShape className="primary-top-shape" />
      <SecondaryTopShape className="secondary-top-shape" />

      <PrimaryBottomShape className="primary-bottom-shape" />
      <SecondaryBottomShape className="secondary-bottom-shape" />

      <div className="personalization-area">
        <div className="colors-selection-card">
          <ColorSelector />
        </div>

        <div className="colors-descriptor-container">
          <div 
            className="color-descriptor"
            onClick={() => setColorToChange("primary")}
            style={ colorToChange == "primary" ? { backgroundColor: "#f2f2f2" } : {} }
          >
            <h1 className="color-title">Cor Principal</h1>

            <div className="color-definition primary-definition">
              <div className="color-sample" />

              <div className="color-hex">
                <span>Hexadecimal</span>

                <h1>{testTheme.primaryColor.hex.toUpperCase()}</h1>
              </div>
            </div>
          </div>

          <div 
            className="color-descriptor"
            onClick={() => setColorToChange("secondary")}
            style={ colorToChange == "secondary" ? { backgroundColor: "#f5f5f5" } : {} }
          >
            <h1 className="color-title">Cor Secundária</h1>

            <div className="color-definition secondary-definition">
              <div className="color-sample" />

              <div className="color-hex">
                <span>Hexadecimal</span>

                <h1>{testTheme.secondaryColor.hex.toUpperCase()}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="palete-explanation">
          <span>Descubra uma paleta de cores única: <strong>escolha a cor principal</strong> que define a essência da plataforma, e <strong>a cor secundária será a sua contrapartida complementar</strong>. Transforme sua experiência em algo verdadeiramente excepcional!</span>
        </div>

        <button 
          className="mobile-theme-visualizer"
          onClick={visualizeMobileTestTheme}
        >
          VISUALIZAR ESCOLHA
        </button>

        <button 
          className="apply-theme"
          onClick={applyTheme}
        >
          <CheckIcon className="check-icon" />

          APLICAR
        </button>
      </div>

      <div className="theme-demo-area">
        <img
          className="theme-demo-monitor"
          src={themeDemoMonitor}
          alt="theme demo monitor"
        />

        <div className="demo-sample-container">
          <div className="main-demo-area">
            <div className="demo-lesson-thumbnail">
              <button className="demo-play-button">
                <PlayButtonIcon className="demo-play-icon" />
              </button>
            </div>

            <h1>Categorias</h1>

            <div className="demo-lesson-cards">
              <div className="demo-lesson-card" />
              <div className="demo-lesson-card" />
              <div className="demo-lesson-card" />
              <div className="demo-lesson-card" />

              <button className="demo-next-button">
                <img src={nextLessonArrow} alt="next lesson arrow" />
              </button>
            </div>
          </div>

          <div className="aside-demo-area">
            <div className="demo-search-bar">
              <SearchIcon className="demo-search-icon" />
            </div>

            <h1>Categorias</h1>

            <DemoCategoriesIcon className="demo-categories" />

            <DemoSampleWolf className="demo-sample-wolf" />
          </div>
        </div>

        <button 
          className="desktop-apply-theme"
          onClick={applyTheme}
        >
          <CheckIcon className="check-icon" />

          APLICAR
        </button>
      </div>

      <BottomWolf className="bottom-wolf" />
    </div>
  );
}

export default Personalization;