type SkillsProps = {
  skills?: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-200">
          Key Skills
        </h2>
        <ul className="flex flex-wrap gap-3">
          {skills?.map((skill, index) => (
            <li
              key={index}
              className="bg-[#309689] text-white px-4 py-2 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
