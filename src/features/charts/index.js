import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import StackBarChart from "./components/StackBarChart";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";

function Concursos() {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };

  return (
    <>
      <Datepicker
        containerClassName="w-72"
        value={dateValue}
        theme={"light"}
        inputClassName="input input-bordered w-72"
        popoverDirection={"down"}
        toggleClassName="invisible"
        onChange={handleDatePickerValueChange}
        showShortcuts={true}
        primaryColor={"white"}
      />
      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-0 grid-cols-1 gap-6">
        <TitleCard title={"Teste"}></TitleCard>
        <TitleCard title={"Teste"}></TitleCard>

        <TitleCard title={"Teste"}></TitleCard>
        <TitleCard title={"Teste"}></TitleCard>
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart />
        <PieChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <ScatterChart />
        <LineChart />
      </div>
    </>
  );
}

export default Concursos;
