import SkillCard from '../components/SkillCard'

export default function Skills() {

    return (
        <div id="skills" className='skills-section section'>
            <h2>Skills</h2>
            <SkillCard heading='Frontend' skills={[
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Bootstrap', 'icon': 'bootstrap' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'Material-UI', 'icon': 'materialui' },
            ]} />
            <SkillCard heading='Backend' hcolor="var(--clr-accent2)" skills={[
                { 'name': 'Node.js', 'icon': 'nodejs' },
                { 'name': 'Express', 'icon': 'express' },
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'SQLite', 'icon': 'sqlite' },
                { 'name': 'MongoDB', 'icon': 'mongodb' },
            ]} />
            <SkillCard heading='Tools' hcolor="var(--clr-accent3)" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub', 'icon': 'github' },
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Heroku', 'icon': 'heroku' },
                { 'name': 'Netlify', 'icon': 'netlify' },
                { 'name': 'Vercel', 'icon': 'vercel' },
                { 'name': 'Figma', 'icon': 'figma' },
            ]} />
            <SkillCard heading='Automation' hcolor="var(--clr-sec)" skills={[
                { 'name': 'Selenium', 'icon': 'selenium' },
                { 'name': 'Puppeteer', 'icon': 'puppeteer' },
                { 'name': 'OpenAI', 'icon': 'https://simpleicons.org/icons/openai.svg' },
                { 'name': 'Web Scraping', 'icon': '' },
                { 'name': 'DeepSeek', 'icon': '' },
                { 'name': 'Gemini', 'icon': 'https://simpleicons.org/icons/googlegemini.svg' },
                { 'name': 'Hugginface', 'icon': 'https://simpleicons.org/icons/huggingface.svg' },
            ]} />

        </div>
    )
}
