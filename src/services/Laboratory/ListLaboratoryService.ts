import { Laboratory } from '@entities/Laboratory';
import { LabRepository } from 'src/database';

class ListLaboratoryService {
  public async execute(): Promise<Laboratory[]> {
    const laboratory = LabRepository.find();

    return laboratory;
  }
}

export default ListLaboratoryService;
