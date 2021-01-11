import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "80%", value: "80" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "PHP_skill",
          content: "PHP",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Lumen_skill",
          content: "Lumen",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Mysql_skill",
          content: "MySQL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Next_skill",
          content: "NextJS",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "ReactNative_skill",
          content: "React Native",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Linux_skill",
          content: "linux",
          porcentage: "70%",
          value: "70"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          heading: "Personal info",
          content: {
            "BIRTHDATE": "June 18, 1994",
            "BIRTHDATE": "June 18, 1994",
            "BIRTHDATE": "June 18, 1994"
          }
        },
        {
          id: "second-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        },
        {
          id: "third-p-about",
          content:
            "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {/* {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })} */}
                      <h4><b>Personal info</b></h4>
                      <ul class="information margin-tb-30">
                        <li><b>BIRTHDATE : </b>June 18, 1994</li>
                        <li><b>EDUCATION : </b>Bachelor’s degree of Commerce.Management Information System Department, Faculty of Commerce, Alexandria University.</li>
                        <li><b>MILITARY STATUS : </b>Exempted</li>
                      </ul>
                      <h4><b>Work Experience</b></h4>
                      <ul class="list margin-b-100">
                        <h5><b>Software Developer</b></h5>
                        <h6 class="font-yellow"><b>Kijamii</b></h6>
                        <h7 class="margin-t-10">December 2017 - Present</h7>
                        <li>Implement new requirements, handle change requests and fix bugs for different
									releases.</li>
                        <li>Put configuration layering, change application configuration on different
									environment, maintain and manager different configuration files.</li>
                        <li>Deployment automation, how to easily deploy applications on different environments
									and operating systems.</li>
                        <li>Test the work before publishing, test functional and non-functional system
									requirements.</li>
                        <li>Website, Cross-Platform Mobile and software application building, or maintaining.
								</li>
                        <li>Writing code in one or more programming or scripting languages, such as PHP or
									JavaScript.</li>
                        <li>Learning and Using new Technologies and frameworks such as (React Native-ReactJS).
								</li>
                        <li>Conferring with teams to resolve conflicts, prioritize needs, develop content
									criteria, or choose solutions.</li>
                        <li>Directing or performing Website updates.</li>
                        <li>Building and maintaining databases.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default About;
