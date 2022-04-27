import './skills.css';

function Skills(props)
{
    return(
            <div className='card'>
            <img src={props.skillImg}/>
            <h2>{props.skillName}</h2>
            <p>{props.skillDesc}</p>
    
    </div>)
}

export default Skills;