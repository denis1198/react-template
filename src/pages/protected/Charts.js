import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Concursos from "../../features/charts";
import { setPageTitle } from "../../features/common/headerSlice";

import TitleCard from "../../components/Cards/TitleCard";

function InternalPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Analytics" }));
  }, []);

  return <Concursos />;
}

export default InternalPage;
