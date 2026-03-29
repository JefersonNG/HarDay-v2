export type HoursProp = {
  value: string;
  scheduled?: boolean;
};

export type ScheduleInputs = {
  id: string;
  date: Date;
  time: keyof HoursProp;
  nameFull: string;
  required?: boolean;
};
