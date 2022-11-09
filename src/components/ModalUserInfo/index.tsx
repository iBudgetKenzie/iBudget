import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useUserContext } from "../../contexts/UserContext";
import { IEditUser } from "../../contexts/UserContext/interfaces";
import { Modal } from "./styles";
import {
  StyledModalUserInfo,
  ConteinerFormModal,
  ConteinerModal,
} from "./styles";

const ModalUserInfo = () => {
  const { setOnModalUserInfo, handleEditUserInfo, handleDeleteUser } =
    useUserContext();

  const { register, handleSubmit } = useForm<IEditUser>();

  const handleOutsideClick = (event: React.SyntheticEvent) => {
    const targetId = (event.target as HTMLDivElement).id;
    if (targetId === "modalUserInfo") {
      setOnModalUserInfo(false);
    }
  };

  return (
    <ConteinerModal
      id="modalUserInfo"
      onClick={(event) => handleOutsideClick(event)}
    >
      <Modal
        as={motion.div}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <h2>Informações de usuário</h2>
          <span onClick={() => setOnModalUserInfo(false)}>
            <IoIosCloseCircleOutline />
          </span>
        </div>
        <ConteinerFormModal>
          <form onSubmit={handleSubmit(handleEditUserInfo)}>
            <StyledModalUserInfo>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Atualize os dados aqui"
                {...register("name")}
              />
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Atualize os dados aqui"
                {...register("username")}
              />
              <label htmlFor="password">Senha</label>
              <input
                type="text"
                id="password"
                placeholder="Atualize os dados aqui"
                {...register("password")}
              />
              <label htmlFor="position">Cargo</label>
              <input
                type="text"
                id="position"
                placeholder="Atualize os dados aqui"
                {...register("position")}
              />
              <label htmlFor="imageUrl">Imagem (URL)</label>
              <input
                type="url"
                id="imageUrl"
                placeholder="Atualize os dados aqui"
                {...register("imageUrl")}
              />
              <div>
                <button type="submit">Confirmar</button>
                <button
                  type="button"
                  onClick={() => handleDeleteUser()}
                >
                  Apagar conta
                </button>
              </div>
            </StyledModalUserInfo>
          </form>
        </ConteinerFormModal>
      </Modal>
    </ConteinerModal>
  );
};

export default ModalUserInfo;
