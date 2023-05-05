import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonUnauthorized extends AbstractLinkShareButton {
    
    constructor(eventHandler: EventHandler,className: string, url: string){
        super(eventHandler,className, url);
    }

    createLink() : string {
        return `https://http.cat/401/${this.url}`
    }
}