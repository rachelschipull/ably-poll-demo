import { Controller, Post, Res, Body } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('poll')export class PollController {
    // inject service  

constructor(private pollService: PollService) {
}  

@Post()  
async submitVote(@Res() res, @Body() poll: string ) {  
    console.log(typeof poll)
    await this.pollService.create(poll);  
    return res.render('index');  
}  

}