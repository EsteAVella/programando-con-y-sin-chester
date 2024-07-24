
// crud.service.ts
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrudService<T> {
  constructor(
    @InjectRepository(T)
    private readonly repository: Repository<T>,
  ) { }

  async create(data: T): Promise<T> {
    return await this.repository.save(data);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<T> {
    return await this.repository.findOne(id);
  }

  async update(id: number, data: Partial<T>): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

