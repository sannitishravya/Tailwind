import Border from "./atoms/Border";
import Outline from "./atoms/Outline";
import Primary from "./atoms/Primary";

const Buttons = () => {
  // const handleChange = (e) => {
  //   alert(`You have clicked the ${e.target.value}  button `);
  // };

  return (
    <div className="flex justify-around">
      <Primary />
      <Outline />
      <Border />
    </div>
  );
};

export default Buttons;
