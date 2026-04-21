import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

import StackedGallery from "./StackedGallery";

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Restaurant Menu Redesign",
              category: "Menu Design",
              tools: "Photoshop, Canva",
              desc: "Redesigned a restaurant menu to improve readability, layout structure, and visual appeal.",
              images: ["/images/menu1.jpg", "/images/menu2.jpg", "/images/menu3.jpg", "/images/menu4.jpg"],
            },
            {
              title: "Offer Pamphlets",
              category: "Marketing Material",
              tools: "Photoshop, Canva",
              desc: "Created promotional pamphlets for businesses offering 50% off sales.",
              images: ["/images/pamphlet1.png", "/images/pamphlet2.png"]
            },
            {
              title: "Business Cards",
              category: "Print Design",
              tools: "Photoshop, Illustrator",
              desc: "Designed professional and modern business cards for Borcelle Wooden Floors.",
              image: "/images/business_card.png"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#ccc' }}>
                  {project.desc}
                </p>
              </div>
              {project.images ? (
                <StackedGallery images={project.images} />
              ) : (
                <WorkImage image={project.image!} alt={project.title} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
