import { Dispatch, SetStateAction } from "react";

export interface OpenState{
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}