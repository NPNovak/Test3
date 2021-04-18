import { makeObservable, observable, action } from "mobx";

export function documentsStoreFunc() {
    return makeObservable({
        documents: [
            {id: 1, fileName: "Файл 1"},
            {id: 2, fileName: "Файл 2"},
            {id: 3, fileName: "Файл 3"},
        ],
        addDocuments(files) {
            this.documents.push(
                {
                    id: this.documents.length + 1,
                    fileName: files.name
                }
            );
        },
        filterDocuments(id) {
            this.documents = this.documents.filter(document => document.id !== id);
        },
        clearDocuments() {
            this.documents = [];
        }
    },{
        documents: observable,
        addDocuments: action,
        filterDocuments: action,
        clearDocuments: action,
    })
}
