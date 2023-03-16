import { Controller } from '@nestjs/common';

@Controller()export class PollService {
    private poll: string;  

async create(poll) {  
    const ably = require('ably');

    // replace with your API Key   
    const ablyclient = new ably.Realtime(process.env.ABLY_KEY);

    const channel = ablyclient.channels.get('ably-nest');  

    const data = {  
        points: 1,  
        movie: poll.movie  
    };  

    await channel.publish('vote', data);  
}  
}
