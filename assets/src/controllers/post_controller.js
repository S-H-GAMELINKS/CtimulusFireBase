import { Controller } from "stimulus"

export default class extends Controller {
    static get targets() {
        return [ "content", "preview" ]
    }

    content() {
        this.previewTarget.innerHTML = this.contentTarget.value
    }
}