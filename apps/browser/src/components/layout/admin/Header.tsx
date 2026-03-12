import Edges from "../Edges";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/ui/field";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CreateUserModal } from "@/components/admin/actions/CreateUserModal";

export default function AdminHeader() {
  const [openDialog, setOpenDialog] = useState<
    "user" | "thread" | "announcement" | null
  >(null);

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="font-bold text-stone-100 border-2 px-4 text-center py-1 flex flex-row items-center justify-center gap-2 w-36 rounded-lg text-base">
                  <img
                    src="/images/icons/plus-white.svg"
                    alt="Create"
                    className="h-4"
                  />
                  <span className="">Create</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-stone-300">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Announcement</DropdownMenuItem>
                  <DropdownMenuItem>Private Mail</DropdownMenuItem>
                  <DropdownMenuItem>Thread</DropdownMenuItem>
                  <DropdownMenuItem>Forum</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setOpenDialog("user")}>
                    User
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <img
              src="/images/icons/bell-white.svg"
              alt="Notifications"
              className="h-4"
            />
            <span className="w-full max-w-36">Elegant Totality</span>
          </span>
        </Edges>
      </div>

      <Dialog
        open={openDialog === "user"}
        onOpenChange={(open) => {
          if (!open) setOpenDialog(null);
        }}
      >
        <CreateUserModal />
      </Dialog>
    </header>
  );
}
