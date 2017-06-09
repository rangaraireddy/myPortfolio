import { Injectable } from '@angular/core';

declare var emailjs: any;

@Injectable()
export class ContactService {
    private emailJsUserid = 'user_0ShCczAcCn3nAVQ5z4JrY';
    private gmailServiceid = 'gmail';
    private gmailServiceTemplateid = 'template_S95RrJTa';

    constructor() {}

    public initiateEmailJS = () => {
        emailjs.init(this.emailJsUserid);
    }

    public sendMail = (notes: string) => {
        return emailjs.send(this.gmailServiceid, this.gmailServiceTemplateid, {
            'Name' : 'Comment to RRR',
            'Notes': notes
        });
    }
}
