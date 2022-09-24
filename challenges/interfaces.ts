import houses from "./houses"

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[] {
  const houses: House[] = typeof input === "string" ? JSON.parse(input) : input;

  return (filter ? houses.filter(filter) : houses).map((house) => ({
    id: houses.indexOf(house),
    ...house,
  }));
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Arreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
