import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
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

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    // this.handleDayClick = this.handleDayClick.bind(this);
    // this.handleResetClick = this.handleResetClick.bind(this);
    this.state = {
      from: new Date(props.baslama), // new Date(2020, 9, 10),
      to: new Date(props.bitis), //new Date(2020, 9, 13),
    };
  }

  //   handleDayClick() {
  //     const range = DateUtils.addDayToRange(1, this.state);
  //     this.setState(range);
  //   }

  //   handleResetClick() {
  //     this.setState(this.getInitialState());
  //   }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    // const defaultProps = {
    //     numberOfMonths: 1,
    //   };
    return (
      <div className="RangeExample">
        {/* <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p> */}
        <DayPicker
          months={MONTHS["tr"]}
          weekdaysShort={WEEKDAYS_SHORT["tr"]}
          firstDayOfWeek={FIRST_DAY_OF_WEEK["tr"]}
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          //   onDayClick={this.handleDayClick}
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
  }
}
