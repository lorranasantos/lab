interface IRequest {
  barCode: 'int';
}

export class CreatePaymentSlipService {
  public async execute({}: IRequest): Promise<any> {
    let barCode = Math.floor(Math.random() * 8);
    console.log(barCode);
  }
}
