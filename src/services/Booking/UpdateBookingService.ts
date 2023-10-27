import UserType from '@entities/UserType';
import AppError from '@config/AppErrors';

import { BookingRepository } from 'src/database';
import { Booking } from '@entities/Booking';
interface IRequest {
  id: string;
  idLaboratory: 'int';
  date: Date;
  duration: 'int';
}

class UpdateBookingService {
  public async execute({
    id,
    idLaboratory,
    date,
    duration,
  }: IRequest): Promise<Booking> {
    const booking = await BookingRepository.findOne({ where: { id } });

    if (!booking) {
      throw new AppError('User Type not found');
    }

    booking.idLaboratory = idLaboratory;
    booking.date = date;
    booking.duration = duration;

    await BookingRepository.save(booking);

    return booking;
  }
}

export default UpdateBookingService;
