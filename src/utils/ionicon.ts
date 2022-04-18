import * as Ionicons from "ionicons/icons";

function getIoniconByString(icon: string) {
  const IoniconsByString = Ionicons as Record<string, string>;
  return IoniconsByString[icon];
}

export default getIoniconByString;
