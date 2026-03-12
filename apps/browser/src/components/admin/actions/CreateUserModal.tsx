import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CreateUser } from "./CreateUser";

export function CreateUserModal() {
  return (
    <>
      <DialogContent className="bg-stone-300">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription asChild>
            <CreateUser />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </>
  );
}
