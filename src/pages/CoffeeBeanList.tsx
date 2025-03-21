import { useEffect, useState } from "react";
import { getCoffeeBeans } from "../services/api";

const CoffeeBeanList = () => {
  const [beans, setBeans] = useState<{ id: number; name: string; origin: string }[]>([]);

  useEffect(() => {
    async function fetchBeans() {
      const data = await getCoffeeBeans();
      setBeans(data);
    }
    fetchBeans();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-mono mb-2">Coffee Beans</h2>
      <ul>
        {beans.map((bean) => (
          <li key={bean.id} className="border p-2 mb-2">
            {bean.name} - {bean.origin}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeBeanList;