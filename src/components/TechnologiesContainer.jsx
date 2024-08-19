import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiGit,
  DiPhp,
  DiDotnet,
  DiAngularSimple,
  DiTypo3,
  DiSass,
  DiDocker
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: '.net', name: '.net', icon: <DiDotnet /> },
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'scss', name: 'SASS', icon: <span style={{ color: 'pink' }}> <DiSass /></span> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
  { id: 'angular', name: 'Angular', icon: <span style={{ color: 'red' }}><DiAngularSimple /></span> }, // Ícone vermelho
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'git', name: 'Git', icon: <DiGit /> },
  { id: 'docker', name: 'Docker', icon: <span style={{ color: 'blue' }}><DiDocker /></span> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2> Algumas Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer