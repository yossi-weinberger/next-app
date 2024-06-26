import "./hero-section.css";

export function HeroSection() {
  return (
    <div className="heroSection">
      <div className="text">
        <h1>לראות את התמונה המלאה</h1>
        <p>
          .שפות, ממשקים, מסדי נתונים, כלים וטכנולוגיות, תפקידים בתעשייה וכל מה
          שמפתח צריך לדעת<br />
          .הכל עם קישורים פשוטים, מפות אינטראקטיביות וידידותיות למשתמש
        </p>
        </div>
      <img src="/pics/5.jpg" className="img"/>

      <div className="buttons">
        <button type="button">התחל ניווט</button>
        {/* <button type="button">Contact</button>
        <button type="button">Store</button> */}
      </div>
    </div>
  );
}