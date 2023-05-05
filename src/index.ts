import ShareButtonCreated from "./ShareButtonCreated";
import ShareButtonUnauthorized from "./ShareButtonUnauthorized";
import ShareButtonBadRequest from "./ShareButtonBadRequest";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler

const created : AbstractShareButton = new ShareButtonCreated(eventHandler,".btn-created", "https://youtube.com/");
created.bind();
const badrequest : AbstractShareButton = new ShareButtonUnauthorized(eventHandler,".btn-unauthorized", "https://youtube.com/");
badrequest.bind();
const unauthorized : AbstractShareButton = new ShareButtonBadRequest(eventHandler,".btn-created", "https://youtube.com/");
unauthorized.bind();
const print : AbstractShareButton = new ShareButtonPrint(eventHandler,".btn-print");
print.bind();