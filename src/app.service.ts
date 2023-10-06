import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaClient
  ) { }

  public async getSchedules(body: any) {
    return await this.prisma.doctor.findMany({
      include: {
        schedule: true
      }
    })
  }

  public async assignSomeoneToSometime(body: any) {
    return await this.prisma.client.update({
      where: {
        id: body.id,
      },
      data: {
        schedule: {
          connect: {
            id: body.scheduleId
          }
        }
      }
    })
  }

  public async getScheduleByDoctorId(body: any) {
    return await this.prisma.doctor.findFirst({
      where: {
        id: body.id
      },
      include: {
        schedule: true
      }
    })
  }

  public async getScheduleByClientId(body: any) {
    return await this.prisma.client.findFirst({
      where: {
        id: body.id
      }
    })
  }

  public async registerClient(body: any) {
    return await this.prisma.client.create({
      data: {
        name: body.name
      }
    })
  }

  public async registerDoctor(body: any) {
    return await this.prisma.doctor.create({
      data: {
        name: body.name
      }
    })
  }

  public async publishNewDoctorSchedule(body: any) {
    return await this.prisma.doctor.update({
      where: {
        id: body.id
      },
      data: {
        schedule: {
          connectOrCreate: {
            where: {
              id: body.doctorScheduleId,
              day: body.day
            },
            create: {
              day: body.day,
              nodeInterval: {
                create: {
                  windows: {
                    create: {
                      startedAt: body.startedAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
  }

  public async deleteAnDoctorSchedule(body: any) {
    return await this.prisma.doctor.update({
      where: {
        id: body.id
      },
      data: {
        schedule: {
          delete: {
            id: body.scheduleId
          }
        }
      }
    })
  }
}
