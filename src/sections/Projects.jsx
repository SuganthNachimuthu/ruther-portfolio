import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div id="projects" className='section projects-section'>
      <h2>Projects</h2>
      <Holder>
      <ProjectCard className="rebel">
          <img src='flamecoders.png' alt='Flamecoders' />
          <Content>
            <h3>Aishwaryamoils</h3>
            <p>Developed and integrated a full-stack Customer Review System for aishwaryamoils.com, enabling customers to share authentic feedback on purchased products.<br></br> <br></br>Designed a responsive and intuitive UI/UX aligned with the brand’s aesthetics, ensuring seamless navigation and interaction. Implemented secure backend APIs for review submission, moderation, and retrieval using scalable architecture.<br></br> <br></br>Optimized database queries for faster load times and enhanced user experience on both desktop and mobile devices. Deployed and tested the feature in a live production environment, ensuring compatibility with the existing e-commerce platform.</p>

            <Tags>
              <Tag hashtag="Node.js" />
              <Tag hashtag="React.js" />
              <Tag hashtag="Express.js" />
              <Tag hashtag="Sqlite" />
              <Tag hashtag="Gen AI" />
            </Tags>
          </Content>
          <CardActions visit="https://aishwaryamoils.com/" />
        </ProjectCard>
        <ProjectCard>
          <img src='upmagic.png' alt='Upmagic' />
          <Content>
            <h3>NxtWatch</h3>
            <p>Created the NXT Watch app, a YouTube alternative for browsing video categories like Trending and Gaming, and 
viewing saved videos with a customizable Theme.Designed interactive pages using React components and state management. And implemented secure login with API 
calls and JWT tokens for persistent states<br></br> <br></br>username: rahul<br></br>
 password: rahul@2021
</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="GenAI" />
              <Tag hashtag="Node.js" />
              <Tag hashtag="Sqlite" />
            </Tags>
          </Content>
          <CardActions visit="https://mynewyoutube.ccbp.tech/" />
        </ProjectCard>
        <ProjectCard>
          <img src='hotkeys.png' alt='HOTKEYS' />
          <Content>
            <h3>Trendz</h3>
            <p> Implemented NxtTrendz, an ECommerce c like Amazon and Flipkart, using React JS. Developed login, product 
listing, and product details pages with React Router for routing and navigation. Implemented user authentication via JWT tokens, storing them in local storage. Enhanced product listing with search, 
filters, and sorting functionality using query parameters in API calls<br></br> <br></br>username: rahul<br></br>
 password: rahul@2021
</p>
            <Tags>
              <Tag hashtag="Node.js" />
              <Tag hashtag="React.js" />
              <Tag hashtag="Express.js" />
              <Tag hashtag="Sqlite" />
              <Tag hashtag="Gen AI" />
            </Tags>
          </Content>
          <CardActions visit="https://nxttrendsgit.ccbp.tech/" />
        </ProjectCard>
        <ProjectCard>
          <img src='physoxy.png' alt='Physoxy' />
          <Content>
            <h3>ThreadSpire</h3>
            <p>A full-stack, production-ready web app with secure JWT authentication, role-based access, and user subscriptions. Features a decoupled architecture, email verification, theme support, and admin tools—all and many more.</p>
            <Tags>
              <Tag hashtag="Node.js" />
              <Tag hashtag="React.js" />
              <Tag hashtag="Express.js" />
              <Tag hashtag="Sqlite" />
              <Tag hashtag="Gen AI" />
            </Tags>
          </Content>
          <CardActions visit="https://thread-spire-community-wisdom-threads.vercel.app/" />
        </ProjectCard>
        
        
      </Holder>
    </div>
  )
}
