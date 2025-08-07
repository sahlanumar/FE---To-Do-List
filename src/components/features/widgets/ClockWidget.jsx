import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTimeStart } from "../../../store/slices/widgetSlice";
import Loader from "../../common/Loader";

function ClockWidget() {
  const dispatch = useDispatch();
  const { timeData, isLoading, error } = useSelector((state) => state.widget);

  useEffect(() => {
    dispatch(fetchTimeStart());
  }, [dispatch]);

  const renderContent = () => {
    if (isLoading) return <Loader />;
    if (error) return <p className="text-red-500 text-center">{error}</p>;
    if (timeData) {
      const formattedTime = new Date(timeData.dateTime).toLocaleTimeString(
        "id-ID",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      );
      return (
        <div className="text-center">
          <p className="font-semibold text-gray-700">{timeData.timeZone}</p>
          <p className="text-3xl font-bold text-gray-900">{formattedTime}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6">{renderContent()}</div>
  );
}

export default ClockWidget;
