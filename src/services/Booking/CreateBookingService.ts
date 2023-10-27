import AppError from '@config/AppErrors';
import { Booking } from '@entities/Booking';
import { response } from 'express';
import { string } from 'joi';
import fetch from 'node-fetch';

import { BookingRepository } from 'src/database';

interface IRequest {
  idUserRequest: 'int';
  idLaboratory: 'int';
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

    let min = 0;
    let max = 9;

    let arrayBarCode = [];
    while (arrayBarCode.length < 8) {
      let numbers = Math.floor(Math.random() * (max - min + 1)) + min;
      arrayBarCode.push(numbers);
    }

    let barCodeNumbers = arrayBarCode.join('');
    let barCode = parseInt(barCodeNumbers);

    console.log(barCode);

    if (barCode == null) {
      throw new AppError('You need to pay your slip!');
    }

    const api = await fetch(
      'https://api-go-wash-efc9c9582687.herokuapp.com/api/dados',
      {
        method: 'POST',
        headers: {
          Authorization: 'Vf9WSyYqnwxXODjiExToZCT9ByWb3FVsjr',
          'Content-Type': 'application/json',
          Cookie: 'gowash_session=m6Y5t4HwextNyZIPR4uCOD97ebOoYusUfmRMwt06',
        },
        body: JSON.stringify({
          boleto: barCode,
          user_id: idUserRequest,
        }),
      },
    )
      .then(res => res.json())
      .then(data => console.log(data));
    //const data = await response.json();

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
    console.log(booking);

    return booking;
  }
}

export default CreateBookingService;
