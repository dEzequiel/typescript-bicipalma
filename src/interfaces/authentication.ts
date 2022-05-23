export interface Authentication {
    id: number,
    status: boolean
    checkStatus(): boolean,
    setStatus(status: boolean): void
}