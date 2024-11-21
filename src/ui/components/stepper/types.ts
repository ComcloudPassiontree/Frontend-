export type StepperStep = {
    title:string,
    status:StepperEnums.active | StepperEnums.pending | StepperEnums.done
}
export type Stepper = StepperStep[]

export enum StepperEnums {
    active = "active",
    pending = "pending",
    done = "done",
}