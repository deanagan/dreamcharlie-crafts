import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

interface FixSwitchProp {
  switchId: number;
  fixed: boolean;
}

export const FixSwitch: FC<FixSwitchProp> = ({ switchId, fixed }) => {
   const dispatch = useDispatch();

   const { updateRepairState } = bindActionCreators(actionCreators, dispatch);
   const [switchState, setSwitchState] = useState(fixed);

  const onSwitchChanged = (fixed: boolean) => {
    updateRepairState(switchId, fixed);
    setSwitchState(fixed);
  }

  return (
    <>
      {switchId !== undefined ? (
        <Form.Check
          type="switch"
          label="Fix"
          id={`switch${switchId}`}
          checked={switchState}
          onChange={(e) => onSwitchChanged(e.target.checked)}
        />
      ) : null}
    </>
  );
};
