import Edges from "../Edges";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";

export default function AdminHeader() {
  return (
    <header className="flex flex-col bg-stone-800 text-neutral-50 justify-between">
      <div className="text-stone-50 font-bold p-2">
        <Edges className="max-w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-4xl">reactForums</h1>
          </div>
          <span className="flex flex-row items-center justify-between gap-4">
            <Field orientation="horizontal">
              <Input type="search" placeholder="Search..." />
            </Field>
            <button className="border-2 text-center p-1 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base">
              Create
            </button>
            <img
              src="/images/icons/bell-white.svg"
              alt="Notifications"
              className="h-4"
            />
            <span className="w-full max-w-36">Elegant Totality</span>
          </span>
        </Edges>
      </div>
    </header>
  );
}
