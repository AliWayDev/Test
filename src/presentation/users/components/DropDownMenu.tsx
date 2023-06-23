import { useUiStore, useUsersStore } from "../../../store";

export const DropDownMenu = ({
  active,
  id,
  isPending,
  email,
  setActive,
}: {
  active: boolean;
  setActive: () => void;
  id: string;
  isPending?: boolean;
  email: string;
}) => {
  const { deleteOne, deleteOnePending } = useUsersStore();
  const { toggleInfoModal } = useUiStore();

  const handleDelete = () => {
    setActive();
    if (isPending) {
      deleteOnePending(id);
    } else {
      deleteOne(id);
    }
    toggleInfoModal("Пользователь успешно удален ");
  };

  const sendCodehandler = () => {
    setActive();
    toggleInfoModal(`Приглашение повторно отправлено на почту ${email}`);
  };

  return (
    <>
      <div
        className={`absolute bg-white flex flex-col text-text-color gap-3 right-5 z-50 p-6 transition-all duration-300 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg ${
          active ? "opacity-1 visible" : "opacity-0 hidden"
        }`}
      >
        <p className="cursor-pointer">Изменить права доступа</p>
        <p onClick={() => sendCodehandler()} className="cursor-pointer">
          Отправить код повторно
        </p>
        <p onClick={() => handleDelete()} className="text-gray cursor-pointer">
          Удалить
        </p>
      </div>
    </>
  );
};
