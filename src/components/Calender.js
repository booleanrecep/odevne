import React from "react";
import Helmet from "react-helmet";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const MONTHS = {
  tr: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
};
const WEEKDAYS_SHORT = {
  tr: ["Pzr", "Pztesi", "Salı", "Çarş", "Perş", "Cum", "Cmtesi"],
};
const FIRST_DAY_OF_WEEK = {
  tr: 1,
};

const Calender = ({ baslama, bitis }) => {
  const modifiersStyles = {
    weekend: {
      color: "#ffc107",
      backgroundColor: "#fffdee",
    },
  };
  const from = new Date(
    parseInt(baslama.substring(6, 10)),
    parseInt(baslama.substring(3, 5)) - 1,
    parseInt(baslama.substring(0, 2))
  );
  const to = new Date(
    parseInt(bitis.substring(6, 10)),
    parseInt(bitis.substring(3, 5)) - 1,
    parseInt(bitis.substring(0, 2))
  );
  const modifiers = { start: from, end: to, weekend: { daysOfWeek: [0, 6] } };
  return (
    <div className="RangeExample">
      <DayPicker
        modifiersStyles={modifiersStyles}
        modifiers={modifiers}
        months={MONTHS["tr"]}
        weekdaysShort={WEEKDAYS_SHORT["tr"]}
        firstDayOfWeek={FIRST_DAY_OF_WEEK["tr"]}
        className="Selectable"
        selectedDays={[from, { from, to }]}
      />
      <Helmet>
        <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
      </Helmet>
    </div>
  );
};

export default Calender;
