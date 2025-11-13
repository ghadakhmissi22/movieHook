import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const Rating = ({ searchRate, setSearchRate, rate, isRating }) => {
  return isRating ? (
    //fixe pour le composant Card
    <Rate value={rate} disabled  />
  ) : (
    // varialble pour le App : filter
    <Rate
      tooltips={desc}
      onChange={(value) => setSearchRate(value)}
      value={searchRate}
    />
  );
};
export default Rating;
