import { forwardRef } from "react";
import GenericForm from "../GenericForm";

/*
Reusable component for a modal element that exposes the dialog element to it's parent so it can be 
opened by clicking on the parent and closed by the child component
*/
const ModalForm = forwardRef(function ModelForm(props, ref) {
  /*
    If name is null, a new item is being created
    If name isn't null, an item is being edited
  */
  const closeModal = () => {
    ref.current.close();
  };

  return (
    <dialog ref={ref}>
      <button onClick={closeModal}>CLOSE MODAL</button>
      <GenericForm {...props} closeModal={closeModal} />
    </dialog>
  );
});

export default ModalForm;
