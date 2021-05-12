import cx from 'classnames';
import * as dayjs from 'dayjs';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as localeData from 'dayjs/plugin/localeData';
import * as React from 'react';

import { FontAwesomeIcon } from '../FontAwesomeIcon/FontAwesomeIcon';
import { Select } from '../Select/Select';
import { SelectOption } from '../Select/SelectOption';
import { TimePicker } from './TimePicker';

dayjs.extend(isoWeek);
dayjs.extend(localeData);

export interface DatePickerProps {
  className?: string;
  date?: Date | string | dayjs.Dayjs;
  startDate?: Date | string | dayjs.Dayjs;
  endDate?: Date | string | dayjs.Dayjs;
  use24Hour?: boolean;
  showTimePicker?: boolean;
  showSeconds?: boolean;
  onChange: (date: Date) => void;
}

export const DatePicker = ({
  date = new Date(),
  startDate,
  endDate,
  showTimePicker = true,
  showSeconds = true,
  use24Hour,
  className,
  onChange
}: DatePickerProps): React.ReactElement => {
  const [currentDate, setCurrentDate] = React.useState(dayjs(date));
  const getMonthMatrix = () => {
    const monthStartAtDay = currentDate.date(0).day();
    const daysInMonth = currentDate.daysInMonth();

    let dayOfMonth = 1;
    const weeks: Array<Array<string | number>> = [
      [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5]
    ];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j <= 6; j++) {
        if ((i === 0 && j < monthStartAtDay) || dayOfMonth > daysInMonth) {
          weeks[i][j] = '';
        } else {
          weeks[i][j] = dayOfMonth;
          dayOfMonth++;
        }
      }
    }

    return weeks;
  };

  const selectDate = (dayOfMonth: number) => {
    setCurrentDate(prev => prev.date(dayOfMonth));
    if (onChange) onChange(currentDate.date(dayOfMonth).toDate());
  };
  const goNextMonth = () => {
    setCurrentDate(prev => prev.add(1, 'month'));
  };
  const goPrevMonth = () => {
    setCurrentDate(prev => prev.subtract(1, 'month'));
  };

  const setMonth = (month: number) => {
    setCurrentDate(prev => prev.month(month).date(1));
  };
  const setYear = (year: number) => {
    setCurrentDate(prev => prev.year(year));
  };

  const yearOptions = React.useMemo(() => {
    const lowEnd = dayjs(startDate || dayjs().add(-25, 'year')).year();
    const highEnd = dayjs(endDate || dayjs().add(25, 'year')).year();
    const list: SelectOption[] = [];

    for (let i = lowEnd; i <= highEnd; i++) {
      list.push({
        label: i.toString(),
        value: i
      });
    }
    return list;
  }, []);

  const monthOptions = React.useMemo(
    () =>
      dayjs()
        .localeData()
        .months()
        .map((item, index) => {
          return {
            label: item,
            value: index
          };
        }),
    []
  );

  const selectedDayOfMonth = currentDate.date();
  return (
    <div className={cx('dui-datepicker', className)}>
      <div className={cx('dui-datepicker-header')}>
        <FontAwesomeIcon
          icon="fa-arrow-left"
          marginDirection="right"
          iconStyle="solid"
          onClick={() => goPrevMonth()}
        />
        <div className="dui-datepicker-selectors">
          <Select
            options={monthOptions}
            defaultValue={currentDate.month()}
            label="Month"
            onChange={i => setMonth(i.value as number)}
          />
          <Select
            options={yearOptions}
            defaultValue={currentDate.year()}
            label="Year"
            onChange={i => setYear(i.value as number)}
          />
        </div>

        <FontAwesomeIcon
          marginDirection="left"
          icon="fa-arrow-right"
          iconStyle="solid"
          onClick={() => goNextMonth()}
        />
      </div>
      <table className="dui-datepicker-month">
        <thead>
          <tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
        </thead>
        <tbody>
          {getMonthMatrix().map((week, index) => {
            return (
              <tr key={`week-${index}`}>
                {week.map((day, index) => {
                  if (day === '') {
                    return <td key={`week-day-${index}`} className="disabled"></td>;
                  } else {
                    return (
                      <td
                        key={`week-day-${index}`}
                        className={cx('dui-datepicker-day', {
                          active:
                            selectedDayOfMonth === day &&
                            dayjs(date).month() === currentDate.month()
                        })}
                        onClick={() => selectDate(parseInt(day.toString()))}
                      >
                        {day}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {showTimePicker && (
        <TimePicker
          showSeconds={showSeconds}
          use24Hour={use24Hour}
          date={currentDate}
          onChange={(newDate: Date) => {
            setCurrentDate(dayjs(newDate));
            onChange(newDate);
          }}
        />
      )}
    </div>
  );
};
