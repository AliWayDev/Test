import { useState } from "react";
import { useUiStore, useUsersStore } from "../../store";
import { checkEmail } from "../../utils/helpers";
import { v4 as uuidv4 } from "uuid";

export const useViewModel = () => {
  const { add, deleteOne, getOne, update, users, addPending, pending } =
    useUsersStore();
  const { toggleInfoModal } = useUiStore();
  const [addModal, setAddModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [permission, setPermission] = useState<string>();
  const [error, setError] = useState<boolean>(false);

  const toggleModal = () => {
    setAddModal((c) => !c);
  };
  const onSubmit = () => {
    if (checkEmail(email) && permission) {
      addPending({
        id: uuidv4(),
        email: email,
        permissions: [permission],
      });
      setAddModal(false);
      toggleInfoModal(`Приглашение отправлено на почту ${email}`);
      setError((c) => c && false);
    } else {
      setError(true);
    }
  };

  return {
    add,
    deleteOne,
    getOne,
    update,
    users,
    setAddModal,
    addModal,
    toggleModal,
    setEmail,
    setPermission,
    onSubmit,
    error,
    pending,
  };
};
