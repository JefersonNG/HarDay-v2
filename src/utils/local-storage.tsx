import { createContext, useEffect, useState } from "react";
import type { ScheduleInputs } from "../types/scheduled";

export interface ScheduleContextType {
  schedules: ScheduleInputs[];
  addSchedules: (schedule: ScheduleInputs) => void;
  removeSchedule: (id: ScheduleInputs["id"]) => void;
}

export const ScheduleContext = createContext({} as ScheduleContextType);

export function ScheduleProvider({ children }: { children: React.ReactNode }) {
  const [schedules, setSchedules] = useState<ScheduleInputs[]>(() => {
    //inicia com valor disponível em local storage ou array vazio
    const stored = localStorage.getItem("schedules");

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  function addSchedules(schedule: ScheduleInputs) {
    // faz spreed dados local com novos que chega e envia novamente para local storage
    setSchedules((prev) => {
      const updated = [...prev, schedule];
      return updated;
    });
  }

  function removeSchedule(id: ScheduleInputs["id"]) {
    const newSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(newSchedules);
  }

  return (
    <ScheduleContext.Provider
      value={{ schedules, addSchedules, removeSchedule }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}
