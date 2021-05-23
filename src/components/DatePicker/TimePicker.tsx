import * as dayjs from 'dayjs';
import * as React from 'react';

import { Flex } from '../Flex/Flex';
import { Select } from '../Select/Select';
import { SelectOption } from '../Select/SelectOption';

export interface TimePickerProps {
  date?: Date | string | dayjs.Dayjs;
  showSeconds?: boolean;
  use24Hour?: boolean;
  onChange: (date: Date) => void;
}
export const TimePicker = ({
  date,
  showSeconds = true,
  use24Hour,
  onChange
}: TimePickerProps): React.ReactElement => {
  const currentDate = dayjs(date);

  const hours = React.useMemo(() => {
    const values: SelectOption[] = [];
    const top = use24Hour ? 24 : 12;

    for (let i = 0; i <= top; i++) {
      values.push({
        label: i < 10 ? '0' + i.toString() : i.toString(),
        value: i
      });
    }
    return values;
  }, [use24Hour]);
  const minutesAndSeconds = React.useMemo(() => {
    const values: SelectOption[] = [];
    for (let i = 0; i <= 59; i++) {
      values.push({
        label: i < 10 ? '0' + i.toString() : i.toString(),
        value: i
      });
    }
    return values;
  }, []);

  const changed = (type: 'hour' | 'minute' | 'second', value: number) => {
    if (type === 'hour' && onChange) {
      onChange(
        currentDate
          .hour(value)
          .second(showSeconds ? value : 0)
          .toDate()
      );
    }

    if (type === 'minute' && onChange) {
      onChange(
        currentDate
          .minute(value)
          .second(showSeconds ? value : 0)
          .toDate()
      );
    }
    if (type === 'second' && onChange && showSeconds) {
      onChange(currentDate.second(value).toDate());
    }
  };
  const changedA = (type: string) => {
    let stringDate = currentDate.format('YYYY-MM-DD h:m:s A Z');
    if (type === 'AM') {
      stringDate = stringDate.replace('PM', 'AM');
    } else {
      stringDate = stringDate.replace('AM', 'PM');
    }
    if (onChange) onChange(dayjs(stringDate).toDate());
  };

  const getSelectedHour = () => {
    const hr = currentDate.format('h');
    return parseInt(hr);
  };

  return (
    <Flex className="time-picker" justify="center" align="center">
      <Select
        options={hours}
        defaultValue={use24Hour ? currentDate.hour() : getSelectedHour()}
        label="Hour"
        onChange={(i: SelectOption) => changed('hour', i.value as number)}
      />
      :
      <Select
        options={minutesAndSeconds}
        defaultValue={currentDate.minute()}
        label="Minute"
        onChange={(i: SelectOption) => changed('minute', i.value as number)}
      />
      {showSeconds && (
        <>
          :
          <Select
            options={minutesAndSeconds}
            defaultValue={currentDate.second()}
            label="Second"
            onChange={(i: SelectOption) => changed('second', i.value as number)}
          />
        </>
      )}
      {!use24Hour && (
        <Select
          options={[
            { label: 'AM', value: 'AM' },
            { label: 'PM', value: 'PM' }
          ]}
          defaultValue={currentDate.format('A')}
          label="D"
          onChange={i => changedA(i.value as string)}
        />
      )}
    </Flex>
  );
};
