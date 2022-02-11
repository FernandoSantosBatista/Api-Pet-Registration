import AppError from '../errors/AppError';
import IDogsRepository from 'src/repositories/IDogsRepository';
import Dogs from 'src/models/Dogs';

interface IRequest {
  id: string;
  logo?: string;
}

class UploadLogoOfDogsService {
  private dogsRepository: IDogsRepository;

  constructor(dogsRepository: IDogsRepository) {
    this.dogsRepository = dogsRepository;
  }

  public async execute({ id, logo }: IRequest): Promise<Dogs> {
    const dogs = await this.dogsRepository.findById(id);

    if (!dogs) {
      throw new AppError('Dogs not found', 400);
    }

    dogs.logo = logo;

    await this.dogsRepository.save(dogs);

    return dogs;
  }
}

export default UploadLogoOfDogsService;
