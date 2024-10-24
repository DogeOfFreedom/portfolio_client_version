import { forwardRef } from "react";

const AddItemButton = forwardRef(function AddItemButton({ label }, ref) {
  return <button onClick={() => ref.current.showModal()}>{label}</button>;
});

export default AddItemButton;
