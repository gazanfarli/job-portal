import { ICategory } from "../../models/category";
import Badge from "../ui/badge";

type CategoryCardProps = {
  category: ICategory;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <a href={`/categories/${category.id}`} className="w-full">
      <article className="flex flex-col items-center gap-6 p-6 bg-white shadow-md rounded-xl transition-transform transform hover:scale-105 hover:shadow-lg text-center w-full">
        <img
          src={category.image}
          alt={category.name}
          className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full"
        />
        <h3 className="text-lg md:text-xl font-semibold">{category.name}</h3>
        <Badge
          color="text-[#309689]"
          bgColor="bg-[rgba(48,150,137,0.1)]"
          text={`${category.jobCount} jobs`}
        />
      </article>
    </a>
  );
};

export default CategoryCard;
