import InputIcon from "../components/input-icon";
import Text from "../components/text";

import TrashIcon from "../assets/icons/Trash.svg?react";
import MorningIcon from "../assets/icons/SunHorizon.svg?react";
import AfternoonIcon from "../assets/icons/MoonStars.svg?react";
import LightIcon from "../assets/icons/CloudSun.svg?react";

import CalenderIcon from "../assets/icons/CalendarBlank.svg?react";
import Icon from "../components/icon";
import ButtonIcon from "../components/button-icon";

import { useContext, useEffect, useState } from "react";
import { ScheduleContext } from "../utils/local-storage";
import { dateCurrent } from "../utils/date-current";

import { useForm } from "react-hook-form";
import type { ScheduleInputs } from "../types/scheduled";

interface DateCurrent {
  date: Date;
}

export default function Agenda() {
  const { schedules, removeSchedule } = useContext(ScheduleContext);
  const [schedulesSelectDate, setSchedulesSelectDate] = useState<
    ScheduleInputs[]
  >([]);

  const { register, watch } = useForm<DateCurrent>();

  function handleClickDelete(id: ScheduleInputs["id"]) {
    removeSchedule(id);
  }

  useEffect(() => {
    setSchedulesSelectDate(schedules.filter((s) => s.date === watch("date")));
  }, [schedules, watch("date")]);

  return (
    <section className="flex-1 p-20 gap-6 max-sm:p-10 flex flex-col">
      <div className="flex items-center gap-2 justify-between">
        <div>
          <Text as="h1" variant="title-lg">
            Sua Agenda
          </Text>
          <Text as="p" variant="text-base">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <InputIcon
          {...register("date")}
          defaultValue={dateCurrent}
          type="date"
          icon={CalenderIcon}
        />
      </div>

      {schedulesSelectDate.filter((s) => s.time < "12:00").length ? (
        <div className="flex flex-col gap-4">
          <div className="border border-gray-400 rounded-2xl ">
            <table className="w-full ">
              <thead>
                <tr className="flex items-center justify-between gap-2 px-4 py-2 border-b border-gray-400 mb-4">
                  <th className="flex gap-2 items-center">
                    <Icon className="fill-yellow h-5" icon={MorningIcon} />
                    <Text>Manha</Text>
                  </th>
                  <th>
                    <Text>09h-11h</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedulesSelectDate.map(
                  (schedule, index) =>
                    schedule.time < "12:00" && (
                      <tr
                        key={`M-${index}`}
                        className="flex gap-2 items-center justify-between px-4 mb-4"
                      >
                        <td className="flex gap-2">
                          <Text>{schedule.time}</Text>
                          <Text>{schedule.nameFull}</Text>
                        </td>
                        <td>
                          <ButtonIcon
                            onClick={() => handleClickDelete(schedule.id)}
                            size="h-5"
                            icon={TrashIcon}
                          />
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}

      {schedulesSelectDate.filter((s) => s.time >= "12:00" && s.time < "18:00")
        .length ? (
        <div className="flex flex-col gap-4">
          <div className="border border-gray-400 rounded-2xl ">
            <table className="w-full ">
              <thead>
                <tr className="flex items-center justify-between gap-2 px-4 py-2 border-b border-gray-400 mb-4">
                  <th className="flex gap-2 items-center">
                    <Icon className="fill-yellow h-5" icon={AfternoonIcon} />
                    <Text>Tarde</Text>
                  </th>
                  <th>
                    <Text>12:00 - 17:00</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedulesSelectDate.map(
                  (schedule, index) =>
                    schedule.time >= "12:00" &&
                    schedule.time < "18:00" && (
                      <tr
                        key={`M-${index}`}
                        className="flex gap-2 items-center justify-between px-4 mb-4"
                      >
                        <td className="flex gap-2">
                          <Text>{schedule.time}</Text>
                          <Text>{schedule.nameFull}</Text>
                        </td>
                        <td>
                          <ButtonIcon
                            onClick={() => handleClickDelete(schedule.id)}
                            size="h-5"
                            icon={TrashIcon}
                          />
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}

      {schedulesSelectDate.filter((s) => s.time >= "18:00").length ? (
        <div className="flex flex-col gap-4">
          <div className="border border-gray-400 rounded-2xl ">
            <table className="w-full ">
              <thead>
                <tr className="flex items-center justify-between gap-2 px-4 py-2 border-b border-gray-400 mb-4">
                  <th className="flex gap-2 items-center">
                    <Icon className="fill-yellow h-5" icon={LightIcon} />
                    <Text>Noite</Text>
                  </th>
                  <th>
                    <Text>18:00 - 23:00</Text>
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedulesSelectDate.map(
                  (schedule, index) =>
                    schedule.time >= "18:00" && (
                      <tr
                        key={`M-${index}`}
                        className="flex gap-2 items-center justify-between px-4 mb-4"
                      >
                        <td className="flex gap-2">
                          <Text>{schedule.time}</Text>
                          <Text>{schedule.nameFull}</Text>
                        </td>
                        <td>
                          <ButtonIcon
                            onClick={() => handleClickDelete(schedule.id)}
                            size="h-5"
                            icon={TrashIcon}
                          />
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
