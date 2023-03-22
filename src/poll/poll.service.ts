import { Controller } from '@nestjs/common';

@Controller()export class PollService {
    private poll: string;  

async create(poll) {  
    const ably = require('ably');

    // replace "process.env.ABLY_SUB" with your ABLY subscriber API Key   
    const ablyclient = new ably.Realtime(process.env.ABLY_SUB);

    const channel = ablyclient.channels.get('ably-nest');  

    const data = {  
        points: 1,  
        snack: poll.snack  
    };  

    await channel.publish('vote', data);  
}  
}
