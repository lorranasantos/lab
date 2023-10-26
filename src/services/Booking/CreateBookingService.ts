import AppError from '@config/AppErrors';
import { Booking } from '@entities/Booking';

import { BookingRepository } from 'src/database';

interface IRequest {
  idUserRequest: string;
  idLaboratory: string;
  date: Date;
  duration: 'int';
}

class CreateBookingService {
  public async execute({
    idUserRequest,
    idLaboratory,
    date,
    duration,
  }: IRequest): Promise<Booking> {
    console.log('service');
    /*if (!barCode) {
      throw new AppError('You need to pay your slip!');
    }*/

    const dateExists = await BookingRepository.findOne({
      where: { date },
    });

    if (dateExists) {
      throw new AppError('Laboratory used!');
    }

    const booking = BookingRepository.create({
      idUserRequest,
      idLaboratory,
      date,
      duration,
    });

    await BookingRepository.save(booking);

    return booking;
  }
}

export default CreateBookingService;
