import styled from "styled-components";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const SwitchCheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const SwitchCheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchStyleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${SwitchCheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

interface SwitchCheckboxProp {
  switchId: number;
  fixed: boolean;
}

export const SwitchCheckbox: FC<SwitchCheckboxProp> = ({ switchId, fixed }) => {
  const dispatch = useDispatch();

  const { updateRepairState } = bindActionCreators(actionCreators, dispatch);
  const [switchState, setSwitchState] = useState(fixed);

  const onSwitchChanged = (fixed: boolean) => {
    updateRepairState(switchId, fixed);
    setSwitchState(fixed);
  };

  return (
    <SwitchCheckboxWrapper>
      <SwitchStyleCheckbox
        id={`switch${switchId}`}
        onChange={(e) => onSwitchChanged(e.target.checked)}
        checked={switchState}
      />
      <SwitchCheckBoxLabel htmlFor={`switch${switchId}`} />
    </SwitchCheckboxWrapper>
  );
};
