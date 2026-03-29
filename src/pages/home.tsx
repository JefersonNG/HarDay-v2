import Agenda from "../core-components/agenda";
import Agendamento from "../core-components/agendamento";
import Logo from "../assets/icons/Logo.svg?react";

export default function AgendaPage() {
  return (
    <main className="relative sm:h-screen flex p-5  gap-3 max-sm:flex-col max-sm:items-center">
      <div className="absolute bg-gray-600 p-3 rounded-br-2xl left-0 top-0">
        <Logo />
      </div>
      <Agendamento />
      <Agenda />
    </main>
  );
}
