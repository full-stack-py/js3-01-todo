"use strict";

class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
    }

    init () {
        if(this.isValidSelector() && this.findTargetElement()) {
            this.render();
            return true;
        }
        else {
            return false;
        }


    }

    isValidSelector() {
        if(typeof this.selector !== "string" || this.selector === "") {
            console.error("ERROR: selector turi buti ne tuscias string");
            return false;            
        }
        return true;

    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);

        if(!this.DOM) {
            console.error("Pagal pateikta selector, elementas neegzistuoja");
            return false;
        }
        return true;
    }

    render() {
        const HTML = `<form class="form">
                            <div class="form-row">
                                <textarea placeholder="Message..."></textarea>
                            </div>
                            <div class="form-row">
                                <input type="color">
                            </div>
                            <div class="form-row">
                                <input type="date">
                            </div>
                            <div class="form-row">
                                <input type="checkbox"><span>Task is completed?</span>
                            </div>
                            <div class="form-row">
                                <button class="save" type="submit">Save</button>
                                <button type="reset">Reset</button>
                            </div>
                        </form>`;

        this.DOM.insertAdjacentHTML("afterbegin", HTML);
    }
}

export { Form }