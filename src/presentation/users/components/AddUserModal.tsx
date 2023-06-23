import React from "react";
import { Modal } from "../../../components/Modal";

interface IProps {
  onClose: () => void;
  onSubmit: () => void;
  setPermission: React.Dispatch<React.SetStateAction<string | undefined>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
}

export const AddUserModal = ({
  onClose,
  onSubmit,
  setPermission,
  setEmail,
  error,
}: IProps) => {
  return (
    <Modal onClose={onClose} onSubmit={onSubmit}>
      <div className="my-3">
        <p className="text-text-color text-[28px] text-center font-medium pb-3">
          Отправьте приглашение
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            id="large-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 px-3 bg-white text-black border border-gray rounded-[10px] bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <select
            id="countries"
            onChange={(e) => setPermission(e.target.value)}
            className="bg-gray-50 border border-gray text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Выберите права доступа</option>
            <option value="Модерация объявлений">Модерация объявлений</option>
            <option value="Блог">Блог</option>
            <option value="Тех. поддержка">Тех. поддержка</option>
            <option value="Обращения клиентов">Обращения клиентов</option>
            <option value="Аналитика">Аналитика</option>
            <option value="Акции">Акции</option>
          </select>
          {error ? (
            <p className="text-red-500 text-center py-3 text-sm">
              Возникла ошибка! Проверьте!
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Modal>
  );
};
