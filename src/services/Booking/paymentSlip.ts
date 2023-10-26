interface IRequest {
  barCode: 'int';
}

export class CreatePaymentSlipService {
  public async execute({}: IRequest): Promise<any> {
    console.log('aq');

    let min = 0;
    let max = 9;

    let barCode = [];
    while (barCode.length < 8) {
      let numbers = Math.floor(Math.random() * (max - min + 1)) + min;
      barCode.push(numbers);
      console.log(numbers);
    }

    console.log(barCode);
  }
}
