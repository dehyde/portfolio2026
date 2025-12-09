export function ContextSection() {
  const orgs = [
    {
      title: "Autodesk Construction Cloud (ACC)",
      summary:
        "AEC is the overarching Autodesk organization of design and engineering to construction related workflows",
      personas: [
        {
          name: "Construction Project Manager",
          bullets: [
            "Background: at least 5-7 years experience in construction. Male dominated",
            "Responsibility: managing project's strategic aspect - timelines and budget.",
            "JTBD: Identify and mitigate risks to project's critical timelines, safety and compliance.",
          ],
          highlight:
            "Wants to reduce redundant work, make sure project data is standardized and compliant with required regulations.",
          image: "../assets/f10d79f06765df49a944e58109f964acff0dc803.png",
        },
        {
          name: "Construction Project Engineer",
          bullets: [
            "Background: Usually first role after higher education",
            "Responsibility: keeping the project on track, removing blockers, making sure all project documentation is accounted for",
            "JTBD: Validate information that could impact project timelines and compliance. Ensure project data completion.",
          ],
          highlight:
            "Wants to be able to describe, sort, filter and export all item types based on properties that aren't supported by the system.",
          image: "../assets/e13f4fa1891d88681652308afbd8010310dd0712.png",
        },
      ],
    },
    {
      title: "Autodesk AEC Platform Data Solutions",
      summary:
        "AEC data is an Autodesk-wide infrastructure to create and manage data, used mostly in Revit (design).",
      personas: [
        {
          name: "Architect",
          bullets: [
            "Background: at least 5-7 years experience in construction",
            "Responsibility: managing project's strategic aspect - timelines and budget.",
            "JTBD: Identify and mitigate risks to project's critical timelines, safety and compliance.",
          ],
          highlight:
            "Wants to use data to describe BIM elements and capture design intent.",
          image: "../assets/83434706e7ccd3116528b14fe09ad2b38dcb231b.png",
        },
        {
          name: "VDC/BIM Manager (account admin)",
          bullets: [
            "Background: general construction / design background",
            "Responsibility: handle the company's digital setup for projects: creating standards, managing the cloud systems, controlling permissions and templates, training teams, and making sure every new project follows the same digital process.",
            "JTBD: Set up project standards to ensure compliance, efficiency, and enable data analysis.",
          ],
          highlight:
            "Wants to set up company wide standard to make sure data is compliant with required regulations and allows consistent data for analysis.",
          image: "../assets/efcbfd29374280e182611abeca34026a0d85eae1.png",
        },
      ],
    },
  ];

  return (
    <section id="context" className="py-[64px] text-system">
      <div className="grid grid-cols-5 gap-[32px]">
        <div className="col-span-5 mb-[24px]">
          <h2 className="text-lg-strong mb-2 text-white">
            Background and context:
          </h2>
          <p className="text-sm-regular">
            This project involved two teams from very distant parts of the Autodesk organization
          </p>
        </div>

        <div className="col-span-2">
          <h3 className="text-lg-strong mb-3 text-white">Autodesk AEC</h3>
          <p className="text-sm-regular">
            AEC is the overarching Autodesk organization of design and engineering to construction related workflows.
          </p>
          <p className="text-sm-regular mt-4">
            Autodesk AEC is the umbrella organization in which <span className="text-sm-strong">Autodesk Construction Cloud</span> and <span className="text-sm-strong">AEC Platform</span> exist.
          </p>
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-[24px]">
          {orgs.map((org) => (
            <div key={org.title} className="col-span-3 md:col-span-1 flex flex-col gap-[16px]">
              <h3 className="text-lg-strong mb-2 text-white">{org.title}</h3>
              <p className="text-sm-regular mb-4">{org.summary}</p>
              <p className="text-sm-strong mb-4 text-white">
                Personas the team is accountable to:
              </p>

              <div className="flex flex-col gap-[24px]">
                {org.personas.map((persona) => (
                  <div key={persona.name} className="flex flex-col gap-[16px]">
                    <img
                      src={persona.image}
                      alt={persona.name}
                      className="w-full rounded-[8px] border border-[rgba(255,255,255,0.08)]"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm-strong text-white">{persona.name}</p>
                      <ul className="list-disc pl-[20px] space-y-2 text-sm-regular">
                        {persona.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                        <li className="text-sm-strong text-[#f1ff46] opacity-100">
                          {persona.highlight}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
