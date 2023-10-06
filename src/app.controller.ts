import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  public getSchedules(body: any) {
    return this.appService.getSchedules(body)
  }

  public assignSomeoneToSometime(body: any) {
    return this.appService.assignSomeoneToSometime(body)
  }

  public getScheduleByDoctorId(body: any) {
    return this.appService.getScheduleByDoctorId(body)
  }

  public getScheduleByClientId(body: any) {
    return this.appService.getScheduleByClientId(body)
  }

  public registerClient(body: any) {
    return this.appService.registerClient(body)
  }

  public registerDoctor(body: any) {
    return this.appService.registerDoctor(body)
  }

  public publishNewDoctorSchedule(body: any) {
    return this.appService.publishNewDoctorSchedule(body)
  }

  public deleteAnDoctorSchedule(body: any) {
    return this.appService.deleteAnDoctorSchedule(body)
  }
}
