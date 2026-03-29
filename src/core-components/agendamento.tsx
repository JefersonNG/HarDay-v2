import type { HoursProp, ScheduleInputs } from "../types/scheduled";
import InputIcon from "../components/input-icon";
import Text from "../components/text";
import { useForm, type SubmitHandler } from "react-hook-form";

import SelectTime from "../components/input-select";
import UserIcon from "../assets/icons/UserSquare.svg?react";
import Button from "../components/button";
import CalenderIcon from "../assets/icons/CalendarBlank.svg?react";

import { useContext, useEffect, useState } from "react";
import { ScheduleContext } from "../utils/local-storage";
import { dateCurrent } from "../utils/date-current";

const hours: HoursProp[] = [
  { value: "09:00" },
  { value: "10:50" },
  { value: "11:00" },
  { value: "12:00" },
  { value: "17:00" },
  { value: "18:00" },
  { value: "19:00" },
  { value: "20:00" },
  { value: "21:00" },
];

export default function Agendamento() {
  const { schedules, addSchedules } = useContext(ScheduleContext);
  const [availableHours, setAvailableHours] = useState(hours);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<ScheduleInputs>();

  const onSubmit: SubmitHandler<ScheduleInputs> = (data) => {
    // cria agendamento e envia local storage
    const date = getValues("date");

    const schedule = {
      ...data,
      id: Math.random().toString(36).substring(2, 9),
    };

    addSchedules(schedule);

    reset();
    setValue("date", date);
  };

  useEffect(() => {
    //atualiza lista horários disponível
    const newValue = hours.map((hour) => {
      const isTime = schedules.some(
        (item) => hour.value === item.time && item.date === watch("date"),
      );

      return { ...hour, scheduled: isTime };
    });

    setAvailableHours(newValue);
  }, [schedules, watch("date")]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onError={() => console.log(errors)}
      className=" flex flex-col justify-between p-20 max-sm:p-10 bg-gray-700 rounded-xl w-md"
    >
      <div>
        <Text as="h1" variant="title-lg">
          Agende um atendimento
        </Text>

        <Text as="p" variant="text-sm">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento
        </Text>
      </div>

      <div>
        <Text as="span" variant="title-md">
          Data
        </Text>

        <InputIcon
          min={dateCurrent}
          defaultValue={dateCurrent}
          {...register("date")}
          type="date"
          icon={CalenderIcon}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text as="h3" variant="title-md">
            {availableHours.length
              ? "Horários disponíveis"
              : "Nenhum horários disponível no momento."}
          </Text>
          <div className="flex gap-5 flex-col">
            {availableHours.filter((h) => h.value < "12:00").length ? (
              <div className="flex flex-col">
                <Text as="span" variant="text-sm">
                  Manha
                </Text>
                <div className="inline-flex flex-wrap gap-2 items-center ">
                  {availableHours
                    .filter((h) => h.value < "12:00")
                    .map((h) => (
                      <SelectTime
                        {...register("time", { required: true })}
                        value={h.value}
                        key={`m-${h.value}`}
                        disabled={h.scheduled}
                        required
                      >
                        {h.value}
                      </SelectTime>
                    ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            {availableHours.filter(
              (h) => h.value >= "12:00" && h.value < "18:00",
            ).length ? (
              <div className="flex flex-col">
                <Text as="span" variant="text-sm">
                  Tarde
                </Text>
                <div className="inline-flex flex-wrap gap-2 items-center ">
                  {availableHours
                    .filter((h) => h.value >= "12:00" && h.value < "18:00")
                    .map((h) => (
                      <SelectTime
                        {...register("time", { required: true })}
                        value={h.value}
                        key={`t-${h.value}`}
                        disabled={h.scheduled}
                        required
                      >
                        {h.value}
                      </SelectTime>
                    ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            {availableHours.filter(
              (h) => h.value >= "18:00" && h.value != "06:00",
            ).length ? (
              <div className="flex flex-col">
                <Text as="span" variant="text-sm">
                  Noite
                </Text>
                <div className="inline-flex flex-wrap gap-2 items-center ">
                  {availableHours
                    .filter((h) => h.value >= "18:00" && h.value != "06:00")
                    .map((h) => (
                      <SelectTime
                        {...register("time", { required: true })}
                        key={`n-${h.value}`}
                        disabled={h.scheduled}
                        value={h.value}
                        required
                      >
                        {h.value}
                      </SelectTime>
                    ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <Text variant="text-sm">Nome</Text>
          <InputIcon
            {...register("nameFull", { required: true, minLength: 3 })}
            icon={UserIcon}
            text="Nome Completo"
          />
        </div>
        <Button type="submit">Agendar</Button>
      </div>
    </form>
  );
}
