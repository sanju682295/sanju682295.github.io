import "./projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import "./Project.css";
const projects = [
  {
    title: "Project-1",
    name: "MYTHERESA  clone",
    img: "data:image/jpeg;base64,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",
    glink: "https://github.com/sanju682295/dark-van-7997/tree/master/HTML",
    functions: [],
    llink: "https://resplendent-mermaid-59b026.netlify.app/index.html",
    tech: "HTML | CSS | JavaScript",
    para: "Mytheresa is an online shopping destination for children's, men's, and women's luxury fashion and lifestyle design",
  },
  {
    title: "Project-2",
    name: "LoseIt clone",
    img: "data:image/png;base64,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",
    glink: "https://github.com/ranjanpalai69/malicious-thrill-8470",
    llink:
      "https://brilliant-moxie-01b056.netlify.app/landing%20page2.2/landing.html",
    tech: "HTML | CSS | JavaScript",
    para: "Lose It! is a calorie counter & food diary diet app that helps you stick to your diet and achieve weight loss that fits!",
  },
  {
    title: "Project-3",
    name: "StyleCraze clone",
    img: "data:image/jpeg;base64,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",
    glink: "https://github.com/sanju682295/gutsy-sheet-7629",
    llink: "https://crazystyle.vercel.app/",
    tech: "ReactJs | CSS | ChakraUI | JavaScript",
    para: " Women's Fashion, Beauty And Wellness Community to get solutions to all your Beauty queries and stay upto on the latest Beauty Trends.",
  },
];
const Project = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((el) => (
          <div id="project-container">
            <div>
              <img src={el.img} alt="" />
            </div>
            <div className="project-details">
              <div>
                <h2>{el.name}</h2>
                <p>{el.para}</p>
              </div>
              <div style={{ paddingTop: "20px" }}>
                <span style={{ color: "#ef403f" }}>Tech Stack-: </span>
                <span>{el.tech}</span>
              </div>
              <div>
                <a href={el.glink} target="_blank">
                  {" "}
                  <AiOutlineGithub style={{ fontSize: "30px" }} />
                </a>
                <a href={el.llink} target="_blank">
                  <BiLinkExternal style={{ fontSize: "30px" }} />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
