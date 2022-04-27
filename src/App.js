import Header from './header'
import Skills from './skills';
import SkillsData from './SkillsData';
import './App.css'

function createCard(SkillsData)
{
  return (
    <Skills 
    key={SkillsData.id} 
    skillImg={SkillsData.imgSrc} 
    skillName={SkillsData.skillName} 
    skillDesc={SkillsData.desc}/>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
        <div className='cardContainer'>{SkillsData.map(createCard)}</div>
      </div>
  );
}

export default App;
