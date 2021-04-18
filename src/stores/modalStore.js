import { makeObservable, observable, action} from "mobx";

export function modalStoreFunc() {
    return makeObservable({
        modalState: {
            open: false,
            fileName: '',
            fileId: 0
        },
        setOpenModal(value) {
            this.modalState = value;
        }
    },{
        modalState: observable,
        setOpenModal: action,
    })
}
