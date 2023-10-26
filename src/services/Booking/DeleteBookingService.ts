import AppError from '@config/AppErrors';
import { BookingRepository } from 'src/database';

interface IRequest {
  id: string;
}

class DeleteBookingService {
  public async execute({ id }: IRequest): Promise<void> {
    const booking = await BookingRepository.findOne({ where: { id } });

    if (!booking) {
      throw new AppError('Booking not found');
    }

    await BookingRepository.remove(booking);
  }
}

export default DeleteBookingService;
