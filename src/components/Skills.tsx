import { Container } from "./Container";

export function Skills() {
  return (
    <section id="skills" className="py-28 md:py-[154px]">
      <Container>
        <div className="flex flex-col-reverse gap-16 md:flex-row md:gap-36">
          <div className="flex-1 space-y-8 md:space-y-16">
            <div>
              <h2 className="mb-4 font-semibold text-2xl text-gray-9 md:mb-8 md:text-[40px]">
                Education
              </h2>
              <h3 className="mb-3 text-xl text-gray-9 md:text-2xl md:mb-6">
                Polytechnic University of the Philippines
              </h3>
              <p className="text-xl text-gray-5">
                Bachelor of Science - Information Technology • 2019 - 2023 (Cum
                Laude)
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-2xl text-gray-9 md:mb-8 md:text-[40px]">
                Experience
              </h2>
              <h3 className="mb-3 text-xl text-gray-9 md:text-2xl md:mb-6">
                FastSend Mobile Solutions
              </h3>
              <p className="text-xl text-gray-5">
                UI/UX Designer • April 2023 - July 2023
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="mb-4 font-semibold text-2xl text-gray-9 md:mb-8 md:text-[40px]">
              Skills
            </h2>
            <div className="space-y-8 md:space-y-16">
              <div>
                <h3 className="mb-3 text-xl text-gray-9 md:text-2xl md:mb-6">
                  General
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-5">
                  {[
                    "UI/UX",
                    "Product Design",
                    "HCI",
                    "Branding",
                    "Prototyping",
                    "Wireframing",
                    "User-centered Designs",
                    "Sitemaps",
                  ].map((generalItem) => {
                    return (
                      <div
                        key={generalItem}
                        className="p-3 text-base bg-gray-1 shadow-tag rounded-xl md:p-4 md:text-xl md:rounded-2xl"
                      >
                        {generalItem}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl text-gray-9 md:text-2xl md:mb-6">
                  Design
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-5">
                  {[
                    "Adobe Creative Suite",
                    "Figma",
                    "Canva",
                    "FigJam",
                    "InVision",
                  ].map((designItem) => {
                    return (
                      <div
                        key={designItem}
                        className="p-3 text-base bg-gray-1 shadow-tag rounded-xl md:p-4 md:text-xl md:rounded-2xl"
                      >
                        {designItem}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl text-gray-9 md:text-2xl md:mb-6">
                  Engineering
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-5">
                  {[
                    "C#",
                    "C",
                    "Git",
                    "SQL",
                    "VSCode",
                    "Python",
                    "PHP",
                    "HTML/CSS",
                    "Java",
                  ].map((engineeringItem) => {
                    return (
                      <div
                        key={engineeringItem}
                        className="p-3 text-base bg-gray-1 shadow-tag rounded-xl md:p-4 md:text-xl md:rounded-2xl"
                      >
                        {engineeringItem}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
