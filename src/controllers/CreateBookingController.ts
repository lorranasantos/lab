import CreateBookingService from '@services/Booking/CreateBookingService';
import DeleteBookingService from '@services/Booking/DeleteBookingService';
import ListBookingService from '@services/Booking/ListBookingService';
import UpdateBookingService from '@services/Booking/UpdateBookingService';
import { Request, Response } from 'express';

export default class BookingController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listBooking = new ListBookingService();

    const booking = await listBooking.execute();

    return response.json(booking);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { idUserRequest, idLaboratory, date, duration } = request.body;

    console.log('controller');
    const createBooking = new CreateBookingService();

    const booking = await createBooking.execute({
      idUserRequest,
      idLaboratory,
      date,
      duration,
    });

    return response.json(booking);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { idLaboratory, date, duration } = request.body;
    const { id } = request.params;

    const updateBooking = new UpdateBookingService();

    const booking = await updateBooking.execute({
      id,
      idLaboratory,
      date,
      duration,
    });

    return response.json(booking);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteBooking = new DeleteBookingService();

    await deleteBooking.execute({ id });

    return response.json([]);
  }
}
