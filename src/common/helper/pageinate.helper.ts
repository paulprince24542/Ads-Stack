// src/common/helpers/paginate.helper.ts
import { SelectQueryBuilder } from 'typeorm';


export async function paginate<T>(
  qb: SelectQueryBuilder<T>,
  page: number,
  limit: number,
){
  const skip = (page - 1) * limit;
  const [data, total] = await qb.skip(skip).take(limit).getManyAndCount();
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
}
