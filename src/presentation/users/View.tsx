import React from "react";
import { Search } from "./Search/Search";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { List } from "./List/List";
import { useViewModel } from "./ViewModel";
import { AddUserModal } from "./components/AddUserModal";

export const Users = () => {
  const {
    users,
    addModal,
    toggleModal,
    setPermission,
    setEmail,
    onSubmit,
    error,
    pending,
  } = useViewModel();

  return (
    <Container className="md:w-[90%] md:bg-transparent bg-white overflow-y-auto h-screen pb-16 pt-1">
      <div className="md:px-[29px] md:py-4 md:rounded-[15px] md:mt-[53px] md:bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:w-full md:gap-2">
          <p className="hidden md:block text-2xl font-medium text-text-color pr-12">
            Команда
          </p>
          <Search />
          <Button onClick={() => toggleModal()} className="mt-2 md:mt-0 px-0 md:max-w-[202px]">
            Добавить пользователя
          </Button>
        </div>
        <List pendinguser={pending} users={users} />
        {addModal ? (
          <AddUserModal
            onClose={() => toggleModal()}
            onSubmit={onSubmit}
            setPermission={setPermission}
            setEmail={setEmail}
            error={error}
          />
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
