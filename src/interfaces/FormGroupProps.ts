import { ChangeEventHandler } from "react";

export interface FormGroupProps{
    name:string;
    label:string;
    placeholder:string;
    multiline?:boolean;
    rows?:number;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}