import { SelectOption } from 'components/Select/SelectOption';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import { Flex } from '../Flex/Flex';
import { Select } from '../Select/Select';

export interface TimePickerProps {
  date?: Date | string | dayjs.Dayjs;
  use24Hour?: boolean;
  onChange: (date: Date) => void;
}
export const TimePicker = ({
  date = new Date(),
  use24Hour,
  onChange
}: TimePickerProps): React.ReactElement => {
  const currentDate = dayjs(date);
  const hours = useMemo(() => {
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
  const minutesAndSeconds = useMemo(() => {
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
    if (type === 'hour') {
      onChange(currentDate.hour(value).toDate());
    }
    if (type === 'minute') {
      onChange(currentDate.minute(value).toDate());
    }
    if (type === 'second') {
      onChange(currentDate.second(value).toDate());
    }
  };
  const changedA = (type: string) => {
    const currentHour = currentDate.hour();
    let hour = currentHour;
    if (hour === 12) {
      hour = 0;
    }
    if (type === 'PM') {
      hour = hour + 12;
    }

    onChange(currentDate.hour(hour).toDate());
  };

  return (
    <Flex className="time-picker" justify="center" align="center">
      <Select
        options={hours}
        defaultValue={
          use24Hour
            ? currentDate.hour()
            : currentDate.format('A') === 'PM'
            ? currentDate.hour() - 12
            : currentDate.hour()
        }
        label="Year"
        onChange={i => changed('hour', i.value as number)}
      />
      :
      <Select
        options={minutesAndSeconds}
        defaultValue={currentDate.minute()}
        label="Year"
        onChange={i => changed('minute', i.value as number)}
      />
      :
      <Select
        options={minutesAndSeconds}
        defaultValue={currentDate.second()}
        label="Year"
        onChange={i => changed('second', i.value as number)}
      />
      {!use24Hour && (
        <Select
          options={[
            { label: 'AM', value: 'AM' },
            { label: 'PM', value: 'PM' }
          ]}
          defaultValue={currentDate.format('A')}
          label="Year"
          onChange={i => changedA(i.value as string)}
        />
      )}
    </Flex>
  );
};
