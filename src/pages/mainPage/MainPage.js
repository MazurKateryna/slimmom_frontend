import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm/DailyCaloriesForm";
import Modal from "../../components/modal/Modal";
import Loader from "../../components/loader/Loader";
import Notification from "../../components/notification/Notification";
import getLoader from "../../redux/selectors/loaderSelector";
import styles from "../../components/modal/modal.module.css";
import { pageContainer, bgContainer } from "./MainPage.module.css";

const MainPage = function () {
  const [showModal, setShowModal] = useState(false);
  const loader = useSelector(getLoader);

  const modalToggle = () => {
    setShowModal((prevState) => !prevState.showModal);
  };

  const modalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={bgContainer}>
        <div className={pageContainer}>
          <DailyCaloriesForm onShowModal={modalToggle} />

          <div id="overlay" className={showModal ? styles.overlay : styles.notShow}>
            <CSSTransition in={showModal} timeout={300} classNames={styles} unmountOnExit>
              <Modal onModalToggle={modalClose} />
            </CSSTransition>
          </div>
        </div>
      </div>
      <Notification><span>Выход выполнен успешно</span></Notification>
      {loader && <Loader />}
    </>
  );
};

export default MainPage;