import { categories } from "../../../../constants/categories";

const Category = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">Categories</h3>
      <ul className="flex flex-col gap-3">
        {categories.map((category) => (
          <li key={category.id}>
            <label
              htmlFor={`${category.title}-${category.id}`}
              className="flex justify-between items-center cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <input
                  id={`${category.title}-${category.id}`}
                  type="checkbox"
                />
                <span>{category.title}</span>
              </div>
              <div className="text-[#6C757D] text-base/4 bg-white px-2 py-1 rounded-xl">
                {category.jobCount}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
